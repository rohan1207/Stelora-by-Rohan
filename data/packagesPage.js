/** Packages page content — matches Stelora pitch mock. */

export const PACKAGE_HERO = {
  kicker: "Our Packages",
  titleBefore: "Growth Plans Built for",
  titleAccent: "Your Brand.",
  body:
    "Flexible, result-driven packages for brands at every stage — from first presence to full-funnel growth.",
  pillars: [
    { id: "strategy", label: "Strategy Led", icon: "bolt" },
    { id: "performance", label: "Performance Focused", icon: "chart" },
    { id: "scale", label: "Scalable & Flexible", icon: "layers" },
  ],
  folderTabs: ["SMM", "Web Development", "Performance Marketing", "Branding & Design"],
};

export const PACKAGE_QUIZ = [
  {
    id: "goal",
    prompt: "What’s your primary growth goal?",
    options: [
      { id: "presence", label: "Build brand presence", weights: { "forme-start": 3, signature: 2, "full-circle": 1 } },
      { id: "leads", label: "Generate qualified leads", weights: { "forme-start": 1, signature: 3, "full-circle": 3 } },
      { id: "sales", label: "Increase sales / conversions", weights: { "forme-start": 0, signature: 3, "full-circle": 3 } },
      { id: "full", label: "Full-funnel growth", weights: { "forme-start": 0, signature: 2, "full-circle": 4 } },
    ],
  },
  {
    id: "budget",
    prompt: "What’s your comfortable monthly budget?",
    options: [
      { id: "b45", label: "Around ₹45K", weights: { "forme-start": 4, signature: 1, "full-circle": 0 } },
      { id: "b55", label: "Around ₹55K", weights: { "forme-start": 1, signature: 4, "full-circle": 1 } },
      { id: "b65", label: "₹65K or more", weights: { "forme-start": 0, signature: 2, "full-circle": 4 } },
      { id: "flex", label: "Flexible — recommend best fit", weights: { "forme-start": 1, signature: 3, "full-circle": 2 } },
    ],
  },
  {
    id: "channels",
    prompt: "Which channels matter most right now?",
    options: [
      { id: "social", label: "Social content & community", weights: { "forme-start": 4, signature: 2, "full-circle": 1 } },
      { id: "ads", label: "Paid ads + lead gen", weights: { "forme-start": 0, signature: 4, "full-circle": 3 } },
      { id: "web", label: "Website + funnel support", weights: { "forme-start": 0, signature: 1, "full-circle": 4 } },
      { id: "mix", label: "A mix of everything", weights: { "forme-start": 1, signature: 3, "full-circle": 4 } },
    ],
  },
  {
    id: "production",
    prompt: "How much content production do you need?",
    options: [
      { id: "light", label: "Light — posts & strategy", weights: { "forme-start": 4, signature: 2, "full-circle": 0 } },
      { id: "reels", label: "Reels + creative cadence", weights: { "forme-start": 1, signature: 4, "full-circle": 2 } },
      { id: "shoots", label: "Shoots, campaigns & polish", weights: { "forme-start": 0, signature: 1, "full-circle": 4 } },
      { id: "unsure", label: "Not sure yet", weights: { "forme-start": 2, signature: 3, "full-circle": 2 } },
    ],
  },
  {
    id: "timeline",
    prompt: "When do you want to get started?",
    options: [
      { id: "asap", label: "As soon as possible", weights: { "forme-start": 2, signature: 3, "full-circle": 3 } },
      { id: "month", label: "In the next 1–2 months", weights: { "forme-start": 2, signature: 3, "full-circle": 2 } },
      { id: "explore", label: "Still exploring options", weights: { "forme-start": 3, signature: 2, "full-circle": 1 } },
      { id: "scale", label: "Ready to scale aggressively", weights: { "forme-start": 0, signature: 2, "full-circle": 4 } },
    ],
  },
];

