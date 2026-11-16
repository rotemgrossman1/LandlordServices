/**
 * Articles (/articles and /articles/<slug>), in Hebrew. The English versions are in
 * content/articles.en.ts: same slugs, same order, same facts. Newest article first.
 *
 * Written by the weekly content pipeline (.claude/skills/weekly-content) and published only
 * after the owner approves it. Every fact must come from one of the article's `sources`.
 *
 * Inside paragraphs and bullets, [text](/path) links to one of our pages (it gets the /en
 * prefix on English pages) and [text](https://…) links to an outside site.
 */

import type { FaqItem, PageMeta, Photo } from "./site";

export type ArticleSection = {
  heading: string; // an H2
  paragraphs: string[];
  bullets: string[]; // shown after the paragraphs; [] = none
};

export type ArticleSource = {
  title: string; // the page's own title
  publisher: string; // e.g. "רשות המסים", "גלובס"
  url: string;
  date: string; // the source's publication date, "2026-10-20"; "" if the page has none
};

export type Article = {
  slug: string; // URL: /articles/<slug>, the same in both languages
  date: string; // publication date, "2026-11-16"
  updated: string; // last real update, or ""
  meta: PageMeta; // title + description for search; h1; intro = the opening paragraph
  image: Photo; // src "" = no image. Illustrative images say so in `alt` and have no credit.
  services: string[]; // ids from `services` in site.ts; shown as hashtags linking to /services#<id>
  sections: ArticleSection[];
  faq: FaqItem[]; // [] = no FAQ section
  sources: ArticleSource[];
};

export const articles: Article[] = [];
