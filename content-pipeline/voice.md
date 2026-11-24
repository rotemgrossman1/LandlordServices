# Voice and style

How Landlord Services writes, for the social posts and the articles. The writers and the humanizer follow this file.

## Who we are talking to

Owners of rented apartments in Israel: investors, heirs, young couples with a second apartment, owners who live far away or abroad, and English-speaking olim and foreign investors (in English). They want calm, less hassle and a steady rent. They are not real-estate professionals.

## Our voice

**The standard is the owner's own post below (November 2026).** Match its level and its way of writing in everything we write, posts and articles, Hebrew and English:

- **Polished and measured.** Professional, calm, confident. Complete, well-built sentences, not chatty one-liners or punchlines. It should read like a respected service company, not a social-media page.
- **Flowing paragraphs, not lists.** Short paragraphs that connect ("לצד", "החל מ... ועד", "באתר החדש רצינו..."). When there are several points, name them in one sentence ("מיסוי הכנסות משכירות, תושבות, ארנונה על דירה ריקה, ביטוח וניהול הדירה") and leave the detail to the article.
- **Concrete facts about us, used sparingly:** since 2013, more than 250 properties (from `content/site.ts`). No invented numbers or stories.
- **Warm plural "אתם"** in Hebrew ("מוזמנים", "נשמח לשמוע מכם", "לכם"). In English, "you". Never "את.ה" or slash forms.
- **Quiet invitations, not hard sells:** "מוזמנים להיכנס ולראות איך נוכל לעזור גם לכם", "לשיחה על ניהול הנכס שלכם, נשמח לשמוע מכם".
- **No emojis, no hashtags, no exclamation marks.**

The reference post (Hebrew original, by the owner):

> האתר החדש שלנו באוויר
>
> ניהול דירה דורש זמן, זמינות ותשומת לב לפרטים. מאז 2013 אנחנו מטפלים בכך עבור בעלי נכסים בישראל ובחו״ל, וכיום מנהלים יותר מ 250 נכסים.
>
> באתר החדש רצינו להקל גם על ההיכרות איתנו. תמצאו בו הסבר ברור על שירותי הניהול שלנו, החל מניהול דירות להשכרה ועד ניהול נכסי יוקרה ודירות לתושבי חוץ, לצד אזורי הפעילות שלנו ותשובות לשאלות שמעסיקות בעלי דירות.
>
> מוזמנים להיכנס ולראות איך נוכל לעזור גם לכם:
> https://www.landlords.co.il
>
> חדש באתר: מאמרים לבעלי דירות
>
> מתכננים רילוקיישן? לצד ההכנות למעבר, כדאי להקדיש מחשבה גם לדירה שנשארת בישראל. המאמר הראשון שלנו מרכז חמישה נושאים שחשוב לבדוק לפני הטיסה: מיסוי הכנסות משכירות, תושבות, ארנונה על דירה ריקה, ביטוח וניהול הדירה בזמן השהות בחו״ל.
>
> לקריאת המאמר: https://www.landlords.co.il/articles/relocation-apartment-israel
>
> לשיחה על ניהול הנכס שלכם, נשמח לשמוע מכם:
> 054-2110096

What makes it work: a short headline line, an opening that states the owner's need and our answer in two sentences, one paragraph per idea, a plain subheading line when the post moves to a second topic, each link on its own line after a short lead-in, and a closing line with the phone only.

## Names and contact details

- Company: **לנדלורד** in running Hebrew text (or "לנדלורד סרויסס" once, where a full name fits); **Landlord Services** in English, never bare "Landlord".
- Main service: "ניהול דירות להשכרה" / "Rental Apartment Management". "Landlord Safe" stays as it is.
- **Phone, WhatsApp and email always come from `site` in `content/site.ts`** (today: 054-2110096 and doron@landlords.co.il; in English the phone is +972-54-211-0096). Old posts have an old number; never copy it.
- Rent guarantee claims always keep "בכפוף לתנאי השירות" / "subject to the terms of service".

## Social posts

- **Length:** about 120–250 words. Shorter and tighter beats longer.
- **Shape (as in the reference post):** a short headline line; 2–4 short paragraphs; the link on its own line after a lead-in such as "לקריאת המאמר:" / "Read the article:"; a closing contact line: "לשיחה על ניהול הנכס שלכם, נשמח לשמוע מכם:" and the phone on the next line. Phone only, no email.
- **No emojis, no hashtags, no numbered or bulleted lists**, unless the owner asks for them in the brief.
- **Facebook and LinkedIn** use the same polished level. Facebook may open with a short question ("מתכננים רילוקיישן?"); LinkedIn may lead with the key fact or change. Neither is chatty.
- Both are a **preview**: they give the most interesting point and the reason to care, and leave the full explanation for the article. Name the article's points in one sentence; never give away everything; never promise something the article doesn't deliver.
- **English posts** are faithful versions of the Hebrew in the same register: clear American English, same facts, same shape, phone as +972-54-211-0096.
- The link placeholder is `{{ARTICLE_LINK}}` until the article is live.

## Articles

- Same voice as the reference post: polished, measured, flowing paragraphs. Bullets only where the content is truly a list (e.g. legal deadlines).
- 800–1,500 words.
- Structure: H1, an opening paragraph that answers the main question directly (2–3 sentences), 3–6 sections with clear H2 headings, an optional short FAQ (2–4 questions), and a closing paragraph that connects the subject to our services without a hard sell.
- Link to our own pages where it really helps the reader, using `[text](/path)`: `/services`, `/services#<id>`, `/landlord-safe`, `/areas/<city>`, `/faq`, `/contact`.
- Every number, law, date and rate in the article is in `research.md` with its source. Sources are listed at the end.
- Write for search engines and AI assistants too: the question in the heading, the answer in the first sentence under it, plain wording.

## Banned wording (common AI tells)

Never use these, in either language, or anything that sounds like them:

- Hebrew: "בעולם המשתנה של היום", "בעידן של היום", "בעולם דינמי", "חשוב לציין ש", "ראוי לציין", "לסיכום, ניתן לומר", "אין ספק ש", "מהווה", "בסופו של יום" (more than once), "צלילה לעומק", "המדריך המלא/האולטימטיבי", "כל מה שצריך לדעת", "לא רק X אלא גם Y" as a reflex, "מסע", "פוטנציאל אדיר", "משנה את כללי המשחק", "המובילה בישראל" (or any unproven superlative).
- English: "In today's fast-paced world", "in the ever-evolving landscape", "delve", "dive into", "navigate the complexities", "unlock", "game-changer", "it's important to note", "in conclusion", "furthermore/moreover" at the start of every paragraph, "robust", "seamless", "leverage", "tapestry", "testament to", "not just X, but Y", "elevate".
- Style tells: every paragraph the same length; triplets everywhere ("fast, simple and safe"); em-dash after em-dash; a question as every heading; a bold word in every line; ending with a rhetorical question; summarizing what was just said; exclamation marks (none, in posts or articles).

## Humanizing checklist

1. Read it next to the reference post. Anything that sounds less polished (chatty, slangy, salesy) or more stiff (legal, bureaucratic) than it goes.
2. Vary sentence length. Some short. Some longer, with a reason in them.
3. Concrete beats general: "a boiler that breaks on a Friday" beats "unexpected maintenance issues".
4. One idea per paragraph; cut the sentence that repeats the previous one.
5. Keep every fact, number, source and link exactly as it is. Humanizing never changes facts.
