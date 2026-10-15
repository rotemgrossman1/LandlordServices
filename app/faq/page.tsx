import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { faq, pages } from "@/content/site";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(pages.faq, "/faq");

export default function FaqPage() {
  return (
    <>
      <PageIntro page={pages.faq} />
      <section className="section">
        <div className="container">
          <Faq items={faq} />
        </div>
      </section>
      <CtaBand />
      <JsonLd data={faqJsonLd(faq)} />
    </>
  );
}
