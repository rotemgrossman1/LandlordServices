import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import NumbersStrip from "@/components/NumbersStrip";
import SafeHighlight from "@/components/SafeHighlight";
import ServiceCards from "@/components/ServiceCards";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import { faq, home, homeFaqIds, pages, steps } from "@/content/site";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(pages.home, "/");

export default function HomePage() {
  const homeFaq = faq.filter((q) => homeFaqIds.includes(q.id));

  return (
    <>
      <Hero />
      <NumbersStrip />

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title">{home.servicesTitle}</h2>
          <ServiceCards />
        </div>
      </section>

      <SafeHighlight />

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <h2 id="steps-title">{home.stepsTitle}</h2>
          <Steps steps={steps} />
        </div>
      </section>

      <Testimonials />

      <section className="section section-alt" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title">{home.faqTitle}</h2>
          <Faq items={homeFaq} />
          <p className="more-link">
            <Link href="/faq">{home.faqMore}</Link>
          </p>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqJsonLd(homeFaq)} />
    </>
  );
}
