import type { MetadataRoute } from "next";
import { cityPages, site } from "@/content/site";

const routes = [
  "/",
  "/services",
  "/landlord-safe",
  ...cityPages.map((c) => `/areas/${c.slug}`),
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/privacy" || path === "/accessibility" ? 0.3 : 0.8,
  }));
}
