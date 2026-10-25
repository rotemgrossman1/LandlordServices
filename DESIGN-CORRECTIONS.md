# Home page design corrections

Goal: make the home page below the hero more interesting and closer to the Figma design. The hero (first section) is already good, so leave it alone.

**Keep the current fonts** (Frank Ruhl Libre and Heebo). Fonts are a separate decision.

## How to work through this list

1. Do **one item at a time**, in the order below unless the user says otherwise.
2. For each item, create a branch from the latest `main` (for example `design/01-services-rows`).
3. Follow every rule in `CLAUDE.md`. In particular: all text goes in `content/site.ts`, never invent facts, use logical CSS properties only (RTL), plain CSS Modules (no Tailwind, no new dependencies), keep AA contrast and keyboard access, and run `npm run build` with no errors.
4. Take **before and after screenshots** of the changed section at desktop width (1440px) and mobile width (390px), and send them to the user.
5. **Wait for the user's approval.** If they ask for changes, make them on the same branch.
6. Once approved, merge the branch into `main`, tick the item's box below in the same merge, and push.
7. If the user rejects an item, leave its box unticked, write `Skipped: <reason>` under it, and move on.

## The Figma reference

- Figma Make file: https://www.figma.com/make/pgldS6eBLqoORl7J0vIK9Y/Real-Estate-Landing-Page
- To read it with the Figma MCP: call `get_design_context` with `fileKey: pgldS6eBLqoORl7J0vIK9Y` and `nodeId: 0:1` (load the `figma-design-to-code` guidance first). It returns links to the source files. Read `src/App.tsx` (layout) and `src/index.css` (colours, eyebrow, overlay) with the MCP resource reader.
- The Figma is English and uses Tailwind. Translate it into our Hebrew, RTL, CSS Modules setup. Copy its layout, spacing and feel, not its words or facts.
- **What makes the Figma feel premium:** almost no boxes. Big headlines with tight line-height, thin divider lines (forest at ~15–20% opacity), small copper numbers, round outlined arrow buttons, square-cornered photos, small muted body text. It uses only three backgrounds: cream, forest and one rounded sand panel.

## Checklist

### 0. Hide the sample reviews (content, do first)
- [ ] Done

`testimonials` in `content/site.ts` holds sample text ("דוגמה 1/2/3", marked `TEMP SAMPLE: remove before publishing`). Set it to `[]` so the section disappears, as the "empty value = hidden section" rule requires. Item 5 changes the section's look for when real Google reviews are added later.

Skipped: the user wants to keep the reviews section on the page.

### 1. Services as numbered rows on dark green
- [x] Done

**Figma:** the "What we do" section. Forest background. A header with a big headline and a short muted paragraph on the opposite side, with a thin line under it. Then full-width rows, each with a small copper number, the title in the display font, a short muted description and a round outlined arrow on the far end. Thin dividers between rows. On hover the row lightens slightly and the arrow circle fills copper.
**Ours:** `components/ServiceCards.tsx` plus `.module.css`: rounded white cards on cream.
**Done when:** services render as rows on forest, each row is a link to its service page (if it has one), the layout stacks cleanly on mobile, and there are no card boxes.

### 2. "Who it's for" as an editorial section
- [ ] Done

**Figma:** the "approach" section. An eyebrow in a narrow column, a large statement headline in a wide column, and under it a thin line with text split into two columns.
**Ours:** `components/Personas.tsx` plus `.module.css`: a photo, a headline and 6 rounded cards (plus a dark CTA card).
**Done when:** the 6 personas render as a numbered list (copper number, title, text) with thin dividers and no boxes. The photo stays, but with square corners. The "המצב שלכם קצת אחר?" CTA becomes a simple text link or outlined button, not a dark card.

Skipped: the user preferred the existing card layout.

### 3. Cities section on cream with photo captions
- [x] Done

