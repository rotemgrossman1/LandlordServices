"use client";

import { cookieNotice } from "@/content/site";
import { OPEN_COOKIE_SETTINGS } from "./CookieBanner";
import styles from "./Footer.module.css";

/** Footer link that reopens the cookie notice */
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className={styles.linkButton}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
    >
      {cookieNotice.settings}
    </button>
  );
}
