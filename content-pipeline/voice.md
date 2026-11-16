# Voice and style

How Landlord Services writes, for the social posts and the articles. The writers and the humanizer follow this file.

## Who we are talking to

Owners of rented apartments in Israel: investors, heirs, young couples with a second apartment, owners who live far away or abroad, and English-speaking olim and foreign investors (in English). They want calm, less hassle and a steady rent. They are not real-estate professionals.

## Our voice (taken from our own past posts)

- **Down to earth and practical.** We talk about real situations: a repair that can't wait, a tenant who stops paying, an owner who lives far away. Every point ends with what it means for the owner ("so you get a steady cash flow", "without it becoming a second job").
- **Confident, not loud.** We know the field and say so plainly. We don't shout, and we don't oversell.
- **Warm plural "אתם"** in Hebrew ("הדירה שלכם", "אתם מקבלים"). In English, "you". Never "את.ה" or slash forms.
- **Our own view.** Posts may add a short opinion from experience, like "surprising, but not to us", only when it is true and general. Never invent a specific story, client, number or result.
- **Clear structure:** a strong opening line, a few short paragraphs, and an ending that leads somewhere (the article, or contact).

Example of the tone (from a past post, wording only, not facts to reuse):

> ניהול דירה להשכרה דורש זמינות – לעיתים מיידית – במקרים של תקלות, בעיות תשלום, חילופי דיירים או צורך בהתייעצות... אנחנו נתאם עם הדיירים, נפתור תקלות באמצעות אנשי מקצוע מטעמנו, נדאג לגבייה סדירה ונדווח לכם רק על נושאים מהותיים.

What to keep from the old posts: the practical benefits, the "what it means for you" endings. What to drop: repeating the company name in every paragraph, long numbered lists of advantages, and the "את.ה" form.

## Names and contact details

- Company: **לנדלורד** in running Hebrew text (or "לנדלורד סרויסס" once, where a full name fits); **Landlord Services** in English, never bare "Landlord".
- Main service: "ניהול דירות להשכרה" / "Rental Apartment Management". "Landlord Safe" stays as it is.
- **Phone, WhatsApp and email always come from `site` in `content/site.ts`** (today: 054-2110096 and doron@landlords.co.il; in English the phone is +972-54-211-0096). Old posts have an old number; never copy it.
- Rent guarantee claims always keep "בכפוף לתנאי השירות" / "subject to the terms of service".

## Social posts

- 200–400 words per post.
- Emojis: a few, only where they help the eye (1–4 per post, e.g. at the opening line or before the link). Never a row of emojis, never instead of words.
- Hashtags: 3–5 at the end, relevant to the subject (e.g. #ניהול_נכסים #נדלן #דירה_להשכרה). In English: #PropertyManagement #IsraelRealEstate and the like.
- **Facebook:** warmer and more personal, can open with a question or a familiar situation. Ends with an invitation to read the full article, then a short contact line.
- **LinkedIn:** more professional and data-led: open with the key fact or change, add a short expert take, end with the article link. Short paragraphs, line breaks between them.
- Both are a **preview**: they give the most interesting point and the reason to care, and leave the full explanation for the article. Never give away everything; never promise something the article doesn't deliver.
- The link placeholder is `{{ARTICLE_LINK}}` until the article is live.

## Articles

- 800–1,500 words.
- Structure: H1, an opening paragraph that answers the main question directly (2–3 sentences), 3–6 sections with clear H2 headings, an optional short FAQ (2–4 questions), and a closing paragraph that connects the subject to our services without a hard sell.
- Link to our own pages where it really helps the reader, using `[text](/path)`: `/services`, `/services#<id>`, `/landlord-safe`, `/areas/<city>`, `/faq`, `/contact`.
- Every number, law, date and rate in the article is in `research.md` with its source. Sources are listed at the end.
- Write for search engines and AI assistants too: the question in the heading, the answer in the first sentence under it, plain wording.

## Banned wording (common AI tells)

Never use these, in either language, or anything that sounds like them:

- Hebrew: "בעולם המשתנה של היום", "בעידן של היום", "בעולם דינמי", "חשוב לציין ש", "ראוי לציין", "לסיכום, ניתן לומר", "אין ספק ש", "מהווה", "בסופו של יום" (more than once), "צלילה לעומק", "המדריך המלא/האולטימטיבי", "כל מה שצריך לדעת", "לא רק X אלא גם Y" as a reflex, "מסע", "פוטנציאל אדיר", "משנה את כללי המשחק", "המובילה בישראל" (or any unproven superlative).
- English: "In today's fast-paced world", "in the ever-evolving landscape", "delve", "dive into", "navigate the complexities", "unlock", "game-changer", "it's important to note", "in conclusion", "furthermore/moreover" at the start of every paragraph, "robust", "seamless", "leverage", "tapestry", "testament to", "not just X, but Y", "elevate".
- Style tells: every paragraph the same length; triplets everywhere ("fast, simple and safe"); em-dash after em-dash; a question as every heading; a bold word in every line; ending with a rhetorical question; summarizing what was just said; exclamation marks (at most one per post, none in articles).

## Humanizing checklist

1. Read it aloud. Anything you wouldn't say to an owner on the phone goes.
2. Vary sentence length. Some short. Some longer, with a reason in them.
3. Concrete beats general: "a boiler that breaks on a Friday" beats "unexpected maintenance issues".
4. One idea per paragraph; cut the sentence that repeats the previous one.
5. Keep every fact, number, source and link exactly as it is. Humanizing never changes facts.
