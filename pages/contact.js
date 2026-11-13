import PageShell from "@/components/PageShell";
import ContactDesk from "@/components/ContactDesk";

export default function ContactPage() {
  return (
    <PageShell
      bare
      title="Contact us"
      description="Book a free strategy call with Stelora Media — Pune, Maharashtra · Pan-India operations."
    >
      <ContactDesk />
    </PageShell>
  );
}