export const PACKAGE_PLANS = [
  {
    id: "forme-start",
    name: "Forme Start",
    price: 45000,
    priceLabel: "₹45,000",
    period: "/ month",
    featured: false,
    goals: ["presence"],
    budgetMin: 10000,
    budgetMax: 50000,
    features: [
      "Content Strategy",
      "12–15 Social Media Posts",
      "Profile Optimisation",
      "Monthly Performance Report",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: 55000,
    priceLabel: "₹55,000",
    period: "/ month",
    featured: true,
    badge: "Most Popular",
    goals: ["presence", "leads", "sales"],
    budgetMin: 45000,
    budgetMax: 70000,
    features: [
      "Everything in Forme Start",
      "Reels (4–6 / month)",
      "Paid Ad Management",
      "Lead Gen Setup",
      "Bi-Weekly Review",
    ],
  },
  {
    id: "full-circle",
    name: "Full Circle",
    price: 65000,
    priceLabel: "₹65,000",
    period: "/ month",
    featured: false,
    goals: ["leads", "sales", "full"],
    budgetMin: 55000,
    budgetMax: 100000,
    features: [
      "Everything in Signature",
      "Professional Shoots",
      "Campaigns & Funnel Setup",
      "Website Support",
      "Growth Strategy",
      "Priority Support",
    ],
  },
];

export const PACKAGE_ADDONS = [
  {
    id: "seo",
    name: "Visibility Engine",
    tag: "SEO",
    priceLabel: "₹35,000 / month",
    icon: "search",
  },
  {
    id: "ads",
    name: "Sales Driver",
    tag: "Paid Ads",
    priceLabel: "₹25,000 / month",
    icon: "megaphone",
  },
  {
    id: "ugc",
    name: "Creator Kit",
    tag: "UGC / Reels",
    priceLabel: "₹12,000 / month",
    icon: "clapper",
  },
  {
    id: "web",
    name: "Website Build",
    tag: "One-time",
    priceLabel: "Custom Quote",
    icon: "globe",
  },
];

export const PACKAGE_COMPARE = {
  columns: [
    { id: "forme-start", label: "Forme Start" },
    { id: "signature", label: "Signature", highlight: true },
    { id: "full-circle", label: "Full Circle" },
  ],
  rows: [
    { feature: "Content Strategy", values: { "forme-start": true, signature: true, "full-circle": true } },
    {
      feature: "Social Media Posts",
      values: {
        "forme-start": "12–15",
        signature: "15–20",
        "full-circle": "20–25",
      },
    },
    {
      feature: "Reels",
      values: { "forme-start": "—", signature: "4–6", "full-circle": "6–8" },
    },
    {
      feature: "Paid Ad Management",
      values: { "forme-start": false, signature: true, "full-circle": true },
    },
    {
      feature: "Lead Gen Setup",
      values: { "forme-start": false, signature: true, "full-circle": true },
    },
    {
      feature: "Professional Shoots",
      values: { "forme-start": false, signature: false, "full-circle": true },
    },
    {
      feature: "Website Support",
      values: { "forme-start": false, signature: false, "full-circle": true },
    },
    {
      feature: "Reporting",
      values: {
        "forme-start": "Monthly",
        signature: "Bi-weekly",
        "full-circle": "Weekly",
      },
    },
  ],
};

export const PACKAGE_STEPS = [
  {
    n: "01",
    title: "Understand Your Goals",
    body: "We map your brand stage, audience, and growth targets.",
    icon: "target",
  },
  {
    n: "02",
    title: "Recommend the Right Plan",
    body: "A package matched to budget, channel mix, and pace.",
    icon: "layers",
  },
  {
    n: "03",
    title: "Onboard & Execute",
    body: "Content, ads, and production kick off with clear owners.",
    icon: "clapper",
  },
  {
    n: "04",
    title: "Measure & Grow",
    body: "We review, optimise, and scale what is working.",
    icon: "chart",
  },
];
