import PageShell from "@/components/PageShell";
import ServicesPassageHero from "@/components/ServicesPassageHero";
import ServicesShowcase from "@/components/ServicesShowcase";

export default function ServicesPage() {
  return (
    <PageShell
      bare
      title="Services"
      description="Performance marketing, social media, websites, and branding from Stelora Media."
    >
      <ServicesPassageHero />
      <ServicesShowcase />
    </PageShell>
  );
}
