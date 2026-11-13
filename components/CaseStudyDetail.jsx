import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import { CaseStudiesCta, CaseStudyCard } from "@/components/CaseStudiesPage";
import { getOtherCaseStudies } from "@/data/caseStudiesPage";

/**
 * Templated full case study view + remaining stories below.
 */
export default function CaseStudyDetail({ study }) {
  const others = getOtherCaseStudies(study.slug);

  return (
    <div className="cs-detail">
      <header className="cs-detail__hero">
        <Link href="/case-studies" className="cs-detail__back">
          <span aria-hidden>←</span>
          <span>All case studies</span>
        </Link>

        <SectionSticker>Case Study {study.number}</SectionSticker>
        <h1 className="stelora-heading stelora-heading--xl">{study.title}</h1>
        <p className="stelora-lede" style={{ maxWidth: "54ch" }}>
          {study.summary}
        </p>
        <div className="cs-detail__meta">
          <p className="cs-detail__chip">{study.client}</p>
          <p className="cs-detail__chip">{study.industry}</p>
        </div>
      </header>

      <div className="cs-detail__cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt={study.imageAlt} />
      </div>

      <div className="cs-detail__body">
        <section className="cs-detail__section" aria-labelledby="cs-challenge">
          <h2 id="cs-challenge">{study.challenge.title}</h2>
          <h3>The Problem</h3>
          <p>{study.challenge.problem}</p>
          <h3>Bottlenecks</h3>
          <p>{study.challenge.bottlenecks}</p>
        </section>

        <section className="cs-detail__section" aria-labelledby="cs-strategy">
          <h2 id="cs-strategy">{study.strategy.title}</h2>
          <p>{study.strategy.intro}</p>
          <ul className="cs-detail__points">
            {study.strategy.points.map((point) => (
              <li key={point.heading}>
                <h3>{point.heading}</h3>
                <p>{point.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cs-detail__section" aria-labelledby="cs-results">
          <h2 id="cs-results">{study.results.title}</h2>
          <ul className="cs-detail__points">
            {study.results.items.map((item) => (
              <li key={item.heading}>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {others.length ? (
        <section className="cs-detail__more" aria-labelledby="cs-more-heading">
          <div className="cs-detail__more-head">
            <SectionSticker>More Stories</SectionSticker>
            <h2 id="cs-more-heading" className="stelora-heading stelora-heading--md">
              Explore other case studies
            </h2>
          </div>
          <div className="cs-detail__more-list">
            {others.map((item, index) => (
              <CaseStudyCard key={item.id} study={item} flip={index % 2 === 1} compact />
            ))}
          </div>
        </section>
      ) : null}

      <CaseStudiesCta />
    </div>
  );
}
