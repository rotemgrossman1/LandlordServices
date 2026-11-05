/**
 * The content for the current page's language. Server-only: `next/root-params` reads the
 * [lang] segment of the route, so components don't need it passed down.
 *
 * Hebrew is content/site.ts (the source), English is content/site.en.ts. Both have the same
 * shape: TypeScript fails the build if the English file is missing anything.
 */

import { lang as rootLang } from "next/root-params";
import { defaultLang, isLang, localePath, type Lang } from "@/lib/i18n";
import * as he from "./site";
import * as en from "./site.en";

// llms.txt is one bilingual file built from the Hebrew content only
export type SiteContent = Omit<typeof he, "llms">;

const dictionaries: Record<Lang, SiteContent> = { he, en };

export function contentFor(lang: Lang) {
  return {
    ...dictionaries[lang],
    lang,
    /** An internal path in this language: link("/contact") → "/en/contact" on the English site */
    link: (path: string) => localePath(lang, path),
  };
}

export async function getLang(): Promise<Lang> {
  const value = await rootLang();
  return isLang(value) ? value : defaultLang;
}

export async function getContent() {
  return contentFor(await getLang());
}
