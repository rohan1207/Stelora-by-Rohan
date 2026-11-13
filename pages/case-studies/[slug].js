import PageShell from "@/components/PageShell";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { CASE_STUDIES_DETAILED, getCaseStudy } from "@/data/caseStudiesPage";

export default function CaseStudyDetailPage({ study }) {
  if (!study) {
    return (
      <PageShell title="Case study not found" bare>
        <div className="cs-detail__hero">
          <h1 className="stelora-heading">Case study not found</h1>
          <p className="stelora-lede">This story may have moved. Browse all case studies instead.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={study.title}
      description={study.summary}
      bare
    >
      <CaseStudyDetail study={study} />
    </PageShell>
  );
}

export async function getStaticPaths() {
  return {
    paths: CASE_STUDIES_DETAILED.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const study = getCaseStudy(params.slug);
  return {
    props: {
      study: study || null,
    },
  };
}
