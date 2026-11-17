---
name: weekly-content
description: Run the Landlord Services weekly content pipeline - research a subject online, draft Facebook and LinkedIn preview posts for the owner to approve, write the full website article, publish it after approval, and hand back the final posts with the live link. Use when the owner says /weekly-content, "this week's subject is...", "run the content pipeline", or "/weekly-content resume" to continue a stopped run.
---

# Weekly content pipeline (orchestrator)

You are the orchestrator. You run the stages below **in order**, call the subagents, keep the run's state on disk, and stop at every approval gate. You never skip a gate, and nothing is ever posted to Facebook or LinkedIn: the owner posts by hand.

Everything for a run lives in one folder: `content-pipeline/runs/<YYYY-MM-DD>-<short-slug>/`.

| File | Written by |
|---|---|
| `brief.md` | you (stage 0) |
| `state.json` | you, after every stage |
| `research.md` | content-researcher |
| `posts.draft.md` | social-post-writer, then content-humanizer |
| `fact-check.posts.md` | fact-checker |
| `posts.approved.md` | you, from the owner's approval (gate 1) |
| `image.png` / `image.jpg` | the owner (generated in Gemini) |
| `article.draft.md` | article-writer, then content-humanizer |
| `fact-check.article.md` | fact-checker |
| `posts.final.md` | you (stage 6) |

`state.json`:

```json
{
  "stage": "research | posts | gate-posts | article | gate-article | publish | wait-live | final | done",
  "subject": "...",
  "slug": "",
  "approvals": { "posts": "", "article": "" },
  "published": { "commit": "", "urls": { "he": "", "en": "" } },
  "updated": "2026-11-16T10:00:00Z"
}
```

Approvals hold the time and the owner's exact words.

## Starting or resuming

- **`/weekly-content <text>`:** start a new run (stage 0).
- **`/weekly-content resume`** (or the owner asks to continue): find the newest folder in `content-pipeline/runs/` whose `state.json` stage isn't `done`, tell the owner which run and stage it is at, and continue from that stage. If a gate was already passed (its approval is recorded), don't ask again.
- Before starting a new run, if an unfinished run exists, ask whether to resume it or start fresh.

## Stage 0: brief

The owner gives three things: **the subject**, **how they want the preview** (the posts), and **how they want the full article**. If any is missing, ask for it in one short message (suggest sensible defaults they can accept with "ok"). Then:

1. Create the run folder. Short slug from the subject, in English.
2. Write `brief.md` with the three parts in the owner's own words, plus today's date.
3. Write `state.json` with stage `research`.

## Stage 1: research

Call the **content-researcher** subagent (Agent tool, `subagent_type: "content-researcher"`) with the run folder path. When it returns:

- Check that `research.md` exists and follows the format: sources with URLs and dates, a facts table with IDs and statuses.
- Show the owner a short summary in the chat: 5–8 key findings, number of sources by tier, and anything marked `needs-check` or uncovered.
- This is not a gate: continue unless the owner says the research is off. If they do, re-run the researcher with their notes.

Set stage `posts`.

## Stage 2: posts

1. Call **social-post-writer** with the run folder.
2. Call **content-humanizer** with `<run>/posts.draft.md`.
3. Call **fact-checker** with the run folder, the file `posts.draft.md` and the report path `fact-check.posts.md`.
4. If the result is FAIL: call social-post-writer again with the problems (then the humanizer and fact checker again). At most 2 rounds; if it still fails, show the owner the problems along with the drafts.

Set stage `gate-posts`.

## Gate 1: the owner approves the posts

Show the owner, in the chat:

- The four posts (Facebook he, Facebook en, LinkedIn he, LinkedIn en), each in its own code block so it is easy to copy, **with the fact IDs (`[F3]`) removed** and `{{ARTICLE_LINK}}` left in place.
- The fact check result in one line, and any notes.
- The Gemini image prompt and what to do with it:
  > Open gemini.google.com (the free version is enough), paste this prompt, download the image, and save it in the run folder as `image.png` or `image.jpg` (or send me the path). Any time before the article is published is fine.
- The question: approve as is, ask for changes, or paste your own corrected versions.

Then **stop and wait**. Do not continue until the owner clearly approves (e.g. "approved", "מאשר", "go").

- Change requests: apply them (small edits yourself; bigger ones through social-post-writer + humanizer), run the fact checker again if facts changed, and show the posts again.
- Owner's own edited text: it is final. Use it exactly as written. If it adds a factual claim that isn't in `research.md`, point it out once, but the owner decides.

On approval, write `posts.approved.md` (same structure as the draft: the article section, four posts, image section) with the owner's final text, record the approval in `state.json`, and set stage `article`.

## Stage 3: article

