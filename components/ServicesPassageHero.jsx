import { Suspense, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";
import { CREATIVE_FRAMES } from "@/data/creatives";

const PassageGallery = dynamic(() => import("@/components/PassageGallery"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[70svh] items-center justify-center bg-[#070b18] font-body text-sm text-[#fff4e0]/70">
      Loading passage…
    </div>
  ),
});

const EXTRA = [
  { src: "/content/posts/carousel-1.png", alt: "Social carousel", title: "Social Carousel" },
  { src: "/content/posts/carousel-2.png", alt: "Campaign post", title: "Campaign Frame" },
  { src: "/content/reels/1.png", alt: "Reel still", title: "Reel Cut" },
  { src: "/content/reels/2.png", alt: "Reel still", title: "Motion Still" },
  { src: "/content/ads/automobile.png", alt: "Automotive ad", title: "Automotive" },
  { src: "/content/ads/pune-real-estate.png", alt: "Real estate ad", title: "Real Estate" },
];

/**
 * Services hero — custom passage tunnel of Stelora project cards.
 */
export default function ServicesPassageHero() {
  const [opened, setOpened] = useState(false);

  const items = useMemo(
    () => [
      ...CREATIVE_FRAMES.map(({ src, alt, title }) => ({ src, alt, title })),
      ...EXTRA,
    ],
    []
  );

  return (
    <section
      className="services-passage-hero relative isolate min-h-[72svh] overflow-hidden border-b border-stelora-line bg-[#070b18] md:min-h-[100svh]"
      aria-label="Services passage gallery"
    >
      <ClientOnly
        fallback={
          <div className="flex min-h-[72svh] items-center justify-center font-body text-sm text-[#fff4e0]/70 md:min-h-[100svh]">
            Loading passage…
          </div>
        }
      >
        <div className="services-passage-hero__stage h-[72svh] w-full md:h-[100svh]">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center font-body text-sm text-[#fff4e0]/70">
                Loading frames…
              </div>
            }
          >
            <PassageGallery
              items={items}
              colors={["#1A307B", "#C4A35A"]}
              backgroundColor="#070b18"
              speed={0.38}
              look={0.4}
              hover={0.65}
              focusOnClick
              captions
              wheel={false}
              fog={1.05}
              lineOpacity={0.12}
              className="h-full min-h-[72svh] md:min-h-[100svh]"
              onFocusChange={(item) => setOpened(Boolean(item))}
            >
              <div
                className={`mx-auto px-5 text-center transition-opacity duration-300 ${
                  opened ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1 className="font-display text-[0.72rem] font-bold uppercase leading-tight tracking-[0.22em] text-[#fff4e0]/80">
                  <span className="block">Services</span>
                  <span className="mt-1.5 block">Projects</span>
                </h1>
              </div>
            </PassageGallery>
          </Suspense>
        </div>
      </ClientOnly>
    </section>
  );
}
