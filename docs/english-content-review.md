# English content review (`/en`)

Review of every English string the site shows, page by page, from `content/site.en.ts` (plus the English part of `llms.txt`, which lives in `content/site.ts`).

**How to use this doc:** each item has a **Decision** line. Write `OK` to accept the proposed fix, edit the fix text to change it, or write `Skip`. Once you're done, I'll apply what you approved. Per CLAUDE.md, every change is mirrored in the Hebrew (`content/site.ts`).

**Tags**
- **[Accuracy]**: false, contradictory or unverifiable information. These matter most, since some are about Landlord Safe and could be read as a legal promise.
- **[Tone]**: sounds unprofessional, salesy or chatty.
- **[Wording]**: translated-from-Hebrew phrasing, British spelling or inconsistency that a native US reader would notice.
- **(HE too)**: the Hebrew says the same thing, so the fix belongs in both languages.

---

## 0. Priority: contradictions about Landlord Safe and legal services

These show up on several pages and contradict each other. Fixing them first fixes most of the "false info" risk.

### 0.1 Execution Office proceedings: included or not? [Accuracy] (HE too)
- **Where:** `services[landlord-safe].includes` ("Legal eviction, including enforcement proceedings at the Execution Office"), `safe.process[2]` ("…including enforcement proceedings at the Execution Office"), llms.txt ("legal eviction including enforcement proceedings")
- **Contradicts:** `comparison.notes[2]`: "The eviction and legal collection service **does not include** expenses and court fees, and **does not include appeals or Execution Office proceedings**."
- **Problem:** The site says both that Execution Office proceedings are included and that they are not.
- **Fix:** Confirm the real terms with Doron. If they're *not* included, change both lines to "Legal eviction through the courts" and drop "including enforcement proceedings at the Execution Office". If they *are* included, change the comparison note to "…does not include expenses, court fees or appeals."
- **Decision:**

### 0.2 "We will bear… all the legal aspects" [Accuracy] (HE too)
- **Where:** `safe.faq[safe-eviction]`: "we will bear and handle all the legal aspects of evicting tenants"
- **Problem:** "Bear" implies we pay for it. The comparison note says expenses, court fees, appeals (and possibly Execution Office) are *not* included.
- **Fix:** "Yes. In addition to guaranteeing your rent, we handle the legal process of evicting a tenant who breaches the lease, subject to the terms of service. Our aim is to get the property back on the market as quickly as possible."
- **Decision:**

### 0.3 How long is the rent guaranteed? [Accuracy] (HE too)
- **Where:** `safe.faq[safe-rent]`: "guarantees you **full payment of your rent until the end of the lease**, or until we find you a replacement tenant"
- **Contradicts:** `safe.faq[safe-end]` (up to a **three-month** period when the tenant doesn't leave), and `safeTerms.monthsCovered` is empty (so the real coverage period isn't stated anywhere).
- **Problem:** An unconditional "full payment until the end of the lease" is the strongest promise on the site and has no "subject to the terms of service".
- **Fix:** "That's what we're here for. With Landlord Safe you keep receiving your rent, subject to the terms of service, while we deal with the tenant and, if needed, find a replacement." (Or fill in `safeTerms.monthsCovered` with the real period and reference it.)
- **Decision:**

### 0.4 "Is your service suitable for every apartment? Yes." [Accuracy] (HE too)
- **Where:** `safe.faq[safe-who]`
- **Problem:** The answer opens with "Yes", then says it is only granted to deals the company approves. That's a "no, not automatically".
- **Fix:** Question: "Can any apartment join Landlord Safe?" Answer: "Any rental deal our team approves can join. We review the tenants or potential tenants, the security deposits, the lease, and whether the rent has been paid on time up to the date you join."
- **Decision:**

