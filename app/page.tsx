import Link from "next/link";
import { Fragment } from "react";
import AreasStrip from "@/components/AreasStrip";
import Comparison from "@/components/Comparison";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import OwnerView from "@/components/OwnerView";
import Personas from "@/components/Personas";
import ProtectionLayers from "@/components/ProtectionLayers";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import { faq, home, homeFaqIds, homeSections, pages, steps, type HomeSection } from "@/content/site";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(pages.home, "/");

const homeFaq = faq.filter((q) => homeFaqIds.includes(q.id));

// Each key in `homeSections` (content/site.ts) maps to one block here.
const sections: Record<HomeSection, () => React.ReactNode> = {
  personas: () => <Personas />,
  ownerView: () => <OwnerView />,
  protection: () => <ProtectionLayers />,
  services: () => (
    <section className="section section-alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          title={home.servicesTitle}
          lead={home.servicesLead}
        />
        <ServiceCards />
        <p className="more-link">
          <Link href="/services">
            {home.servicesMore} <Icon name="arrow" size={16} />
          </Link>
        </p>
      </div>
    </section>
  ),
  comparison: () => <Comparison />,
  steps: () => (
    <section className="section section-alt" aria-labelledby="steps-title">
      <div className="container">
        <SectionHeading id="steps-title" title={home.stepsTitle} />
        <Steps steps={steps} />
      </div>
    </section>
  ),
  areas: () => <AreasStrip />,
  testimonials: () => <Testimonials />,
  faq: () =>
    homeFaq.length > 0 && (
      <section className="section section-alt" aria-labelledby="faq-title">
        <div className="container">
          <SectionHeading id="faq-title" title={home.faqTitle} />
          <Faq items={homeFaq} />
          <p className="more-link">
            <Link href="/faq">
              {home.faqMore} <Icon name="arrow" size={16} />
            </Link>
          </p>
        </div>
      </section>
    ),
  cta: () => <CtaBand />,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {homeSections.map((key) => (
        <Fragment key={key}>{sections[key]()}</Fragment>
      ))}
      {homeSections.includes("faq") && homeFaq.length > 0 && <JsonLd data={faqJsonLd(homeFaq)} />}
    </>
  );
}
