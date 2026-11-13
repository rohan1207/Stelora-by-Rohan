import {
  forwardRef,
  Suspense,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const HALF = 1.55;
/** Grid sits slightly behind card planes so lines never sit over photos */
const GRID_HALF = HALF + 0.1;
/** Accent color panels sit further back than cards */
const ACCENT_HALF = HALF + 0.18;
const CELL = 1.35;
const DEPTH = 18;
const BOOST_MULT = 2.55;

function buildTiles(items, seed = 0) {
  const tiles = [];
  let n = 0;
  const walls = [
    { axis: "x", sign: -1, rot: [0, Math.PI / 2, 0] },
    { axis: "x", sign: 1, rot: [0, -Math.PI / 2, 0] },
    { axis: "y", sign: 1, rot: [Math.PI / 2, 0, 0] },
    { axis: "y", sign: -1, rot: [-Math.PI / 2, 0, 0] },
  ];

  for (let z = 0; z < DEPTH; z++) {
    for (const wall of walls) {
      // Skip some cells for breathing room / accent gaps
      const skip = (z * 7 + (wall.sign + 2) * 3 + seed) % 5 === 0;
      if (skip) continue;
      const item = items[n % items.length];
      n += 1;
      const pos = [0, 0, -z * CELL];
      if (wall.axis === "x") pos[0] = wall.sign * HALF;
      else pos[1] = wall.sign * HALF;
      // Stagger lanes a bit
      if (wall.axis === "x") pos[1] = ((z % 3) - 1) * 0.55;
      else pos[0] = ((z % 3) - 1) * 0.55;
      tiles.push({
        id: `${wall.axis}${wall.sign}-${z}`,
        position: pos,
        rotation: wall.rot,
        item,
        index: (n - 1) % items.length,
      });
    }
  }
  return tiles;
}

function TunnelGrid({ color = "#1a307b", opacity = 0.12 }) {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts = [];
    const len = DEPTH * CELL + 4;
    const h = GRID_HALF;
    for (let i = 0; i <= 8; i++) {
      const t = (i / 8) * 2 - 1;
      const x = t * h;
      const y = t * h;
      pts.push(-h, y, 0, -h, y, -len);
      pts.push(h, y, 0, h, y, -len);
      pts.push(x, -h, 0, x, -h, -len);
      pts.push(x, h, 0, x, h, -len);
    }
    for (let z = 0; z < DEPTH; z++) {
      const zz = -z * CELL;
      pts.push(-h, -h, zz, h, -h, zz);
      pts.push(-h, h, zz, h, h, zz);
      pts.push(-h, -h, zz, -h, h, zz);
      pts.push(h, -h, zz, h, h, zz);
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <lineSegments geometry={geo} renderOrder={0}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </lineSegments>
  );
}

function PhotoTile({
  tile,
  textures,
  hoverStrength,
  focusedId,
  onHover,
  onClick,
  progressRef,
}) {
  const mesh = useRef();
  const mat = useRef();
  const base = useRef(new THREE.Vector3(...tile.position));
  const hovered = useRef(false);
  const tex = textures[tile.index % textures.length];

  useFrame((_, dt) => {
    if (!mesh.current) return;
    const zWrap = DEPTH * CELL;
    const travel = progressRef.current % zWrap;
    let z = base.current.z + travel;
    while (z > 1.2) z -= zWrap;
    while (z < -zWrap + 1.2) z += zWrap;

    const isFocus = focusedId === tile.id;
    const targetScale = isFocus ? 1.35 : hovered.current ? 1 + 0.08 * hoverStrength : 1;
    const s = mesh.current.scale.x;
    const next = THREE.MathUtils.lerp(s, targetScale, 1 - Math.exp(-10 * dt));
    mesh.current.scale.setScalar(next);

    if (isFocus) {
      mesh.current.position.lerp(new THREE.Vector3(0, 0, -2.2), 1 - Math.exp(-6 * dt));
      mesh.current.quaternion.slerp(new THREE.Quaternion(), 1 - Math.exp(-6 * dt));
      if (mat.current) mat.current.opacity = THREE.MathUtils.lerp(mat.current.opacity, 1, 0.15);
    } else {
      mesh.current.position.x = base.current.x;
      mesh.current.position.y = base.current.y;
      mesh.current.position.z = z;
      mesh.current.rotation.set(...tile.rotation);
      if (mat.current) {
        const near = THREE.MathUtils.clamp((-z - 0.5) / 10, 0, 1);
        mat.current.opacity = THREE.MathUtils.lerp(1, 0.25, near);
        mat.current.color.setRGB(
          THREE.MathUtils.lerp(1, 0.75, hovered.current ? 0 : 0.15),
          THREE.MathUtils.lerp(1, 0.78, hovered.current ? 0 : 0.15),
          THREE.MathUtils.lerp(1, 0.9, hovered.current ? 0 : 0.15)
        );
      }
    }
  });

  return (
    <mesh
      ref={mesh}
      position={tile.position}
      rotation={tile.rotation}
      renderOrder={2}
      onPointerOver={(e) => {
        e.stopPropagation();
        hovered.current = true;
        onHover?.(tile);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        hovered.current = false;
        onHover?.(null);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(tile);
      }}
    >
      <planeGeometry args={[1.05, 1.05]} />
      <meshBasicMaterial
        ref={mat}
        map={tex}
        transparent
        side={THREE.DoubleSide}
        toneMapped={false}
        depthWrite
      />
    </mesh>
  );
}

function AccentTile({ position, rotation, colors, progressRef, phase }) {
  const mesh = useRef();
  const color = useMemo(() => new THREE.Color(colors[phase % colors.length]), [colors, phase]);

  useFrame(() => {
    if (!mesh.current) return;
    const zWrap = DEPTH * CELL;
    const travel = progressRef.current % zWrap;
    let z = position[2] + travel;
    while (z > 1.2) z -= zWrap;
    while (z < -zWrap + 1.2) z += zWrap;
    mesh.current.position.z = z;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation} renderOrder={1}>
      <planeGeometry args={[0.72, 0.72]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.32}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function PassageScene({
  items,
  textures,
  colors,
  backgroundColor,
  speed,
  speedBoostRef,
  look,
  hover,
  focusOnClick,
  paused,
  lineOpacity,
  fog,
  onFocusChange,
  focusedId,
  setFocusedId,
  progressRef,
}) {
  const { camera, gl } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const tiles = useMemo(() => buildTiles(items, 2), [items]);

  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [gl]);

  useFrame((_, dt) => {
    if (!paused && focusedId == null) {
      const boost = speedBoostRef?.current ? BOOST_MULT : 1;
      progressRef.current += speed * boost * CELL * dt;
    }
    // Subtle eye-look toward cursor
    const lx = pointer.current.x * 0.12 * look;
    const ly = pointer.current.y * 0.08 * look;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, lx, 1 - Math.exp(-4 * dt));
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ly, 1 - Math.exp(-4 * dt));
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -lx * 0.35, 1 - Math.exp(-4 * dt));
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, ly * 0.2, 1 - Math.exp(-4 * dt));
  });

  // Accents only in skipped / gap lanes, pushed behind card planes
  const accents = useMemo(() => {
    const list = [];
    for (let z = 2; z < DEPTH; z += 4) {
      list.push({
        position: [-ACCENT_HALF, ((z % 2) - 0.5) * 1.05, -z * CELL],
        rotation: [0, Math.PI / 2, 0],
        phase: z,
      });
      list.push({
        position: [ACCENT_HALF, ((z % 2) - 0.5) * -1.05, -(z + 2) * CELL],
        rotation: [0, -Math.PI / 2, 0],
        phase: z + 1,
      });
    }
    return list;
  }, []);

  const handleClick = useCallback(
    (tile) => {
      if (!focusOnClick) return;
      if (focusedId === tile.id) {
        setFocusedId(null);
        onFocusChange?.(null, -1);
      } else {
        setFocusedId(tile.id);
        onFocusChange?.(tile.item, tile.index);
      }
    },
    [focusOnClick, focusedId, onFocusChange, setFocusedId]
  );

  return (
    <>
      <color attach="background" args={[backgroundColor]} />
      <fog attach="fog" args={[backgroundColor, 4 * fog, 16 * fog]} />
      <TunnelGrid color="#8ea0d8" opacity={lineOpacity} />
      {accents.map((a, i) => (
        <AccentTile key={`a-${i}`} {...a} colors={colors} progressRef={progressRef} />
      ))}
      {tiles.map((tile) => (
        <PhotoTile
          key={tile.id}
          tile={tile}
          textures={textures}
          hoverStrength={hover}
          focusedId={focusedId}
          progressRef={progressRef}
          onClick={handleClick}
        />
      ))}
      <mesh
        position={[0, 0, -0.5]}
        onClick={() => {
          if (focusedId) {
            setFocusedId(null);
            onFocusChange?.(null, -1);
          }
        }}
      >
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </>
  );
}

