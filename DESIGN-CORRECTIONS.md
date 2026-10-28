# Home page design corrections

Goal: make the home page below the hero more interesting and closer to the Figma design. First the site switches to the Figma's new coastal colour palette, then the layout corrections follow.

**Keep the current fonts** (Frank Ruhl Libre and Heebo). Fonts are a separate decision.
**Don't change any photos.** Photos will be handled separately later. Some of our photos are dark (for example the hero at dusk) and won't fully match the bright new palette yet. That's expected, so don't swap, edit or tint them.

## How to work through this list

1. Do **one item at a time**, in the order below unless the user says otherwise.
2. For each item, create a branch from the latest `main` (for example `design/01-palette`).
3. Follow every rule in `CLAUDE.md`. In particular: all text goes in `content/site.ts`, never invent facts, use logical CSS properties only (RTL), plain CSS Modules (no Tailwind, no new dependencies), keep AA contrast and keyboard access, and run `npm run build` with no errors.
4. Take **before and after screenshots** of the changed section at desktop width (1440px) and mobile width (390px), and send them to the user. For the palette item, screenshot the whole home page plus one inner page and one city page.
5. **Wait for the user's approval.** If they ask for changes, make them on the same branch.
6. Once approved, merge the branch into `main`, tick the item's box below in the same merge, and push.
7. If the user rejects an item, leave its box unticked, write `Skipped: <reason>` under it, and move on.

## The Figma reference

- Figma Make file: https://www.figma.com/make/pgldS6eBLqoORl7J0vIK9Y/Real-Estate-Landing-Page
- To read it with the Figma MCP: call `get_design_context` with `fileKey: pgldS6eBLqoORl7J0vIK9Y` and `nodeId: 0:1` (load the `figma-design-to-code` guidance first). It returns links to the source files. Read `src/App.tsx` (layout) and `src/index.css` (the colour palette in its `@theme` block, plus the eyebrow and overlay styles) with the MCP resource reader.
- **Full-page screenshot:** the file's image resource `file://figma/make/image/pgldS6eBLqoORl7J0vIK9Y/2dab5dc14993df732c9ce2ea54bf2cc3b0790ca3.png` (998×4096) is a screenshot of the whole design. Use it as the visual target. The Unsplash photo links in `App.tsx` may be blocked from the sandbox, which doesn't matter because we're not using its photos.
- The Figma is English and uses Tailwind. Translate it into our Hebrew, RTL, CSS Modules setup. Copy its layout, spacing, colours and feel, not its words or facts.
- **What makes the Figma feel premium:** almost no boxes. Big headlines with tight line-height, thin divider lines (navy at ~15–20% opacity), small numbers, round outlined arrow buttons, square-cornered photos, small muted body text. Its page is bright: an off-white background, one pale sky-blue section, one rounded sand panel and a navy footer. Only the hero (photo plus overlay) and the footer are dark.

## The new palette (from the Figma's `src/index.css`)

| Role | Old (forest & copper) | New (coastal) |
|---|---|---|
| Deep main colour (headings, dark surfaces) | forest `#17382f` | deep teal-navy `#143f52` |
| Darkest (footer) | `#0e241e` | navy `#10394c` |
| Body text (ink) | `#1d2824` | `#193646` |
| Page background | cream `#f4f0e8` | off-white `#fbfaf6` |
| Light section background | — | sky `#e7f6fb` (new) |
| Panel background | sand `#ded5c7` | sand `#f2e7d7` |
| Fill accent (buttons, CTA circle, eyebrow line, chips, Est. tag) | copper `#d49a68` | yellow `#ffd57a` |
| Accent words on dark (hero headline) | copper | coral `#ffbe9b` |
| Accent words on light (display size) | sage `#5e776b` | ocean `#168aa4` |
| Accent text at small size on light | `#8b5a2b` | deep ocean `#0f6f86` (not in the Figma; a darker ocean added for contrast) |

**Contrast, already checked (WCAG ratios):**
- Text: ink on off-white 12.1; teal-navy on off-white 10.8; navy on sky 11.1; teal-navy on sand 9.2.
- Fills and dark backgrounds: navy on yellow 8.8 (button text); coral on teal-navy 7.0; coral on navy 7.7; yellow on navy 8.8.
- Muted text: `#4d6470` on off-white 6.0, on sky 5.6, on sand 5.1. Muted on dark: `#b7c9d1` on navy 7.2.
- Deep ocean `#0f6f86`: on off-white 5.5, on sky 5.2, on sand 4.7. White on deep ocean 5.8.
- **Ocean `#168aa4` is only 3.9 on off-white, 3.6 on sky and 3.3 on sand, so use it for large display text only** (headline accent words, at least 24px). For anything smaller, such as links, numbers, labels or small accent text, use deep ocean `#0f6f86`.
- **Never use the Figma's light sea blue `#5ea6b8` for text on light backgrounds** (2.6:1). It's fine as decoration or on navy (4.5).
- **Never put white text on yellow or coral.** Text on yellow is always navy.

## Checklist

### 0. Hide the sample reviews (content, do first)
- [x] Done

