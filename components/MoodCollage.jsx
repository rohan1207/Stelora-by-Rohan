import { useState } from "react";

/**
 * Hero mood board — pinned polaroids (no paper backing).
 * Hover / click lifts a card forward.
 */
export default function MoodCollage() {
  const [active, setActive] = useState(null);

  const lift = (id) => ({
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive((cur) => (cur === id ? null : cur)),
    onFocus: () => setActive(id),
    onBlur: () => setActive((cur) => (cur === id ? null : cur)),
    onClick: () => setActive((cur) => (cur === id ? null : id)),
  });

  const isUp = (id) => active === id;

  return (
    <div className="mood-board" aria-label="Stelora creative mood board">
      <div className="mood-board__leaf" aria-hidden />

      {/* Left — social / reel post */}
      <button
        type="button"
        className={`mood-board__card mood-board__card--ig${isUp("ig") ? " is-forward" : ""}`}
        aria-label="Social reel preview"
        aria-pressed={isUp("ig")}
        {...lift("ig")}
      >
        <span className="mood-board__tape" aria-hidden />
        <div className="mood-board__ig-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/content/reels/2.png" alt="" draggable={false} />
          <div className="mood-board__play" aria-hidden>
            <span>
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
                <path d="M5.2 3.4v9.2L13 8 5.2 3.4Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="mood-board__ig-stats" aria-hidden>
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 13.2S2.8 9.8 2.8 6.4A2.7 2.7 0 0 1 8 4.9a2.7 2.7 0 0 1 5.2 1.5c0 3.4-5.2 6.8-5.2 6.8Z" />
            </svg>
            2.3K
          </span>
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 4.2h10v6.4H7.2L4.4 13V10.6H3V4.2Z" />
            </svg>
            87
          </span>
          <span className="spacer inline-flex items-center">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 3.2h8v9.2L8 10.2 4 12.4V3.2Z" />
            </svg>
          </span>
        </div>
      </button>

      {/* Center — Brand Campaigns */}
      <button
        type="button"
        className={`mood-board__card mood-board__card--brand${isUp("brand") ? " is-forward" : ""}`}
        aria-label="Brand campaigns"
        aria-pressed={isUp("brand")}
        {...lift("brand")}
      >
        <span className="mood-board__pin" aria-hidden />
        <p className="mood-board__brand-copy">Brand Campaigns</p>
        <div className="mood-board__brand-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/content/creatives/honest-conversations.png" alt="" draggable={false} />
        </div>
      </button>

      {/* Right — Content Creation */}
      <button
        type="button"
        className={`mood-board__card mood-board__card--create${isUp("create") ? " is-forward" : ""}`}
        aria-label="Content creation"
        aria-pressed={isUp("create")}
        {...lift("create")}
      >
        <div className="mood-board__create-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/content/creatives/art-design.jpg" alt="" draggable={false} />
          <p className="mood-board__create-label">Content Creation</p>
        </div>
      </button>

      <span className="mood-board__heart" aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z" />
        </svg>
      </span>
    </div>
  );
}
