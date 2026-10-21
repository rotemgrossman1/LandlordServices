import { site } from "@/content/site";
import { logoSkyline, logoWordmark } from "./logoPaths";
import styles from "./Logo.module.css";

/**
 * The official logo: gold skyline over the LANDLORD SERVICES wordmark.
 * The wordmark uses the current text color, so it stays readable on light and dark backgrounds.
 * markOnly: just the skyline on a rounded tile, for small avatar-sized spots.
 */
export default function Logo({
  tone = "dark",
  markOnly = false,
}: {
  tone?: "dark" | "light";
  markOnly?: boolean;
}) {
  if (markOnly) {
    return (
      <svg className={styles.tile} viewBox="47 6 160 160" aria-hidden="true" focusable="false">
        <rect x="47" y="6" width="160" height="160" rx="44" className={styles.tileBg} />
        {logoSkyline.map((d) => (
          <path key={d} d={d} className={styles.skyline} />
        ))}
      </svg>
    );
  }

  return (
    <span className={`${styles.logo} ${tone === "light" ? styles.light : ""}`}>
      <svg className={styles.mark} viewBox="64 48 126 139" role="img" aria-label={site.nameHe}>
        {logoSkyline.map((d) => (
          <path key={d} d={d} className={styles.skyline} />
        ))}
        {logoWordmark.map((d) => (
          <path key={d} d={d} fill="currentColor" />
        ))}
      </svg>
    </span>
  );
}
