import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Steps from "@/components/Steps";
import { home, labels, pages, safe, safeTerms, services } from "@/content/site";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(pages.safe, "/landlord-safe");

export default function LandlordSafePage() {
  const included = services.find((s) => s.id === "landlord-safe")?.includes ?? [];
  const hasTerms = Boolean(safeTerms.monthsCovered || safeTerms.price);

  return (
    <>
      <PageIntro page={pages.safe} />

      <section className="section" aria-labelledby="what-title">
        <div className="container prose">
          <h2 id="what-title">{labels.whatItIs}</h2>
          <p>{safe.whatItIs}</p>

          <h2 id="included-title">{labels.whatsIncluded}</h2>
          <ul className="check-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {hasTerms && (
            <ul>
              {safeTerms.monthsCovered && (
                <li>
                  {labels.monthsCovered}: {safeTerms.monthsCovered}
                </li>
              )}
              {safeTerms.price && (
                <li>
                  {labels.price}: {safeTerms.price}
                </li>
              )}
            </ul>
          )}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="process-title">
        <div className="container">
          <h2 id="process-title">{labels.stopsPaying}</h2>
          <Steps steps={safe.process} />
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="safe-faq-title">
        <div className="container">
          <h2 id="safe-faq-title">{home.faqTitle}</h2>
          <Faq items={safe.faq} />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqJsonLd(safe.faq)} />
    </>
  );
}
