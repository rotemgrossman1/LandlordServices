import type { PageMeta } from "@/content/site";
import { getContent } from "@/content";
import { formatDate } from "@/lib/format";
import PageIntro from "./PageIntro";

type Section = { title: string; text: string };

export default async function LegalPage({
  page,
  sections,
  updated,
}: {
  page: PageMeta;
  sections: Section[];
  updated?: string;
}) {
  const { labels, lang, legal } = await getContent();
  return (
    <>
      <PageIntro page={page} />
      <section className="section">
        <div className="container prose">
          <p>
            <strong>{legal.draftNote}</strong>
          </p>
          {legal.hebrewGoverns && (
            <p>
              <em>{legal.hebrewGoverns}</em>
            </p>
          )}
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
              {labels.lastUpdated} <time dateTime={updated}>{formatDate(updated, lang)}</time>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
