import type { Metadata } from "next";
import { areas, labels, nav, partner, services, site, summary, type FaqItem, type PageMeta } from "@/content/site";

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
    image: `${site.url}/images/og-default.png`,
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
    ...(site.facebook || site.googleProfile
      ? { sameAs: [site.facebook, site.googleProfile].filter(Boolean) }
      : {}),
    ...(site.companyId ? { taxID: site.companyId } : {}),
    ...(site.legalName ? { legalName: site.legalName } : {}),
    // The managing partner, so AI answers can name who stands behind the legal backing
    ...(partner.name
      ? {
          employee: {
            "@type": "Person",
            name: partner.name,
            jobTitle: partner.role,
            ...(partner.bio ? { description: partner.bio } : {}),
          },
        }
      : {}),
    ...(services.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "שירותי ניהול נכסים",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: serviceJsonLd(s.title, s.short, `/services#${s.id}`, false),
            })),
          },
        }
      : {}),
    // Not set until the facts exist: openingHoursSpecification (site.hours), priceRange (pricing), geo.
  };
}

/** A Service from this company. `standalone` adds the @context for its own <script>. */
export function serviceJsonLd(name: string, description: string, path: string, standalone = true) {
  return {
    ...(standalone ? { "@context": "https://schema.org" } : {}),
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: "ניהול נכסים",
    provider: { "@id": `${site.url}/#organization` },
    ...(areas.cities.length > 0
      ? { areaServed: areas.cities.map((city) => ({ "@type": "City", name: city })) }
      : {}),
  };
}

/** Home › page. The name defaults to the page's label in the main navigation. */
export function breadcrumbJsonLd(path: string, name = nav.find((n) => n.href === path)?.label ?? "") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.homeLink, item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export function faqJsonLd(items: FaqItem[], dateModified = "") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(dateModified ? { dateModified } : {}),
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