`testimonials` in `content/site.ts` holds sample text ("דוגמה 1/2/3", marked `TEMP SAMPLE: remove before publishing`). Set it to `[]` so the section disappears, as the "empty value = hidden section" rule requires. Item 6 changes the section's look for when real Google reviews are added later.

### 1. Switch to the new coastal palette
- [x] Done

**What:** switch the whole site (every page, not just home) from forest and copper to the palette above. This item changes **colours only**: no layout, spacing, font or photo changes.

**How:**
- Update the tokens in `:root` in `app/globals.css`. Keep the existing token names (`--color-primary`, `--color-accent`…) so components don't all need edits, and set them to the new values following the table above:
  - `--color-primary` `#143f52`, `--color-primary-dark` `#10394c`, `--color-primary-soft` sky `#e7f6fb`
  - `--color-accent` yellow `#ffd57a`, `--color-accent-bright` `#ffd57a`, `--color-accent-light` (accent text on dark) coral `#ffbe9b`, `--color-accent-dark` (small accent text on light) `#0f6f86`, `--color-accent-soft` a pale yellow tint (for example `#fdf3d9`)
  - `--color-sage` (display accent words on light) `#168aa4`
  - `--color-bg` `#fbfaf6`, `--color-surface` `#ffffff`, `--color-sand` `#f2e7d7`, `--color-sand-dark` a slightly darker sand (for example `#e6d6bf`)
  - Add `--color-sky: #e7f6fb`
  - `--color-text` `#193646`, `--color-muted` `#4d6470`, `--color-border` `rgba(20, 63, 82, 0.15)`
  - `--color-on-dark` `#fbfaf6`, `--color-on-dark-muted` `#b7c9d1`, `--color-on-dark-border` unchanged
  - Shadows: change the `rgba(14, 36, 30, …)` tint to navy `rgba(7, 42, 56, …)`
  - Rewrite the comment block at the top of `:root` to describe the new palette and its contrast rules.
- Replace the hard-coded forest tints in component CSS with the navy tint `rgba(7, 42, 56, …)` at the same opacities: `Hero.module.css` (the overlay, kept at its current strength because our hero photo is still dark), `ProtectionLayers.module.css`, `AreasStrip.module.css` (the credit badge and chip), `MobileBar.module.css`, and any others found with `grep -rnE "rgba\((8, 28, 23|14, 36, 30|244, 240, 232|251, 248, 243)" app components`. Also check `ContactForm.module.css` (`#7d8985`) and `OwnerPhone.module.css` (`#1f2a28`), and any hex values that belong to the old palette.
- `themeColor` in `app/layout.tsx` becomes `#143f52`.
- **Check every use of `--color-accent` as text.** It used to be copper text on forest. Yellow text is only allowed on navy or teal-navy, never on light backgrounds. Check every use of `--color-sage` as well: it's only allowed at display size.
- Leave the WhatsApp green, the error and success colours, the logo's gold and all photos as they are. Check that the logo still looks right on navy and on the off-white header.
- Don't change which sections are dark or light yet; that's item 7. They'll simply pick up the new colours.

**Done when:** no forest, copper or sage colours remain anywhere (grep for the old hex values and rgba tints), every page renders in the new palette, every text pair meets the contrast rules above, focus outlines are still clearly visible (the focus colour is deep ocean), and `npm run build` passes.

### 2. Services as numbered rows on sky blue
- [x] Done

