import AccentText from "./AccentText";

/**
 * Eyebrow + H2 (with an optional accent phrase) + lead paragraph at the top of a section.
 * The home page's pattern adds `large` (big tight headline), `side` (a short paragraph or link
 * on the opposite side, aligned to the bottom) and `rule` (a thin line under the whole header).
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  accentBlock = false,
  lead,
  center = false,
  large = false,
  rule = false,
  side,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  accentBlock?: boolean;
  lead?: string;
  center?: boolean;
  large?: boolean;
  rule?: boolean;
  side?: React.ReactNode;
  className?: string;
}) {
  const classes = [
    "section-head",
    center && "center",
    large && "section-head-large",
    rule && "section-head-rule",
    side && "section-head-split",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const main = (
    <>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>
        <AccentText text={title} accent={accent} block={accentBlock} />
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </>
  );
  return (
    <div className={classes}>
      {side ? (
        <>
          <div>{main}</div>
          <div className="section-head-side">{side}</div>
        </>
      ) : (
        main
      )}
    </div>
  );
}
