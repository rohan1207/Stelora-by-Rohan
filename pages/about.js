import PageShell from "@/components/PageShell";
import AboutHero from "@/components/AboutHero";
import AboutStudioBento from "@/components/AboutStudioBento";
import AboutProcessCTA from "@/components/AboutProcessCTA";
import TeamSolarSystem from "@/components/TeamSolarSystem";
import AboutStory from "@/components/AboutStory";

export default function AboutPage() {
  return (
    <PageShell
      bare
      title="About us"
      description="Meet Divya Chauhan and the Stelora Media team — creativity, strategy, and impact from Pune."
    >
      <AboutHero />
      <AboutStudioBento />
      <TeamSolarSystem />
      <AboutStory />
      <AboutProcessCTA />
    </PageShell>
  );
}
