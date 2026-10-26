import { areas, cityPages, labels, llms, nav, site } from "@/content/site";

// Built at build time from content/site.ts, so contact details always match the site.
export const dynamic = "force-static";

// "054-2110096" → "+972-54-2110096"
const intlPhone = `+972-${site.phone.replace(/^0/, "")}`;

// The "managed properties" fact of a city page, e.g. { value: "כ-50", label: "נכסים בניהול בתל אביב" }
const cityFact = (city: string) => cityPages.find((c) => c.city === city)?.facts[0];

function body() {
  const contactPage = `${site.url}/contact`;
  const cities = areas.cities
    .map((city) => {
      const fact = cityFact(city);
      return fact ? `${city} (${fact.value} נכסים בניהול)` : city;
    })
    .join(", ");

  const pageLinks = [
    `- [${labels.homeLink}](${site.url}/): ${llms.homeNote}`,
    ...nav
      .filter((n) => n.href === "/services" || n.href === "/landlord-safe")
      .map((n) => `- [${n.label}](${site.url}${n.href}): ${llms.pageNotes[n.href]}`),
    ...cityPages.map((c) => {
      const fact = c.facts[0];
      const note = fact ? `${fact.value} ${fact.label}, ${llms.cityNote}` : llms.cityNote;
      return `- [${c.meta.h1}](${site.url}/areas/${c.slug}): ${note}`;
    }),
    ...nav
      .filter((n) => n.href !== "/services" && n.href !== "/landlord-safe" && llms.pageNotes[n.href])
      .map((n) => `- [${n.label}](${site.url}${n.href}): ${llms.pageNotes[n.href]}`),
  ];

  return [
    `# ${site.name} (${site.nameHe})`,
    "",
    ...llms.intro.map((line) => `> ${line}`),
    "",
    `## ${llms.englishTitle}`,
    "",
    llms.english,
    "",
    ...llms.englishPoints.map((p) => `- ${p}`),
    `- ${llms.contactEn}: ${intlPhone} (${llms.phoneNoteEn}) · ${site.email} · ${contactPage}`,
    "",
    `## ${llms.hebrewTitle}`,
    "",
    ...llms.hebrew.flatMap((p) => [p, ""]),
    `${llms.citiesLabel}: ${cities}.`,
    "",
    `${llms.contactHe}: ${site.phone} (${llms.phoneNoteHe}) · ${site.email} · ${site.address.full}`,
    "",
    `## ${llms.pagesTitle}`,
    "",
    ...pageLinks,
    "",
  ].join("\n");
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
