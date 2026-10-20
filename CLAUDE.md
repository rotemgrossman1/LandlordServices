# Rules for editing this site

- **All text and facts live in `content/site.ts`.** Components only render it. Don't hardcode Hebrew copy, phone numbers or other facts in components.
- **Never invent facts.** No made-up numbers, reviews, testimonials, prices, ratings or claims ("המובילה בישראל"). If a fact is unknown, leave it as `""` or `[]`.
- **Empty value = hidden section.** Every component that uses an optional value must render nothing when it's empty. ("מאז 2013" in the numbers strip is the one item that always shows.)
- **Hebrew, RTL.** `<html lang="he" dir="rtl">`. Use logical CSS properties (`margin-inline-start`, `padding-block`, `inset-inline-end`…), never left/right. Copy uses the warm "אתם" form.
- **Keep it simple.** Plain CSS (`app/globals.css` variables plus CSS Modules), no Tailwind, no UI libraries, no new dependencies without a good reason.
- **Keep pages static** so all text is in the HTML for search engines and AI crawlers. Only `/api/contact` is dynamic.
- **SEO:** one H1 per page, unique title and description via `buildMetadata` in `lib/seo.ts`, FAQPage JSON-LD on pages with FAQs, no `noindex`. Add new pages to `app/sitemap.ts` and `public/llms.txt`.
- **Accessibility:** labels on every input, visible focus, keyboard-usable controls, AA contrast.
- Run `npm run build` after changes and fix all errors.

## City pages (`cityPages` in `content/site.ts`)

We are a property-management company, not a rental agency, so city copy talks about managed properties, not renting.

- `galleryTitle` is always "נכסים מנוהלים ב<עיר>", never "דירות להשכרה" or "נכסים להשכרה".
- `meta.title` is "ניהול נכסים ב<עיר> – ניהול דירות מושכרות | לנדלורד", never "להשכרה".
- `includesTitle` is always "מה אתם מקבלים ב<עיר>", never variations like "מה אנחנו לוקחים מכם" or "מה אנחנו עושים בשבילכם".
