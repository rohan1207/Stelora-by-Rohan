import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import { PERFORMANCE_SLIDES } from "@/data/performanceWall";

const SPEED_PX = 42; // left → right
const MIN_GAP_PX = 6;

/**
 * Full-width curved wall — large cards at real CSS size (shallow Z),
 * tight gaps, edges enlarged → center reduced, L→R drift.
 */
export default function PerformanceWall() {
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const afterRefs = useRef([]);
  const wallRef = useRef(null);
  const scroll = useRef(0);

  const items = useMemo(
    () => [...PERFORMANCE_SLIDES, ...PERFORMANCE_SLIDES],
    []
  );

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const n = items.length;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const place = () => {
      const sample = cardRefs.current[0];
      const wallEl = wallRef.current;
      if (!sample) return;

      const wallBox = wallEl?.getBoundingClientRect();
      const wallX = wallBox ? wallBox.left + wallBox.width / 2 : window.innerWidth / 2;
      const cardW = sample.offsetWidth || 420;
      const stride = cardW + MIN_GAP_PX;
      const loop = stride * n;
      // Keep scroll in [0, loop)
      let s = ((scroll.current % loop) + loop) % loop;

      const halfView = window.innerWidth * 0.55;

      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Position on infinite strip, then wrap closest to center
        let x = i * stride - s;
        // Wrap into centered window
        while (x > loop / 2) x -= loop;
        while (x < -loop / 2) x += loop;

        const abs = Math.abs(x);
        const visible = abs < halfView + cardW;
        // Curve: rotate toward center, slight depth
        const rotY = (-x / stride) * 14;
        const z = -Math.abs(x) * 0.12;
        // Ends enlarged → reduce toward center
        const edge = Math.min(1, abs / (halfView * 0.85));
        const scale = 0.88 + edge * 0.16; // ~0.88 center → ~1.04 edges

        el.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg) scale(${scale})`;
        el.style.opacity = visible ? "1" : "0";
        el.style.visibility = visible ? "visible" : "hidden";
        el.style.zIndex = String(Math.round(1000 - abs));

        const after = afterRefs.current[i];
        if (!after || !visible) continue;
        const rect = el.getBoundingClientRect();
        if (rect.width < 2) continue;
        const crossed = (wallX - rect.left) / rect.width;
        const t = Math.max(0, Math.min(1, crossed));
        after.style.clipPath = `inset(0 0 0 ${t * 100}%)`;
      }
    };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      // Negative scroll → cards move left→right
      if (!reduced) scroll.current -= SPEED_PX * dt;
      place();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", place);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", place);
    };
  }, [items.length]);

  return (
    <section className="perf-wall" aria-labelledby="perf-wall-heading">
      <div className="perf-wall__glow" aria-hidden />

      <div className="perf-wall__copy">
        <SectionSticker center>Performance</SectionSticker>
        <h2 id="perf-wall-heading" className="perf-wall__title stelora-heading stelora-heading--lg">
          Transform your vision into reality
        </h2>
        <p className="perf-wall__sub stelora-lede stelora-lede--center">
          Bring your creative ideas to life with powerful tools. No experience required, just
          imagination.
        </p>
      </div>

      <div className="perf-wall__cta">
        <Link href="/packages" className="btn-pill btn-pill-primary px-6 py-2.5 text-[0.65rem]">
          <span>Get started</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="perf-wall__stage" ref={stageRef}>
        <div className="perf-wall__ring">
          {items.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              className="perf-wall__card"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              aria-hidden={i >= PERFORMANCE_SLIDES.length}
            >
              <div className="perf-wall__card-face">
                <div className="perf-wall__layer perf-wall__layer--before">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.src} alt="" draggable={false} />
                </div>
                <div
                  className="perf-wall__layer perf-wall__layer--after"
                  ref={(el) => {
                    afterRefs.current[i] = el;
                  }}
                  style={{ clipPath: "inset(0 0 0 0%)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.src} alt={slide.alt} draggable={false} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="perf-wall__divider" ref={wallRef} aria-hidden />

        <div className="perf-wall__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="" width={56} height={56} />
          <span>Stelora</span>
        </div>
      </div>
    </section>
  );
}
