import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import SectionSticker from "@/components/SectionSticker";
import { FOUNDER, TEAM } from "@/data/siteContent";

const ORBIT_LAYOUT = [
  { radius: 28, duration: 32 },
  { radius: 42, duration: 46 },
  { radius: 56, duration: 62 },
];

const ORBIT_LAYOUT_MOBILE = [
  { radius: 22, duration: 32 },
  { radius: 34, duration: 46 },
  { radius: 44, duration: 62 },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberAvatar({ member, className }) {
  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={member.image} alt="" className={className} draggable={false} />
    );
  }

  return (
    <span className={`${className} tss-avatar--fallback`} aria-hidden>
      {initials(member.name)}
    </span>
  );
}

function InfoCard({ member, style }) {
  if (!member) return null;

  return (
    <div className="tss-card" role="status" style={style}>
      <div className="tss-card__avatar">
        <MemberAvatar member={member} className="tss-card__photo" />
      </div>
      <div className="tss-card__body">
        <p className="tss-card__name">{member.name}</p>
        <p className="tss-card__role">{member.role}</p>
        {member.blurb ? <p className="tss-card__blurb">{member.blurb}</p> : null}
      </div>
    </div>
  );
}

function getCardPlacement(stage, target) {
  const stageBox = stage.getBoundingClientRect();
  const nodeBox = target.getBoundingClientRect();
  const isMobile = stageBox.width < 560;

  const planetCenterX = nodeBox.left + nodeBox.width / 2 - stageBox.left;
  const planetCenterY = nodeBox.top + nodeBox.height / 2 - stageBox.top;
  const planetRadius = Math.max(nodeBox.width, nodeBox.height) / 2;
  const gap = 14;
  const cardW = Math.min(280, stageBox.width - 24);
  const cardH = 128;
  const pad = 10;

  if (isMobile) {
    return {
      left: Math.max(pad, Math.min(planetCenterX - cardW / 2, stageBox.width - cardW - pad)),
      top: Math.min(planetCenterY + planetRadius + gap, stageBox.height - cardH - pad),
      transform: "none",
    };
  }

  const preferRight = planetCenterX < stageBox.width * 0.55;
  let left = preferRight
    ? planetCenterX + planetRadius + gap
    : planetCenterX - planetRadius - gap - cardW;

  if (left < pad) left = pad;
  if (left + cardW > stageBox.width - pad) left = stageBox.width - cardW - pad;

  let top = planetCenterY - cardH / 2;
  if (top < pad) top = pad;
  if (top + cardH > stageBox.height - pad) top = stageBox.height - cardH - pad;

  return { left, top, transform: "none" };
}

