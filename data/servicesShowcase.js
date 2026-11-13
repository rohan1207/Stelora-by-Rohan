/**
 * Services showcase cards + detailed zigzag practice rows for /services.
 */
export const SERVICE_SHOWCASE = [
  {
    id: "social",
    title: "Social Media Systems",
    client: "Always-on content",
    tag: "Social",
    year: "2025",
    href: "#social",
    image: "/content/posts/carousel-1.png",
    alt: "Social media carousel creative",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    client: "Paid growth",
    tag: "Ads",
    year: "2025",
    href: "#performance",
    image: "/content/ads/automobile.png",
    alt: "Performance ad creative",
  },
  {
    id: "branding",
    title: "Brand Identity Kits",
    client: "Visual systems",
    tag: "Identity",
    year: "2025",
    href: "#branding",
    image: "/content/creatives/purple-elegance.jpg",
    alt: "Brand identity creative",
  },
  {
    id: "web",
    title: "Websites That Convert",
    client: "Product & marketing sites",
    tag: "Web",
    year: "2025",
    href: "#web",
    image: "/content/creatives/codingzen.jpg",
    alt: "Website and product creative",
  },
  {
    id: "reels",
    title: "Reels & Motion",
    client: "Scroll-stopping cuts",
    tag: "Motion",
    year: "2025",
    href: "#reels",
    image: "/content/reels/1.png",
    alt: "Reel still frame",
  },
  {
    id: "campaigns",
    title: "Campaign Worlds",
    client: "Launch narratives",
    tag: "Campaign",
    year: "2025",
    href: "#campaigns",
    image: "/content/creatives/vietnam-movement.jpg",
    alt: "Campaign creative",
  },
  {
    id: "production",
    title: "Photo & Film Direction",
    client: "On-set storytelling",
    tag: "Production",
    year: "2025",
    href: "#production",
    image: "/content/creatives/honest-conversations.png",
    alt: "Production still",
  },
  {
    id: "commerce",
    title: "Commerce Creatives",
    client: "Product that sells",
    tag: "Product",
    year: "2025",
    href: "#commerce",
    image: "/content/ads/pune-real-estate.png",
    alt: "Commerce and product creative",
  },
];

