import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionSticker from "@/components/SectionSticker";
import { BRAND_LOGOS } from "@/data/brandLogos";
import {
  TESTIMONIALS_CTA,
  TESTIMONIALS_HERO,
  TESTIMONIALS_STATS,
  TESTIMONIALS_TRUST,
  TESTIMONIAL_STORIES,
} from "@/data/testimonialsPage";

function StatIcon({ type }) {
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

  if (type === "play") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg {...common}>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    );
  }
  if (type === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c1.2-3 3.4-4.5 5.5-4.5S13.3 16 14.5 19M14.5 14.8c1.5-.4 3-.1 4.5 1.7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="tp-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

/**
 * Client Stories testimonials page — matches design mock.
 */
export default function TestimonialsPageView() {
  const [active, setActive] = useState(0);
  const story = TESTIMONIAL_STORIES[active];
  const trustLogos = BRAND_LOGOS.slice(0, 5);

  const prev = () => setActive((v) => (v - 1 + TESTIMONIAL_STORIES.length) % TESTIMONIAL_STORIES.length);
  const next = () => setActive((v) => (v + 1) % TESTIMONIAL_STORIES.length);

  return (
    <div className="tp-page">
      {/* Hero */}
      <section className="tp-hero" aria-labelledby="tp-hero-heading">
        <div className="tp-hero__inner">
          <div className="tp-hero__copy">
            <SectionSticker>{TESTIMONIALS_HERO.kicker}</SectionSticker>
            <h1 id="tp-hero-heading" className="tp-hero__title">
              {TESTIMONIALS_HERO.titleBefore}{" "}
              <em className="tp-hero__accent">{TESTIMONIALS_HERO.titleAccent}</em>
            </h1>
            <p className="tp-hero__body">{TESTIMONIALS_HERO.body}</p>
          </div>

          <div className="tp-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TESTIMONIALS_HERO.image}
              alt={TESTIMONIALS_HERO.imageAlt}
              className="tp-hero__img"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="tp-stats" aria-label="Client results">
        <div className="tp-stats__inner">
          {TESTIMONIALS_STATS.map((stat) => (
            <article key={stat.id} className="tp-stat">
              <span className="tp-stat__icon">
                <StatIcon type={stat.icon} />
              </span>
              <div>
                <p className="tp-stat__value">{stat.value}</p>
                <p className="tp-stat__label">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured stories */}
      <section className="tp-stories" aria-labelledby="tp-stories-heading">
        <h2 id="tp-stories-heading" className="sr-only">
          Featured client stories
        </h2>

        <div className="tp-stories__stage">
          <AnimatePresence mode="wait">
            <motion.article
              key={story.id}
              className="tp-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className={`tp-card__media tp-card__media--${story.mediaTone || "estate"}`}>
                {story.mediaTone === "estate" ? (
                  <div className="tp-card__estate-art" aria-hidden>
                    <span className="tp-card__estate-sky" />
                    <span className="tp-card__estate-building" />
                    <span className="tp-card__estate-glow" />
                  </div>
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={story.image} alt={story.imageAlt} />
                    <div className="tp-card__shade" aria-hidden />
                  </>
                )}
                <p className="tp-card__brand">{story.logoLabel}</p>
              </div>

              <div className="tp-card__quote">
                <span className="tp-card__mark" aria-hidden>
                  “
                </span>
                <Stars count={story.rating} />
                <blockquote>{story.quote}</blockquote>
                <p className="tp-card__attr">{story.attribution}</p>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="tp-stories__nav">
            <div className="tp-stories__dots" role="tablist" aria-label="Stories">
              {TESTIMONIAL_STORIES.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`tp-dot${active === i ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${item.brand}`}
                />
              ))}
            </div>
            <div className="tp-stories__arrows">
              <button type="button" className="tp-arrow" onClick={prev} aria-label="Previous story">
                ‹
              </button>
              <button type="button" className="tp-arrow" onClick={next} aria-label="Next story">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust logos */}
      <section className="tp-trust" aria-labelledby="tp-trust-heading">
        <h2 id="tp-trust-heading" className="tp-trust__title">
          {TESTIMONIALS_TRUST.title}
        </h2>
        <div className="tp-trust__row">
          {trustLogos.map((logo) => (
            <div key={logo.name} className="tp-trust__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} draggable={false} />
            </div>
          ))}
          <p className="tp-trust__more">{TESTIMONIALS_TRUST.moreLabel}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="tp-cta" aria-labelledby="tp-cta-heading">
        <div className="tp-cta__frame">
          <div className="tp-cta__glow" aria-hidden />
          <div className="tp-cta__left">
            <h2 id="tp-cta-heading" className="tp-cta__title">
              {TESTIMONIALS_CTA.titleBefore}{" "}
              <em>{TESTIMONIALS_CTA.titleAccent}</em>
            </h2>
          </div>
          <div className="tp-cta__right">
            <p>{TESTIMONIALS_CTA.body}</p>
            <Link href={TESTIMONIALS_CTA.href} className="tp-cta__btn">
              <span>{TESTIMONIALS_CTA.cta}</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="tp-cta__leaf" aria-hidden />
        </div>
      </section>
    </div>
  );
}
