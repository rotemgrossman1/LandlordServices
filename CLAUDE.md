# Rules for editing this site

- **All text and facts live in `content/site.ts`** (Hebrew) **and `content/site.en.ts`** (English); article text lives in `content/articles.ts` and `content/articles.en.ts`, re-exported from them. Components only render it, through `await getContent()` from `@/content`, which picks the page's language. Don't hardcode Hebrew copy, phone numbers or other facts in components.
- **Business name:** "לנדלורד סרויסס" in Hebrew copy and structured data, "Landlord Services" in English (owner's decision, Nov 2026). The product is always "Landlord Safe".
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
- `meta.title` is "ניהול נכסים ב<עיר> – ניהול דירות מושכרות | לנדלורד סרויסס", never "להשכרה". Exception: a city whose main search keyword is different (Jerusalem: "ניהול דירות בירושלים"; Bat Yam: "חברה לניהול נכסים בבת ים") leads its title and H1 with that keyword. Keep titles at about 70 characters or fewer.
- `includesTitle` is always "מה אתם מקבלים ב<עיר>", never variations like "מה אנחנו לוקחים מכם" or "מה אנחנו עושים בשבילכם".

## Articles (`content/articles.ts` and `content/articles.en.ts`)

- Written by the weekly content pipeline (`/weekly-content`, see `content-pipeline/README.md`) and published only after the owner approves the article.
- Newest first. Same slug, order, facts and sources in both files.
- `draft: true` keeps an article out of the build (routes, sitemap, llms.txt, lists and every link to it). Preview drafts with `SHOW_DRAFTS=1 npm run dev`. Drafts may hold `TODO(owner)` / `TODO(verify)` markers; remove every one before removing `draft`.
- Every fact in an article comes from one of its `sources`. Never add a fact without a source.
- `services` holds ids from `services` in `content/site.ts`; they show as hashtags linking to `/services#<id>`.
- Links inside paragraphs are `[text](/path)` (internal, gets the `/en` prefix) or `[text](https://…)`.
- Article images live in `public/images/articles/` and are illustrations: their `alt` starts with "איור להמחשה:" / "Illustration:". Never present an AI image as a photo of a property we manage.
- `/articles` and the header's "מאמרים" dropdown are hidden while there are no articles.
- Nothing is ever posted to Facebook or LinkedIn automatically: the pipeline hands the owner the final posts once the article is live.

## English version (`content/site.en.ts`, served under `/en`)

- **Mirror every change.** Any edit to `content/site.ts` (new copy, new keys, changed facts, removed items) must be made in `content/site.en.ts` in the same commit. Same keys, ids and slugs; same facts; empty stays empty.
- Translate faithfully, in clear American English that speaks to "you". It is written for owners living abroad, foreign investors and English-speaking olim. Never add claims the Hebrew doesn't make.
- Fixed names: the company is "Landlord Services" (never bare "Landlord"), the main service is "Rental Apartment Management", and "Landlord Safe" stays as it is. The phone is shown as +972-54-211-0096.
- City pages: `galleryTitle` is "Managed properties in <City>", `meta.title` is "Property Management in <City> – Managing Rented Apartments | Landlord Services", and `includesTitle` is "What you get in <City>". Jerusalem and Bat Yam follow their Hebrew keyword ("Apartment Management in Jerusalem | Landlord Services", "Property Management Company in Bat Yam | Landlord Services").
- Internal links in components go through `link()` from `getContent()`, so they get the `/en` prefix on English pages. Never hardcode `href="/..."`.
- Layout must work in both directions: use logical CSS properties. Anything that points "forward" (arrows) is mirrored for `html[dir="ltr"]`.