/** Full practice detail rows (zigzag) — aligned 1:1 with SERVICE_SHOWCASE. */
export const SERVICE_PRACTICES = [
  {
    id: "social",
    index: "01",
    tag: "Social",
    title: "Social Media Systems",
    summary:
      "Platform-wise calendars, scroll-stopping creatives, and community ops that keep your brand present — and measurable — every week.",
    image: "/content/posts/carousel-1.png",
    alt: "Social media carousel creative",
    pillars: [
      {
        title: "Strategy",
        items: ["Platform-wise content systems", "Audience & tone mapping", "Paid social amplification plans"],
      },
      {
        title: "Content",
        items: ["Static posts & carousels", "Trend-aligned Reels", "Community replies & DMs"],
      },
      {
        title: "Reporting",
        items: ["Weekly pulse dashboards", "Monthly growth reviews", "Creative learnings loop"],
      },
    ],
    outcomes: ["Consistent posting cadence", "Higher saves & shares", "Clearer brand voice"],
  },
  {
    id: "performance",
    index: "02",
    tag: "Ads",
    title: "Performance Marketing",
    summary:
      "Media that earns its spend — Google, Meta, and YouTube campaigns wired to funnels, tracking, and creative tests that improve ROAS.",
    image: "/content/ads/automobile.png",
    alt: "Performance ad creative",
    pillars: [
      {
        title: "Paid media",
        items: ["Google Search + Display", "Meta Ads (IG & Facebook)", "YouTube TrueView"],
      },
      {
        title: "Funnels",
        items: ["Lead gen & qualification", "E-commerce conversion", "Retargeting journeys"],
      },
      {
        title: "Optimisation",
        items: ["A/B creative tests", "Landing page audits", "Heatmaps & CRO"],
      },
    ],
    outcomes: ["Lower CPA", "Stronger ROAS", "Cleaner attribution"],
  },
  {
    id: "branding",
    index: "03",
    tag: "Identity",
    title: "Brand Identity Kits",
    summary:
      "The system every campaign leans on — strategy, logo, type, colour psychology, and a guidelines kit your team can actually use.",
    image: "/content/creatives/purple-elegance.jpg",
    alt: "Brand identity creative",
    pillars: [
      {
        title: "Foundation",
        items: ["Brand strategy workshops", "Positioning & messaging", "Visual direction"],
      },
      {
        title: "Identity",
        items: ["Logo & lockups", "Typography systems", "Colour psychology mapping"],
      },
      {
        title: "Delivery",
        items: ["Full brand guidelines", "Template starters", "Asset handoff"],
      },
    ],
    outcomes: ["Cohesive look & feel", "Faster creative production", "Stronger recognition"],
  },
  {
    id: "web",
    index: "04",
    tag: "Web",
    title: "Websites That Convert",
    summary:
      "Corporate sites, landing pages, and storefronts built for clarity, speed, SEO, and the path from visit to enquiry.",
    image: "/content/creatives/codingzen.jpg",
    alt: "Website and product creative",
    pillars: [
      {
        title: "What we ship",
        items: ["Corporate websites", "Service landing pages", "E-commerce storefronts"],
      },
      {
        title: "Build quality",
        items: ["CMS-ready architecture", "SEO-first structure", "Mobile-first UX"],
      },
      {
        title: "Process",
        items: ["Discovery → launch in ~6 weeks", "30-day post-launch monitoring", "Handoff & training"],
      },
    ],
    outcomes: ["Faster load times", "Higher enquiry rate", "Easier content updates"],
  },
  {
    id: "reels",
    index: "05",
    tag: "Motion",
    title: "Reels & Motion",
    summary:
      "Short-form edits engineered for the feed — hooks in the first second, trend-aware pacing, and captions that earn the watch.",
    image: "/content/reels/1.png",
    alt: "Reel still frame",
    pillars: [
      {
        title: "Craft",
        items: ["Hook-first storytelling", "Trend & audio mapping", "On-brand motion systems"],
      },
      {
        title: "Formats",
        items: ["Product demos", "Founder / UGC cuts", "Launch teasers"],
      },
      {
        title: "Distribution",
        items: ["Platform-native ratios", "Caption & cover design", "Boost-ready variants"],
      },
    ],
    outcomes: ["Higher watch time", "More profile visits", "Sharable moments"],
  },
  {
    id: "campaigns",
    index: "06",
    tag: "Campaign",
    title: "Campaign Worlds",
    summary:
      "Launch narratives with a through-line — big idea, key visuals, channel adaptations, and a rollout plan that stays coherent.",
    image: "/content/creatives/vietnam-movement.jpg",
    alt: "Campaign creative",
    pillars: [
      {
        title: "Concept",
        items: ["Campaign big idea", "Message architecture", "Mood & reference worlds"],
      },
      {
        title: "Assets",
        items: ["Hero + secondary visuals", "Social & ad cutdowns", "Landing adaptations"],
      },
      {
        title: "Rollout",
        items: ["Channel timeline", "Influencer / collab briefs", "Performance checkpoints"],
      },
    ],
    outcomes: ["Unified launch story", "Reusable asset system", "Clear campaign KPIs"],
  },
  {
    id: "production",
    index: "07",
    tag: "Production",
    title: "Photo & Film Direction",
    summary:
      "On-set direction that protects the brand — shot lists, art direction, and stills/film that feel intentional in every frame.",
    image: "/content/creatives/honest-conversations.png",
    alt: "Production still",
    pillars: [
      {
        title: "Pre-production",
        items: ["Creative briefs & shot lists", "Location & talent planning", "Art direction refs"],
      },
      {
        title: "On set",
        items: ["Photo direction", "Film / reel capture", "Brand consistency checks"],
      },
      {
        title: "Post",
        items: ["Selects & colour", "Retouching pipeline", "Multi-format delivery"],
      },
    ],
    outcomes: ["Premium stills & film", "Faster edit turnarounds", "Assets for ads + social"],
  },
  {
    id: "commerce",
    index: "08",
    tag: "Product",
    title: "Commerce Creatives",
    summary:
      "Product visuals and offer systems built to sell — catalogue freshness, offer ladders, and creatives tuned for carts and conversions.",
    image: "/content/ads/pune-real-estate.png",
    alt: "Commerce and product creative",
    pillars: [
      {
        title: "Product story",
        items: ["Catalogue creative systems", "Lifestyle + detail shots", "Offer & promo frames"],
      },
      {
        title: "Conversion",
        items: ["PDP / landing support", "Cart recovery creatives", "Seasonal drops"],
      },
      {
        title: "Always-on",
        items: ["Fresh ad rotations", "Audience-specific cuts", "Performance creative tests"],
      },
    ],
    outcomes: ["Higher AOV signals", "Fresher ad fatigue cycles", "Clearer product desire"],
  },
];