export default function TeamSolarSystem() {
  const labelId = useId();
  const stageRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [cardStyle, setCardStyle] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [compactOrbits, setCompactOrbits] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const sync = () => setCompactOrbits(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  const orbitLayout = compactOrbits ? ORBIT_LAYOUT_MOBILE : ORBIT_LAYOUT;

  const { sun, planets } = useMemo(() => {
    const founder =
      TEAM.find((m) => /founder/i.test(m.role)) ??
      TEAM.find((m) => m.name === FOUNDER.name) ??
      TEAM[0];

    const rest = TEAM.filter((m) => m !== founder);
    const buckets = orbitLayout.map(() => []);
    rest.forEach((member, index) => {
      buckets[index % buckets.length].push(member);
    });

    const orbitPlanets = buckets.flatMap((members, orbitIndex) => {
      const layout = orbitLayout[orbitIndex];
      const count = members.length || 1;
      return members.map((member, memberIndex) => ({
        ...member,
        id: `${orbitIndex}-${member.name}`,
        orbitIndex,
        radius: layout.radius,
        duration: layout.duration,
        startAngle: (360 / count) * memberIndex + orbitIndex * 18,
      }));
    });

    return {
      sun: {
        ...founder,
        id: "sun",
        image: founder.image || "/founder.jpeg",
        blurb: founder.blurb || FOUNDER.blurb,
        role: founder.role || FOUNDER.role,
      },
      planets: orbitPlanets.map((p) => ({
        ...p,
        blurb:
          p.blurb ||
          `${p.role} at Stelora — helping brands grow through craft, clarity, and consistency.`,
      })),
    };
  }, [orbitLayout]);

  const activeMember = useMemo(() => {
    if (!activeId) return null;
    if (activeId === "sun") return sun;
    return planets.find((p) => p.id === activeId) ?? null;
  }, [activeId, planets, sun]);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return undefined;
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  const openMember = useCallback((id, event) => {
    if (!id) {
      setActiveId(null);
      setCardStyle(null);
      return;
    }

    const stage = stageRef.current;
    const target = event?.currentTarget;
    if (stage && target) {
      setCardStyle(getCardPlacement(stage, target));
    }
    setActiveId(id);
  }, []);

  const closeMember = useCallback(() => {
    setActiveId(null);
    setCardStyle(null);
  }, []);

  const toggleMember = useCallback(
    (id, event) => {
      if (activeId === id) {
        closeMember();
        return;
      }
      openMember(id, event);
    },
    [activeId, closeMember, openMember],
  );

  const paused = Boolean(activeId) || reduceMotion;

  return (
    <section id="team" className="tss" aria-labelledby={labelId}>
      <div className="tss-sky" aria-hidden />

      <header className="tss-header">
        <SectionSticker center>Our Team</SectionSticker>

        <h2 id={labelId} className="tss-title stelora-heading stelora-heading--xl">
          The People Behind Stelora.
        </h2>

        <p className="tss-sub stelora-lede stelora-lede--center">
          A crew of strategists, designers, developers and creators, driving brands forward
          together.
        </p>
      </header>

      <div
        ref={stageRef}
        className={`tss-stage${paused ? " is-paused" : ""}`}
        onMouseLeave={closeMember}
      >
        <div className="tss-stage__glow" aria-hidden />

        {orbitLayout.map((orbit, index) => (
          <div
            key={`ring-${index}`}
            className="tss-ring"
            style={{
              width: `${orbit.radius * 2}%`,
              height: `${orbit.radius * 2}%`,
            }}
            aria-hidden
          />
        ))}

        <button
          type="button"
          className={`tss-sun${activeId === "sun" ? " is-active" : ""}`}
          aria-expanded={activeId === "sun"}
          aria-label={`${sun.name}, ${sun.role}`}
          onMouseEnter={(e) => openMember("sun", e)}
          onFocus={(e) => openMember("sun", e)}
          onClick={(e) => toggleMember("sun", e)}
        >
          <span className="tss-sun__halo" aria-hidden />
          <MemberAvatar member={sun} className="tss-sun__photo" />
          <span className="tss-sun__label">Founder</span>
        </button>

        {planets.map((planet) => (
          <div
            key={planet.id}
            className={`tss-orbit${paused ? " is-paused" : ""}`}
            style={{
              "--tss-duration": `${planet.duration}s`,
              "--tss-start": `${planet.startAngle}deg`,
              width: `${planet.radius * 2}%`,
              height: `${planet.radius * 2}%`,
            }}
          >
            <button
              type="button"
              className={`tss-planet${activeId === planet.id ? " is-active" : ""}`}
              style={{ "--tss-duration": `${planet.duration}s` }}
              aria-expanded={activeId === planet.id}
              aria-label={`${planet.name}, ${planet.role}`}
              onMouseEnter={(e) => openMember(planet.id, e)}
              onFocus={(e) => openMember(planet.id, e)}
              onClick={(e) => toggleMember(planet.id, e)}
            >
              <MemberAvatar member={planet} className="tss-planet__photo" />
            </button>
          </div>
        ))}

        {activeMember ? <InfoCard member={activeMember} style={cardStyle} /> : null}
      </div>

    </section>
  );
}
