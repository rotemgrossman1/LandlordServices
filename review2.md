# Site review, round 2: what's left

Date: 2026-10-20. I checked each item in the original review plan and in `REVIEW.md` against `main` (commit `154cebe`, after the city pages merged). `npm run build` passes: 19 static pages, plus `/api/contact`, which is dynamic.

Items already marked done in `REVIEW.md` aren't repeated here, unless the code shows they aren't really finished.

Priority: **P0** = before going live · **P1** = big impact · **P2** = worth doing · **P3** = polish.
Who: 🛠 = can do in code · 📋 = needs a fact or a decision from you.

---

## P0: before the site goes live on the domain

| # | What | Where | Fix |
|---|---|---|---|
| 1 | The 5 sample reviews ("דוגמה 1…5", marked `TEMP SAMPLE`) still show under "ביקורות מ-Google". They were kept on purpose for the demo. Going live with them would mean fake reviews. | `content/site.ts:116-122` | 📋 Replace them with real Google reviews, copied word for word, or set `testimonials = []` and the section hides itself. |
| 2 | The contact form has never been tested end to end. The repo has only `.env.example`. Without `RESEND_FROM` on a verified landlords.co.il domain, leads go from `onboarding@resend.dev` and get lost. | hosting env | 📋 Set `RESEND_API_KEY`, `LEAD_EMAIL_TO` and `RESEND_FROM`, then send one real test lead. |
| 3 | The legal pages still show "טיוטה – לאישור עורך דין" to visitors. | `content/site.ts:1459`, `components/LegalPage.tsx` | 📋 Get legal sign-off, then set `draftNote` to `""`. |
| 4 | The accessibility statement has no accessibility coordinator (name and contact) and no date of the last check. IS 5568 and the accessibility regulations require both. | `legal.accessibility`, `content/site.ts:1482-1499` | 📋 Name the coordinator and give the check date. 🛠 Then add a section for them. |

## P1: big impact

### Facts that are still missing
The site promises "שכר דירה מובטח" in many places but never says what the terms are. AI answers favor specific numbers.

| What | Where | Fix |
|---|---|---|
| `safeTerms.monthsCovered` and `safeTerms.price` are empty. | `content/site.ts:137-139` | 📋 The coverage period and the main conditions. |
| `pricing` is `[]`. The `price` FAQ answer has no number. Price is the question people ask AI most. | `content/site.ts:135`, FAQ `price` (`:1143`) | 📋 At least how pricing works, e.g. "X%–Y% משכר הדירה החודשי". |
| `hours`, `companyId` (ח.פ.) and `legalName` are empty. A company that guarantees rent should show its ח.פ. These also feed `openingHoursSpecification` and `legalName` in the JSON-LD. | `content/site.ts:73, 90-91` | 📋 |
| `googleProfile` is still `""`, so `googleRating` is empty, `sameAs` has only Facebook, and "Google Maps" falls back to an address search. | `content/site.ts:68, 125` | 📋 The profile link, once the Google Business Profile exists. |

### Empty FAQ answers (still there)
These answers say nothing. Google can show them as FAQ snippets, AI tools can quote them, and they look evasive.

| FAQ | Today | Fix |
|---|---|---|
| `sale` (`:1150`) | "נשמח לפרט בשיחה." is the whole answer. | 📋 Answer yes or no, or 🛠 delete the question. |
| `renovation` (`:1126`) | "ספרו לנו… נשמח לפרט בשיחה". | 📋 Say what you actually do (coordinate contractors? only advise?), or delete it. |
| `safe-price` (`:1215`) | "המחיר מותאם לכל נכס. נשמח לפרט בשיחה." | 📋 Comes with `safeTerms.price`. |
| `price` (`:1146`) | "המחיר נגזר משכר הדירה" with no range. | 📋 Comes with `pricing`. |

### The city pages repeat each other
All 6 city pages share the same structure, which is fine. But a lot of the text is the same sentence with only the city name changed. That's the "thin duplicate" pattern Google discounts.

- The `*-stops-paying` FAQ answer is nearly word for word the same on all 6 pages ("עם Landlord Safe … בהליך משפטי" + `rentRecord`) (`:301, 401, 501, 601, 701, 801`).
- The `includes` lists say almost the same 6 bullets on each page, and the Landlord Safe bullet is identical on all of them (`:275, 375, 475, 575, 675, 775`).
- 4 of the 6 pages have an "I live abroad / far away" FAQ with the same answer.

🛠 Keep **one** shared-content FAQ per city, and swap the others for something local. 📋 Local facts from you make the difference, for example: typical apartment types, typical rents, a short real case from that city, how quickly repairs get handled there.

### City pages: missing SEO wiring
| What | Where | Fix |
|---|---|---|
| No `BreadcrumbList` JSON-LD and no visible breadcrumb. `REVIEW.md` deferred this until after the merge, and the merge is done. | `app/areas/[city]/page.tsx` | 🛠 Add `breadcrumbJsonLd`. There's no `/areas` hub page (`/areas` returns 404), so use Home › ניהול נכסים ב<עיר>, or build the hub first (see P2). |
| No `Service` JSON-LD with `areaServed` for that one city. | same | 🛠 Add `serviceJsonLd` scoped to the city. |
| City pages don't link to each other or to `/landlord-safe`, apart from the "all services" link and the footer. | same | 🛠 Add an "ערים נוספות" row and link the Landlord Safe bullet to `/landlord-safe`. |

