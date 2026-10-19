import AccentText from "./AccentText";

/** Eyebrow + H2 (with an optional accent phrase) + lead paragraph at the top of a section. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  lead,
  center = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>
        <AccentText text={title} accent={accent} />
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
