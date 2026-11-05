/**
 * Languages. Hebrew lives at the site root (/services), English under /en (/en/services).
 * Safe to import from client components (no content, no server APIs).
 */

export const langs = ["he", "en"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "he";

/** Name of the cookie that remembers a visitor's manual language choice (see proxy.ts) */
export const LANG_COOKIE = "lang";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (langs as readonly string[]).includes(value);
}

export const langMeta: Record<Lang, { dir: "rtl" | "ltr"; ogLocale: string; dateLocale: string }> = {
  he: { dir: "rtl", ogLocale: "he_IL", dateLocale: "he-IL" },
  en: { dir: "ltr", ogLocale: "en_US", dateLocale: "en-US" },
};

/** "/services" → "/en/services" for English; Hebrew paths stay as they are. Anchors and external URLs pass through. */
export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLang || !path.startsWith("/")) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** "/en/services" (or the internal "/he/services") → "/services": the path without the language prefix */
export function stripLang(pathname: string): string {
  const m = pathname.match(/^\/(en|he)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
}
