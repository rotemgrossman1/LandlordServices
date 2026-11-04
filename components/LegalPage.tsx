import type { PageMeta } from "@/content/site";
import { labels, legal } from "@/content/site";
import { formatDateHe } from "@/lib/format";
import PageIntro from "./PageIntro";

type Section = { title: string; text: string };

export default function LegalPage({
  page,
  sections,
  updated,
}: {
  page: PageMeta;
  sections: Section[];
  updated?: string;
}) {
  return (
    <>
      <PageIntro page={page} />
      <section className="section">
        <div className="container prose">
          <p>
            <strong>{legal.draftNote}</strong>
          </p>
          {sections
            .filter((s) => s.text)
            .map((s) => (
              <div key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            ))}
          {updated && (
            <p>
              {labels.lastUpdated} <time dateTime={updated}>{formatDateHe(updated)}</time>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
