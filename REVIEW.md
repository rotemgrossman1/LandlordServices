# Site review: landlords.co.il

Date: 2026-10-20. Reviewed the production build (`npm run build` passes, all 8 pages are static), every page at desktop and mobile (375px), the contact API, and live Google/AI-search presence.

Priority: **P0** = fix before going live · **P1** = big impact · **P2** = worth doing · **P3** = polish.
Who: 🛠 = can do in code · 📋 = needs a fact from you.

---

## Top 5 (agreed 2026-10-20)

1. ✅ **Done: rewrite the rent fact and the property count.** Confirmed facts: in 13 years and more than 200 properties, no owner has ever missed a rent payment. This holds for **all** clients, not only Landlord Safe. More than **170** properties are under management today.
   - Numbers strip (`stats`, `site.ts:82`): `170+` נכסים בניהול · `0` חודשים שבהם בעל דירה לא קיבל שכר דירה · `מאז 2013`. This replaces "מאות" and "100% גבייה בזמן".
   - One sentence for the home page, the Landlord Safe page, FAQ `why-us`, `public/llms.txt`, the `summary` text and the JSON-LD description:
     > "ב-13 שנה ויותר מ-200 נכסים, אף בעל דירה שלנו לא נשאר בלי שכר דירה – גם כשהדייר הפסיק לשלם."
   - Also change About ("מאות נכסים") to "יותר מ-170 נכסים".
2. ✅ **Done: Tel Aviv page `/areas/tel-aviv`.** This is the template for the other 7 cities. Photos lead visually, and the page still carries about 400–700 words of real text, so it isn't "thin" for Google or AI.
   1. Hero: a Tel Aviv apartment photo, H1 "ניהול נכסים בתל אביב", and a 2-line direct answer.
   2. Gallery: 4–6 Tel Aviv apartment and building photos, free license and credited. These are placeholders until you have photos of your own apartments, and I ask before downloading.
   3. Our work in Tel Aviv: **about 50 properties, in neighborhoods across the city**.
   4. What's included: short, linking to the services, no copied text.
   5. Local FAQ: 3–4 questions, with FAQPage JSON-LD.
   6. CTA.

   Add the page to `app/sitemap.ts` and `public/llms.txt`, and link it from the areas strip and the footer.

   🔄 **In progress elsewhere:** the other 7 city pages are being built in the separate "city-pages" session on its own branch.
3. 🟡 **Ready, waiting for the profile link: Google Business Profile.** Code is ready (`googleProfile` in `content/site.ts`), and the profile and directory text is in `BUSINESS-LISTINGS.md`. Once the profile exists: Fill `googleRating` (value, count, URL), add the profile to `sameAs` in the JSON-LD, and point the "Google Maps" button to the profile instead of an address search. Separately, write matching listing text for b144, d.co.il and nadlano.co.il. Reviews help right away, but AI tools take a few weeks to pick up new mentions.
4. ✅ **Decided: sample reviews stay for the demo, and are committed.** The 5 "דוגמה" reviews (`site.ts:88-94`) stay for the demo to your boss. Pushing to `main` doesn't deploy, so they can be committed. Before the site goes live on the domain, they **must** be replaced with real Google reviews (copied word for word) or set to `[]`.
5. **🛠 Next: work through the remaining 🛠 items below.** First list them by priority and suggest an order, then wait for an OK. After that, do them one at a time with one commit each. 📋 items need a fact from you (prices, hours, ח.פ., Safe terms): ask for it, or skip the item.

**Considered and kept:** the hero photo (a house with a pool) stays. Your reasoning: it draws clients in even if they don't own a home like that. Don't reopen this.

