/**
 * About-style Caveat label used sitewide for section consistency.
 */
export default function SectionSticker({
  children,
  className = "",
  center = false,
  onDark = false,
  small = false,
  as: Tag = "div",
}) {
  const classes = [
    "stelora-sticker",
    center ? "stelora-sticker--center" : "",
    onDark ? "stelora-sticker--on-dark" : "",
    small ? "stelora-sticker--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes}>
      <span className="stelora-sticker__star" aria-hidden>
        ✦
      </span>
      {children}
    </Tag>
  );
}