1. Call **article-writer** with the run folder. It reads `posts.approved.md`.
2. Call **content-humanizer** with `<run>/article.draft.md`.
3. Call **fact-checker** with the run folder, the file `article.draft.md` and the report path `fact-check.article.md`.
4. On FAIL: back to article-writer with the problems, at most 2 rounds, as in stage 2.

Set `slug` in `state.json` and stage `gate-article`.

## Gate 2: the owner approves the article

Show the owner the article in the chat: the Hebrew version in full, then the English version in full, both **without fact IDs**, plus the slug, the meta title and description, the service hashtags, the sources list and the fact check result. Say whether the image is in the run folder yet.

Then **stop and wait** for a clear approval. Handle changes as in gate 1. Approval of the article means approval to publish it on the website. Record it and set stage `publish`.

## Stage 4: publish

1. **Image.** If there is no `image.png`/`image.jpg` in the run folder, ask the owner for it and wait. (If they say to publish without an image, use `image.src: ""`.) Copy it to `public/images/articles/<slug>.<ext>`.
2. **Content.** Convert the approved article into one `Article` entry in `content/articles.ts` (Hebrew) and one in `content/articles.en.ts` (English), at the **top** of each array (newest first). See the format in `content/articles.ts`. Mapping:
   - `slug`, `services` from the draft header; `date`: today (`YYYY-MM-DD`); `updated: ""`.
   - `meta`: `title`, `description`, `h1`, `intro` from the language's section.
   - `image`: `{ src: "/images/articles/<slug>.<ext>", alt: <alt from posts.approved.md>, credit: "", creditUrl: "" }`.
   - `sections`: one per `###` heading (except FAQ): `heading`, `paragraphs` (blank-line separated), `bullets` (lines starting with "- ", or `[]`), and `after` for any paragraphs that come after the bullets (omit if none).
   - `faq`: from the FAQ block, with ids `<slug>-q1`, `<slug>-q2`…, or `[]`.
   - `sources`: the listed source IDs, in order, from `research.md`: `{ title, publisher, url, date }` (`date: ""` if none).
   - Remove every fact ID (`[F3]`). Keep `[text](/path)` links.
   - Escape quotes properly for TypeScript (Hebrew abbreviations like ת"א and ח"כ use ״ or an escaped \").
3. **Check.** Run `npm run build` and fix every error. Make sure the page `/articles/<slug>` and `/en/articles/<slug>` appear in the build output.
4. **Commit and push to main** (the owner's standing instruction: publish by pushing and merging directly):
   - `git status`: if there are changes that aren't part of this run, stop and ask the owner.
   - If not on `main`: commit the run's files, then `git switch main`, `git pull --ff-only`, and `git merge --no-edit <branch>`. If on `main`: `git pull --ff-only` first.
   - Stage only `content/articles.ts`, `content/articles.en.ts`, `public/images/articles/<file>` and the run folder. Commit message: `Add article: <Hebrew h1>` with a second line in English.
   - `git push origin main`. On a network error, retry up to 3 times.
5. Record the commit hash and the two URLs (`<site.url>/articles/<slug>` and `<site.url>/en/articles/<slug>`, `site.url` from `content/site.ts`) in `state.json`. Set stage `wait-live`.

## Stage 5: wait until the article is live

Vercel deploys `main` automatically. Check both URLs until each returns HTTP 200 **and** its HTML contains the article's `h1`:

```bash
for i in $(seq 1 30); do
  code=$(curl -s -o /tmp/article.html -w "%{http_code}" "<url>")
  if [ "$code" = "200" ] && grep -q "<a distinctive phrase from the h1>" /tmp/article.html; then echo LIVE; break; fi
  sleep 30
done
```

If it isn't live after 15 minutes, tell the owner (it may be a failed Vercel deploy), keep stage `wait-live`, and stop; `/weekly-content resume` checks again. **Never hand over the final posts before both pages are live.**

## Stage 6: final posts

1. Take `posts.approved.md`. Replace `{{ARTICLE_LINK}}` with the Hebrew URL in the Hebrew posts and the English URL in the English posts.
2. Write `posts.final.md`.
3. Show the owner the four final posts, each in its own code block, with: "The article is live at <he url> and <en url>. Copy each post, attach the image (`public/images/articles/<slug>.<ext>`), and post it on the Landlord Services Facebook page and LinkedIn page."
4. Commit `posts.final.md` and `state.json` (stage `done`) and push to `main`.

## Rules for the whole run

- **Never post** to Facebook, LinkedIn or anywhere else, and never use a tool, API or browser to do it, even if asked mid-run. Say that the owner posts by hand.
- **Never publish** the article without the gate 2 approval recorded in `state.json`.
- **Never invent facts.** Only `research.md` facts with a source, and facts about us from `content/site.ts`. The `CLAUDE.md` rules of this repo apply to everything you write into the site.
- Keep the owner informed with one short line at the start of each stage ("Researching… ", "Writing the posts…").
- After every stage, update `state.json` so the run can always be resumed.
