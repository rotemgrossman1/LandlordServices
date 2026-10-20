import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { faq, faqUpdated, home, labels, pages } from "@/content/site";
import { formatDateHe } from "@/lib/format";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.faq, "/faq");

export default function FaqPage() {
  return (
    <>
      <PageIntro page={pages.faq} eyebrow={home.faqEyebrow} />
      <section className="section">
        <div className="container">
          <Faq items={faq} />
          {faqUpdated && (
            <p className={styles.updated}>
              {labels.lastUpdated} <time dateTime={faqUpdated}>{formatDateHe(faqUpdated)}</time>
            </p>
          )}
        </div>
      </section>
      <CtaBand />
      <JsonLd data={faqJsonLd(faq, faqUpdated)} />
      <JsonLd data={breadcrumbJsonLd("/faq")} />
    </>
  );
}
