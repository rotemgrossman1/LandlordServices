import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { getContent } from "@/content";
import { formatDate } from "@/lib/format";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata() {
  const { pages } = await getContent();
  return buildMetadata(pages.faq, "/faq");
}

export default async function FaqPage() {
  const { faq, faqUpdated, home, labels, lang, pages } = await getContent();
  return (
    <>
      <PageIntro page={pages.faq} eyebrow={home.faqEyebrow} />
      <section className="section">
        <div className="container">
          <Faq items={faq} />
          {faqUpdated && (
            <p className={styles.updated}>
              {labels.lastUpdated} <time dateTime={faqUpdated}>{formatDate(faqUpdated, lang)}</time>
            </p>
          )}
        </div>
      </section>
      <CtaBand />
      <JsonLd data={faqJsonLd(faq, faqUpdated)} />
      <JsonLd data={await breadcrumbJsonLd("/faq")} />
    </>
  );
}
