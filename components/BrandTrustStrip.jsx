import SectionSticker from "@/components/SectionSticker";
import { BRAND_LOGOS } from "@/data/brandLogos";

/**
 * Continuous client logo ribbon — left → right under the hero.
 */
export default function BrandTrustStrip() {
  const set = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="brand-trust" aria-label="Brands that trust us">
      <div className="brand-trust__glow" aria-hidden />
      <div className="brand-trust__inner">
        <div className="brand-trust__head">
          <SectionSticker center>Portfolio</SectionSticker>
          <h2 className="brand-trust__title stelora-heading stelora-heading--lg">Brands that trust us</h2>
        </div>

        <div className="brand-trust__viewport">
          <div className="brand-trust__track">
            <div className="brand-trust__set">
              {set.map((logo, i) => (
                <div key={`a-${logo.name}-${i}`} className="brand-trust__item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} className="brand-trust__logo" draggable={false} />
                </div>
              ))}
            </div>
            <div className="brand-trust__set" aria-hidden>
              {set.map((logo, i) => (
                <div key={`b-${logo.name}-${i}`} className="brand-trust__item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt="" className="brand-trust__logo" draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="brand-trust__meta">
          <p className="brand-trust__meta-item">
            <strong>20+</strong> trusted brands
          </p>
          <span className="brand-trust__meta-dot" aria-hidden />
          <p className="brand-trust__meta-item">Across multiple industries</p>
          <span className="brand-trust__meta-dot" aria-hidden />
          <p className="brand-trust__meta-item">Real brands. Real growth. Together.</p>
        </div>
      </div>
    </section>
  );
}
