import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionSticker from "@/components/SectionSticker";
import {
  PACKAGE_ADDONS,
  PACKAGE_COMPARE,
  PACKAGE_HERO,
  PACKAGE_PLANS,
  PACKAGE_QUIZ,
  PACKAGE_STEPS,
} from "@/data/packagesPage";

function PillarIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (type === "bolt") {
    return (
      <svg {...common}>
        <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg {...common}>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <rect x="6" y="9" width="12" height="5" rx="1" />
      <rect x="8" y="4" width="8" height="5" rx="1" />
    </svg>
  );
}

function AddonIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l5 5" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...common}>
          <path d="M3 11v2a2 2 0 002 2h1l4 4V5L6 9H5a2 2 0 00-2 2z" />
          <path d="M14 9.5c1.5.8 2.5 2 2.5 2.5s-1 1.7-2.5 2.5" />
        </svg>
      );
    case "clapper":
      return (
        <svg {...common}>
          <rect x="3" y="10" width="18" height="10" rx="1.5" />
          <path d="M3 13h18M7 10l3-5h4l3 5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 20V10M12 20V4M20 20v-7" />
        </svg>
      );
  }
}

function CellValue({ value }) {
  if (value === true) {
    return (
      <span className="pkg-check" aria-label="Included">
        ✓
      </span>
    );
  }
  if (value === false || value === "—") {
    return <span className="pkg-dash">—</span>;
  }
  return <span className="pkg-cell-text">{value}</span>;
}

function contactHref(planId, need) {
  const params = new URLSearchParams();
  if (planId) params.set("package", planId);
  if (need) params.set("need", need);
  const qs = params.toString();
  return qs ? `/contact?${qs}` : "/contact";
}

