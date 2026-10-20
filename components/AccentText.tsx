/**
 * Renders `text` with the `accent` part (a substring of it) in the accent colour,
 * standing in for the design's italic phrases. `block` puts the accent on its own line.
 */
export default function AccentText({
  text,
  accent,
  block = false,
}: {
  text: string;
  accent?: string;
  block?: boolean;
}) {
  const i = accent ? text.lastIndexOf(accent) : -1;
  if (!accent || i < 0) return <>{text}</>;
  const before = text.slice(0, i).trimEnd();
  const after = text.slice(i + accent.length);
  return (
    <>
      {before}
      {/* The space keeps the words apart in extracted text (snippets, screen readers) even with the <br>. */}
      {before && " "}
      {block && <br />}
      <span className="accent">{accent}</span>
      {after}
    </>
  );
}
