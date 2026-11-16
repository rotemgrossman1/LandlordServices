import { articles, cityPages } from "@/content/site";

/**
 * Every page path, without the language prefix. Each exists in Hebrew (/x) and English (/en/x).
 * Used by the sitemap and by proxy.ts, which sends any other URL to the 404 page.
 * Add new pages here.
 */
export const pageRoutes = [
  "/",
  "/services",
  "/landlord-safe",
  ...cityPages.map((c) => `/areas/${c.slug}`),
  // The articles list exists only once there is an article (an empty section stays hidden)
  ...(articles.length > 0 ? ["/articles", ...articles.map((a) => `/articles/${a.slug}`)] : []),
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/accessibility",
];

/** Where proxy.ts rewrites unknown URLs (app/[lang]/page-not-found), served with a 404 status */
export const notFoundRoute = "/page-not-found";