function TextureLoader({ urls, children }) {
  const textures = useTexture(urls);
  const list = useMemo(() => {
    const arr = Array.isArray(textures) ? textures : [textures];
    arr.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
    });
    return arr;
  }, [textures]);
  return children(list);
}

function AcceleratorButton({ active, onBoostChange }) {
  const hoverRef = useRef(false);
  const pressRef = useRef(false);

  const sync = useCallback(() => {
    onBoostChange(hoverRef.current || pressRef.current);
  }, [onBoostChange]);

  return (
    <button
      type="button"
      aria-label="Hold or hover to boost tunnel speed"
      aria-pressed={active}
      className={`passage-accelerator pointer-events-auto absolute bottom-24 right-6 z-[60] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 transition-[background,border,box-shadow,transform] duration-150 ${
        active
          ? "scale-110 border-[#fff4e0] bg-[#111] shadow-[0_10px_28px_rgba(196,163,90,0.55)]"
          : "border-[#c4a35a] bg-[#0a0a0a] shadow-[0_10px_24px_rgba(0,0,0,0.45)] hover:scale-105 hover:border-[#fff4e0]"
      }`}
      style={{ touchAction: "none" }}
      onPointerEnter={() => {
        hoverRef.current = true;
        sync();
      }}
      onPointerLeave={() => {
        hoverRef.current = false;
        pressRef.current = false;
        sync();
      }}
      onPointerDown={(e) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture?.(e.pointerId);
        pressRef.current = true;
        sync();
      }}
      onPointerUp={(e) => {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
        pressRef.current = false;
        sync();
      }}
      onPointerCancel={() => {
        pressRef.current = false;
        hoverRef.current = false;
        sync();
      }}
    >
      <svg
        viewBox="0 0 40 40"
        className={`h-[1.55rem] w-[1.55rem] transition-transform duration-150 ${
          active ? "scale-110 rotate-[-14deg]" : "rotate-[-12deg]"
        }`}
        aria-hidden
      >
        <defs>
          <linearGradient id="pedalMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f4f4" />
            <stop offset="40%" stopColor="#c8c8c8" />
            <stop offset="70%" stopColor="#9a9a9a" />
            <stop offset="100%" stopColor="#e8e8e8" />
          </linearGradient>
        </defs>
        {/* Brushed metal plate */}
        <rect x="8" y="4" width="24" height="32" rx="2.5" fill="url(#pedalMetal)" />
        {/* Vertical pedal slits */}
        <rect x="12.2" y="7" width="3.2" height="26" rx="1.4" fill="#0a0a0a" />
        <rect x="18.4" y="7" width="3.2" height="26" rx="1.4" fill="#0a0a0a" />
        <rect x="24.6" y="7" width="3.2" height="26" rx="1.4" fill="#0a0a0a" />
      </svg>
    </button>
  );
}

