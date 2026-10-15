import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import ProtectionLayers from "@/components/ProtectionLayers";
import SectionHeading from "@/components/SectionHeading";
import Steps from "@/components/Steps";
import { cta, home, labels, pages, safe, safeTerms, services } from "@/content/site";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.safe, "/landlord-safe");

export default function LandlordSafePage() {
  const included = services.find((s) => s.id === "landlord-safe")?.includes ?? [];
  const hasTerms = Boolean(safeTerms.monthsCovered || safeTerms.price);

  return (
    <>
      <PageIntro page={pages.safe} eyebrow={labels.whatItIs}>
        <div className="btn-row">
          <Link href={cta.primaryHref} className="btn btn-primary">
            {cta.primary}
            <Icon name="arrow" size={20} />
          </Link>
          <a href="#faq" className="btn btn-outline">
            {home.faqTitle}
          </a>
        </div>
      </PageIntro>

      <section className="section" aria-labelledby="what-title">
        <div className={`container ${styles.what}`}>
          <div className="prose" data-reveal>
            <h2 id="what-title">{labels.whatItIs}</h2>
            <p className="lead">{safe.whatItIs}</p>
            <div className={styles.promise}>
              <span className={styles.promiseIcon}>
                <Icon name="shieldCheck" size={32} />
              </span>
              <div>
                <p className={styles.promiseTitle}>{safe.promise}</p>
                <p className={styles.promiseText}>{safe.promiseText}</p>
              </div>
            </div>
          </div>

          <div className={styles.included} data-reveal>
            <h3 id="included-title">{labels.whatsIncluded}</h3>
            <ul className="check-list">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {hasTerms && (
              <dl className={styles.terms}>
                {safeTerms.monthsCovered && (
                  <>
                    <dt>{labels.monthsCovered}</dt>
                    <dd>{safeTerms.monthsCovered}</dd>
                  </>
                )}
                {safeTerms.price && (
                  <>
                    <dt>{labels.price}</dt>
                    <dd>{safeTerms.price}</dd>
                  </>
                )}
              </dl>
            )}
          </div>
        </div>
      </section>

      <ProtectionLayers showLinks={false} />

      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading id="process-title" title={labels.stopsPaying} />
          <Steps steps={safe.process} tone="alt" />
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="safe-faq-title">
        <div className="container">
          <SectionHeading id="safe-faq-title" eyebrow={home.faqEyebrow} title={home.faqTitle} />
          <Faq items={safe.faq} />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqJsonLd(safe.faq)} />
    </>
  );
}