### 0.5 "Compensation" and "entitled to" [Wording/Accuracy] (HE too)
- **Where:** `safe.faq[safe-cases]`, `safe-timing`, `safe-end`
- **Problem:** "Compensation", "entitled", "your claim is approved" are insurance terms. In English this reads as if Landlord Safe is an insurance policy, which could create a regulatory/legal expectation. Hebrew "פיצוי" is softer.
- **Fix:** Use "payments" / "guaranteed rent payments" instead of "compensation", "you'll receive" instead of "you will be entitled to", "once we approve the case" instead of "your claim is approved". Worth checking with the attorney.
- **Decision:**

### 0.6 "Running a business in the apartment" as a covered case [Accuracy] (HE too)
- **Where:** `safe.faq[safe-cases]`
- **Problem:** Listing "running a business" next to non-payment suggests the owner gets paid when a tenant runs a business but still pays rent. Confirm this is really a case that triggers payments.
- **Fix:** Confirm with Doron; if not, keep only "Non-payment of rent" and "Using the apartment in breach of the law or the lease".
- **Decision:**

### 0.7 Rent "collection" vs. rent not passing through us [Accuracy]
- **Where:** `pages.services.intro`: "…finding tenants, the lease, maintenance and **rent collection**."
- **Contradicts:** `faq[abroad-manage]`: "The rent goes directly into your account and doesn't pass through us."
- **Fix:** "…finding tenants, the lease, maintenance and **tracking rent payments**." (matches the comparison row "Tracking rent payments")
- **Decision:**

### 0.8 Services in the FAQ that aren't on the Services page [Accuracy] (HE too)
- **Where:** `faq[services]` lists "Ongoing upkeep and maintenance services for properties" and "Vacation apartment management (owners living abroad)"; `faq[sale]` says we handle selling the apartment, with legal support; `faq[abroad-maintain]` promises paying bills, inspections, running systems, collecting and forwarding mail.
- **Problem:** None of these appear on the Services page or in llms.txt. A reader (or AI search) can't tell what we actually offer.
- **Fix:** Confirm which are real. If real, add them to the Services page (e.g. under "Property Management for Owners Abroad"). If not, remove them from the FAQ.
- **Decision:**

### 0.9 Specific operational promises: confirm they're done every time [Accuracy] (HE too)
Each of these is a concrete commitment. Keep only if it really happens for every client:
- `faq[after-move-in]`: periodic visits during the lease, with a written report including photos after each visit.
- `faq[utilities]`: a detailed report with meter readings and confirmations after the transfer.
- `home.ctaNext[0]`: "gets back to you within one business day".
- `safe.faq[safe-timing]`: payment within 14 days of approval.
- `protection.layers[1]`: lawyers with "more than 20 years of experience" who "accompany every single agreement and negotiate with the tenants".
- `legal.accessibility` (office): "The route from the parking lot to the offices is fully accessible".
- **Fix:** Confirm each; soften any that aren't guaranteed ("We visit the property periodically…" without "after each visit you'll receive…").
- **Decision:**

