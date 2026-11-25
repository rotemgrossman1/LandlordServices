# To do with Owner (admin) access: landlords.co.il

Written 2026-11-24. Today we had **Full** access on the Domain property `sc-domain:landlords.co.il`. That was enough for all 5 missions: inspecting pages, requesting indexing, resubmitting the sitemap and reading every report. **Nothing in the missions was blocked.**

What's below is either locked to Owners in Search Console or was left alone because we didn't have access.

## Needs Owner access in Search Console

1. **Settings → Users and permissions.** Locked today: "כדי להציג או לשנות את ההגדרות האלה, עליך להיות הבעלים של הנכס" ("you must be the owner"). Check who has access and confirm your level. Don't change other users without the boss's OK.
2. **The URL-prefix property `https://www.landlords.co.il/`.** It's in your property list under "לא אומת" ("Not verified"). With Owner access, decide with the boss whether to verify it or leave it. The Domain property already covers it, so it's optional.
3. **Settings → Associations.** For example, linking Google Analytics. Owner only, and only if wanted.
4. **Settings → Ownership verification.** It says "אינך בעלים מאומת" ("You are not a verified owner"). Nothing to do unless the boss wants you as an owner.

## Not about Search Console access (developer)

These don't depend on admin access, but they're still open:

- **Canonical bug: fixed in code, needs deploying.** Google's live-test tool (`Google-InspectionTool`) wasn't recognised as a bot by `proxy.ts`, so visitors from abroad were redirected to `/en/...` and Google read the English canonical. `proxy.ts` now treats any user agent containing "google" (and Bing, Yandex, Baidu, DuckDuckGo, headless browsers) as a bot. After it's deployed, re-run "Test live URL" on the 4 pages. The canonical should be the Hebrew URL. Then request indexing again.
- **301 for /relocation-apartment-israel.** Already done. It returns 301 → `/articles/relocation-apartment-israel`. Nothing to add.

## Re-check on about 1–8 Dec 2026 (Full access is enough)

- URL Inspection: /areas/tel-aviv, /landlord-safe, /areas/givat-shmuel, /contact. The goal is "URL is on Google".
- Indexing → Pages: indexed count (12 on 24 Nov) and the "נסרק אך לא נכלל באינדקס" list (15 on 24 Nov).
- Sitemaps: last read date after the 24 Nov resubmission.
- Old "noindex" rows (http://, old Hebrew slugs): these URLs now redirect. Once Google recrawls them, you can click "Validate fix" on that reason.
