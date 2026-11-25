# Search Console log: landlords.co.il

## 2026-11-24 · Mission 1: Open the property

**Done (read only, nothing changed):**
- Opened https://search.google.com/search-console in Chrome. It opened straight into `sc-domain:landlords.co.il`, already signed in to the Google account that has access. No sign-in was needed.
- Opened the property picker. Two landlords.co.il entries:
  - `landlords.co.il`, labelled "נכס דומיין" (Domain property), id `sc-domain:landlords.co.il`. This one is accessible.
  - `https://www.landlords.co.il/` (URL prefix), listed under "לא אומת" ("Not verified"). Not opened.
- Opened Settings → Users and permissions for the Domain property. The page says: "כדי להציג או לשנות את ההגדרות האלה, עליך להיות הבעלים של הנכס" ("To view or change these settings, you must be the owner of the property").
- Opened Settings. Under "Ownership verification" it says: "אינך בעלים מאומת" ("You are not a verified owner").

**Results:**
- Property: `landlords.co.il`, Domain property (`sc-domain:landlords.co.il`).
- Permission: not Owner, so either Full or Restricted user. Search Console didn't show which one, and there was no "restricted" banner on the Overview page.
- Other facts on the Settings page: robots.txt "כל הקבצים תקינים" ("All files valid"); Crawl stats "888 בקשות סריקה (ב-90 הימים האחרונים)" ("888 crawl requests in the last 90 days"); property added to the account on 8 November 2026.

**Open question:** Full or Restricted? Ask the boss, or check whether "Request indexing" can be used during Mission 2/3.

**Update (Mission 3):** "Request indexing" works for this account (all 4 requests were accepted), so the permission level is **Full** (not Restricted, not Owner).

---

## 2026-11-24 · Mission 2: Inspect the 4 missing pages (read only)

URL Inspection on the Domain property. "Google index" = what Google has stored; "Live test" = "Test live URL", run 24 Nov 2026 ~22:30–22:33.

| Page | Index status (exact) | Last crawl | Google-selected canonical | Live test |
|---|---|---|---|---|
| /areas/tel-aviv | "הדף לא נוסף לאינדקס: נסרק אך לא נכלל באינדקס" (not indexed: crawled but not included) | "לא זמין" (N/A) | "לא זמין" (N/A) | "כתובת האתר זמינה ל-Google" (URL is available to Google) / "ניתן להוסיף את הדף לאינדקס" (page can be indexed). User-declared canonical in rendered page: `https://www.landlords.co.il/en/areas/tel-aviv` |
| /landlord-safe | "הדף לא נוסף לאינדקס: הדף לא נוסף לאינדקס בגלל התג noindex" (Excluded by 'noindex' tag); "מותר ליצור אינדקס? לא: 'noindex' זוהה במטא תג 'robots'" | 5 Apr 2022, 22:37:48 (Googlebot smartphone) | "כתובת האתר שנמצאת בבדיקה" (Inspected URL) | Available to Google / can be indexed (noindex is gone on the live page). User-declared canonical: `https://www.landlords.co.il/en/landlord-safe` |
| /areas/givat-shmuel | First check: "נסרק אך לא נכלל באינדקס"; 4 min later: "כתובת האתר לא ידועה ל-Google" (URL is unknown to Google) | N/A | N/A | Available to Google / can be indexed. User-declared canonical: `https://www.landlords.co.il/en/areas/givat-shmuel` |
| /contact | "הדף לא נוסף לאינדקס: כתובת האתר לא ידועה ל-Google" (URL is unknown to Google); Sitemaps: "לא זוהו קובצי Sitemap עם הפניות" (no referring sitemaps detected) | N/A | N/A | Available to Google / can be indexed. User-declared canonical: `https://www.landlords.co.il/en/contact` |

Notes:
- "נסרק אך לא נכלל באינדקס" with no crawl date behaves like "Discovered – currently not indexed" (Google knows the URL but never crawled it). The Pages report shows all 15 URLs under this reason with last crawl "לא זמין".
- **Important finding:** in the live test, every Hebrew page declares its `/en/` version as canonical. The raw HTML (fetched with curl, also with a Googlebot user agent) has the correct self-canonical, e.g. `<link rel="canonical" href="https://www.landlords.co.il/contact"/>`. **Cause found later the same day:** `proxy.ts` sends first-time visitors outside Israel to `/en/...` (307) and only skips user agents that match a BOT list. Search Console's live test identifies as `Google-InspectionTool`, which didn't match, so it was sent to the English page and read the English canonical. **Fixed in `proxy.ts`** (the BOT list now matches any "google" user agent). Not deployed yet.

## 2026-11-24 · Mission 3: Request indexing

| Page | Result |
|---|---|
| /contact | "התקבלה בקשה ליצירת אינדקס" (Indexing requested) – "כתובת האתר נוספה לתור הסריקה בעדיפות" (URL was added to a priority crawl queue) |
| /areas/tel-aviv | Indexing requested (same message) |
| /landlord-safe | Indexing requested (same message) |
| /areas/givat-shmuel | Indexing requested (same message) |

4 of 4 done. No quota message.

## 2026-11-24 · Mission 4: Sitemap and the old URL

