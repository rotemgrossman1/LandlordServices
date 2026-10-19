"use client";

import { useEffect, useState } from "react";
import { cta, site } from "@/content/site";
import { whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import styles from "./WhatsAppFab.module.css";

/**
 * Floating WhatsApp button (desktop; mobile uses MobileBar). Hidden when no number is set,
 * and while an element marked `data-fab-hide` (the hero, the footer) is on screen, since
 * those already show a WhatsApp button. Without JavaScript it simply stays visible.
 */
export default function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-fab-hide]");
    if (targets.length === 0 || !("IntersectionObserver" in window)) return;
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setHidden(onScreen.size > 0);
    });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  if (!site.whatsapp) return null;
  return (
    <a
      href={whatsappHref(site.whatsapp, cta.whatsappText)}
      className={`${styles.fab} ${hidden ? styles.hidden : ""}`}
      rel="noopener"
      target="_blank"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <Icon name="whatsapp" size={26} />
      <span className={styles.label}>{cta.whatsappLong}</span>
    </a>
  );
}
