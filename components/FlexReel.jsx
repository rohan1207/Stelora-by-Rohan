import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ClientOnly from "@/components/ClientOnly";
import SectionSticker from "@/components/SectionSticker";
import { CREATIVE_FRAMES } from "@/data/creatives";

const FlexCarousel = dynamic(() => import("@/components/FlexCarousel"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center font-body text-sm text-stelora-muted">
      Loading creatives…
    </div>
  ),
});

const REEL_ITEMS = CREATIVE_FRAMES;
const COUNT = REEL_ITEMS.length;
/** Scroll distance per frame — after the last frame, page scroll continues normally. */
const STEP_VH = 44;

/**
 * Creatives reel — scroll drives campaign frames one-by-one (no infinite loop).
 */
export default function FlexReel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sync = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const total = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      const next = Math.min(COUNT - 1, Math.max(0, Math.round(progress * (COUNT - 1))));
      setIndex((prev) => (prev === next ? prev : next));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        sync();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="creatives"
      ref={trackRef}
      data-scroll-dwell
      className="relative border-t border-stelora-line bg-stelora-canvas"
      style={{ height: `calc(100svh + ${(COUNT - 1) * STEP_VH}svh)` }}
      aria-labelledby="creatives-heading"
    >
      <div className="sticky top-0 flex h-[100svh] max-h-[100svh] flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 55%, rgba(26, 48, 123, 0.07) 0%, transparent 70%), linear-gradient(180deg, #f7f5ef 0%, #f4f2ec 50%, #ebe8e0 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl shrink-0 flex-col items-center px-5 pt-8 text-center md:px-8 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionSticker center>Creatives</SectionSticker>
          </motion.div>
          <motion.h2
            id="creatives-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="stelora-heading stelora-heading--lg"
          >
            Frames in motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="stelora-lede stelora-lede--center max-w-md"
          >
            Scroll-stopping carousels, collages, and campaign frames — built to be saved,
            shared, and remembered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-4"
          >
            <Link href="/case-studies" className="btn-pill btn-pill-primary px-6 py-2.5 text-[0.65rem]">
              <span>View more</span>
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 min-h-0 w-full flex-1 pb-4">
          <ClientOnly
            fallback={
              <div className="flex h-full items-center justify-center font-body text-sm text-stelora-muted">
                Loading creatives…
              </div>
            }
          >
            <FlexCarousel
              items={REEL_ITEMS}
              index={index}
              preset="liquid"
              intro="rise"
              cardHeight={0.6}
              gap={12}
              squeeze={0.15}
              focusOnClick={false}
              captions
              loop={false}
              autoplay={false}
              captureWheel={false}
              drag={false}
            />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
