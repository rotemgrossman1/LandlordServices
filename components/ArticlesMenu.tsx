"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { stripLang } from "@/lib/i18n";
import Icon from "./Icon";
import styles from "./ArticlesMenu.module.css";

export type ArticlesMenuProps = {
  label: string; // "מאמרים"
  menuLabel: string; // name of the list for screen readers
  allLabel: string;
  allHref: string; // already in this language
  items: { href: string; label: string }[]; // latest articles, hrefs already in this language
  linkClass: string; // the header's nav link style
};

/**
 * "Articles" in the main navigation: a disclosure button that opens a list of the latest
 * articles and a link to all of them. Escape, a click outside or tabbing away closes it.
 */
export default function ArticlesMenu({ label, menuLabel, allLabel, allHref, items, linkClass }: ArticlesMenuProps) {
  const pathname = usePathname();
  const path = stripLang(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const current = path === "/articles" || path.startsWith("/articles/");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  return (
    <li
      ref={rootRef}
      className={styles.item}
      onKeyDown={(e) => {
        // Close only this list; the header's own Escape handler (mobile menu) waits for the next press
        if (e.key === "Escape" && open) {
          // React listens on the document, like the header's handler, so stop the other listeners there too
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`${linkClass} ${styles.button}`}
        aria-expanded={open}
        aria-controls={panelId}
        data-current={current ? "true" : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Icon name="chevron" size={16} className={styles.chevron} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!open}>
        <ul className={styles.list} aria-label={menuLabel}>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.link}
                aria-current={stripLang(item.href) === path ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={allHref} className={styles.all} aria-current={path === "/articles" ? "page" : undefined}>
          {allLabel}
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </li>
  );
}