function scorePlan(answers) {
  const scores = { "forme-start": 0, signature: 0, "full-circle": 0 };
  PACKAGE_QUIZ.forEach((q) => {
    const chosen = q.options.find((o) => o.id === answers[q.id]);
    if (!chosen) return;
    Object.entries(chosen.weights).forEach(([planId, weight]) => {
      scores[planId] += weight;
    });
  });
  return Object.entries(scores)
    .map(([id, score]) => ({ id, score }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Full Packages experience — hero, plans, quiz suggester, add-ons, compare, process, CTA.
 */
export default function PackagesPageView() {
  const [addons, setAddons] = useState(() => new Set());
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultOpen, setResultOpen] = useState(false);

  const ranking = useMemo(() => scorePlan(answers), [answers]);
  const suggestedPlan = useMemo(() => {
    const top = ranking[0];
    if (!top) return PACKAGE_PLANS.find((p) => p.featured) || PACKAGE_PLANS[0];
    return PACKAGE_PLANS.find((p) => p.id === top.id) || PACKAGE_PLANS[0];
  }, [ranking]);

  const needSummary = useMemo(() => {
    return PACKAGE_QUIZ.map((q) => {
      const opt = q.options.find((o) => o.id === answers[q.id]);
      return opt?.label;
    })
      .filter(Boolean)
      .join("; ");
  }, [answers]);

  const toggleAddon = (id) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const currentQuestion = PACKAGE_QUIZ[step];
  const progress = ((step + (answers[currentQuestion?.id] ? 0.35 : 0)) / PACKAGE_QUIZ.length) * 100;

  const pickOption = (optionId) => {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);
    if (step < PACKAGE_QUIZ.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 180);
      return;
    }
    setResultOpen(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setStep(0);
    setResultOpen(false);
  };

  useEffect(() => {
    if (!resultOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setResultOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [resultOpen]);

  return (
    <div className="packages-page">
      <section className="pkg-hero" aria-labelledby="pkg-hero-heading">
        <div className="pkg-hero__inner">
          <div className="pkg-hero__copy">
            <SectionSticker>{PACKAGE_HERO.kicker}</SectionSticker>
            <h1 id="pkg-hero-heading" className="pkg-hero__title stelora-heading stelora-heading--xl">
              {PACKAGE_HERO.titleBefore} {PACKAGE_HERO.titleAccent}
            </h1>
            <p className="pkg-hero__body stelora-lede">{PACKAGE_HERO.body}</p>
            <ul className="pkg-hero__pillars">
              {PACKAGE_HERO.pillars.map((p) => (
                <li key={p.id}>
                  <span className="pkg-hero__pillar-icon">
                    <PillarIcon type={p.icon} />
                  </span>
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pkg-hero__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/content/packages/packages-folder.png"
              alt="Stelora Media navy portfolio binder with SMM, Web Development, Performance Marketing, and Branding tabs"
              className="pkg-hero__folder"
            />
          </div>
        </div>
      </section>

      <section className="pkg-plans" aria-labelledby="pkg-plans-heading">
        <div className="pkg-section-head stelora-section-head stelora-section-head--center">
          <SectionSticker center>Packages</SectionSticker>
          <h2 id="pkg-plans-heading" className="stelora-heading stelora-heading--lg">
            Choose a growth plan.
          </h2>
          <p className="stelora-lede stelora-lede--center">
            Three clear monthly packages — pick what fits, or let us suggest one below.
          </p>
        </div>

        <div className="pkg-plans__track">
          {PACKAGE_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={["pkg-card", plan.featured ? "pkg-card--featured" : ""].filter(Boolean).join(" ")}
            >
              {plan.badge ? <p className="pkg-card__badge">{plan.badge}</p> : null}
              <h3 className="pkg-card__name">{plan.name}</h3>
              <p className="pkg-card__price">
                <strong>{plan.priceLabel}</strong>
                <span>{plan.period}</span>
              </p>
              <ul className="pkg-card__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span aria-hidden>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={contactHref(plan.id)}
                className="pkg-card__cta"
                aria-label={`Enquire about ${plan.name}`}
              >
                →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Plan suggester quiz */}
      <section className="pkg-quiz" aria-labelledby="pkg-quiz-heading">
        <div className="pkg-quiz__inner">
          <div className="pkg-section-head pkg-section-head--left">
            <SectionSticker>Plan Suggester</SectionSticker>
            <h2 id="pkg-quiz-heading" className="stelora-heading stelora-heading--lg">
              Not sure which package fits?
            </h2>
            <p className="stelora-lede">
              Answer a few quick questions — we’ll estimate the best plan for your brand.
            </p>
          </div>

          <div className="pkg-quiz__card">
            <div className="pkg-quiz__progress" aria-hidden>
              <span style={{ width: `${Math.min(100, progress)}%` }} />
            </div>
            <p className="pkg-quiz__step">
              Question {step + 1} of {PACKAGE_QUIZ.length}
            </p>
            <h3 className="pkg-quiz__prompt">{currentQuestion.prompt}</h3>
            <div className="pkg-quiz__options" role="group" aria-label={currentQuestion.prompt}>
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`pkg-quiz__option${answers[currentQuestion.id] === opt.id ? " is-active" : ""}`}
                  onClick={() => pickOption(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="pkg-quiz__nav">
              <button
                type="button"
                className="pkg-quiz__back"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </button>
              <button type="button" className="pkg-quiz__reset" onClick={resetQuiz}>
                Start over
              </button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {resultOpen ? (
          <motion.div
            className="pkg-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pkg-modal-title"
          >
            <button type="button" className="pkg-modal__backdrop" aria-label="Close" onClick={() => setResultOpen(false)} />
            <motion.div
              className="pkg-modal__card"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.28 }}
            >
              <p className="pkg-modal__eyebrow">Best estimated match</p>
              <h3 id="pkg-modal-title">{suggestedPlan.name}</h3>
              <p className="pkg-modal__price">
                {suggestedPlan.priceLabel}
                <span>{suggestedPlan.period}</span>
              </p>
              <p className="pkg-modal__why">
                Based on your answers, this plan balances scope, channels, and budget most closely.
              </p>
              <ul className="pkg-modal__features">
                {suggestedPlan.features.slice(0, 4).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="pkg-modal__actions">
                <Link
                  href={contactHref(suggestedPlan.id, needSummary)}
                  className="pkg-modal__cta"
                >
                  Continue to Contact
                  <span aria-hidden>↗</span>
                </Link>
                <button type="button" className="pkg-modal__ghost" onClick={() => setResultOpen(false)}>
                  Keep browsing
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section className="pkg-addons" aria-labelledby="pkg-addons-heading">
        <div className="pkg-addons__inner">
          <div className="pkg-section-head pkg-section-head--left">
            <SectionSticker>Add-Ons</SectionSticker>
            <h2 id="pkg-addons-heading" className="stelora-heading stelora-heading--lg">
              Extend your plan.
            </h2>
            <p className="stelora-lede">Focused extras you can layer on when you need more firepower.</p>
          </div>
          <div className="pkg-addons__grid">
            {PACKAGE_ADDONS.map((item) => {
              const on = addons.has(item.id);
              return (
                <article key={item.id} className={`pkg-addon${on ? " is-on" : ""}`}>
                  <span className="pkg-addon__icon">
                    <AddonIcon type={item.icon} />
                  </span>
                  <div className="pkg-addon__meta">
                    <h3>
                      {item.name} <span>({item.tag})</span>
                    </h3>
                    <p>{item.priceLabel}</p>
                  </div>
                  <button
                    type="button"
                    className="pkg-addon__plus"
                    onClick={() => toggleAddon(item.id)}
                    aria-pressed={on}
                    aria-label={on ? `Remove ${item.name}` : `Add ${item.name}`}
                  >
                    {on ? "✓" : "+"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pkg-compare" aria-labelledby="pkg-compare-heading">
        <div className="pkg-compare__inner">
          <div className="pkg-compare__head">
            <div className="pkg-section-head pkg-section-head--left">
              <SectionSticker>Compare</SectionSticker>
              <h2 id="pkg-compare-heading" className="stelora-heading stelora-heading--lg">
                What’s in each plan?
              </h2>
              <p className="stelora-lede">Side-by-side detail so you can pick with clarity.</p>
            </div>
            <a href="#pkg-plans-heading" className="pkg-compare__btn">
              Compare Plans
            </a>
          </div>

          <div className="pkg-table-wrap">
            <table className="pkg-table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {PACKAGE_COMPARE.columns.map((col) => (
                    <th
                      key={col.id}
                      scope="col"
                      className={col.highlight ? "is-highlight" : undefined}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PACKAGE_COMPARE.rows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    {PACKAGE_COMPARE.columns.map((col) => (
                      <td key={col.id} className={col.highlight ? "is-highlight" : undefined}>
                        <CellValue value={row.values[col.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pkg-how" aria-labelledby="pkg-how-heading">
        <div className="pkg-how__inner">
          <div className="pkg-section-head stelora-section-head stelora-section-head--center">
            <SectionSticker center>Process</SectionSticker>
            <h2 id="pkg-how-heading" className="stelora-heading stelora-heading--lg">
              How it works.
            </h2>
          </div>

          <ol className="pkg-how__steps">
            {PACKAGE_STEPS.map((s, i) => (
              <li key={s.n} className="pkg-how__step">
                {i > 0 ? <span className="pkg-how__dash" aria-hidden /> : null}
                <article>
                  <span className="pkg-how__icon">
                    <AddonIcon type={s.icon} />
                  </span>
                  <p className="pkg-how__n">{s.n}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pkg-cta" aria-labelledby="pkg-cta-heading">
        <div className="pkg-cta__frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/content/packages/packages-cta-desk.jpg"
            alt=""
            className="pkg-cta__bg"
            aria-hidden
          />
          <div className="pkg-cta__panel">
            <div className="pkg-cta__left">
              <SectionSticker onDark>Ready?</SectionSticker>
              <h2 id="pkg-cta-heading" className="stelora-heading stelora-heading--lg" style={{ color: "#fff8ef" }}>
                Let’s build your growth plan.
              </h2>
            </div>
            <div className="pkg-cta__right">
              <p>
                Book a free strategy call and we’ll lock the package that fits your goals, channels,
                and monthly budget.
              </p>
              <Link href="/contact" className="pkg-cta__btn">
                <span>Book a Strategy Call</span>
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
