import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionSticker from "@/components/SectionSticker";
import { SITE } from "@/data/siteContent";

/**
 * Shared layout for inner pages — same canvas / navy language as home.
 */
export default function PageShell({
  title,
  description = SITE.description,
  children,
  bare = false,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={SITE.name} />
      </Head>
      <Navbar />
      <main className="min-h-[100svh] bg-stelora-canvas pt-[4.25rem] md:pt-[5.25rem]">
        {bare ? (
          children
        ) : (
          <div className="relative overflow-hidden border-b border-stelora-line">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 0%, rgba(26, 48, 123, 0.07), transparent 60%), linear-gradient(180deg, #f9f7f2 0%, #f4f2ec 55%, #ebe7df 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10">{children}</div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export function PageHero({ kicker, title, body }) {
  return (
    <header className="stelora-section-head stelora-section-head--center mx-auto w-full max-w-4xl px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14">
      {kicker ? <SectionSticker center>{kicker}</SectionSticker> : null}
      <h1 className="stelora-heading stelora-heading--xl">{title}</h1>
      {body ? <p className="stelora-lede stelora-lede--center max-w-2xl">{body}</p> : null}
    </header>
  );
}
