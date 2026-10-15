"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cta, labels, nav, site } from "@/content/site";
import { telHref } from "@/lib/format";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when navigating
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${site.nameHe} – ${labels.homeLink}`}>
          <span className={styles.logoHe}>{site.nameHe}</span>
          <span className={styles.logoEn}>{site.name}</span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burger} aria-hidden="true" />
          <span className="visually-hidden">{open ? labels.closeMenu : labels.menu}</span>
        </button>

        <nav
          id="main-nav"
          className={`${styles.nav} ${open ? styles.open : ""}`}
          aria-label={labels.mainNav}
        >
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={telHref(site.phone)} className={styles.phone}>
              <span className="visually-hidden">{labels.phone}: </span>
              <span className="ltr">{site.phone}</span>
            </a>
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
