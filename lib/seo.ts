import type { Metadata } from "next";
import { getContent } from "@/content";
import { site as heSite, type FaqItem, type PageMeta } from "@/content/site";
import { langMeta, localePath } from "./i18n";

/**
 * Title, description, canonical and Open Graph for a page in the current language.
 * `path` is the page's path without the language prefix ("/services"). Both languages are
 * listed as alternates (hreflang); x-default is English, the version for everyone outside Israel.
 */
export async function buildMetadata(page: PageMeta, path: string): Promise<Metadata> {
  const { lang, site } = await getContent();
  const url = localePath(lang, path);
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        he: localePath("he", path),
        en: localePath("en", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      locale: langMeta[lang].ogLocale,
      alternateLocale: lang === "he" ? langMeta.en.ogLocale : langMeta.he.ogLocale,
      siteName: site.nameHe,
      title: page.title,
      description: page.description,
      url,
      images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
  };
}

export async function organizationJsonLd() {
  const { areas, labels, link, lang, partner, services, site, summary } = await getContent();
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    // The Hebrew and English names in both languages, so either is recognised
    name: lang === "he" ? `${heSite.nameHe} ${site.name}` : site.name,
    alternateName: [site.name, heSite.nameHe, heSite.shortNameHe],
    description: summary,
    url: `${site.url}${link("/")}`,
    inLanguage: lang,
    image: `${site.url}/images/og-default.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
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
            name: labels.serviceCatalog,
            itemListElement: await Promise.all(
              services.map(async (s) => ({
                "@type": "Offer",
                itemOffered: await serviceJsonLd(s.title, s.short, `/services#${s.id}`, false),
              })),
            ),
          },
        }
      : {}),
    // Not set until the facts exist: openingHoursSpecification (site.hours), priceRange (pricing), geo.
  };
}

/** A Service from this company. `path` is without the language prefix; `standalone` adds the @context for its own <script>. */
export async function serviceJsonLd(name: string, description: string, path: string, standalone = true) {
  const { areas, labels, link, site } = await getContent();
  return {
    ...(standalone ? { "@context": "https://schema.org" } : {}),
    "@type": "Service",
    name,
    description,
    url: `${site.url}${link(path)}`,
    serviceType: labels.serviceType,
    provider: { "@id": `${site.url}/#organization` },
    ...(areas.cities.length > 0
      ? { areaServed: areas.cities.map((city) => ({ "@type": "City", name: city })) }
      : {}),
  };
}

/** Home › page. The name defaults to the page's label in the main navigation. */
export async function breadcrumbJsonLd(path: string, name?: string) {
  const { labels, link, nav, site } = await getContent();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.homeLink, item: `${site.url}${link("/")}` },
      {
        "@type": "ListItem",
        position: 2,
        name: name ?? nav.find((n) => n.href === path)?.label ?? "",
        item: `${site.url}${link(path)}`,
      },
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
