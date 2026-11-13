/** Stelora work desk — real domains → folders → project cards from the pitch kit. */

export const FINDER_DOMAINS = [
  {
    id: "social",
    label: "Social",
    path: "Social",
    icon: "social",
    blurb: "Content, community, and campaigns built to engage and grow.",
    folders: [
      {
        id: "content-strategy",
        label: "Strategy & Content",
        color: "#1A307B",
        icon: "grid",
        projects: [
          {
            id: "platform-strategies",
            title: "Platform-wise Content Strategies",
            tag: "Strategy",
            metric: "Always-on",
            summary:
              "Channel-specific calendars, hooks, and formats so every post serves growth — not noise.",
            cover: "/content/posts/carousel-1.png",
          },
          {
            id: "scroll-stopping-posts",
            title: "Scroll-stopping Static Posts",
            tag: "Content",
            metric: "Feed-first",
            summary:
              "Design-led carousels and single frames engineered for saves, shares, and brand recall.",
            cover: "/content/posts/carousel-2.png",
          },
          {
            id: "trend-reels",
            title: "Trend-aligned Reels",
            tag: "Video",
            metric: "256K+ views",
            summary:
              "Reel systems that ride culture without losing brand voice — built for reach and retention.",
            cover: "/content/reels/1.png",
          },
          {
            id: "brand-films",
            title: "Brand Films",
            tag: "Film",
            metric: "Story-led",
            summary:
              "Short-form brand films and narrative cuts that turn campaigns into lasting impressions.",
            cover: "/content/reels/2.png",
          },
        ],
      },
      {
        id: "community-insights",
        label: "Community & Insights",
        color: "#0C1638",
        icon: "users",
        projects: [
          {
            id: "daily-community",
            title: "Daily Community Management",
            tag: "Community",
            metric: "Day-to-day",
            summary:
              "Replies, rituals, and brand-safe moderation that keep audiences warm and engaged.",
            cover: "/content/posts/carousel-3.png",
          },
          {
            id: "reporting-cadence",
            title: "Weekly + Monthly Reporting",
            tag: "Insights",
            metric: "Clear KPIs",
            summary:
              "Performance snapshots and next-step recommendations leadership can act on.",
            cover: "/content/posts/post-2.png",
          },
          {
            id: "puneri-pratik",
            title: "Puneri Pratik — Engagement Lift",
            tag: "Case study",
            metric: "276,849 engaged",
            summary:
              "High-engagement regional content that drove massive account interactions for Puneri Pratik.",
            cover: "/content/reels/3.png",
          },
        ],
      },
      {
        id: "paid-social",
        label: "Paid Social",
        color: "#243A8C",
        icon: "spark",
        projects: [
          {
            id: "paid-amplification",
            title: "Paid Social Amplification",
            tag: "Meta",
            metric: "96.4% ad reach",
            summary:
              "Boost and always-on Meta amplification that turns organic winners into paid scale.",
            cover: "/content/ads/ad-shot-1.png",
          },
          {
            id: "custom-retarget",
            title: "Custom Audiences & Retargeting",
            tag: "Reach",
            metric: "+134.9% reach",
            summary:
              "Audience maps and retarget stacks that recovered interest and compounded visibility.",
            cover: "/content/ads/ad-shot-2.png",
          },
        ],
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    path: "Performance",
    icon: "ads",
    blurb: "Performance, social & web — built to convert.",
    folders: [
      {
        id: "paid-media",
        label: "Paid Advertising & Media",
        color: "#1A307B",
        icon: "ads",
        projects: [
          {
            id: "google-search-display",
            title: "Google Search + Display",
            tag: "Google",
            metric: "Intent-led",
            summary:
              "Search and display programs that capture demand and keep the brand visible across the funnel.",
            cover: "/content/ads/ad-shot-3.png",
          },
          {
            id: "meta-ads",
            title: "Meta Ads — Instagram & Facebook",
            tag: "Meta",
            metric: "256,015 views / 30d",
            summary:
              "Creative testing and media buying that drove 256K+ views in 30 days — 87.7% from ads.",
            cover: "/content/ads/automobile.png",
          },
          {
            id: "youtube-trueview",
            title: "YouTube TrueView",
            tag: "YouTube",
            metric: "Video reach",
            summary:
              "TrueView placements that put brand films and product stories in front of the right viewers.",
            cover: "/content/reels/1.png",
          },
        ],
      },
      {
        id: "funnels",
        label: "Funnels & Conversions",
        color: "#0C1638",
        icon: "spark",
        projects: [
          {
            id: "sales-funnel-setup",
            title: "Sales Funnel Setup",
            tag: "Funnels",
            metric: "End-to-end",
            summary:
              "Offer → capture → nurture paths that turn attention into qualified pipeline.",
            cover: "/content/posts/carousel-4.png",
          },
          {
            id: "ecommerce-conversion",
            title: "E-commerce Conversion Campaigns",
            tag: "E-com",
            metric: "Revenue focus",
            summary:
              "Catalog, UGC, and retarget hybrids engineered for cart recovery and repeat purchase.",
            cover: "/content/posts/carousel-5.png",
          },
          {
            id: "lead-qualification",
            title: "Lead Gen + Qualification Workflows",
            tag: "Leads",
            metric: "Sales-ready",
            summary:
              "Forms, scoring, and handoff rituals so marketing delivers leads ops can close.",
            cover: "/content/posts/carousel-6.png",
          },
        ],
      },
      {
        id: "testing-insights",
        label: "Testing & Insights",
        color: "#243A8C",
        icon: "search",
        projects: [
          {
            id: "heatmaps",
            title: "Heatmaps",
            tag: "UX insight",
            metric: "Behaviour",
            summary:
              "On-page heat and scroll maps that show where users engage — and where they drop.",
            cover: "/content/ads/ad-shot-1.png",
          },
          {
            id: "ab-testing",
            title: "A/B Testing",
            tag: "Optimise",
            metric: "Iterate",
            summary:
              "Creative and landing experiments that compound wins across paid and organic.",
            cover: "/content/ads/ad-shot-2.png",
          },
        ],
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    path: "Web",
    icon: "web",
    blurb: "Built for visibility, usability, and growth.",
    folders: [
      {
        id: "sites",
        label: "Websites & Stores",
        color: "#1A307B",
        icon: "web",
        projects: [
          {
            id: "corporate-websites",
            title: "Corporate Websites",
            tag: "Web",
            metric: "6-week launch",
            summary:
              "Discovery-to-launch sites with SEO-ready architecture and a 30-day post-launch monitor.",
            cover: "/content/posts/carousel-1.png",
          },
          {
            id: "ecommerce-storefronts",
            title: "E-commerce Storefronts",
            tag: "E-com",
            metric: "Convert",
            summary:
              "Storefronts designed for browse-to-buy clarity — speed, trust, and clean product storytelling.",
            cover: "/content/posts/carousel-2.png",
          },
          {
            id: "service-landing",
            title: "Service Landing Pages",
            tag: "Landing",
            metric: "Lead-ready",
            summary:
              "High-intent pages paired with ads and SEO so every click has a clear next step.",
            cover: "/content/posts/carousel-3.png",
          },
          {
            id: "cms-systems",
            title: "CMS-based Systems",
            tag: "CMS",
            metric: "Editable",
            summary:
              "Flexible content systems teams can update without waiting on a developer every time.",
            cover: "/content/posts/post-2.png",
          },
        ],
      },
      {
        id: "web-growth",
        label: "Web Growth & Optimisation",
        color: "#0C1638",
        icon: "search",
        projects: [
          {
            id: "seo-management",
            title: "SEO Management",
            tag: "SEO",
            metric: "3–9 mo ramp",
            summary:
              "Technical hygiene, content architecture, and ongoing SEO that compounds with paid media.",
            cover: "/content/ads/ad-shot-3.png",
          },
          {
            id: "cro",
            title: "Conversion Rate Optimisation",
            tag: "CRO",
            metric: "Lift",
            summary:
              "Page audits and conversion experiments that squeeze more value from existing traffic.",
            cover: "/content/posts/carousel-4.png",
          },
          {
            id: "landing-audits",
            title: "Landing Page Audits",
            tag: "Audit",
            metric: "Clarity",
            summary:
              "Message, UX, and speed reviews that fix friction before you scale spend.",
            cover: "/content/posts/carousel-5.png",
          },
        ],
      },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    path: "Brand",
    icon: "brand",
    blurb: "The foundation every campaign builds on.",
    folders: [
      {
        id: "identity",
        label: "Visual Identity",
        color: "#1A307B",
        icon: "brand",
        projects: [
          {
            id: "brand-strategy",
            title: "Brand Strategy",
            tag: "Strategy",
            metric: "Positioning",
            summary:
              "Audience clarity, competitive framing, and a narrative spine campaigns can scale from.",
            cover: "/content/posts/carousel-6.png",
          },
          {
            id: "logo-design",
            title: "Logo Design",
            tag: "Identity",
            metric: "Mark",
            summary:
              "Marks and lockups that hold up from favicon to outdoor — sharp, ownable, and usable.",
            cover: "/content/reels/2.png",
          },
          {
            id: "type-colour",
            title: "Typography & Colour Systems",
            tag: "Systems",
            metric: "Guidelines",
            summary:
              "Type hierarchies and colour psychology mapping that keep every touchpoint consistent.",
            cover: "/content/posts/carousel-1.png",
          },
          {
            id: "brand-kit",
            title: "Complete Brand Guidelines Kit",
            tag: "Kit",
            metric: "Full system",
            summary:
              "A living brand book — voice, assets, and do/don’t rules teams can actually ship with.",
            cover: "/content/posts/carousel-2.png",
          },
        ],
      },
      {
        id: "print-csr",
        label: "Print & CSR",
        color: "#0C1638",
        icon: "pen",
        projects: [
          {
            id: "print-offline",
            title: "Print Media & Offline Branding",
            tag: "Offline",
            metric: "IRL",
            summary:
              "Collateral and spatial branding that extends the digital identity into the real world.",
            cover: "/content/posts/post-2.png",
          },
          {
            id: "csr-comms",
            title: "CSR Communication & Impact",
            tag: "Impact",
            metric: "Purpose",
            summary:
              "Story systems for CSR and impact programs — credible, human, and shareable.",
            cover: "/content/reels/3.png",
          },
        ],
      },
    ],
  },
  {
    id: "production",
    label: "Production",
    path: "Production",
    icon: "camera",
    blurb: "Photo/video production & creative direction.",
    folders: [
      {
        id: "shoots",
        label: "Photo & Video",
        color: "#1A307B",
        icon: "camera",
        projects: [
          {
            id: "proprise-shoots",
            title: "Proprise — Property Shoots",
            tag: "Real estate",
            metric: "96.4% ad reach",
            summary:
              "Property photography and social presence that elevated Proprise — creative rooted in strategy.",
            cover: "/content/ads/pune-real-estate.png",
          },
          {
            id: "auto-campaign",
            title: "Automotive Campaign Frames",
            tag: "Automotive",
            metric: "256K+ views",
            summary:
              "Campaign creative for automotive brands engineered for visibility and conversion.",
            cover: "/content/ads/automobile.png",
          },
          {
            id: "creative-direction",
            title: "Creative Direction Desk",
            tag: "Direction",
            metric: "On-brand",
            summary:
              "Shot lists, art direction, and edit notes so every frame serves the brief.",
            cover: "/content/reels/1.png",
          },
        ],
      },
      {
        id: "results",
        label: "Client Results",
        color: "#0C1638",
        icon: "spark",
        projects: [
          {
            id: "views-30d",
            title: "Views Spike — 30 Days",
            tag: "Result",
            metric: "256,015 views",
            summary:
              "A single-month content + ads push: 256,015 views with 87.7% driven by paid.",
            cover: "/content/ads/ad-shot-1.png",
          },
          {
            id: "accounts-reached",
            title: "Accounts Reached",
            tag: "Result",
            metric: "127,345 (+134.9%)",
            summary:
              "Reach expansion for a client campaign — more of the right people, measured.",
            cover: "/content/ads/ad-shot-2.png",
          },
          {
            id: "followers-grown",
            title: "Follower Growth",
            tag: "Result",
            metric: "55.5K",
            summary:
              "Community growth for a single client through consistent content and paid amplification.",
            cover: "/content/testimonials/WhatsApp Image 2026-10-26 at 11.15.01 AM.jpeg",
          },
          {
            id: "proprise-impressions",
            title: "Proprise — Impressions Lift",
            tag: "Proprise",
            metric: "107,021 (+11.4%)",
            summary:
              "Impression growth paired with 96.4% reach from ads — proof creative and media work together.",
            cover: "/content/testimonials/WhatsApp Image 2026-10-26 at 11.15.02 AM.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    path: "Industries",
    icon: "grid",
    blurb: "20+ trusted brands across multiple industries.",
    folders: [
      {
        id: "verticals",
        label: "Sectors We Serve",
        color: "#1A307B",
        icon: "grid",
        projects: [
          {
            id: "beauty",
            title: "Beauty",
            tag: "Industry",
            metric: "Portfolio",
            summary:
              "Visual systems and social engines for beauty brands that need to look as good as they convert.",
            cover: "/content/posts/carousel-3.png",
          },
          {
            id: "hospitality",
            title: "Hospitality",
            tag: "Industry",
            metric: "Portfolio",
            summary:
              "Atmosphere-led content and performance media for stays, dining, and guest journeys.",
            cover: "/content/reels/2.png",
          },
          {
            id: "interiors-travel",
            title: "Interiors & Travel",
            tag: "Industry",
            metric: "Portfolio",
            summary:
              "Space and destination storytelling — stills, reels, and ads that sell the experience.",
            cover: "/content/posts/carousel-4.png",
          },
          {
            id: "auto-re",
            title: "Automotive & Real Estate",
            tag: "Industry",
            metric: "20+ brands",
            summary:
              "From showroom floors to property tours — campaigns built for high-consideration decisions.",
            cover: "/content/ads/pune-real-estate.png",
          },
        ],
      },
    ],
  },
];

export function getDomain(id) {
  return FINDER_DOMAINS.find((d) => d.id === id) || FINDER_DOMAINS[0];
}

export function getFolder(domainId, folderId) {
  const domain = getDomain(domainId);
  return domain.folders.find((f) => f.id === folderId) || null;
}
