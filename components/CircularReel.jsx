import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import ClientOnly from "@/components/ClientOnly";
import SectionSticker from "@/components/SectionSticker";
import { CREATIVE_FRAMES } from "@/data/creatives";

const CircularCarousel = dynamic(() => import("@/components/CircularCarousel"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center font-body text-sm text-stelora-muted">
      Loading carousels…
    </div>
  ),
});

const RING_ITEMS = [
  ...CREATIVE_FRAMES,
  {
    src: "/content/posts/carousel-1.png",
    alt: "Social carousel frame",
    title: "Carousel One",
    subtitle: "Social",
  },
  {
    src: "/content/posts/carousel-2.png",
    alt: "Social carousel frame",
    title: "Carousel Two",
    subtitle: "Social",
  },
  {
    src: "/content/posts/carousel-3.png",
    alt: "Social carousel frame",
    title: "Carousel Three",
    subtitle: "Social",
  },
  {
    src: "/content/posts/carousel-4.png",
    alt: "Social carousel frame",
    title: "Carousel Four",
    subtitle: "Social",
  },
  {
    src: "/content/posts/carousel-5.png",
    alt: "Social carousel frame",
    title: "Carousel Five",
    subtitle: "Social",
  },
  {
    src: "/content/posts/carousel-6.png",
    alt: "Social carousel frame",
    title: "Carousel Six",
    subtitle: "Social",
  },
  {
    src: "/content/reels/1.png",
    alt: "Campaign reel still",
    title: "Reel Cut",
    subtitle: "Motion",
  },
  {
    src: "/content/reels/2.png",
    alt: "Campaign reel still",
    title: "Reel Pulse",
    subtitle: "Motion",
  },
  {
    src: "/content/reels/3.png",
    alt: "Campaign reel still",
    title: "Reel Glow",
    subtitle: "Motion",
  },
  {
    src: "/content/ads/automobile.png",
    alt: "Automotive campaign",
    title: "Automobile",
    subtitle: "Ads",
  },
  {
    src: "/content/ads/pune-real-estate.png",
    alt: "Real estate campaign",
    title: "Real Estate",
    subtitle: "Ads",
  },
  {
    src: "/content/ads/ad-shot-1.png",
    alt: "Campaign ad still",
    title: "Ad Frame",
    subtitle: "Ads",
  },
];

/**
 * Carousel orbit — circular ring of campaign creative frames.
 */
export default function CircularReel() {
  return (
    <section
      id="carousels"
      data-scroll-dwell
      className="relative border-t border-stelora-line bg-stelora-canvas"
      style={{ height: "158svh" }}
      aria-labelledby="carousels-heading"
    >
      <div className="sticky top-0 flex h-[100svh] max-h-[100svh] flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 50% at 50% 45%, rgba(26, 48, 123, 0.08) 0%, transparent 70%), linear-gradient(180deg, #f7f5ef 0%, #f4f2ec 55%, #ebe8e0 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl shrink-0 flex-col items-center px-5 pt-6 text-center md:px-8 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionSticker center>Carousels</SectionSticker>
          </motion.div>
          <motion.h2
            id="carousels-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="stelora-heading stelora-heading--lg"
          >
            Designed to swipe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="stelora-lede stelora-lede--center max-w-md"
          >
            Multi-frame stories for travel, fashion, education, and brands that lead with
            personality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-4"
          >
            <Link href="/case-studies" className="btn-pill btn-pill-outline px-6 py-2.5 text-[0.65rem]">
              <span>View more</span>
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="circular-reel__stage relative z-10 min-h-0 w-full flex-1">
          <ClientOnly
            fallback={
              <div className="flex h-full items-center justify-center font-body text-sm text-stelora-muted">
                Loading carousels…
              </div>
            }
          >
            <CircularCarousel
              items={RING_ITEMS}
              preset="cylinder"
              intro="rise"
              cardWidth={250}
              aspectRatio={0.9}
              gap={32}
              speed={11}
              captions
              fadeColor="#f4f2ec"
              cornerRadius={14}
              perspective={2600}
            />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