const PassageGallery = forwardRef(function PassageGallery(
  {
    items = [],
    colors = ["#1A307B", "#C4A35A"],
    backgroundColor = "#070b18",
    speed = 0.42,
    look = 0.45,
    hover = 0.7,
    focusOnClick = true,
    captions = true,
    wheel = false,
    paused: pausedProp = false,
    fog = 1,
    lineOpacity = 0.14,
    onFocusChange,
    className = "",
    style,
    children,
    ariaLabel = "Photo tunnel. Move the pointer to look around. Click a card to open it.",
  },
  ref
) {
  const [focusedId, setFocusedId] = useState(null);
  const [focusMeta, setFocusMeta] = useState({ item: null, index: -1 });
  const [boosting, setBoosting] = useState(false);
  const progressRef = useRef(0);
  const speedBoostRef = useRef(false);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const safeItems = items.length
    ? items
    : [{ src: "/content/creatives/honest-conversations.png", alt: "Creative", title: "Stelora" }];

  const urls = useMemo(() => safeItems.map((i) => i.src), [safeItems]);

  const handleFocusChange = useCallback(
    (item, index) => {
      setFocusMeta({ item, index });
      onFocusChange?.(item, index);
    },
    [onFocusChange]
  );

  const handleBoostChange = useCallback((on) => {
    speedBoostRef.current = on;
    setBoosting(on);
  }, []);

  useImperativeHandle(ref, () => ({
    close: () => {
      setFocusedId(null);
      handleFocusChange(null, -1);
    },
    travel: (cells = 1) => {
      progressRef.current += cells * CELL;
    },
  }));

  useEffect(() => {
    if (!wheel) return undefined;
    const onWheel = (e) => {
      if (focusedId) {
        setFocusedId(null);
        handleFocusChange(null, -1);
      }
      progressRef.current += Math.sign(e.deltaY) * 0.35;
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [wheel, focusedId, handleFocusChange]);

  const cruisingPaused = pausedProp || focusedId != null || reduced;

  return (
    <div
      className={`passage-gallery relative min-h-[420px] w-full overflow-hidden ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      {/* Keep WebGL under HTML chrome so the accelerator stays visible */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 0.2], fov: 68, near: 0.1, far: 40 }}
          gl={{ antialias: true, alpha: false }}
          style={{ width: "100%", height: "100%" }}
        >
          <Suspense fallback={null}>
            <TextureLoader urls={urls}>
              {(textures) => (
                <PassageScene
                  items={safeItems}
                  textures={textures}
                  colors={colors}
                  backgroundColor={backgroundColor}
                  speed={speed}
                  speedBoostRef={speedBoostRef}
                  look={look}
                  hover={hover}
                  focusOnClick={focusOnClick}
                  paused={cruisingPaused}
                  lineOpacity={lineOpacity}
                  fog={fog}
                  onFocusChange={handleFocusChange}
                  focusedId={focusedId}
                  setFocusedId={setFocusedId}
                  progressRef={progressRef}
                />
              )}
            </TextureLoader>
          </Suspense>
        </Canvas>
      </div>

      {children ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div
            className={`pointer-events-none transition-opacity duration-300 ${
              focusedId ? "opacity-0" : "opacity-100"
            }`}
          >
            {children}
          </div>
        </div>
      ) : null}

      <AcceleratorButton active={boosting} onBoostChange={handleBoostChange} />

      {captions && focusMeta.item ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-1 px-16 text-center">
          <p className="font-display text-[1.05rem] font-bold text-[#fff4e0]">
            {focusMeta.item.title || focusMeta.item.alt}
          </p>
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#fff4e0]/70">
            {String(focusMeta.index + 1).padStart(2, "0")} / {String(safeItems.length).padStart(2, "0")}
          </p>
          <p className="mt-1 font-body text-[0.72rem] text-[#fff4e0]/55">Click again or elsewhere to continue</p>
        </div>
      ) : null}
    </div>
  );
});

export default PassageGallery;
