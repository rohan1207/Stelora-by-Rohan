import PageShell from "@/components/PageShell";
import CaseStudiesPageView from "@/components/CaseStudiesPage";

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      description="Real strategies and measurable results from brands that partner with Stelora Media."
      bare
    >
      <CaseStudiesPageView />
    </PageShell>
  );
}
