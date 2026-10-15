"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cta, labels, nav, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
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

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${site.nameHe} – ${labels.homeLink}`}>
          <Logo />
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
            {site.whatsapp ? (
              <a
                href={whatsappHref(site.whatsapp, cta.whatsappText)}
                className={styles.contact}
                rel="noopener"
                target="_blank"
              >
                <Icon name="whatsapp" size={20} />
                <span className="visually-hidden">{labels.phoneAndWhatsapp}: </span>
                <span className="ltr">{site.phone}</span>
              </a>
            ) : (
              <a href={telHref(site.phone)} className={styles.contact}>
                <Icon name="phone" size={20} />
                <span className="visually-hidden">{labels.phone}: </span>
                <span className="ltr">{site.phone}</span>
              </a>
            )}
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
