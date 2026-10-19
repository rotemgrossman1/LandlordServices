/** H2 + lead paragraph used at the top of most sections. */
export default function SectionHeading({
  id,
  title,
  lead,
  center = false,
}: {
  id: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
