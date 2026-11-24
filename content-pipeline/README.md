# Weekly content pipeline

A weekly article on the website, with Facebook and LinkedIn posts that preview it. It runs inside Claude Code on your computer, in this repo, only when you start it. Nothing is ever posted for you: you get the final posts to copy and post yourself.

## Run it

In Claude Code, in this folder:

```
/weekly-content <this week's subject>. Preview: <how you want the posts>. Article: <how you want the article>.
```

Example:

```
/weekly-content The 2027 arnona changes in Tel Aviv. Preview: short and practical, what owners need to check. Article: a clear guide with what changed, who it affects and what to do.
```

If you stop in the middle (close Claude Code, come back tomorrow), continue with:

```
/weekly-content resume
```

## What happens

1. **Research.** The researcher searches the web (sources in [sources.md](sources.md)) and writes `research.md`: every source with its link and date, and every fact taken from it. You get a short summary.
2. **Posts.** The post writer drafts Facebook and LinkedIn posts in Hebrew and English. The humanizer edits them in our voice ([voice.md](voice.md)), and the fact checker checks every claim. You get the four posts and a prompt for the image.
3. **You approve the posts.** Approve, ask for changes, or paste your own edited versions. Your version is final, and the article is written to match it.
4. **Image.** Paste the image prompt into [Gemini](https://gemini.google.com) (free), download the image and save it in the run folder as `image.png` or `image.jpg`. Do this any time before the article is published.
5. **Article.** The article writer writes the full article (Hebrew and English) from the research and your approved posts. Then the humanizer and the fact checker go over it.
6. **You approve the article.** Approving means "publish it".
7. **Publish.** The article is added to the site (`content/articles.ts` and `content/articles.en.ts`), the build is checked, and it is pushed to `main`. Vercel deploys it.
8. **Live check.** The pipeline waits until both the Hebrew and English pages are really online.
9. **Final posts.** Only then you get the final posts with the real article link. Copy them, attach the image and post them.

## Files

- `runs/<date>-<subject>/`: everything from one run (brief, research, drafts, fact checks, approvals, final posts). Kept in git as a record of what was published and why.
- `sources.md`: where research comes from and how much to trust each source. Edit it to add or remove sites.
- `voice.md`: how we write, with the owner's reference post as the standard, lengths and the banned AI phrases. Edit it to change the style.
- The agents themselves are in `.claude/agents/` (content-researcher, social-post-writer, content-humanizer, article-writer, fact-checker), and the orchestrator is `.claude/skills/weekly-content/SKILL.md`.
