import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionSticker from "@/components/SectionSticker";
import { FINDER_DOMAINS, getDomain, getFolder } from "@/data/finderWork";

const FOLDER_TINTS = ["#e8eefc", "#f7f0e4", "#eee8fb", "#e6f4ef", "#f8e9ef", "#e9f2f8"];

function Icon({ name, className = "h-4 w-4" }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "social":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16.5 16.5 21 21" />
        </svg>
      );
    case "ads":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M4 19V9l8-5 8 5v10" />
          <path d="M9 19v-6h6v6" />
        </svg>
      );
    case "brand":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M12 3 14.5 9.5 21 10.2 16 14.8 17.5 21 12 17.8 6.5 21 8 14.8 3 10.2 9.5 9.5Z" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M4 8h3l1.5-2h7L17 8h3v11H4Z" />
          <circle cx="12" cy="13.5" r="3.2" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
          <path d="M13 7l4 4" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );
    case "list":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <circle cx="9" cy="9" r="3" />
          <circle cx="16.5" cy="10" r="2.4" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5S13.7 16 14.5 19M14 14.6c1.5-.4 3.2 0 4.5 1.6.6.8 1 1.7 1.2 2.8" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <path d="M3 8.5A2.5 2.5 0 015.5 6H9l2 2h7.5A2.5 2.5 0 0121 10.5v7A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5v-9Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
          <rect x="5" y="7" width="14" height="11" rx="1.5" />
          <path d="M5 10h14" />
        </svg>
      );
  }
}

function FolderGlyph({ color, icon }) {
  return (
    <div className="finder-folder-glyph" style={{ "--folder-c": color }}>
      <div className="finder-folder-glyph__tab" />
      <div className="finder-folder-glyph__body">
        <Icon name={icon} className="h-5 w-5 text-[#FFF4E0]" />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="finder-card group">
      <div className="finder-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.cover} alt="" />
        <span className="finder-card__tag">{project.tag}</span>
      </div>
      <div className="finder-card__body">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-[0.95rem] font-bold leading-snug text-stelora-ink">
            {project.title}
          </h3>
          <span className="shrink-0 font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-stelora-navy">
            {project.metric}
          </span>
        </div>
        <p className="mt-2 font-body text-[0.8rem] leading-relaxed text-stelora-muted">
          {project.summary}
        </p>
      </div>
    </article>
  );
}

const PROJECTS_PER_ROW = 4;