### Main search terms still missing
| Search term | Today | Fix |
|---|---|---|
| ניהול דירות / חברת ניהול דירות | The home title is "חברת ניהול נכסים לבעלי דירות מושכרות", and the H1 doesn't contain the term either. | 🛠 For example, title "לנדלורד – חברת ניהול נכסים ודירות מושכרות". Keep it under ~60 characters. |
| דייר לא משלם / פינוי דייר | Bullet points only. `/landlord-safe` has no H2 with these words. | 🛠 Add an H2 like "דייר שלא משלם? מה קורה אצלנו" on `/landlord-safe`. |
| ניהול נכסים לתושבי חוץ / ניהול נכסים מסחריים | Only anchors on `/services`. | 🛠 Their own pages (P2). |

## P2: worth doing

| What | Where | Fix |
|---|---|---|
| The home page still has the dark "areas" section, about 3,700px tall on phones. `REVIEW.md` planned to remove it once the city pages existed. They do now, and the footer links all 6. | `homeSections`, `content/site.ts:837-845` | 🛠 Remove `"areas"`, or replace it with a slim row of city links. That also leaves one fewer dark section. |
| There's no `/areas` hub page. The cities have no shared parent page that could rank for "ניהול נכסים בגוש דן". | `app/areas/` | 🛠 A short hub: the area, the cities that have pages, and the other cities as plain text. |
| The `area` FAQ lists the cities but leaves out Jerusalem, even though it opens with "בגוש דן ובירושלים". | `content/site.ts:1110` | 🛠 Add ירושלים to the list. |
| `BUSINESS-LISTINGS.md` still lists "אחזקה ותחזוקה שוטפת" as a service, but that service was merged into rental management. The listing copy should match the site. | `BUSINESS-LISTINGS.md` (services list) | 🛠 Remove it before anyone copies the text into Google or a directory. |
| The `/services` intro still says "תחזוקה" as if it were its own offer. | `pages.services.intro`, `content/site.ts:1284` | 🛠 Change it to "טיפול בתקלות", to match the merged service. |
| The Luxury service is still thin: "everything in rental management" plus 2 vague bullets. | `services` → `luxury` | 📋 Say what's actually different, or merge it. |
| One page per service (`/services/abroad`, `/services/commercial`, …) and a `/guides` section with 5–10 articles. | — | 🛠 Planned as group E. This is the biggest SEO and AI-visibility gain left. Guides need your review for legal accuracy. |
| No English page. The `llms.txt` English section helps AI tools, but owners abroad who search in English land on Hebrew pages. | — | 🛠 One `/en` page for owners abroad. |
| The team shows initials only, with no photos. | `team`, `partner` | 📋 Real photos, at least of עו״ד דורון מרום. |
| The "בכפוף לתנאי השירות" phrase still appears many times on each page, and there's no terms section to link to. | across `site.ts` | 📋 Once the Safe terms exist, 🛠 show the phrase once per page as a `*` footnote that links to them. |
| No real case story or outside proof. | — | 📋 One real anonymized story ("the tenant stopped paying in month 4: here's what happened"). |
| Outside mentions (Google profile, reviews, b144, d.co.il, nadlano, press). | `BUSINESS-LISTINGS.md` | 📋 Ongoing. It's still the main reason AI tools won't recommend the site. |

## P3: polish

| What | Where | Fix |
|---|---|---|
| `hero.jpg` is 615 KB. Next resizes it, but the source is the LCP image. | `public/images/hero.jpg` | 🛠 Re-export it at about 2400px wide and around 250 KB. |
| No `logo` in the Organization JSON-LD, because there's no logo image file. | `lib/seo.ts` | 🛠 Export the SVG logo as a PNG of at least 112px and add `logo`. |
| `priceRange` and `geo` aren't in the JSON-LD. | `lib/seo.ts:71` | 📋 `priceRange` comes with pricing. 🛠 `geo` can be filled from the office address. |
| City photos are placeholders of the cities, not your apartments. The image credits themselves are fine: the empty `credit` fields are Unsplash or CC0 photos, as `CREDITS.md` records. | `public/images` | 📋 Swap in your own apartment photos over time. |
| There are 3 contact elements at once on mobile: the CTA band, the sticky bar and the WhatsApp FAB. | `MobileBar`, `WhatsAppFab` | 🛠 Hide the FAB below 768px, because the sticky bar already has WhatsApp. |

## Not yet run (from the original plan's verification step)
- **Lighthouse** (performance, SEO, accessibility) on the deployed URL. These scores would be the baseline to compare later fixes against.
- **schema.org validator** and Google's **Rich Results Test** on home, `/landlord-safe`, `/faq` and one city page.
- **Live domain check**: what Google indexes for landlords.co.il today, and whether the old Wix pages are still live.
- **AI spot-check**: ask ChatGPT, Gemini and Perplexity "חברת ניהול נכסים בתל אביב" and note who they recommend. Repeat a few weeks after the Google profile goes live.

---

## Suggested order
1. P0 #1–4. These need your facts and decisions; the code changes are tiny.
2. 🛠 Quick code items that need nothing from you: Jerusalem in the `area` FAQ, the `/services` intro wording, `BUSINESS-LISTINGS.md`, city breadcrumbs and Service JSON-LD, removing "areas" from home, hiding the FAB on mobile, `geo`, compressing the hero.
3. 📋 Facts: Safe terms, pricing, hours, ח.פ., the Google profile. Then fill the empty FAQs.
4. 🛠 De-duplicate the city pages, using local facts from you.
5. 🛠 Group E: the `/areas` hub, one page per service, `/guides`, `/en`.
6. Run Lighthouse and the validators on the deployed site.
