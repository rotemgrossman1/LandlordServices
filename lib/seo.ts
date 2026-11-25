import type { Metadata } from "next";
import { getContent } from "@/content";
import { site as heSite, type Article, type FaqItem, type PageMeta } from "@/content/site";
import { langMeta, localePath } from "./i18n";

/**
 * Title, description, canonical and Open Graph for a page in the current language.
 * `path` is the page's path without the language prefix ("/services"). Both languages are
 * listed as alternates (hreflang); x-default is Hebrew, the main version of the site.
 */
export async function buildMetadata(
  page: PageMeta,
  path: string,
  // Articles: Open Graph type "article" and the article's own image
  extra: { article?: boolean; image?: string } = {},
): Promise<Metadata> {
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
        "x-default": localePath("he", path),
      },
    },
    openGraph: {
      type: extra.article ? "article" : "website",
      locale: langMeta[lang].ogLocale,
      alternateLocale: lang === "he" ? langMeta.en.ogLocale : langMeta.he.ogLocale,
      siteName: site.nameHe,
      title: page.title,
      description: page.description,
      url,
      images: [extra.image ? { url: extra.image } : { url: "/images/og-default.png", width: 1200, height: 630 }],
    },
  };
}

export async function organizationJsonLd() {
  const { areas, labels, link, lang, partner, services, site, summary } = await getContent();
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    // One name per language ("לנדלורד סרויסס" / "Landlord Services"); the other language's name as the alternate
    name: site.nameHe,
    alternateName: lang === "he" ? site.name : heSite.nameHe,
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

/** An Article page. `path` is without the language prefix ("/articles/<slug>"). */
export async function articleJsonLd(article: Article, path: string) {
  const { lang, link, site } = await getContent();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.meta.h1,
    description: article.meta.description,
    inLanguage: lang,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    url: `${site.url}${link(path)}`,
    mainEntityOfPage: `${site.url}${link(path)}`,
    ...(article.image.src ? { image: `${site.url}${article.image.src}` } : {}),
    author: article.author ? { "@type": "Person", name: article.author } : { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    ...(article.sources.length > 0 ? { citation: article.sources.map((s) => s.url) } : {}),
  };
}
