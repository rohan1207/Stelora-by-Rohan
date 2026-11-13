import Link from "next/link";
import { motion } from "framer-motion";
import SectionSticker from "@/components/SectionSticker";

const HERO_IMG = "/content/about/about-hero.png";
const PROP_IMG = "/content/about/about-camera-prop.png";

const FEATURES = [
  {
    title: "Strategy That Works",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    title: "Design That Speaks",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="5" width="16" height="12" rx="2" />
        <path d="M8 17v2M16 17v2M4 13h16" />
      </svg>
    ),
  },
  {
    title: "Build That Scales",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12" />
      </svg>
    ),
  },
  {
    title: "Content That Performs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 18V10M10 18V6M16 18v-7M20 18V8" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "50+", label: "Brands Partnered" },
  { value: "120+", label: "Projects Delivered" },
  { value: "4+", label: "Years of Experience" },
];

/**
 * About hero — full composition matching design: cream top, navy wave,
 * door collage, feature cards, stats + mission + camera prop.
 */
export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-heading">
      <div className="about-hero__grid" aria-hidden />
      <div className="about-hero__wave" aria-hidden />

      <div className="about-hero__top">
        <div className="about-hero__copy">
          <motion.div
            initial={{ opacity: 0, y: 8, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionSticker>About Us</SectionSticker>
          </motion.div>

          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="about-hero__title stelora-heading stelora-heading--xl"
          >
            A Creative Studio for Brands that Mean Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="about-hero__body stelora-lede"
          >
            Stelora Media is a digital design &amp; development studio that helps brands grow through
            strategy, design, content and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="about-hero__actions"
          >
            <Link href="#who" className="btn-pill btn-pill-primary px-5 py-2.5 text-[0.65rem]">
              <span>Our Story</span>
              <span aria-hidden>↗</span>
            </Link>
            <Link href="#team" className="btn-pill btn-pill-outline px-5 py-2.5 text-[0.65rem]">
              <span className="about-hero__play" aria-hidden>
                ▶
              </span>
              <span>Meet the Team</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="about-hero__media"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Stelora Media studio door collage"
            className="about-hero__image"
          />
        </motion.div>
      </div>

      <div className="about-hero__features">
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="about-hero__feature"
          >
            <span className="about-hero__feature-icon">{f.icon}</span>
            <p className="about-hero__feature-title">{f.title}</p>
          </motion.article>
        ))}
      </div>

      <div className="about-hero__band">
        <div className="about-hero__band-inner">
          <div className="about-hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="about-hero__stat">
                <p className="about-hero__stat-value">{s.value}</p>
                <p className="about-hero__stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="about-hero__mission">
            <SectionSticker small className="about-hero__mission-kicker">
              Our Mission
            </SectionSticker>
            <p className="about-hero__mission-body">
              To turn ideas into impactful brand experiences that look great, work smart and deliver
              results.
            </p>
          </div>

          <div className="about-hero__prop">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROP_IMG}
              alt="Camera and plant on a brand design book"
              className="about-hero__prop-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