**Figma:** the "Selected portfolio" section. Cream background. A 3-column grid of 4:5 photos with square corners, with the middle column stepped down. A small cream chip on the photo. Under each photo, on one thin line: the name in the display font, a small muted location line, and a small detail on the opposite side. On hover the photo zooms slightly and a round forest arrow button appears in the photo's corner.
**Ours:** `components/AreasStrip.tsx` plus `.module.css`: forest background, the name only, and every chip says "גוש דן".
**Done when:** the section is on cream, each card shows the city name plus a muted second line and a "לעמוד העיר" detail (from `content/site.ts`; use only real facts, otherwise leave the line out), the chip is either meaningful or removed, and the hover arrow is in place. Photo credits must stay visible.
At the user's request the city photos are a little smaller (10:11) and have rounded corners (`--radius`), unlike the Figma.

### 4. Square photo corners everywhere
- [ ] Done

**Figma:** content photos have square corners. Only the sand panel is rounded.
**Ours:** a mix of `--radius-lg` (32px) photos and square ones.
**Done when:** photos in Personas, AreasStrip, ProtectionLayers and city pages have square corners. Buttons, chips and the one sand panel keep their rounding.

### 5. Testimonials as one big quote
- [ ] Done

**Figma:** the "Why owners choose us" section. A rounded sand panel split in two: a photo with a small floating cream caption card on one side, and on the other an eyebrow, one big quote in the display font, and the author (initials circle, name, short detail).
**Ours:** `components/Testimonials.tsx` plus `ReviewsCarousel.tsx`: a carousel of 3 cards on a white background.
**Done when:** the component renders one large quote at a time in this layout (with simple prev/next controls if there are several), with no white background. It must still render nothing when `testimonials` is `[]`. Check it with temporary local data, but don't commit fake reviews.

### 6. Only three backgrounds, no white
- [ ] Done

**Figma:** cream, then forest, then cream, then one sand panel, then cream, then a forest footer.
**Ours:** sand, cream, forest, white, forest, sand and cream stripes (see `homeSections` order and the `section-alt` / `section-dark` classes).
**Done when:** the home page alternates cream and forest, with one sand panel at most (the legal protection section). No white sections. Check the other pages that use the same classes as well.

### 7. FAQ as divider rows in two columns
- [ ] Done

**Figma:** no FAQ, so use the same language as the service rows.
**Ours:** the FAQ block in `app/page.tsx` and `components/Faq.tsx`: white rounded boxes with circled "+" in the right half, and the left half empty.
**Done when:** on desktop the heading and the "לכל השאלות" link sit in one column and the questions in the other. Each question is a row with a thin divider and a small + that turns into −. No boxes. It stays keyboard-accessible, and the FAQPage JSON-LD is unchanged. The `/faq` page should look good too.

### 8. One section-header pattern everywhere
- [ ] Done

**Figma:** every section header is an eyebrow (a short copper line before small bold text), a big headline with tight line-height, and a short muted paragraph on the opposite side, aligned to the bottom, with a thin line under the whole header.
**Ours:** `components/SectionHeading.tsx` plus per-section headers that vary, with empty gaps such as the one next to "כל מה שהדירה שלכם צריכה".
**Done when:** home page sections use one shared header pattern (extend `SectionHeading` rather than duplicating it), and no section has a large empty area next to its headline.

### 9. Smaller, calmer body text and quieter labels
- [ ] Done

**Figma:** body text around 14–16px in muted ink, and tiny bold letter-spaced labels, so the headlines dominate.
**Ours:** larger, darker body text, so headlines stand out less.
**Done when:** body and secondary text sizes and colours are tuned in `app/globals.css` (tokens, not one-off values), and every text and background pair still passes WCAG AA (4.5:1 for small text). Readability on mobile must not suffer. Hebrew needs a little more size than English, so don't copy the Figma's sizes exactly.

### 10. More movement on hover
- [ ] Done

**Figma:** arrow circles fill copper on hover, photos zoom slightly (scale ~1.04 over ~700ms), rows lighten, and nav links get a copper underline that grows in.
**Ours:** only some of these.
**Done when:** these hover effects are applied consistently, only on `(hover: hover)` devices, with nothing jumping the layout, and everything is turned off under `prefers-reduced-motion`.
