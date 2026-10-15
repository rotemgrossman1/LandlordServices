"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades in elements marked with `data-reveal` as they scroll into view.
 * Elements already on screen, and visitors who prefer reduced motion, see no
 * animation. Without JavaScript everything is simply visible.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal-in)");
    els.forEach((el) => {
      // Only animate what starts below the fold. Already-armed elements (from an
      // earlier run of this effect) are observed again so they never stay hidden.
      if (!el.classList.contains("reveal-armed")) {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("reveal-armed");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