**Working rules for the remaining items**
- Branch: a new branch cut from `feature/rent-fact-tel-aviv-page` (PR #4, not merged yet).
- Don't redo Top 5 items 1, 2 and 4. Item 3 waits for the profile link.
- To keep merges clean with the city-pages session, **don't touch**: the `cityPages` array in `content/site.ts`, `app/areas/`, the city photos in `public/images`, and the city lines in `public/llms.txt`.
- Follow `CLAUDE.md`: all copy goes in `content/site.ts`, never invent facts, an empty value hides the section, logical CSS only, and `npm run build` must pass.

**Progress on branch `review/remaining-fixes`**
- ✅ **A. Quick fixes:** H1 accent space, meta descriptions and the `/services` title, the hero's WhatsApp button hidden on mobile, and security headers.
- ✅ **B. Repeated copy:** "מאז 2013" removed from the page intros, the CTA band's legal-backing line hidden, and the two abroad FAQs merged. The **maintenance** service is still open and waits for your answer (see section 2).
- ⏳ **Next:** C (home page design), D (structured data and AI search), E (bigger additions, after the city pages merge).

---

## 1. Design

| P | Finding | Where | Fix |
|---|---|---|---|
| — | ~~Hero photo doesn't match Israeli apartments~~: **considered, keeping it** (see Top 5). Optional: compress `hero.jpg` (604 KB). | `public/images/hero.jpg` | — |
| P1 | The home page is far too long: **~10,300px on desktop, ~16,150px on mobile (about 20 screens)**, with 9 sections after the hero. | `homeSections`, `site.ts:199` | 🛠 Cut to about 6. Merge "comparison" into "services", and drop "areas" from the home page once city pages exist (link to them from the footer). |
| P1 | Too much dark forest green. Hero, personas, protection and areas are all dark, so the page feels heavy and the sections blur together. | `Hero`, `Personas`, `ProtectionLayers`, `AreasStrip` | 🛠 Keep dark for the hero and one feature section, and make the rest light. |
| ✅ | ~~On mobile the first screen shows **two WhatsApp buttons**~~: **done.** Below 768px the hero shows only the main CTA. WhatsApp and call stay in the sticky bar. | `Hero.tsx` + `MobileBar.tsx` | — |
| ✅ | ~~The numbers strip shows "**מאות** נכסים בניהול"~~: **done**, now `170+` (Top 5 #1). | `site.ts:83` | — |
| P2 | The team section shows initials only, with no photos. On a trust business, faceless people hurt. | `team`, `partner` in `site.ts` | 📋 Add real photos, at least of עו״ד דורון מרום. |
| P2 | The hero eyebrow, H1, promise line and intro paragraph all say the same thing at 4 sizes. | `Hero.tsx` | 🛠 Keep the H1 and one supporting line, and move the intro paragraph below the fold. |
| P2 | The services list on the home page is a plain text list with a lot of empty space (wide gaps between the title and the one-line description). It reads like a table of contents, not a selling section. | `ServiceCards` | 🛠 Make it tighter: icon + title + 1 line, in 2–3 columns. |
| P3 | The city photo cards are stock tourist shots (Jerusalem Old City, Herzliya marina). They have nothing to do with rental apartments. | `areas.featured` | 🛠 Fine for now. Reuse them as headers on the city pages instead. Belongs to the city-pages session, so don't touch it here. |
| ✅ | ~~The H1 accent reads "שלכם,מקצה" when extracted~~: **done**, a space now comes before the `<br />`. | `components/AccentText.tsx` | — |

## 2. Repetition

Counted in `content/site.ts`:

| Phrase | Times | Fix |
|---|---|---|
| "מאז 2013" / "ב-2013" | **16** | ✅ **Done.** Removed from the home, services, Landlord Safe, FAQ and contact intros. Kept in the hero badge, numbers strip, footer, About, the why-us FAQ, the JSON-LD summary and the home meta description. |
| "גב / גיבוי / ליווי משפטי" | **14** | ✅ **Done.** The CTA band's "כל שלב בשכירות מקבל אצלנו גיבוי משפטי" (it was on every page) is hidden. The remaining mentions are the H1, "protection", About, and contract bullets in the service lists, where they describe a real feature. |
| "בכפוף לתנאי השירות" | **8** | Show it once per page, as a footnote marker (*) that links to a terms section. 📋 That terms section doesn't exist yet. |
| "נשמח לפרט (בשיחה)" | **6** | These are empty answers. See the FAQ fixes below. |
| "עורך דין" (managing partner is a lawyer) | 5 | ✅ **Kept as is.** Hero (the partner line), protection and About, plus the why-us FAQ. FAQ answers are quoted one at a time by Google and AI tools, so why-us keeps it. |
| "בחו״ל" | 7 | — |

**Overlapping sections**
- **Living abroad** is covered 4 times: a persona, a service (`abroad`), and 2 FAQs (`abroad-manage`, `abroad-maintain`). ✅ **Done:** merged into `abroad-manage`, without the "נשמח לפרט בשיחה" ending.
- The **maintenance** service repeats bullets already inside **rental-management** ("טיפול בכל התקלות"). 🛠 Merge it into a sub-bullet, or explain what's different (maintenance only, without leasing). 📋 **Waiting for your answer:** do you offer maintenance on its own, for an apartment that isn't rented through you (for example an owner abroad who only visits)? If yes, it stays as a separate service with that difference spelled out. If no, it gets merged.
- **Luxury** says "כל מה שכלול בניהול נכסים מושכרים" plus 2 vague bullets. It's thin. 📋 Explain what's actually different, or merge it.
- **Personas ↔ FAQ "for-whom"**: same content. **Comparison ↔ FAQ "broker"**: same content. Both fine for SEO, but on the home page, show only one of each pair.
- The **CTA band** appears at the bottom of every page *and* there's a sticky mobile bar *and* a WhatsApp FAB. That's 3 contact elements at once on mobile.

**Empty FAQ answers** (bad for Google FAQ snippets and AI answers, and they look evasive):
- `sale`: "נשמח לפרט בשיחה." 📋 Answer yes or no, or delete the question.
- `renovation`, `safe-price`, `price`: 📋 give at least a range or how pricing works ("X%–Y% משכר הדירה החודשי"). Price is the #1 question people ask AI.

## 3. Things that don't work or are broken

| P | Finding | Fix |
|---|---|---|
| Pre-launch | Sample reviews must be replaced before going live (see Top 5 #4). | 📋 |
| P0 | **The contact form can't send in this environment.** There's only `.env.example`, no `.env`. In production, check that `RESEND_API_KEY`, `LEAD_EMAIL_TO` **and `RESEND_FROM` (on a verified landlords.co.il domain)** are set. Without `RESEND_FROM` it sends from `onboarding@resend.dev`, which only delivers to the Resend account owner and otherwise ends up in spam. | 📋 Set it up in hosting, then send a real test lead. |
| P1 | The legal pages show **"טיוטה – לאישור עורך דין"** to the public (`LegalPage.tsx:14`). The privacy policy is also thin (no data-retention period, no named owner of the data). | 📋 Get legal sign-off, then remove the note. |
| P1 | The **Landlord Safe terms are missing**: `safeTerms.monthsCovered` and `price` are empty. The site promises "שכר דירה מובטח" 8 times, says "בכפוף לתנאי השירות", and never says what the terms are. | 📋 Add the coverage period and the main conditions. |
| P2 | `hours`, `companyId` (ח.פ.) and `legalName` are empty, so they're hidden. A company that guarantees rent should show its ח.פ. | 📋 |
| ✅ | ~~No security headers~~: **done.** CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy are set in `next.config.ts`. The CSP allows only the site's own origin, so add any future outside service (analytics, maps, chat) there first. | — |
| ✅ | Working: form validation (bad phone → 400 with a clear Hebrew message, missing consent → 400), honeypot, no-JS form fallback, mobile menu (opens, Esc closes, focus returns), 404 page (noindex, one H1), every page has exactly one H1, no horizontal scroll at 375px, all images have `alt`, old Wix URLs 301-redirect. | — |

## 4. Google keywords

**What's there now:** titles and H1s focus on "ניהול נכסים" and "חברת ניהול נכסים". That's good, but it's one keyword family on 6 pages.

**Missing or weak search terms** (Hebrew search phrases landlords use):

| Search term | Today | Target page |
|---|---|---|
| ניהול דירות / ניהול דירות להשכרה / חברת ניהול דירות | Missing from all titles | Home title + H1, `/services` |
| ניהול נכסים **בתל אביב / ברמת גן / בגבעתיים / בהרצליה / ברעננה / בגבעת שמואל / בבת ים / בירושלים** | City names appear only in a list | **New `/areas/[city]` pages** |
| שכר דירה מובטח / ערבות שכר דירה / ביטוח שכר דירה | Only on `/landlord-safe`, as a brand name | `/landlord-safe` title + H2 |
| דייר לא משלם / פינוי דייר / פינוי מושכר | Only bullet points | `/landlord-safe` H2 + guide article |
| ניהול נכסים לתושבי חוץ / ניהול דירה מחו״ל | Only an anchor on `/services` | **New service page** |
| ניהול נכסים מסחריים / ניהול משרדים | Only an anchor | **New service page** |
| כמה עולה ניהול נכס / עמלת חברת ניהול | FAQ with no number | FAQ answer with a real range |

**Structure changes (🛠):**
1. **City pages** `/areas/tel-aviv` etc. (8 pages). ✅ Tel Aviv is done. 🔄 The other 7 are in progress in the city-pages session. Each needs unique content: neighborhoods you work in, typical tenant profile, the local FAQ. 📋 Facts per city come from you. Don't make 8 copies of one template; Google treats thin duplicates as spam.
2. **One page per service** (`/services/landlord-safe`, `/services/abroad`, `/services/commercial`…). `/services` becomes a hub page.
3. **A guides section** (`/guides`) with 5–10 articles on real landlord questions: "מה עושים כשהדייר מפסיק לשלם", "חוזה שכירות – מה חייב להיות בו", "חוק שכירות הוגנת", "העברת ארנונה לשוכר", "השכרת דירה כשגרים בחו״ל". This is where most of the traffic is, and AI tools quote this kind of content.
4. ✅ **Done: meta fixes.** All descriptions are now 117–146 characters, and `/services` is titled "ניהול דירות ונכסים להשכרה". Was: the home description is 173 characters and Landlord Safe's is 162 (Google cuts at ~155). Privacy and accessibility descriptions are only ~30 characters. The `/services` title "ניהול נכסים ונדל״ן" should be "ניהול דירות ונכסים להשכרה".
5. Add a `BreadcrumbList` and internal links: service pages ↔ city pages ↔ guides.

**Already good:** canonicals, OG and Twitter tags, sitemap, robots, static HTML, `lang="he" dir="rtl"`, fast static pages, `next/image` everywhere, 301s from the old Wix URLs.

## 5. AI search (ChatGPT, Gemini, Claude, Perplexity)

**Already good:** robots explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others. `llms.txt` exists. Every page opens with a clear answer paragraph ("לנדלורד היא חברת ניהול נכסים ש…"). FAQPage JSON-LD is on 3 pages.

**Why it still won't show up:**

| P | Finding | Fix |
|---|---|---|
| P1 | **No outside mentions at all.** AI tools rank by who else talks about you. In progress: Google Business Profile + client reviews (Top 5 #3). | 📋 (1) Claim and fill in a **Google Business Profile** (address, hours, photos, categories "חברת ניהול נכסים"). (2) Ask 10–20 real clients for Google reviews. (3) List the business on b144, d.co.il, nadlano.co.il, Madlan and Facebook (already there: keep it active). (4) Write 1–2 guest articles or get press coverage (Calcalist/Ynet real estate sections, landlord groups). |
| P1 | **Few hard facts AI can quote:** no price, no number of properties, no Safe coverage period, no hours, no ח.פ. AI answers prefer specific numbers. | 📋 Fill in `stats`, `safeTerms`, `pricing`, `hours`, `companyId`. |
| P2 | JSON-LD is thin (`lib/seo.ts:21`): no `logo`, `image`, `openingHoursSpecification`, `geo`, `priceRange`, `founder`/`employee` (עו״ד דורון מרום as a `Person` with `jobTitle`), no `Service` items, and `sameAs` is only Facebook. | 🛠 Add these, plus `Service` JSON-LD on each service page and `BreadcrumbList`. |
| P2 | `llms.txt`: ✅ the "מבוגרים" wording and the rent fact are fixed. It still lacks an English section with full details. | 🛠 Add an English block (relocated Israelis abroad search in English: "property management Tel Aviv for overseas owners"). Don't touch the city lines (city-pages session). |
| P2 | No **English page** at all. A large share of the abroad persona searches and asks AI in English. | 🛠 One `/en` page (abroad owners). |
| P3 | Add `dateModified` / a "last updated" line to the FAQ and guides. AI search prefers fresh content. | 🛠 |

## 6. Extra checks

- **Trust:** for a company that guarantees rent, the site lacks proof. No real reviews, no photos of people or the office, no ח.פ., no terms, no client logos or case story. 📋 Add one real case story ("tenant stopped paying in month 4: here's what happened").
- **Conversion:** the form asks only for a name and phone. Good, low friction. But the "תאמו שיחת היכרות" CTA appears ~6 times on the home page, which feels pushy. Consider "בדקו כמה זה עולה לנכס שלכם" as a second, softer offer.
- **Legal:** the accessibility statement should name an accessibility coordinator (name + contact) and the date of the last audit, as IS 5568 requires. 📋
- **Image credits:** 3 city photos have an empty `credit` (`site.ts:133-150`). If those are CC images, a credit is required. Check `public/images/CREDITS.md`. Leave this to the city-pages session, because it owns the city photos.

---

## Verification baseline
- `npm run build`: passes, 13 routes, all static except `/api/contact`.
- One H1 per page: ✅ all 8 pages + 404.
- Mobile horizontal scroll at 375px: none.
- Not yet run: Lighthouse scores and schema.org validator (run both on the deployed URL after fixes, for a before/after comparison).

Search used for the footprint check: [ice.co.il article](https://www.ice.co.il/advertising-marketing/news/article/769512), [b144 property-management listings](https://www.b144.co.il/%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%A0%D7%9B%D7%A1%D7%99%D7%9D/%D7%9E%D7%AA%D7%9F/), [nadlano.co.il directory](https://nadlano.co.il/?p=9800). No results for the brand itself.
