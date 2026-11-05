import { NextResponse, type NextRequest } from "next/server";
import { isLang, LANG_COOKIE, localePath, stripLang, type Lang } from "@/lib/i18n";
import { notFoundRoute, pageRoutes } from "@/lib/routes";

/**
 * Language routing. Hebrew pages live at the root (/services) and are rewritten to the
 * app/[lang] route as /he/services; English pages live under /en.
 *
 * A first visit to a Hebrew URL may be sent to English, in this order:
 *   1. A saved manual choice (the `lang` cookie, set by the flag switcher) always wins.
 *   2. Visitors in Israel get Hebrew, whatever their browser language.
 *   3. Elsewhere, a browser that prefers Hebrew gets Hebrew (Israelis abroad).
 *   4. Everyone else gets English.
 * Search engines and other bots are never redirected, so they index both languages.
 * An explicit /en link is never redirected back to Hebrew.
 */

const BOT = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|pagespeed|gpt|claude|perplexity/i;
const YEAR = 60 * 60 * 24 * 365;

/** The visitor's preferred browser language is Hebrew (the highest-weighted Accept-Language entry) */
function prefersHebrew(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return false;
  const top = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q)[0];
  return Boolean(top && (top.tag.startsWith("he") || top.tag.startsWith("iw")));
}

/** The default language for a visitor without a saved choice */
function detectLang(request: NextRequest): Lang {
  if (BOT.test(request.headers.get("user-agent") ?? "")) return "he";
  const country = request.headers.get("x-vercel-ip-country");
  if (!country || country === "IL") return "he"; // unknown (e.g. local dev) or Israel
  return prefersHebrew(request.headers.get("accept-language")) ? "he" : "en";
}

const known = new Set(pageRoutes);

/** Serves the page at app/[lang]<path>; unknown paths get the 404 page in that language */
function serve(request: NextRequest, lang: Lang, path: string) {
  const target = request.nextUrl.clone();
  if (known.has(path)) {
    // English URLs already match the route; Hebrew ones are rewritten to /he/...
    if (lang === "en") return NextResponse.next();
    target.pathname = path === "/" ? "/he" : `/he${path}`;
    return NextResponse.rewrite(target);
  }
  target.pathname = `/${lang}${notFoundRoute}`;
  target.search = "";
  return NextResponse.rewrite(target, { status: 404 });
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const isEnglishPath = url.pathname === "/en" || url.pathname.startsWith("/en/");

  // The flag switcher links to ?lang=he / ?lang=en: remember the choice, then show the clean URL
  const chosen = url.searchParams.get("lang");
  if (isLang(chosen)) {
    const target = url.clone();
    target.searchParams.delete("lang");
    target.pathname = localePath(chosen, stripLang(url.pathname));
    const response = NextResponse.redirect(target, 307);
    response.cookies.set(LANG_COOKIE, chosen, { path: "/", maxAge: YEAR, sameSite: "lax" });
    return response;
  }

  if (isEnglishPath) return serve(request, "en", stripLang(url.pathname));

  // /he/... is internal only: one public URL per Hebrew page
  if (url.pathname === "/he" || url.pathname.startsWith("/he/")) {
    const target = url.clone();
    target.pathname = url.pathname.slice(3) || "/";
    return NextResponse.redirect(target, 301);
  }

  const saved = request.cookies.get(LANG_COOKIE)?.value;
  const lang = isLang(saved) ? saved : detectLang(request);
  if (lang === "en") {
    const target = url.clone();
    target.pathname = localePath("en", url.pathname);
    const response = NextResponse.redirect(target, 307);
    response.headers.set("Vary", "Cookie, Accept-Language");
    return response;
  }

  return serve(request, "he", url.pathname);
}

export const config = {
  // Pages only: skip Next's internals (/_next, /__nextjs…), public images and any file with an
  // extension (robots.txt, sitemap.xml, llms.txt, icons).
  matcher: ["/((?!_|images/|.*\\.[^/]+$).*)"],
};
