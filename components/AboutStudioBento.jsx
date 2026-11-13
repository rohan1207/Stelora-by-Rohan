import Link from "next/link";
import SectionSticker from "@/components/SectionSticker";

const IMAGES = [
  {
    src: "/content/about/about-bento-edit.jpg",
    alt: "Video editing desk with Premiere Pro and production gear",
    className: "asb-tile asb-tile--hero",
  },
  {
    src: "/content/about/about-bento-gear.jpg",
    alt: "Camera, lenses, and production kit laid out on a desk",
    className: "asb-tile asb-tile--a",
  },
  {
    src: "/content/about/about-bento-dev.jpg",
    alt: "Development workspace with code and Stelora preview",
    className: "asb-tile asb-tile--b",
  },
  {
    src: "/content/about/about-bento-content.jpg",
    alt: "Content strategy workspace with writing plans and notes",
    className: "asb-tile asb-tile--c",
  },
];

export default function AboutStudioBento() {
  return (
    <section className="asb" aria-labelledby="asb-heading">
      <div className="asb-inner">
        <div className="asb-copy">
          <SectionSticker>Creative &amp; Performance</SectionSticker>

          <h2 id="asb-heading" className="asb-title stelora-heading stelora-heading--xl">
            Strategy, design, content and tech — built to move brands forward.
          </h2>

          <p className="asb-body stelora-lede">
            Stelora Media is a digital studio from Pune helping brands grow through storytelling,
            performance campaigns, polished production, and websites that actually convert. Craft
            first. Results always.
          </p>

          <div className="asb-actions">
            <Link href="/contact" className="btn-pill btn-pill-primary px-5 py-2.5 text-[0.65rem]">
              <span>Work with Stelora</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <div className="asb-grid" aria-hidden={false}>
          {IMAGES.map((image) => (
            <figure key={image.src} className={image.className}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
