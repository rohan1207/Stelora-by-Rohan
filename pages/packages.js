import PageShell from "@/components/PageShell";
import PackagesPageView from "@/components/PackagesPage";

export default function PackagesPage() {
  return (
    <PageShell
      bare
      title="Packages"
      description="Flexible, result-driven Stelora Media packages — Forme Start, Signature, and Full Circle growth plans."
    >
      <PackagesPageView />
    </PageShell>
  );
}
