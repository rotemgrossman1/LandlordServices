import type { Metadata } from "next";
import { areas, site, summary, type FaqItem, type PageMeta } from "@/content/site";

export function buildMetadata(page: PageMeta, path: string): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "he_IL",
      siteName: site.nameHe,
      title: page.title,
      description: page.description,
      url: path,
      images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: `${site.nameHe} (${site.name})`,
    alternateName: site.name,
    description: summary,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: "IL",
    },
    ...(areas.cities.length > 0
      ? { areaServed: areas.cities.map((name) => ({ "@type": "City", name })) }
      : {}),
    ...(site.facebook ? { sameAs: [site.facebook] } : {}),
    ...(site.companyId ? { taxID: site.companyId } : {}),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
