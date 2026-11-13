import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SectionSticker from "@/components/SectionSticker";
import { CONTACT_INTERESTS, PACKAGE_CONTACT_MAP, SITE } from "@/data/siteContent";

const POLAROID = "/content/about/who-card-team.jpg";

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5S17 16 18.5 19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 8 7.5 5.5L19.5 8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M5 19V10M10 19V6M15 19v-7M20 19V8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4 3v-3H7.5A2.5 2.5 0 0 1 5 13.5v-7Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M8 4.5h2.2l1.1 3.2-1.4 1.1a11 11 0 0 0 5.3 5.3l1.1-1.4 3.2 1.1V18a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 4.5 6 1.5 1.5 0 0 1 6 4.5H8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M13 2 5 13h6l-1 9 9-12h-6l0-8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="9" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.5" cy="9" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.8 18c1.2-2.4 3.1-3.6 5.2-3.6s4 1.2 5.2 3.6M13.8 18c.5-1.4 1.5-2.5 3-2.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 3c3 2 5 5 6 9l-3 1-2 4-2-1-1-2-4-2 1-3c4-1 7-3 9-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 14 5 19l5-3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconCal() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="5.5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="3.5" y="7" width="12" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15.5 10.5 4.5-2.5v8l-4.5-2.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactDesk() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    if (!router.isReady || prefilled) return;
    const pkg = typeof router.query.package === "string" ? router.query.package : "";
    const needRaw = typeof router.query.need === "string" ? router.query.need : "";
    const interest = PACKAGE_CONTACT_MAP[pkg] || "";
    if (!interest && !needRaw) return;

    let need = needRaw;
    try {
      need = decodeURIComponent(needRaw);
    } catch {
      need = needRaw;
    }

    setForm((prev) => ({
      ...prev,
      interest: interest || prev.interest,
      message:
        need
          ? `Plan suggester notes:\n${need}`
          : interest
            ? `I'd like to enquire about the ${interest}.`
            : prev.message,
    }));
    setPrefilled(true);
  }, [router.isReady, router.query, prefilled]);

  const onChange = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Stelora inquiry — ${form.name || "New lead"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company / Brand: ${form.company || "—"}`,
        `Looking for: ${form.interest || "—"}`,
        "",
        form.message || "",
      ].join("\n"),
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact-desk" aria-labelledby="contact-desk-heading">
      <div className="contact-desk__grid-bg" aria-hidden />

      <div className="contact-desk__inner">
        <div className="contact-desk__layout">
          {/* Left copy */}
          <div className="contact-desk__copy">
            <SectionSticker>Contact Us</SectionSticker>

            <h1 id="contact-desk-heading" className="contact-desk__title">
              Let’s Build Something Great{" "}
              <em className="contact-desk__accent">Together.</em>
            </h1>

            <p className="contact-desk__lede">
              Have a project, idea or collaboration in mind? We’d love to hear from you.
            </p>

            <ul className="contact-desk__details">
              <li>
                <span className="contact-desk__detail-icon contact-desk__detail-icon--sky">
                  <IconPhone />
                </span>
                <div>
                  <p className="contact-desk__detail-label">Reach Us</p>
                  <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {SITE.instagram}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-desk__detail-icon contact-desk__detail-icon--mint">
                  <IconMail />
                </span>
                <div>
                  <p className="contact-desk__detail-label">Email Us</p>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-desk__detail-icon contact-desk__detail-icon--lilac">
                  <IconPin />
                </span>
                <div>
                  <p className="contact-desk__detail-label">Our Studio</p>
                  <p>{SITE.studio}</p>
                </div>
              </li>
            </ul>

            <div className="contact-desk__reach">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-desk__reach-card"
              >
                <span className="contact-desk__reach-icon contact-desk__reach-icon--wa">
                  <IconChat />
                </span>
                <span>
                  <strong>Instagram</strong>
                  <em>
                    Chat Now <span aria-hidden>↗</span>
                  </em>
                </span>
              </a>
              <a href={SITE.bookCallUrl} className="contact-desk__reach-card">
                <span className="contact-desk__reach-icon contact-desk__reach-icon--cal">
                  <IconCal />
                </span>
                <span>
                  <strong>Book a Call</strong>
                  <em>
                    Schedule <span aria-hidden>↗</span>
                  </em>
                </span>
              </a>
              <a href={SITE.meetUrl} className="contact-desk__reach-card">
                <span className="contact-desk__reach-icon contact-desk__reach-icon--meet">
                  <IconVideo />
                </span>
                <span>
                  <strong>Google Meet</strong>
                  <em>
                    Meet Online <span aria-hidden>↗</span>
                  </em>
                </span>
              </a>
            </div>
          </div>

          {/* Letter stage */}
          <div className="contact-desk__stage">
            <figure className="contact-desk__polaroid">
              <span className="contact-desk__tape" aria-hidden />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={POLAROID} alt="Our studio in Pune" />
              <figcaption>Our Studio, Pune ♡</figcaption>
            </figure>

            <span className="contact-desk__doodle contact-desk__doodle--spark" aria-hidden />
            <span className="contact-desk__doodle contact-desk__doodle--arrow" aria-hidden />

            <div className="contact-desk__compose">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/content/contact/contact-leaves.png"
                alt=""
                className="contact-desk__leaves"
                aria-hidden
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/content/contact/contact-mug.png"
                alt=""
                className="contact-desk__mug"
                aria-hidden
              />

              <form className="contact-desk__letter" onSubmit={onSubmit}>
                <div className="contact-desk__letter-grain" aria-hidden />
                <div className="contact-desk__postmark" aria-hidden>
                  <span>STELORA</span>
                  <span>MEDIA</span>
                </div>

                <h2 className="contact-desk__letter-title">
                  Send Us a Message <span aria-hidden>👋</span>
                </h2>
                <p className="contact-desk__letter-sub">
                  Tell us a little about your brand — we’ll get back within a day.
                </p>

                <label className="contact-desk__field">
                  <span className="contact-desk__field-icon">
                    <IconUser />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={onChange("name")}
                  />
                </label>

                <label className="contact-desk__field">
                  <span className="contact-desk__field-icon">
                    <IconMail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={onChange("email")}
                  />
                </label>

                <label className="contact-desk__field">
                  <span className="contact-desk__field-icon">
                    <IconChart />
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Brand (Optional)"
                    value={form.company}
                    onChange={onChange("company")}
                  />
                </label>

                <label className="contact-desk__field">
                  <span className="contact-desk__field-icon">
                    <IconGrid />
                  </span>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={onChange("interest")}
                    required
                  >
                    <option value="" disabled>
                      I&apos;m looking for...
                    </option>
                    {CONTACT_INTERESTS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="contact-desk__field contact-desk__field--area">
                  <span className="contact-desk__field-icon">
                    <IconChat />
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    value={form.message}
                    onChange={onChange("message")}
                  />
                </label>

                <button type="submit" className="contact-desk__submit">
                  <span>{sent ? "Opening mail…" : "Send Message"}</span>
                  <span aria-hidden>↗</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-desk__strip">
          <div className="contact-desk__strip-item">
            <span className="contact-desk__strip-icon">
              <IconBolt />
            </span>
            <div>
              <strong>Quick Response</strong>
              <p>We reply within 24 hours.</p>
            </div>
          </div>
          <div className="contact-desk__strip-item">
            <span className="contact-desk__strip-icon">
              <IconPeople />
            </span>
            <div>
              <strong>Project Discussion</strong>
              <p>Let’s understand your goals.</p>
            </div>
          </div>
          <div className="contact-desk__strip-item">
            <span className="contact-desk__strip-icon">
              <IconRocket />
            </span>
            <div>
              <strong>Get Started</strong>
              <p>From idea to execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
