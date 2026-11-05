# Landlord (לנדלורד) website

A small static marketing site for Landlord, a property-management company. Built with Next.js (App Router), React and TypeScript, using plain CSS (CSS variables plus CSS Modules). The site is in Hebrew (RTL) at the root, with an English version (LTR) under `/en`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are static)
npm run start      # serve the production build
```

## Editing content

**All text and business details are in [`content/site.ts`](content/site.ts).** You never need to touch components to change copy.

- Phone, email, address, Facebook, WhatsApp, business hours, company number: `site`
- Home page section order: `homeSections`. Remove a key to hide a section, or reorder keys to move sections.
- Numbers strip: `stats` (an item with an empty `value` is hidden; "מאז 2013" always shows)
- Home sections: `personas` (who it's for), `ownerView` (the illustrative phone with updates), `protection` (the legal layers), `comparison` (the table), `areas` (cities)
- Testimonials, Google rating, team, pricing, Landlord Safe terms: `testimonials`, `googleRating`, `team`, `pricing`, `safeTerms`
- Services (one entry per service, and `id` is the anchor on `/services`): `services`
- Page titles, meta descriptions, H1s and opening paragraphs: `pages`
- FAQ: `faq` (the `/faq` page), `homeFaqIds` (which questions show on the home page), `safe.faq` (the Landlord Safe page)
- Privacy and accessibility drafts: `legal`

**An empty value (`""` or `[]`) hides the section that uses it.** Never put in placeholder numbers or made-up reviews.

## English version

- **Copy:** [`content/site.en.ts`](content/site.en.ts) has the same exports and keys as `content/site.ts`. The build fails if the English file is missing anything. Shared facts (URL, email, company number, map links, photos) come from the Hebrew file. **Every change to `site.ts` must be mirrored in `site.en.ts`.**
- **URLs:** Hebrew pages stay at `/services`, `/areas/tel-aviv`…; English pages are `/en/services`, `/en/areas/tel-aviv`…. Pages live in `app/[lang]/`, and `proxy.ts` serves Hebrew URLs from `/he/...` internally.
- **Default language** (`proxy.ts`), for a visitor who hasn't picked one: anyone in Israel gets Hebrew, even with an English browser. Outside Israel, a browser set to Hebrew gets Hebrew, and everyone else is sent to `/en`. A flag choice is saved in the `lang` cookie and always wins. Search engines and bots are never redirected. The country comes from Vercel's `x-vercel-ip-country` header; without it (local dev) everyone gets Hebrew. To test the English redirect locally, run `curl -H "x-vercel-ip-country: US" localhost:3000/`.
- **Switcher:** `components/LangSwitch.tsx` (🇮🇱 עברית / 🇺🇸 English) sits in the top-left corner of the header in both languages.
- **New pages:** add the path to `pageRoutes` in `lib/routes.ts`. It feeds the sitemap, and `proxy.ts` sends any URL not on the list to the 404 page.

`/llms.txt` (a summary for AI assistants) is built from `llms` in `content/site.ts` by `app/llms.txt/route.ts`, and lists the English pages too.

## Images and logo

- **Photos:** set the paths in `images` in `content/site.ts` (e.g. `hero: "/images/hero.jpg"`, `office: "/images/office.jpg"`) after adding the files to `public/images/`. While `images.hero` is empty, the home page shows a drawn illustration (`components/HeroArt.tsx`).
- **Team and partner photos:** set `photo` on each entry in `team`, and `partner.photo`. While empty, initials are shown.
- **Logo:** `components/Logo.tsx` draws the official logo inline from the vector paths in `components/logoPaths.ts` (taken from logo.pdf). The skyline uses `--color-logo-gold`; the wordmark follows the text color, so it works on light and dark backgrounds.
- **Social preview:** `public/images/og-default.png` (1200×630).

## Contact

There is no contact form. Visitors reach the office by WhatsApp, phone or email (`site.whatsapp`, `site.phone`, `site.email`), so the site needs no environment variables.

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, choose **Add New → Project**, then import the repo. The framework is detected automatically.
3. Deploy, then add `www.landlords.co.il` (primary) and `landlords.co.il` (redirects to www) under Settings → Domains and update DNS as Vercel instructs.
4. `site.url` in `content/site.ts` must match the primary domain (currently `https://www.landlords.co.il`).

Old Wix URLs are 301-redirected to the new pages in `next.config.ts`.
