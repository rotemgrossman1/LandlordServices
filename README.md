# Landlord (לנדלורד) website

A small static marketing site for Landlord, a property-management company. Built with Next.js (App Router), React and TypeScript, using plain CSS (CSS variables plus CSS Modules). The site is in Hebrew and RTL.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are static, except /api/contact)
npm run start      # serve the production build
```

## Editing content

**All text and business details are in [`content/site.ts`](content/site.ts).** You never need to touch components to change copy.

- Phone, email, address, Facebook, WhatsApp, business hours, company number: `site`
- Numbers strip: `stats` (an item with an empty `value` is hidden; "מאז 2013" always shows)
- Testimonials, Google rating, team, pricing, Landlord Safe terms: `testimonials`, `googleRating`, `team`, `pricing`, `safeTerms`
- Services (one entry per service, and `id` is the anchor on `/services`): `services`
- Page titles, meta descriptions, H1s and opening paragraphs: `pages`
- FAQ: `faq` (the `/faq` page), `homeFaqIds` (which questions show on the home page), `safe.faq` (the Landlord Safe page)
- Privacy and accessibility drafts: `legal`

**An empty value (`""` or `[]`) hides the section that uses it.** Never put in placeholder numbers or made-up reviews.

`public/llms.txt` (a summary for AI assistants) is a separate plain-text file. Update it if contact details or services change.

## Replacing images

Placeholder images are in `public/images/`:

| File | Used in |
|---|---|
| `hero-placeholder.svg` | Home page hero |
| `office-placeholder.svg` | About page, office section |
| `og-default.png` (1200×630) | Social sharing preview |

To swap one, either replace the file and keep the same name, or add a new file (e.g. `hero.jpg`) and update the path in the component (`components/Hero.tsx`, `app/about/page.tsx`). For the partner photo, add e.g. `public/images/partner-doron-marom.jpg` and set `partner.photo` in `content/site.ts`.

## Environment variables

Copy `.env.example` to `.env.local` (locally) or set these in Vercel:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | yes | API key from [resend.com](https://resend.com) |
| `LEAD_EMAIL_TO` | yes | Where leads are sent (comma-separated for several) |
| `RESEND_FROM` | recommended | Sender on a domain verified in Resend, e.g. `Landlord <site@landlords.co.il>`. Without it, Resend's test sender is used, and that sender only delivers to the Resend account owner. |

If sending fails, the form shows the office phone number instead.

## Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, choose **Add New → Project**, then import the repo. The framework is detected automatically.
3. Add the environment variables above (Settings → Environment Variables).
4. Deploy, then add the domain `landlords.co.il` under Settings → Domains and update DNS as Vercel instructs.
5. If the final domain is different (e.g. with `www.`), change `site.url` in `content/site.ts` and the links in `public/llms.txt`.

Old Wix URLs are 301-redirected to the new pages in `next.config.ts`.
