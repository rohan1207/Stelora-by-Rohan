import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";
import ServicesPractice from "@/components/ServicesPractice";
import { SERVICE_SHOWCASE } from "@/data/servicesShowcase";
import { SITE } from "@/data/siteContent";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Services grid + zigzag practice details.
 */
export default function ServicesShowcase() {
  return (
    <>
      <section className="services-showcase" aria-labelledby="services-showcase-heading">
        <div className="services-showcase__glow" aria-hidden />

        <div className="services-showcase__inner">
          <header className="services-showcase__head">
            <div>
              <SectionSticker>Capabilities</SectionSticker>
              <h2 id="services-showcase-heading" className="services-showcase__title stelora-heading stelora-heading--lg">
                What we build <em>with you</em>
              </h2>
            </div>
            <div className="services-showcase__cta-row">
              <Link href="/packages" className="btn-pill btn-pill-outline px-5 py-2.5 text-[0.62rem]">
                <span>Packages</span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-primary px-5 py-2.5 text-[0.62rem]">
                <span>Contact</span>
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </header>

          <div className="services-showcase__grid">
            {SERVICE_SHOWCASE.map((item) => (
              <Link key={item.id} href={item.href} className="ss-card" aria-label={item.title}>
                <div className="ss-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                  <div className="ss-card__shade" aria-hidden />
                  <span className="ss-card__tag">{item.tag}</span>
                  <span className="ss-card__arrow" aria-hidden>
                    <ArrowIcon />
                  </span>
                </div>
                <div className="ss-card__meta">
                  <div className="ss-card__copy">
                    <p className="ss-card__name">{item.title}</p>
                    <p className="ss-card__client">{item.client}</p>
                  </div>
                  <span className="ss-card__year">{item.year}</span>
                </div>
              </Link>
            ))}
          </div>

          <footer className="services-showcase__foot">
            <p>{SITE.location}</p>
            <p className="services-showcase__foot-mark">Strategy · Creative · Performance</p>
          </footer>
        </div>
      </section>

      <ServicesPractice />
    </>
  );
}
