import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ClientOnly from "@/components/ClientOnly";
import { GLOBE_IMAGES } from "@/data/globeImages";

const DomeGallery = dynamic(() => import("@/components/DomeGallery"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center font-body text-sm text-stelora-muted">
      Loading gallery…
    </div>
  ),
});

/**
 * Photoshoot dome — globe left, copy right (stacks on phone).
 * Globe frames come only from the Carousel kit + latest globe creatives.
 */
export default function CaptureDome() {
  return (
    <section
      id="photoshoot"
      data-scroll-dwell
      className="relative border-t border-stelora-line bg-stelora-canvas"
      style={{ height: "148svh" }}
      aria-labelledby="capture-heading"
    >
      <div className="sticky top-0 h-[100svh]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 55% at 28% 50%, rgba(26, 48, 123, 0.07) 0%, transparent 70%), linear-gradient(180deg, #f9f7f2 0%, #f4f2ec 55%, #ebe7df 100%)",
          }}
          aria-hidden
        />

        <div className="capture-dome__layout relative z-10 flex h-full flex-col md:flex-row">
          <div className="capture-dome__stage relative order-2 h-[52svh] w-full shrink-0 md:order-1 md:h-full md:w-[58%] md:shrink">
            <ClientOnly
              fallback={
                <div className="flex h-full w-full items-center justify-center font-body text-sm text-stelora-muted">
                  Loading gallery…
                </div>
              }
            >
              <DomeGallery
                images={GLOBE_IMAGES}
                fit={0.64}
                fitBasis="min"
                minRadius={250}
                maxRadius={780}
                padFactor={0.03}
                overlayBlurColor="#f4f2ec"
                grayscale={false}
                imageBorderRadius="12px"
                openedImageBorderRadius="20px"
                openedImageWidth="400px"
                openedImageHeight="400px"
                segments={35}
                maxVerticalRotationDeg={48}
                dragDampening={2}
                autoSpinSpeed={2.2}
                hoverInfluence={2}
              />
            </ClientOnly>
          </div>

          <div className="capture-dome__copy relative z-20 order-1 flex w-full shrink-0 items-center px-5 pb-3 pt-8 text-left md:order-2 md:h-full md:w-[42%] md:px-8 md:pb-0 md:pt-0 lg:px-12 xl:pr-16">
            <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-[26rem]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="font-display text-[0.65rem] font-bold uppercase tracking-[0.26em] text-stelora-muted"
              >
                Photoshoot
              </motion.p>
              <motion.h2
                id="capture-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-3 font-display text-[clamp(1.85rem,4.2vw,3.1rem)] font-bold leading-[1.05] tracking-[-0.035em] text-stelora-navy"
              >
                Through our lens
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="mt-3 max-w-md font-body text-[0.92rem] leading-relaxed text-stelora-muted md:text-[1rem]"
              >
                A glimpse of the light we chase — products, places, and people, framed
                for brands that want to be seen.
              </motion.p>
              <p className="mt-4 font-display text-[0.58rem] font-bold uppercase tracking-[0.2em] text-stelora-muted/70">
                Hover to pause · click a frame · drag to spin the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
