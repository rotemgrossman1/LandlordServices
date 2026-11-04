"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cookieNotice } from "@/content/site";
import styles from "./CookieBanner.module.css";

const STORAGE_KEY = "cookie-consent";
export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";
export type CookieConsent = "accepted" | "declined";

/** The visitor's choice, or null if they haven't chosen. Future analytics should run only when "accepted". */
export function getCookieConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Cookie notice. Shown until the visitor accepts or declines; the footer's "הגדרות עוגיות"
 * link reopens it. The choice is kept in localStorage and announced with a
 * `cookie-consent` window event so any optional script can wait for "accepted".
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const reopened = useRef(false);

  useEffect(() => {
    if (getCookieConsent() === null) setOpen(true);
    const reopen = () => {
      reopened.current = true;
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  // When reopened from the footer, move focus into the notice so keyboard users land on it
  useEffect(() => {
    if (open && reopened.current) acceptRef.current?.focus();
  }, [open]);

  function choose(value: CookieConsent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // storage blocked: the notice will simply show again next visit
    }
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
    setOpen(false);
    reopened.current = false;
  }

  if (!open) return null;
  return (
    <section className={styles.banner} aria-labelledby="cookie-title">
      <div className={styles.text}>
        <h2 id="cookie-title" className={styles.title}>
          {cookieNotice.title}
        </h2>
        <p>
          {cookieNotice.text} <Link href="/privacy">{cookieNotice.policyLink}</Link>
        </p>
      </div>
      <div className={styles.actions}>
        <button ref={acceptRef} type="button" className="btn btn-primary" onClick={() => choose("accepted")}>
          {cookieNotice.accept}
        </button>
        <button type="button" className="btn btn-outline" onClick={() => choose("declined")}>
          {cookieNotice.decline}
        </button>
      </div>
    </section>
  );
}