### 0.10 "Unique" claims [Accuracy/Tone] (HE too)
- **Where:** `services[landlord-safe].short` ("A service unique to Landlord Services… This unique service…"), `protection.lead` ("our unique product"), `safe.faq[safe-what]` ("a unique product"), `faq[why-us]` ("unique capabilities")
- **Problem:** "Unique" is an unprovable claim (CLAUDE.md: no claims we can't back up), and it's repeated.
- **Fix:** Use "our own" once: "Our own service: even if the tenant stops paying, we pay the rent in their place, subject to the terms of service. So you have peace of mind about your rent."
- **Decision:**

---

## 1. Site-wide

### 1.1 "Fault(s)" [Wording]
- **Where:** about 15 places: services, steps, howItWorks ("We handle every fault"), comparison ("Handling faults throughout the lease"), ownerView, FAQ, values.
- **Problem:** Literal translation of "תקלה". In US English a "fault" is blame or an earthquake line; nobody says "a fault in the apartment".
- **Fix:** "repair(s)" / "maintenance issue(s)" / "anything that breaks". E.g. "We handle every repair", "Handling repairs throughout the lease", "Water heater issue reported".
- **Decision:**

### 1.2 "Tradespeople" [Wording]
- **Where:** services, city pages ("with tradespeople who come to the apartment"), personas.
- **Fix:** "contractors" or "repair professionals" (US usage).
- **Decision:**

### 1.3 "By email or mobile" [Wording]
- **Where:** `faq[price]`, `faq[sale]`, `safe.faq[safe-price]`, `safe-new-tenants`, `safe-rented`
- **Fix:** "For a quote, contact us by phone, WhatsApp or email." (also more natural than "a formal price quote")
- **Decision:**

### 1.4 Nested parentheses around arnona [Wording]
- **Where:** `services[rental-management].includes[2]`: "(arnona (municipal property tax), water, electricity, gas)"; `faq[abroad-maintain]`: "(building committee fees, arnona (municipal property tax), electricity, etc.)"; ownerView mock.
- **Fix:** "Transferring arnona (municipal property tax), water, electricity and gas into the tenants' names". Explain arnona once per page, not in every sentence (city pages repeat it 3 times each).
- **Decision:**

### 1.5 Inconsistent naming of the legal piece [Wording]
- "Lease with legal support" / "legal backing" / "a legally sound lease" / "a legal lease" / "a strong legal agreement".
- **Fix:** Pick one: "a lease prepared by our lawyers" (or "with legal support") and use it everywhere.
- **Decision:**

### 1.6 "Execution Office" [Wording]
- **Fix:** First mention: "the Enforcement and Collection Authority (Execution Office)". English readers won't know the term.
- **Decision:**

### 1.7 "Free you completely from any work or worry" [Tone/Accuracy] (HE too)
- **Where:** home intro, `faq[for-whom]`, `faq[services]`, `faq[after-move-in]`, `about.story[2]`
- **Problem:** Repeated 5 times, word for word, and it's an absolute promise.
- **Fix:** Keep it once (home). Elsewhere: "take the day-to-day work off your hands".
- **Decision:**

### 1.8 "Maximize the return on your property" [Accuracy/Tone] (HE too)
- **Where:** home intro, FAQ (×3), about.
- **Problem:** We don't describe anything that increases returns (no pricing advice, no rent optimization is listed). Repeated filler.
- **Fix:** Drop it, or once: "and help you get the most out of your property".
- **Decision:**

---

## 2. Home page (`/en`)

### 2.1 H1 [Tone/Wording]
- **Current:** "Your apartment, managed. Minimum hassle and headaches. Maximum enjoyment of your rent."
- **Problem:** "Maximum enjoyment of your rent" is a literal translation and reads oddly.
- **Fix:** "Your apartment, managed. No hassle. Just the rent." (accent: "No hassle. Just the rent.")
- **Decision:**

### 2.2 Intro [Wording]
- **Current:** "We offer several plans designed to give you peace of mind and free you completely from the work and worry of your apartment, dealing with your tenants or day-to-day maintenance, all while maximizing the return on your property."
- **Problem:** Long; "plans" suggests fixed pricing tiers, which the site doesn't show.
- **Fix:** "We manage rented apartments for their owners: tenants, lease, bills and repairs. You get peace of mind and the rent, without the day-to-day work."
- **Decision:**

### 2.3 Numbers strip: "0 – Worries about tenants. We handle everything" [Tone/Accuracy]
- **Where:** `stats[1]`
- **Problem:** A gimmick in a strip of real numbers; looks like a statistic but isn't one.
- **Fix:** Replace with the real fact: value "0", label "Owners left without rent in 13 years" (backed by `rentRecord`), or remove the item.
- **Decision:**

### 2.4 Personas: "you're up north" [Accuracy]
- **Current:** "The apartment is in central Israel, and you're up north, on relocation or on the other side of the world."
- **Problem:** We also manage in Jerusalem, which isn't "central Israel" to most readers; "on relocation" isn't English.
- **Fix:** "The apartment is in Israel, and you're in another city, relocated for work, or on the other side of the world."
- **Decision:**

### 2.5 Personas: "When it's hard to manage it yourself" [Wording]
- **Fix:** Title "It's hard to manage it yourself" (match the other titles); pain: "Calls from tenants, contractors and paperwork aren't something you want to deal with anymore."
- **Decision:**

### 2.6 Protection lead [Tone/Wording]
- **Current:** one 90-word paragraph: "Own an apartment? Imagine that your only job is to see the money land in your bank account, and that's it. … Complete care from A to Z…"
- **Problem:** Run-on, chatty ("and that's it", "from A to Z"), and "sign the lease on your behalf, including legal representation by lawyers" is clumsy. (The Hebrew singular form is by the owner's choice; in English it's "you" anyway.)
- **Fix:** "Own an apartment? Imagine your only job is watching the rent arrive in your bank account. We take care of everything else: we find and screen the tenants, sign the lease on your behalf with our lawyers, transfer all the accounts into the tenants' names, handle every repair, and at the end of the lease make sure the apartment is returned in good condition and free of debts. All of it backed by Landlord Safe, which guarantees your rent, subject to the terms of service."
- **Decision:**

### 2.7 Protection layer "Security deposits and guarantees" [Wording]
- **Current:** "All our leases include a special section setting out the guarantees and security deposits… all to ensure the tenant honors the agreement and to look after all your interests as the property owner."
- **Fix:** "Every lease includes a section on the guarantees and security deposits the tenant provides at signing, to make sure the tenant keeps to the agreement and your interests are protected."
- **Decision:**

### 2.8 Areas lead: "cities with high rental demand" [Accuracy]
- **Problem:** A general claim we don't back up (Arsuf, Bnei Brak…).
- **Fix:** "We work in Greater Tel Aviv and Jerusalem. Is your property somewhere else? Talk to us."
- **Decision:**

### 2.9 Comparison lead [Wording]
- **Current:** "Our work doesn't end when the lease is signed; that's where it begins."
- **Fix:** Fine, keep. Only note: the "Broker" column marks "Finding tenants: Included" but we don't qualify "Financial check" for brokers, some do. The note "Brokers' services vary" covers it. **No change needed.**
- **Decision:**

---

## 3. Services (`/en/services`)

### 3.1 Rental Apartment Management `short` [Tone]
- **Current:** "…Your job is simply to receive the rent in your bank account, worry-free."
- **Fix:** "…All you do is receive the rent."
- **Decision:**

### 3.2 Page intro [Wording]
- **Current:** "As a real estate management company for apartment owners, we take care of…"
- **Fix:** "We take care of everything involved in renting out your apartment: finding tenants, the lease, maintenance and tracking rent payments. We work in Greater Tel Aviv and Jerusalem, including for owners who live abroad." (see also 0.7)
- **Decision:**

### 3.3 Offices & Commercial `short` [Wording]
- **Current:** "Offices and commercial properties get the same organized, responsible management from us."
- **Fix:** "We manage offices and commercial properties with the same care."
- **Decision:**

### 3.4 Landlord Safe includes: "A rent guarantee: you keep receiving your rent" [Accuracy]
- **Fix:** add "subject to the terms of service" (it's the only place on the page that leaves it out).
- **Decision:**

---

## 4. Landlord Safe (`/en/landlord-safe`)

(See section 0 first: 0.1–0.6 and 0.10 are all on this page.)

### 4.1 Intro [Wording]
- **Current:** "Landlord Safe is a service of the property management company Landlord Services, for owners who want security in renting out their apartment."
- **Problem:** Reads like SEO keyword stuffing.
- **Fix:** "Landlord Safe is our service for owners who want to know the rent will keep coming. If the tenant stops paying, you keep receiving rent, subject to the terms of service, and we handle eviction and collection through the courts."
- **Decision:**

### 4.2 Tone of the FAQ openers [Tone] (HE too)
- "Good question." (safe-cases), "No problem!" (safe-new-tenants), "Of course!" (safe-rented), "Definitely." (safe-replacement), "As soon as possible." (safe-timing), "That's what we're here for."
- "You can relax and sit back in your armchair." (safe-end)
- "…you'll be granted the Landlord Safe service!" (×2)
- **Fix:** Start each answer with the actual answer and drop the exclamation marks. E.g. safe-end: "If the tenant pays the rent but doesn't leave on the agreed date, you'll receive payments equal to the rent from that date for up to three months, or until the tenant leaves, whichever comes first." safe-new-tenants: "Yes. We check your potential tenants before they sign. Once they're approved, the apartment can join Landlord Safe."
- **Decision:**

### 4.3 safe-what: "doesn't vacate the property at the end of the lease" [Accuracy]
- Fine as long as 0.3 is fixed (it then matches the 3-month rule). **Check after 0.3.**
- **Decision:**

### 4.4 safe-replacement [Wording]
- **Current:** "…find a quality tenant… who will pass our background checks and sign a lease on terms as similar as possible, and for at least the lease term in the lease agreement, in place of the breaching tenant."
- **Fix:** "Yes. Our goal is to evict the tenant and find a new one quickly, who passes our checks and signs a lease on similar terms for at least the remaining term."
- **Decision:**

---

## 5. About (`/en/about`)

### 5.1 "Has grown quickly" [Accuracy/Tone] (HE too)
- **Where:** `about.story[3]`: "From its founding and throughout its years of operation, Landlord Services has grown quickly."
- **Fix:** Replace with the fact: "Today we manage more than 250 properties." (or remove)
- **Decision:**

### 5.2 Team experience claim [Accuracy] (HE too)
- **Where:** `about.story[4]`: "…broad, extensive experience in real estate, from property management through project initiation to property development."
- **Fix:** Confirm the team really did project initiation/development. If not: "Our team has years of experience in property management."
- **Decision:**

### 5.3 Story paragraph 3 [Wording]
- **Current:** "…comprehensive service to property owners (apartments and houses), aimed at maximizing the return…"
- **Fix:** "We look after owners of apartments and houses, and take the day-to-day work of managing the property off their hands."
- **Decision:**

### 5.4 CEO bio: law firm name [Accuracy]
- **Current:** "He previously worked at the law firm Tadmor & Co."
- **Problem:** The firm has been "Tadmor Levy & Co." since 2016. Fine if he worked there before then; otherwise use the current name.
- **Fix:** Confirm the years. Also: "An attorney with LL.B. and LL.M. degrees and a BA in business administration." (degree spelling)
- **Decision:**

### 5.5 Office lead [Wording]
- **Current:** "You're welcome to visit us – just arrange it in advance."
- **Fix:** "Visits are by appointment." OK as is if you prefer the warmer version.
- **Decision:**

---

## 6. FAQ (`/en/faq`)

### 6.1 "Why choose us?" [Tone] (HE too)
- **Current:** "Good question.\nFirst and foremost, because we understand your needs. … We have a high-quality, permanent team that gets up every morning to give you the highest level of service…"
- **Problem:** Opens with filler, all adjectives and no facts. This one also shows on the home page.
- **Fix:** "Because we manage the apartment for the whole lease, not just until it's signed. Since 2013 we've managed more than 250 properties, our CEO is an attorney and every lease comes with legal support, and with Landlord Safe your rent is guaranteed, subject to the terms of service. We work with full transparency, no conflict of interest, and a package tailored to you."
- **Decision:**

### 6.2 "Who is the service for?" [Wording]
- **Problem:** Mixed punctuation (some bullets end with ";" and the last ends with ";"), "clients who spend most of their time abroad" duplicates the first bullet.
- **Fix:** Remove trailing semicolons; merge the first bullet: "Owners who live abroad, or spend most of their time abroad".
- **Decision:**

### 6.3 "What services do you provide?" [Tone]
- **Current:** "We're glad you asked.\nWe provide an optimal, comprehensive package…"
- **Fix:** Drop "We're glad you asked." and "optimal". Align the bullet list with the Services page (see 0.8).
- **Decision:**

### 6.4 Renovation [Tone]
- **Current:** "No problem. … a wide range of top-tier professionals in Israel and will get the apartment ready… quickly and to the highest quality."
- **Fix:** "We can. Our service starts before the apartment is rented: we can prepare it for tenants, from minor repairs to a full renovation, with professionals we work with regularly."
- **Decision:**

### 6.5 Utilities [Tone]
- **Current:** "We do, of course." / "the building committee/management company"
- **Fix:** "We do." / "the building committee (vaad bayit) or management company". (See 0.9 for the report.)
- **Decision:**

### 6.6 After move-in [Tone]
- **Current:** "Property management is an area of expertise!"
- **Fix:** Drop the line; start with "We do. After the tenants move in, we keep managing the property…"
- **Decision:**

### 6.7 Sale [Tone]
- **Current:** "Of course.\nLandlord Services provides a complete package of services for your property, including help with and handling of the sale…"
- **Fix:** "Yes. We can also help you sell the property, including legal support during the sale. Contact us for a quote." (if the service is real, see 0.8)
- **Decision:**

### 6.8 Abroad (×2) [Tone]
- "Absolutely.\nThat's exactly what we're here for." / "so you can sleep soundly" / "Certainly!\nWe'll make sure that when you arrive, your apartment is ready for you, clean and well kept especially for you, and above all that you have peace of mind."
- **Fix:** "Yes. With a power of attorney we can sign the lease on your behalf and manage the property day to day. The rent goes straight into your account, not through us." / "Yes. When you arrive, the apartment is ready for you. For vacation apartments, the service includes: …"
- **Decision:**

### 6.9 FAQ page intro [Wording]
- **Current:** "Here we have gathered answers to the questions owners ask us before getting started. Landlord Services is a property management company for owners of rented apartments. Didn't find your answer? Talk to us."
- **Fix:** "Answers to the questions owners ask us most often before getting started. Didn't find your answer? Talk to us."
- **Decision:**

---

## 7. Contact (`/en/contact`)

### 7.1 Intro [Wording]
- **Current:** "…Landlord Services is a property management company for owners of rented apartments, and our office is in Bnei Brak."
- **Fix:** "Message us on WhatsApp or by email, or give us a call. Our office is in Bnei Brak."
- **Decision:**

### 7.2 Opening hours empty [Accuracy]
- `site.hours` is empty, so it's hidden. For owners abroad (other time zones) hours are useful. Fill in if known (e.g. "Sun–Thu 9:00–17:00 Israel time"). No change if unknown.
- **Decision:**

---

## 8. City pages (`/en/areas/*`)

### 8.1 Gallery title over photos that aren't ours [Accuracy]
- **Where:** every city: `galleryTitle` "Managed properties in <City>" + `galleryNote` "Photos… not properties we manage."
- **Problem:** The heading says these are our managed properties; the note directly under it says they aren't. CLAUDE.md fixes this title, so this needs your call.
- **Fix:** Until real photos exist: "Homes in <City>" (and the same in Hebrew), or replace with real photos of managed properties (with owner permission). Requires updating the CLAUDE.md rule.
- **Decision:**

### 8.2 Inconsistent stats formatting [Wording]
- Tel Aviv/Givatayim: "~50", "~10", labels capitalized ("Properties under management…"). Herzliya/Givat Shmuel/Bat Yam/Jerusalem: "About 20", lowercase labels.
- Gallery note: "Photos for illustration only:" (TLV, Givatayim) vs. "Photos are for illustration:" (others).
- **Fix:** Use "About 50" style and capitalized labels everywhere; one gallery note: "For illustration only: residential buildings in <City>, not properties we manage."
- **Decision:**

### 8.3 "0 – Months without rent for our owners" [Wording]
- **Fix:** "0 – Months our owners went without rent" (clearer).
- **Decision:**

### 8.4 Tel Aviv: "many applicants for every apartment" [Accuracy] (HE too)
- A market claim. Reasonable, but general. **Keep** unless you'd rather not.
- **Decision:**

### 8.5 Givatayim: "since we started" / "from the beginning" [Accuracy] (HE too)
- Confirm Givatayim really was one of the first cities in 2013.
- **Decision:**

### 8.6 Givat Shmuel hero alt: "above the South Park" [Wording]
- **Fix:** "above the city's South Park" or just "at sunset". Check the park's name.
- **Decision:**

### 8.7 Jerusalem: "Jerusalem is the city where we work outside Greater Tel Aviv." [Wording]
- **Fix:** "Outside Greater Tel Aviv, Jerusalem is our main area of work."
- **Decision:**

### 8.8 Bat Yam: "it has it all" / "without phone calls in the middle of the day" [Tone]
- **Fix:** "…with older buildings, renovated buildings and new towers by the sea." / "…and you get updates and your rent, without the calls."
- **Decision:**

### 8.9 Herzliya intro: "so your apartment works for you, not the other way around" [Tone]
- Fine, keep. **No change.**
- **Decision:**

---

## 9. Legal pages

### 9.1 Accessibility: "as far as possible" [Wording]
- **Current:** "The website has been adapted according to Israeli Standard SI 5568… at level AA, as far as possible."
- **Fix:** "We aim to meet Israeli Standard SI 5568 (based on WCAG 2.0) at level AA." (matches the page description, which already says "our aim").
- **Decision:**

### 9.2 Privacy: cookie wording mentions analytics [Accuracy]
- "Additional cookies, such as analytics tools, will be enabled only if you approve." Fine if analytics may be added. If the site has no analytics at all, say "The site doesn't use analytics cookies today; if we add them, they'll be enabled only with your approval." Confirm.
- **Decision:**

### 9.3 Both pages show "Draft – pending attorney review" [Tone]
- Visible to every visitor and looks unfinished. Get them reviewed, then remove `legal.draftNote` (both languages).
- **Decision:** Done: banner removed in both languages.

---

## 10. llms.txt (English part, in `content/site.ts` → `llms`)

### 10.1 Bare "Landlord" [Wording]
- **Where:** `llms.intro[1]` "Landlord is an Israeli property-management company…", `llms.english` "Landlord (לנדלורד) is…"
- **Problem:** CLAUDE.md: the English name is always "Landlord Services".
- **Fix:** "Landlord Services (לנדלורד) is…"
- **Decision:**

### 10.2 "managing partner… is a lawyer" vs. "CEO… attorney" [Accuracy]
- **Where:** `llms.englishPoints[6]`
- **Fix:** "Legal backing: the CEO, Doron Marom (דורון מרום), is an attorney." (matches the About page)
- **Decision:**

### 10.3 "owners of one to three apartments" [Accuracy]
- The site (personas, FAQ) also targets investors with several apartments and owners of multiple properties. Confirm "one to three" or drop it.
- **Decision:**

### 10.4 Execution Office [Accuracy]
- `englishPoints[3]` "legal eviction including enforcement proceedings" – same issue as 0.1.
- **Decision:**

---

## Things checked and fine

- Company name, phone (+972-54-211-0096), email, address, founding year (2013), "250+ properties", "13 years", per-city property counts: match the Hebrew.
- City `meta.title` and `includesTitle` follow the CLAUDE.md pattern.
- Team names and roles match the Hebrew.
- "Not a real-estate brokerage" positioning is consistent everywhere.
- The "steps" and "owner view" home sections are written but switched off (`homeSections`), so they're not visible now. If you turn them on, items 1.1 ("Water heater fault") applies there too.