Note: kept the dark photo background (user's choice), so this section is not sky blue; the rows follow the design's details on the dark tint.

**Figma:** the "What we do" section. A **pale sky-blue background (`#e7f6fb`) with navy text**. A header with a big headline (its accent word in ocean) and a short muted paragraph on the opposite side, with a thin navy line under it. Then full-width rows, each with a small bold number (deep ocean, since it's small text), the title in the display font, a short muted description and a round outlined arrow on the far end. Thin navy dividers between rows. On hover the row lightens (white at ~50%) and the arrow circle fills with ocean while the arrow turns white.
**Ours:** `components/ServiceCards.tsx` plus `.module.css`: rounded white cards on cream.
**Done when:** services render as rows on sky blue, each row is a link to its service page (if it has one), the layout stacks cleanly on mobile, and there are no card boxes.

### 3. "Who it's for" as an editorial section
- [ ] Done

Skipped: the user preferred to keep the current card layout for this section.

**Figma:** the "approach" section, on off-white. An eyebrow in a narrow column, a large statement headline in a wide column (accent words in ocean), and under it a thin line with text split into two muted columns.
**Ours:** `components/Personas.tsx` plus `.module.css`: a photo, a headline and 6 rounded cards (plus a dark CTA card).
**Done when:** the 6 personas render as a numbered list (deep-ocean number, title, text) with thin dividers and no boxes. The photo stays (unchanged), but with square corners. The "המצב שלכם קצת אחר?" CTA becomes a simple text link or outlined button, not a dark card.

### 4. Cities section on off-white with photo captions
- [ ] Done

**Figma:** the "Selected portfolio" section. Off-white background. A 3-column grid of 4:5 photos with square corners, with the middle column stepped down. A small off-white chip on the photo. Under each photo, on one thin line: the name in the display font, a small muted location line, and a small detail on the opposite side. On hover the photo zooms slightly and a round navy arrow button appears in the photo's corner.
**Ours:** `components/AreasStrip.tsx` plus `.module.css`: a dark background, the name only, and every chip says "גוש דן".
**Done when:** the section is on off-white, each card shows the city name plus a muted second line and a "לעמוד העיר" detail (from `content/site.ts`; use only real facts, otherwise leave the line out), the chip is either meaningful or removed, and the hover arrow is in place. Photo credits must stay visible. Don't change the photos themselves.

### 5. Square photo corners everywhere
- [ ] Done

**Figma:** content photos have square corners. Only the sand panel is rounded.
**Ours:** a mix of `--radius-lg` (32px) photos and square ones.
**Done when:** photos in Personas, AreasStrip, ProtectionLayers, Comparison and city pages have square corners. Buttons, chips and the one sand panel keep their rounding.

### 6. Testimonials as one big quote
- [ ] Done

**Figma:** the "Why owners choose us" section. A rounded **sand (`#f2e7d7`)** panel split in two: a photo with a small floating off-white caption card on one side, and on the other an eyebrow, one big quote in the display font (accent word in ocean), and the author (a navy initials circle, name, short detail).
**Ours:** `components/Testimonials.tsx` plus `ReviewsCarousel.tsx`: a carousel of 3 cards on a white background.
**Done when:** the component renders one large quote at a time in this layout (with simple prev/next controls if there are several), with no white section background. It must still render nothing when `testimonials` is `[]`. Check it with temporary local data, but don't commit fake reviews. Use an existing photo from `public/images` for the photo side; don't add new photos.

### 7. A bright page: off-white, one sky section, one sand panel
- [ ] Done

**Figma:** from top to bottom: a dark hero (photo), off-white numbers, off-white approach, **sky** services, off-white portfolio, a **sand** rounded panel, an off-white CTA, and a **navy** footer. Apart from the hero and footer, nothing is dark.
**Ours:** a mix of sand, off-white, dark (`section-dark`), white and sand stripes (see `homeSections` order in `content/site.ts`, the `section-alt` and `section-dark` classes in `app/globals.css`, and `ProtectionLayers`, `AreasStrip` and `Comparison`).
**Done when:** the home page is mostly off-white, the services section is the one sky section, there is at most one sand panel (the legal protection section or the quote, whichever suits better; ask the user), there are no white sections, and only the hero and footer are dark. Add a `section-sky` utility next to `section-alt`. Check the other pages that use the same classes (`app/about/page.tsx` uses `section-dark`) as well.

### 8. FAQ as divider rows in two columns
- [ ] Done

**Figma:** no FAQ, so use the same language as the service rows.
**Ours:** the FAQ block in `app/page.tsx` and `components/Faq.tsx`: white rounded boxes with circled "+" in the right half, and the left half empty.
**Done when:** on desktop the heading and the "לכל השאלות" link sit in one column and the questions in the other. Each question is a row with a thin navy divider and a small + that turns into −. No boxes. It stays keyboard-accessible, and the FAQPage JSON-LD is unchanged. The `/faq` page should look good too.

### 9. One section-header pattern everywhere
- [ ] Done

**Figma:** every section header is an eyebrow (a short yellow line before small bold text), a big headline with tight line-height (accent words in ocean), and a short muted paragraph on the opposite side, aligned to the bottom, with a thin line under the whole header.
**Ours:** `components/SectionHeading.tsx` plus per-section headers that vary, with empty gaps such as the one next to "כל מה שהדירה שלכם צריכה".
**Done when:** home page sections use one shared header pattern (extend `SectionHeading` rather than duplicating it), and no section has a large empty area next to its headline.

### 10. Smaller, calmer body text and quieter labels
- [ ] Done

**Figma:** body text around 14–16px in muted ink, and tiny bold letter-spaced labels, so the headlines dominate.
**Ours:** larger, darker body text, so headlines stand out less (body text was recently made about 7% larger on desktop, so ask the user before reducing it).
**Done when:** body and secondary text sizes and colours are tuned in `app/globals.css` (tokens, not one-off values), and every text and background pair still passes WCAG AA (4.5:1 for small text). Readability on mobile must not suffer. Hebrew needs a little more size than English, so don't copy the Figma's sizes exactly.

### 11. More movement on hover
- [ ] Done

**Figma:** arrow circles fill on hover (ocean, or yellow on dark), photos zoom slightly (scale ~1.04 over ~700ms), rows lighten, and nav links get a yellow underline that grows in.
**Ours:** only some of these.
**Done when:** these hover effects are applied consistently, only on `(hover: hover)` devices, with nothing jumping the layout, and everything is turned off under `prefers-reduced-motion`.

## Later (not part of this list)

- **Photos:** the new palette works best with bright daylight photos (sea views, sunny streets, light interiors). The hero (a house at dusk) and the AI-generated building photos are dark. These will be replaced in a separate task.
- **Favicon and `og-default.png`** may need new colours along with the photos.
