import { site } from "@/content/site";
import styles from "./Logo.module.css";

/**
 * Temporary brand mark: a house with a keyhole, plus the Hebrew/English wordmark.
 * To use the official logo, replace the <svg> with an <Image> of the logo file.
 */
export default function Logo({
  tone = "dark",
  markOnly = false,
}: {
  tone?: "dark" | "light";
  markOnly?: boolean;
}) {
  return (
    <span className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}>
      <svg className={styles.mark} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <rect width="40" height="40" rx="11" className={styles.markBg} />
        <path
          d="M9.5 19.5 20 10.5l10.5 9M13 17v12.5h14V17"
          fill="none"
          className={styles.markLine}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="21.6" r="2.4" className={styles.markKey} />
        <path d="M18.9 22.8h2.2l.6 3.9h-3.4z" className={styles.markKey} />
      </svg>
      {!markOnly && (
        <span className={styles.words}>
          <span className={styles.he}>{site.nameHe}</span>
          <span className={styles.en}>{site.name}</span>
        </span>
      )}
    </span>
  );
}
