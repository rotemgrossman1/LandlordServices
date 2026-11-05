"use client";

import { OPEN_COOKIE_SETTINGS } from "./CookieBanner";
import styles from "./Footer.module.css";

/** Footer link that reopens the cookie notice */
export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className={styles.linkButton}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
    >
      {label}
    </button>
  );
}
