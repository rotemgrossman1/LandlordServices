import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { langs, localePath } from "@/lib/i18n";
import { pageRoutes } from "@/lib/routes";

const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return pageRoutes.flatMap((path) =>
    langs.map((lang) => ({
      url: absolute(localePath(lang, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/privacy" || path === "/accessibility" ? 0.3 : 0.8,
      alternates: {
        languages: {
          he: absolute(localePath("he", path)),
          en: absolute(localePath("en", path)),
          "x-default": absolute(localePath("en", path)),
        },
      },
    })),
  );
}