export default function FinderDesk() {
  const [domainId, setDomainId] = useState(FINDER_DOMAINS[0].id);
  const [folderId, setFolderId] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [view, setView] = useState("grid");
  const [paneOverflows, setPaneOverflows] = useState(false);
  const scrollRef = useRef(null);

  const domain = useMemo(() => getDomain(domainId), [domainId]);
  const folder = useMemo(
    () => (folderId ? getFolder(domainId, folderId) : null),
    [domainId, folderId]
  );

  const visibleProjects = useMemo(() => {
    if (!folder) return [];
    if (showAllProjects) return folder.projects;
    return folder.projects.slice(0, PROJECTS_PER_ROW);
  }, [folder, showAllProjects]);

  const hasMoreProjects = Boolean(folder && folder.projects.length > PROJECTS_PER_ROW);

  const selectDomain = useCallback((id) => {
    setDomainId(id);
    setFolderId(null);
    setShowAllProjects(false);
  }, []);

  const openFolder = useCallback((id) => {
    setFolderId(id);
    setShowAllProjects(false);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      setPaneOverflows(el.scrollHeight > el.clientHeight + 2);
    };

    measure();
    if (scrollRef.current) scrollRef.current.scrollTop = 0;

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (el.firstElementChild) ro.observe(el.firstElementChild);
    return () => ro.disconnect();
  }, [domainId, folderId, showAllProjects, view]);

  return (
    <section
      id="work"
      className="finder-desk relative flex min-h-[100svh] items-stretch border-t border-stelora-line md:h-[100svh]"
      aria-labelledby="finder-heading"
    >
      <div className="finder-desk__glow" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-3 py-7 md:px-6 md:py-9 lg:px-8">
        <div className="mb-5 text-center md:mb-6">
          <SectionSticker center>Work desk</SectionSticker>
          <h2 id="finder-heading" className="finder-desk__heading stelora-heading stelora-heading--lg">
            Explore what <em>we build</em>
          </h2>
          <p className="stelora-lede stelora-lede--center mx-auto max-w-xl">
            Real Stelora services and results — open a domain, then a folder, to browse the work.
          </p>
        </div>

        <div className="finder-window flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1">
            <aside className="finder-sidebar relative z-[1] hidden w-[210px] shrink-0 flex-col sm:flex md:w-[230px]">
              <p className="px-4 pb-2 pt-5 font-display text-[0.58rem] font-bold uppercase tracking-[0.22em] text-stelora-muted">
                Domains
              </p>
              <nav className="relative z-[1] flex flex-1 flex-col gap-1 overflow-y-auto px-3 pb-5" aria-label="Domains">
                {FINDER_DOMAINS.map((d) => {
                  const active = d.id === domainId;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => selectDomain(d.id)}
                      className={`finder-nav-item ${active ? "is-active" : ""}`}
                    >
                      <Icon name={d.icon} className="h-4 w-4 shrink-0" />
                      <span>{d.label}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            <div className="finder-main flex min-h-0 min-w-0 flex-1 flex-col">
              <div className="flex gap-1.5 overflow-x-auto border-b border-stelora-line/50 px-3 py-2.5 sm:hidden">
                {FINDER_DOMAINS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => selectDomain(d.id)}
                    className={`shrink-0 rounded-full px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] ${
                      d.id === domainId
                        ? "bg-stelora-navy text-stelora-cream"
                        : "bg-white text-stelora-muted"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-stelora-line/50 px-4 py-4 md:px-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(26,48,123,0.08)] text-stelora-navy">
                      <Icon name={folder ? "folder" : domain.icon} className="h-4 w-4" />
                    </span>
                    <button
                      type="button"
                      className="finder-crumb"
                      onClick={() => setFolderId(null)}
                      disabled={!folder}
                    >
                      {folder ? folder.label : domain.label}
                    </button>
                    {folder ? (
                      <button
                        type="button"
                        onClick={() => {
                          setFolderId(null);
                          setShowAllProjects(false);
                        }}
                        className="ml-1 rounded-full border border-stelora-line bg-white px-2.5 py-1 font-display text-[0.58rem] font-bold uppercase tracking-[0.12em] text-stelora-muted"
                      >
                        Back
                      </button>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-lg font-body text-[0.82rem] leading-relaxed text-stelora-muted">
                    {folder
                      ? `${folder.projects.length} projects in this folder`
                      : domain.blurb}
                  </p>
                </div>

                {!folder ? (
                  <div className="flex items-center gap-3 self-center">
                    <p className="font-display text-[0.58rem] font-bold uppercase tracking-[0.18em] text-stelora-muted">
                      {domain.folders.length} folders
                    </p>
                    <div className="finder-view-toggle" role="group" aria-label="View mode">
                      <button
                        type="button"
                        className={`finder-view-btn${view === "grid" ? " is-active" : ""}`}
                        onClick={() => setView("grid")}
                        aria-pressed={view === "grid"}
                        aria-label="Grid view"
                      >
                        <Icon name="grid" className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        className={`finder-view-btn${view === "list" ? " is-active" : ""}`}
                        onClick={() => setView("list")}
                        aria-pressed={view === "list"}
                        aria-label="List view"
                      >
                        <Icon name="list" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              <div
                ref={scrollRef}
                className={`finder-scroll min-h-0 flex-1 px-4 py-5 md:px-6 md:py-6 ${
                  paneOverflows ? "finder-scroll--active" : "finder-scroll--pass"
                }`}
              >
                <AnimatePresence mode="wait">
                  {!folder ? (
                    <motion.div
                      key={`folders-${domain.id}-${view}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={
                        view === "list"
                          ? "finder-folders--list grid grid-cols-1 gap-3"
                          : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      }
                    >
                      {domain.folders.map((f, i) => (
                        <button
                          key={f.id}
                          type="button"
                          className="finder-folder"
                          style={{ "--folder-tint": FOLDER_TINTS[i % FOLDER_TINTS.length] }}
                          onClick={() => openFolder(f.id)}
                        >
                          <FolderGlyph color={f.color || "#1A307B"} icon={f.icon} />
                          <div className="finder-folder__meta">
                            <div>
                              <span className="block font-display text-[0.95rem] font-bold leading-tight text-stelora-ink">
                                {f.label}
                              </span>
                              <span className="mt-1 block font-body text-[0.75rem] text-stelora-muted">
                                {f.projects.length} projects
                              </span>
                            </div>
                            <span className="finder-folder__go" aria-hidden>
                              ↗
                            </span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`projects-${folder.id}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {visibleProjects.map((p) => (
                          <ProjectCard key={p.id} project={p} />
                        ))}
                      </div>
                      {hasMoreProjects ? (
                        <div className="finder-more mt-6 flex flex-col items-center gap-2">
                          <p className="font-display text-[0.58rem] font-bold uppercase tracking-[0.18em] text-stelora-muted">
                            {showAllProjects
                              ? `Showing all ${folder.projects.length}`
                              : `${folder.projects.length - PROJECTS_PER_ROW} more in this folder`}
                          </p>
                          <button
                            type="button"
                            className="btn-pill btn-pill-primary px-7 py-3 text-[0.68rem] shadow-[0_10px_24px_rgba(26,48,123,0.18)]"
                            onClick={() => setShowAllProjects((v) => !v)}
                          >
                            <span>{showAllProjects ? "Show less" : "View more"}</span>
                            <span aria-hidden>{showAllProjects ? "↑" : "↓"}</span>
                          </button>
                        </div>
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
