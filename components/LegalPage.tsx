import type { PageMeta } from "@/content/site";
import { legal } from "@/content/site";
import PageIntro from "./PageIntro";

type Section = { title: string; text: string };

export default function LegalPage({ page, sections }: { page: PageMeta; sections: Section[] }) {
  return (
    <>
      <PageIntro page={page} />
      <section className="section">
        <div className="container prose">
          <p>
            <strong>{legal.draftNote}</strong>
          </p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