- Sitemaps before resubmitting: `https://www.landlords.co.il/sitemap.xml`, type Sitemap, submitted 2 Nov 2026, last read 22 Nov 2026, status "הצלחה" (Success), 32 discovered pages, 0 videos. Matches the expected 32.
- Resubmitted: result "Sitemap נשלח בהצלחה" (Sitemap submitted successfully). The submitted date is now 24 Nov 2026.
- Checked the sitemap file directly: 32 URLs (16 Hebrew + 16 `/en/`), and `/contact` is included.
- `https://www.landlords.co.il/relocation-apartment-israel`:
  - Google index: "כתובת האתר לא ידועה ל-Google" (URL is unknown to Google), no crawl data.
  - Live test (22:37): available / can be indexed, user-declared canonical `https://www.landlords.co.il/en/articles/relocation-apartment-israel`.
  - curl: **301 → `https://www.landlords.co.il/articles/relocation-apartment-israel`**. The 301 redirect already exists, so it isn't 404 anymore. Nothing for the developer to add here.

## 2026-11-24 · Mission 5: Health check (read only)

- Manual actions: "לא זוהו בעיות" (No issues detected).
- Security issues: "לא זוהו בעיות" (No issues detected).
- Pages: **12 indexed, 28 not indexed, 5 reasons:**
  1. "הדף לא נוסף לאינדקס בגלל התג noindex" (Excluded by noindex), source: Website, 8: `http://landlords.co.il/` (18 Oct 2026), `http://www.landlords.co.il/` (14 Sep 2026), `/יצירת-קשר` (21 Jul 2026), `/שאלות-נפוצות-landlord-safe` (20 Jul 2026), `/שירותי-ניהול` (1 Oct 2025), `/שאלות-נפוצות` (9 Feb 2024), `/אודות` (3 Jul 2023), `/landlord-safe` (5 Apr 2022). Dates are last crawl. These are old crawls. Today http→https and the old Hebrew slugs redirect (308/301), and /landlord-safe has no noindex on the live page.
  2. "הדף מפנה לכתובת אתר אחרת" (Page with redirect), Website, 1: `https://landlords.co.il/` (14 Nov 2026). Expected.
  3. "דף חלופי עם תג קנוני תקין" (Alternate page with proper canonical tag), Website, 1: `https://www.landlords.co.il/?page_id=1121` (27 Feb 2021). Old WordPress URL, harmless.
  4. "נסרק אך לא נכלל באינדקס", Google systems, 15, all with last crawl N/A: /areas/givat-shmuel, /areas/tel-aviv, /contact, /en, /en/about, /en/accessibility, /en/areas/bat-yam, /en/areas/givat-shmuel, /en/areas/givatayim, /en/areas/herzliya, /en/areas/jerusalem, /en/areas/tel-aviv, /en/contact, /en/landlord-safe, /en/privacy.
  5. "נסרק - לא נכלל באינדקס כרגע" (Crawled – currently not indexed), Google systems, 3: three font files `/_next/static/immutable/media/*.woff2` (3 Nov 2026). Harmless.
  - Validation status for all reasons: "לא התחיל" (Not started).
- Core Web Vitals: mobile and desktop both say "אין מספיק נתוני שימוש במכשיר מ-90 הימים האחרונים לסוג המכשיר הזה" (Not enough usage data in the last 90 days). No failing URLs.
- Performance, last 3 months (web search): **10 clicks, 124 impressions, CTR 8.1%, average position 23.9.** 23 queries in total. Top 10 (clicks / impressions / position):
  1. ניהול נכסים בגבעתיים: 2 / 2 / 9.5
  2. חברה לניהול נכסים בבת ים: 0 / 14 / 57.6
  3. ניהול דירות ירושלים: 0 / 9 / 27.1
  4. ניהול דירה בירושלים: 0 / 8 / 27.6
  5. ניהול דירות בירושלים: 0 / 6 / 25.8
  6. חברה לניהול דירות בירושלים: 0 / 5 / 28.6
  7. property management contact: 0 / 5 / 48.0
  8. שינוי דיירים בהרצליה: 0 / 3 / 11.0
  9. ניהול ועד בית בבית ים: 0 / 3 / 20.7
  10. ניהול נכסים בירושלים: 0 / 3 / 20.7

### Summary
- **Done:** indexing requested for all 4 pages; sitemap resubmitted (Success, 32 URLs); the old relocation URL already 301-redirects; no manual actions or security issues.
- **Pending:** deploy the `proxy.ts` fix (Google tools were being redirected to `/en/`), then re-run "Test live URL" on the 4 pages and request indexing again.
- **Check again around 1–8 Dec 2026:** URL Inspection on the 4 pages (want "URL is on Google"); Pages report indexed count (now 12) and the "נסרק אך לא נכלל באינדקס" list (now 15); live test canonical after the developer's fix; Sitemaps last read date.

## 2026-11-24 · Fix deployed: Google tools no longer redirected to /en

- Cause: `proxy.ts` redirected visitors outside Israel to `/en/...` unless the user agent matched `BOT`; `Google-InspectionTool` didn't match.
- Fix: PR #18 (https://github.com/rotemgrossman1/LandlordServices/pull/18), squash-merged as `7048ea9`. Vercel production deploys succeeded (landlord-services, -hhcg, -5ega).
- Next.js: already upgraded to 16.4.6 on main (commit 733f905); `npm audit` = 0 vulnerabilities.
- Live check 23:05: Search Console "Test live URL" on /contact → user-declared canonical `https://www.landlords.co.il/contact` (was `/en/contact`). Google index tab for /contact now says "כתובת האתר נמצאת ב-Google" (URL is on Google).
