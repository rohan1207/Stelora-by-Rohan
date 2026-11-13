import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import { SERVICE_PRACTICES } from "@/data/servicesShowcase";

/**
 * Zigzag practice detail rows — image ↔ copy for all 8 services.
 */
export default function ServicesPractice() {
  return (
    <section className="services-practice" aria-labelledby="services-practice-heading">
      <div className="services-practice__glow" aria-hidden />

      <div className="services-practice__inner">
        <header className="services-practice__intro">
          <SectionSticker>Inside each practice</SectionSticker>
          <h2 id="services-practice-heading" className="services-practice__title stelora-heading stelora-heading--lg">
            How the work gets done
          </h2>
          <p className="services-practice__lede stelora-lede">
            Eight practices. One standard — clear strategy, sharp creative, and performance you can
            read on a dashboard.
          </p>
        </header>

        <div className="sp-rows">
          {SERVICE_PRACTICES.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={item.id}
                id={item.id}
                className={`sp-row${flip ? " sp-row--flip" : ""}`}
              >
                <div className="sp-row__media">
                  <span className="sp-row__index">{item.index}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                </div>

                <div className="sp-row__copy">
                  <p className="sp-row__tag">{item.tag}</p>
                  <h3 className="sp-row__name">{item.title}</h3>
                  <p className="sp-row__summary">{item.summary}</p>

                  <div className="sp-row__pillars">
                    {item.pillars.map((pillar) => (
                      <div key={pillar.title} className="sp-pillar">
                        <p className="sp-pillar__title">{pillar.title}</p>
                        <ul className="sp-pillar__list">
                          {pillar.items.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="sp-row__outcomes" aria-label="Outcomes">
                    {item.outcomes.map((o) => (
                      <span key={o} className="sp-outcome">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services-practice__cta">
          <Link href="/packages" className="btn-pill btn-pill-outline px-6 py-3 text-[0.68rem]">
            <span>View packages</span>
          </Link>
          <Link href="/contact" className="btn-pill btn-pill-primary px-6 py-3 text-[0.68rem]">
            <span>Contact us</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
