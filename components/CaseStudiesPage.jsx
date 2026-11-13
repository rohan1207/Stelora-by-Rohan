import { useMemo, useState } from "react";
import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import {
  CASE_STUDIES_CTA,
  CASE_STUDIES_DETAILED,
  CASE_STUDIES_HERO,
  CASE_STUDY_FILTERS,
} from "@/data/caseStudiesPage";

function OutcomeIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c1.2-3 3.4-4.5 5.5-4.5S13.3 16 14.5 19M14.5 14.8c1.5-.4 3-.1 4.5 1.7" />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg {...common}>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  }
  if (type === "spark") {
    return (
      <svg {...common}>
        <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

export function CaseStudyCard({ study, flip = false, compact = false }) {
  return (
    <article className={`cs-row${flip ? " cs-row--flip" : ""}${compact ? " cs-row--compact" : ""}`}>
      <div className="cs-row__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt={study.imageAlt} />
        <div className="cs-row__shade" aria-hidden />
        {study.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={study.logo} alt="" className="cs-row__logo" />
        ) : study.showClientBadge ? (
          <p className="cs-row__client-badge">{study.client}</p>
        ) : null}
        <span className="cs-row__play" aria-hidden>
          ▶
        </span>
      </div>

      <div className="cs-row__copy">
        <p className="cs-row__kicker">Case Study {study.number}</p>
        <h2 className="cs-row__title">{study.title}</h2>
        <p className="cs-row__summary">{study.summary}</p>

        <ul className="cs-row__outcomes">
          {study.outcomes.map((item) => (
            <li key={item.label}>
              <span className="cs-row__outcome-icon">
                <OutcomeIcon type={item.icon} />
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <Link href={`/case-studies/${study.slug}`} className="cs-row__cta">
          <span>Read Full Case Study</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}

function CaseStudiesCta() {
  return (
    <section className="cs-cta" aria-labelledby="cs-cta-heading">
      <div className="cs-cta__frame">
        <div className="cs-cta__left">
          <h2 id="cs-cta-heading">
            {CASE_STUDIES_CTA.titleBefore} <em>{CASE_STUDIES_CTA.titleAccent}</em>
          </h2>
        </div>
        <div className="cs-cta__rule" aria-hidden />
        <div className="cs-cta__right">
          <p>{CASE_STUDIES_CTA.prompt}</p>
          <Link href={CASE_STUDIES_CTA.href} className="cs-cta__btn">
            <span>{CASE_STUDIES_CTA.cta}</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Case studies index — hero, filters, alternating cards, CTA.
 */
export default function CaseStudiesPageView() {
  const [filter, setFilter] = useState("all");

  const studies = useMemo(() => {
    if (filter === "all") return CASE_STUDIES_DETAILED;
    return CASE_STUDIES_DETAILED.filter((item) => item.filter === filter);
  }, [filter]);

  return (
    <div className="cs-page">
      <section className="cs-hero" aria-labelledby="cs-hero-heading">
        <div className="cs-hero__inner">
          <div className="cs-hero__copy">
            <SectionSticker>{CASE_STUDIES_HERO.kicker}</SectionSticker>
            <h1 id="cs-hero-heading" className="cs-hero__title">
              {CASE_STUDIES_HERO.titleBefore}{" "}
              <em className="cs-hero__accent">{CASE_STUDIES_HERO.titleAccent}</em>
            </h1>
            <p className="cs-hero__body">{CASE_STUDIES_HERO.body}</p>
            <Link href={CASE_STUDIES_HERO.videoHref} className="cs-hero__video">
              <span className="cs-hero__video-btn" aria-hidden>
                ▶
              </span>
              <span>{CASE_STUDIES_HERO.videoLabel}</span>
            </Link>
          </div>

          <div className="cs-hero__collage" aria-hidden>
            {CASE_STUDIES_HERO.images.map((shot) => (
              <figure key={shot.src} className={shot.className}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="cs-filters" role="tablist" aria-label="Filter case studies">
        {CASE_STUDY_FILTERS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`cs-filter${filter === item.id ? " is-active" : ""}`}
            onClick={() => setFilter(item.id)}
          >
            {index > 0 ? <span className="cs-filter__rule" aria-hidden /> : null}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <section className="cs-list" aria-label="Case study stories">
        {studies.length === 0 ? (
          <p className="cs-empty">More stories in this category are coming soon.</p>
        ) : (
          studies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} flip={index % 2 === 1} />
          ))
        )}
      </section>

      <CaseStudiesCta />
    </div>
  );
}

export { CaseStudiesCta };
