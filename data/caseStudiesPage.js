/** Case studies listing + detail content — matches design mock. */

export const CASE_STUDIES_HERO = {
  kicker: "Case Studies",
  titleBefore: "Real Strategies. Real",
  titleAccent: "Results.",
  body:
    "We partner with ambitious brands to build performance systems that turn attention into inquiries, bookings, and measurable growth.",
  videoLabel: "Watch Our Approach (1 min)",
  videoHref: "/contact",
  images: [
    {
      src: "/content/creatives/kenya-unexpected.jpg",
      alt: "Luxury resort atmosphere at golden hour",
      className: "cs-hero__shot cs-hero__shot--a",
    },
    {
      src: "/content/creatives/vietnam-movement.jpg",
      alt: "Wellness and experiential stay details",
      className: "cs-hero__shot cs-hero__shot--b",
    },
  ],
};

export const CASE_STUDY_FILTERS = [
  { id: "all", label: "All Case Studies" },
  { id: "hospitality", label: "Hospitality" },
  { id: "wellness", label: "Health & Wellness" },
  { id: "real-estate", label: "Real Estate" },
  { id: "lifestyle", label: "Lifestyle" },
];

export const CASE_STUDIES_DETAILED = [
  {
    id: "arboreal-resort",
    slug: "the-arboreal-resort",
    number: "01",
    filter: "hospitality",
    industry: "Luxury Hospitality / Travel & Eco-Resorts",
    client: "The Arboreal Resort",
    logo: null,
    showClientBadge: false,
    title: "Luxury Hospitality & Experiential Stays",
    summary:
      "From wasted ad spend to a full-funnel booking engine — rebuilding paid media so every rupee worked toward qualified inquiries and direct stays.",
    image: "/content/creatives/kenya-unexpected.jpg",
    imageAlt: "Luxury hospitality stay experience",
    outcomes: [
      { icon: "chart", label: "Consistent Lead Volume" },
      { icon: "people", label: "Higher Booking Rate" },
      { icon: "layers", label: "Lower CPA" },
    ],
    challenge: {
      title: "Challenge & Past Performance",
      problem:
        "The resort struggled with ineffective paid ad spend managed by previous agencies who ran broad, unstructured campaigns lacking clear strategic intent.",
      bottlenecks:
        "Ad spend was consumed without generating qualified inquiries, resulting in negligible high-intent leads and near-zero direct booking conversions.",
    },
    strategy: {
      title: "Strategy & Execution",
      intro:
        "Replaced generic ad blasts with a full-funnel paid media strategy across Meta Ads and Google Ads.",
      points: [
        {
          heading: "Top-of-Funnel (Awareness)",
          body: "Visual, immersive video and carousel creatives highlighting the luxury jungle-view experience and amenities to capture interest.",
        },
        {
          heading: "Middle-of-Funnel (Engagement / Consideration)",
          body: "Retargeted engaged audiences with key differentiators, seasonal offers, and guest reviews.",
        },
        {
          heading: "Bottom-of-Funnel (Conversion)",
          body: "Captured high-intent search demand on Google (branded + high-intent travel/staycation keywords) and deployed targeted Meta lead-generation forms.",
        },
        {
          heading: "Continuous Data Optimization",
          body: "Conducted daily performance tracking, negative keyword filtering, creative fatigue monitoring, and proactive audience exclusions.",
        },
      ],
    },
    results: {
      title: "Key Results & Impact",
      items: [
        {
          heading: "Consistent Lead Volume",
          body: "Scaled lead flow from an inconsistent trickle to multiple qualified inquiries per day.",
        },
        {
          heading: "High Lead Quality",
          body: "Improved lead-to-booking conversion rates as leads came from well-qualified, high-intent prospects.",
        },
        {
          heading: "Lower Cost per Acquisition (CPA)",
          body: "Eliminated wasted ad spend by focusing budget strictly on top-performing funnel stages.",
        },
      ],
    },
  },
  {
    id: "deham-naturecure",
    slug: "deham-naturecure",
    number: "02",
    filter: "wellness",
    industry: "Health & Wellness / Naturopathy & Medical Spa Retreats",
    client: "Deham Naturecure",
    logo: null,
    showClientBadge: true,
    title: "Holistic Wellness & Naturopathy Retreats",
    summary:
      "Turning a historically dormant lead channel into a predictable daily pipeline — with package-specific funnels and sales-ready qualification.",
    image: "/content/creatives/purple-elegance.jpg",
    imageAlt: "Holistic wellness and naturopathy atmosphere",
    outcomes: [
      { icon: "spark", label: "Zero to Predictable Leads" },
      { icon: "people", label: "Higher Consultations" },
      { icon: "chart", label: "Maximized Marketing ROI" },
    ],
    challenge: {
      title: "Challenge & Past Performance",
      problem:
        "Prior to our engagement, the client partnered with 2–3 different marketing agencies with zero measurable return, failing to generate even a single qualified lead or confirmed admission.",
      bottlenecks:
        "Past agencies used a “one-size-fits-all” ad setup that completely ignored the distinct nuances, pricing tiers, and motivations of different wellness programs (e.g., medical naturopathy vs. lifestyle weight loss).",
    },
    strategy: {
      title: "Strategy & Execution",
      intro:
        "Structured distinct campaign tracks tailored to each core offering, then layered Google + Meta into one qualification-led funnel.",
      points: [
        {
          heading: "Package-Specific Segmentation",
          body: "Naturopathy & Chronic Disease Reversal · Medical Detox & Spa Rejuvenation · Structured Weight Loss Programs.",
        },
        {
          heading: "Intent Capture (Google Search)",
          body: "Targeted high-intent queries around specific ailments, retreat programs, and wellness treatments.",
        },
        {
          heading: "Visual Storytelling & Lead Gen (Meta Ads)",
          body: "Built persona-specific video ads focusing on transformation stories, doctor/expert credentials, and serene facility visuals.",
        },
        {
          heading: "Lead Qualification & Daily Iteration",
          body: "Implemented pre-qualifying questionnaire fields to filter non-serious inquiries, while optimizing budget daily toward the highest-performing treatment packages.",
        },
      ],
    },
    results: {
      title: "Key Results & Impact",
      items: [
        {
          heading: "Turnaround from Zero to Predictable Pipeline",
          body: "Transformed a historically dormant lead channel into a reliable daily engine delivering steady, qualified leads.",
        },
        {
          heading: "High Lead-to-Consultation Conversion",
          body: "Higher ticket packages achieved sustained consultations and confirmed bookings due to thorough upfront qualification.",
        },
        {
          heading: "Maximized Marketing ROI",
          body: "Successfully eliminated ad spend wastage, establishing a predictable customer acquisition cost (CAC).",
        },
      ],
    },
  },
];

export const CASE_STUDIES_CTA = {
  titleBefore: "Let’s Turn Your Brand Story Into a",
  titleAccent: "Case Study.",
  prompt: "Have a brand challenge?",
  cta: "Let’s Talk Strategy",
  href: "/contact",
};

export function getCaseStudy(slug) {
  return CASE_STUDIES_DETAILED.find((item) => item.slug === slug) || null;
}

export function getOtherCaseStudies(slug) {
  return CASE_STUDIES_DETAILED.filter((item) => item.slug !== slug);
}
