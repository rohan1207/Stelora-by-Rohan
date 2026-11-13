import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import { FOUNDER, PROCESS, SITE, STATS, WHO_WE_ARE } from "@/data/siteContent";

const COLLAGE = [
  {
    src: "/content/about/who-card-team.jpg",
    className: "about-story__shot about-story__shot--a",
    alt: "Stelora team collaborating",
  },
  {
    src: "/content/about/who-card-desk.jpg",
    className: "about-story__shot about-story__shot--b",
    alt: "Creative desk and brand growth setup",
  },
];

const WORK_TONES = [
  { tone: "peach", icon: "search" },
  { tone: "sky", icon: "layers" },
  { tone: "lilac", icon: "rocket" },
  { tone: "mint", icon: "chart" },
];

const STAT_TONES = ["peach", "sky", "lilac", "mint"];

function WorkIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    className: "about-story__work-icon",
    "aria-hidden": true,
  };

  if (name === "layers") {
    return (
      <svg {...common}>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    );
  }
  if (name === "rocket") {
    return (
      <svg {...common}>
        <path d="M12 3c3 2 5 5 6 9l-3 1-2 4-2-1-1-2-4-2 1-3c4-1 7-3 9-6Z" />
        <path d="M8 14 5 19l5-3" />
      </svg>
    );
  }
  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 19V10M10 19V5M16 19v-7M20 19V8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg className="about-story__plane-svg" viewBox="0 0 48 48" aria-hidden>
      <path
        d="M6 24 L42 10 30 38 22 26 6 24Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M22 26 42 10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutStory() {
  return (
    <section className="about-story" aria-label="Who we are, founder, and how we work">
      <div className="about-story__wash" aria-hidden />

      <div className="about-story__inner">
        {/* Who we are — copy + collage only */}
        <div id="who" className="about-story__who scroll-mt-28">
          <div className="about-story__who-copy">
            <SectionSticker>Who We Are</SectionSticker>
            <h2 className="about-story__heading stelora-heading stelora-heading--xl">
              Built for brands that want more than visibility.
            </h2>
            <p className="about-story__lede stelora-lede">{WHO_WE_ARE}</p>
          </div>

          <div className="about-story__collage" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/content/about/who-camera.png"
              alt=""
              className="about-story__float-cam"
              loading="lazy"
              decoding="async"
            />
            {COLLAGE.map((shot) => (
              <figure key={shot.src} className={shot.className}>
                <span className="about-story__tape" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt="" loading="lazy" decoding="async" />
              </figure>
            ))}
            <span className="about-story__doodle about-story__doodle--arrow" />
          </div>
        </div>

        {/* Founder — separate section */}
        <div className="about-story__founder-block">
          <div className="about-story__founder-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/content/about/founder-composite.png"
              alt={FOUNDER.name}
              className="about-story__founder-portrait"
            />
          </div>

          <div className="about-story__founder-copy">
            <SectionSticker>Founder</SectionSticker>
            <h2 className="about-story__founder-heading stelora-heading stelora-heading--lg">
              {FOUNDER.name}
              <span className="about-story__founder-role-inline">{FOUNDER.role}</span>
            </h2>
            <p className="about-story__lede">{FOUNDER.blurb}</p>
            <p className="about-story__lede about-story__lede--soft">{FOUNDER.vision}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-story__stats" role="list">
          {STATS.slice(0, 4).map((stat, i) => (
            <div key={stat.label} className="about-story__stat" role="listitem">
              <span className={`about-story__stat-icon about-story__stat-icon--${STAT_TONES[i]}`} aria-hidden>
                <WorkIcon name={WORK_TONES[i].icon} />
              </span>
              <div>
                <p className="about-story__stat-value">{stat.value}</p>
                <p className="about-story__stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How we work */}
        <div className="about-story__work">
          <div className="about-story__work-head">
            <SectionSticker>How We Work</SectionSticker>
            <h2 className="about-story__heading about-story__heading--wide stelora-heading stelora-heading--xl">
              A clear process for measurable growth.
            </h2>
          </div>

          <div className="about-story__track">
            <svg
              className="about-story__rope"
              viewBox="0 0 1100 120"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M10 70 C 140 20, 250 105, 380 55 S 620 15, 760 68 S 920 105, 1020 48 L 1085 28"
                fill="none"
                stroke="#1A307B"
                strokeWidth="3.5"
                strokeDasharray="3 11"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
            <span className="about-story__plane" aria-hidden>
              <PlaneIcon />
            </span>

            <ol className="about-story__cards">
              {PROCESS.map((step, i) => {
                const meta = WORK_TONES[i] || WORK_TONES[0];
                return (
                  <li key={step.step} className={`about-story__card about-story__card--${meta.tone}`}>
                    <span className="about-story__tab">{step.step}</span>
                    <span className="about-story__node" aria-hidden />
                    <WorkIcon name={meta.icon} />
                    <h3 className="about-story__card-title">{step.title}</h3>
                    <p className="about-story__card-body">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="about-story__cta-wrap">
            <span className="about-story__cta-marks" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <Link href="/contact" className="btn-pill btn-pill-primary px-6 py-3 text-[0.68rem]">
              <span>Let’s talk strategy</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <footer className="about-story__foot">
          <div className="about-story__foot-item">
            <span className="about-story__foot-icon" aria-hidden>
              ⌖
            </span>
            <p>Pune, Maharashtra</p>
          </div>
          <div className="about-story__foot-item">
            <span className="about-story__foot-icon" aria-hidden>
              ▤
            </span>
            <p>Pan-India Operations</p>
          </div>
          <div className="about-story__foot-item">
            <span className="about-story__foot-icon" aria-hidden>
              ✉
            </span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
