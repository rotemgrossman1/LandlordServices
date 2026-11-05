"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { telHref } from "@/lib/format";
import { stripLang, type Lang } from "@/lib/i18n";
import Icon from "./Icon";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";
import styles from "./Header.module.css";

type Props = {
  lang: Lang;
  nav: { href: string; label: string }[]; // hrefs already in this language
  home: string;
  cta: { label: string; href: string };
  phone: string;
  brand: string;
  labels: { homeLink: string; menu: string; closeMenu: string; mainNav: string; phone: string; language: string };
  languageNames: Record<Lang, string>;
};

export default function Header({ lang, nav, home, cta, phone, brand, labels, languageNames }: Props) {
  const pathname = usePathname();
  // Hebrew pages are served from /he internally (proxy.ts), so compare without any prefix
  const path = stripLang(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu when navigating
  useEffect(() => setOpen(false), [pathname]);

  // Shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Always in the physical top-left corner: first in English (left-to-right), last in Hebrew
  // (right-to-left). Placed in the DOM where it shows, so keyboard order matches what you see.
  const switcher = <LangSwitch lang={lang} path={path} names={languageNames} label={labels.language} />;

  return (
    <header
      className={`${styles.header} ${path === "/" ? styles.overlay : ""} ${scrolled || open ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        {lang === "en" && switcher}
        <Link href={home} className={styles.logo} aria-label={`${brand} – ${labels.homeLink}`}>
          <Logo tone="light" />
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
                  aria-current={stripLang(item.href) === path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={telHref(phone)} className={styles.contact}>
              <Icon name="phone" size={20} />
              <span className="visually-hidden">{labels.phone}: </span>
              <span className="ltr">{phone}</span>
            </a>
            <Link href={cta.href} className={`btn btn-pill ${styles.cta}`}>
              {cta.label}
              <span className="btn-circle" aria-hidden="true">
                <Icon name="arrow" size={16} className="icon-diag" />
              </span>
            </Link>
          </div>
        </nav>

        {lang === "he" && switcher}
      </div>
    </header>
  );
}
