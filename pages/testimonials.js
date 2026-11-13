import PageShell from "@/components/PageShell";
import TestimonialsPageView from "@/components/TestimonialsPage";

export default function TestimonialsPage() {
  return (
    <PageShell
      title="Client Stories"
      description="Real experiences and results from brands that trust Stelora Media with their digital journey."
      bare
    >
      <TestimonialsPageView />
    </PageShell>
  );
}
