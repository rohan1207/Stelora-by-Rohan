import Link from "next/link";
import { motion } from "framer-motion";
import SectionSticker from "@/components/SectionSticker";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Brand & audience insights",
    icon: "/content/about/process/icon-discover.svg",
    tilt: -3.5,
  },
  {
    n: "02",
    title: "Strategise",
    body: "Creative direction & campaign plan",
    icon: "/content/about/process/icon-strategise.svg",
    tilt: 2.5,
  },
  {
    n: "03",
    title: "Execute",
    body: "Content, ads & production",
    icon: "/content/about/process/icon-execute.svg",
    tilt: -2,
  },
  {
    n: "04",
    title: "Scale",
    body: "Optimise, measure & grow",
    icon: "/content/about/process/icon-scale.svg",
    tilt: 3,
  },
];

/**
 * About page — process Polaroids + desk CTA, matching pitch mock.
 */
export default function AboutProcessCTA() {
  return (
    <section className="about-process" aria-labelledby="about-process-heading">
      <div className="about-process__inner">
        <div className="about-process__top">
          <div className="about-process__intro">
            <SectionSticker>Our Process</SectionSticker>
            <h2 id="about-process-heading" className="about-process__title stelora-heading stelora-heading--xl">
              From Spark to Scale.
            </h2>
            <p className="about-process__body stelora-lede">
              A clear path from insight to impact — discover, plan, ship, and grow without the
              guesswork.
            </p>
          </div>

          <div className="about-process__board">
            <svg
              className="about-process__dash"
              viewBox="0 0 900 140"
              fill="none"
              aria-hidden
              preserveAspectRatio="none"
            >
              <path
                className="about-process__dash-glow"
                d="M36 72 C 180 18, 300 118, 450 58 S 720 16, 864 78"
                stroke="#1A307B"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.12"
              />
              <path
                d="M36 72 C 180 18, 300 118, 450 58 S 720 16, 864 78"
                stroke="#1A307B"
                strokeWidth="2.75"
                strokeDasharray="5 10"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>

            <ol className="about-process__steps">
              {STEPS.map((step, i) => {
                const tone = i % 2 === 0 ? "dark" : "light";
                return (
                  <motion.li
                    key={step.n}
                    className="about-process__step"
                    style={{ "--tilt": `${step.tilt}deg` }}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: 0.06 * i }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/content/about/process/gold-binder-clip.png"
                      alt=""
                      className="about-process__clip"
                      aria-hidden
                    />
                    <article className={`about-process__card about-process__card--${tone}`}>
                      <div className="about-process__card-top">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={step.icon} alt="" className="about-process__icon" />
                        <span className="about-process__num">{step.n}</span>
                      </div>
                      <p className="about-process__step-title">{step.title}</p>
                      <p className="about-process__step-body">{step.body}</p>
                    </article>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <motion.div
          className="about-process__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/content/about/process/cta-desk-banner.jpg"
            alt=""
            className="about-process__cta-bg"
            aria-hidden
          />
          <div className="about-process__cta-panel">
            <div className="about-process__cta-left">
              <SectionSticker small onDark>
                Let&apos;s build together
              </SectionSticker>
              <h3 className="about-process__cta-title">Ready to grow your brand?</h3>
            </div>
            <div className="about-process__cta-right">
              <p className="about-process__cta-body">
                Book a free strategy call and we&apos;ll map out where your social, paid media
                or website has the most upside.
              </p>
              <Link href="/contact" className="about-process__cta-btn">
                <span>Book a Strategy Call</span>
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
