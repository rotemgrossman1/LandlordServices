# Rules for editing this site

- **All text and facts live in `content/site.ts`** (Hebrew) **and `content/site.en.ts`** (English). Components only render it, through `await getContent()` from `@/content`, which picks the page's language. Don't hardcode Hebrew copy, phone numbers or other facts in components.
- **Never invent facts.** No made-up numbers, reviews, testimonials, prices, ratings or claims ("המובילה בישראל"). If a fact is unknown, leave it as `""` or `[]`.
- **Empty value = hidden section.** Every component that uses an optional value must render nothing when it's empty. (The founding year, "2013 / שנת הקמת החברה", in the numbers strip is the one item that always shows.)
- **Hebrew, RTL.** `<html lang="he" dir="rtl">`. Use logical CSS properties (`margin-inline-start`, `padding-block`, `inset-inline-end`…), never left/right. Copy uses the warm "אתם" form. One exception: the legal-protection lead (`protection.lead` in `content/site.ts`, shown on the home page and on Landlord Safe) speaks to a single homeowner ("דמיין", "בשבילך", "בשמך") by the owner's choice; keep it singular.
- **Keep it simple.** Plain CSS (`app/globals.css` variables plus CSS Modules), no Tailwind, no UI libraries, no new dependencies without a good reason.
- **Keep pages static** so all text is in the HTML for search engines and AI crawlers. There is no contact form; visitors reach us by WhatsApp, phone or email.
- **SEO:** one H1 per page, unique title and description via `buildMetadata` in `lib/seo.ts`, FAQPage JSON-LD on pages with FAQs, no `noindex` (except the 404 page). Add new pages to `pageRoutes` in `lib/routes.ts` (sitemap and routing) and to `llms` in `content/site.ts`.
- **Accessibility:** labels on every input, visible focus, keyboard-usable controls, AA contrast.
- Run `npm run build` after changes and fix all errors.

## City pages (`cityPages` in `content/site.ts`)

We are a property-management company, not a rental agency, so city copy talks about managed properties, not renting.

- The main service is called "ניהול דירות להשכרה" everywhere (service card, services page, FAQ, llms.txt). Use that exact name for the service; the rules below still apply to the other city-page fields.

- `galleryTitle` is always "נכסים מנוהלים ב<עיר>", never "דירות להשכרה" or "נכסים להשכרה".
- `meta.title` is "ניהול נכסים ב<עיר> – ניהול דירות מושכרות | לנדלורד", never "להשכרה".
- `includesTitle` is always "מה אתם מקבלים ב<עיר>", never variations like "מה אנחנו לוקחים מכם" or "מה אנחנו עושים בשבילכם".

## English version (`content/site.en.ts`, served under `/en`)

- **Mirror every change.** Any edit to `content/site.ts` (new copy, new keys, changed facts, removed items) must be made in `content/site.en.ts` in the same commit. Same keys, ids and slugs; same facts; empty stays empty.
- Translate faithfully, in clear American English that speaks to "you". It is written for owners living abroad, foreign investors and English-speaking olim. Never add claims the Hebrew doesn't make.
- Fixed names: the company is "Landlord Services" (never bare "Landlord"), the main service is "Rental Apartment Management", and "Landlord Safe" stays as it is. The phone is shown as +972-54-211-0096.
- City pages: `galleryTitle` is "Managed properties in <City>", `meta.title` is "Property Management in <City> – Managing Rented Apartments | Landlord Services", and `includesTitle` is "What you get in <City>".
- Internal links in components go through `link()` from `getContent()`, so they get the `/en` prefix on English pages. Never hardcode `href="/..."`.
- Layout must work in both directions: use logical CSS properties. Anything that points "forward" (arrows) is mirrored for `html[dir="ltr"]`.

