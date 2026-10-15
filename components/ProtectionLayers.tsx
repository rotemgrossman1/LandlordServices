import Link from "next/link";
import { protection } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./ProtectionLayers.module.css";

/** The legal edge: concentric layers of protection around the owner's apartment. */
export default function ProtectionLayers({ showLinks = true }: { showLinks?: boolean }) {
  const layers = protection.layers;
  return (
    <section className={`section section-dark ${styles.section}`} aria-labelledby="protection-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.visual} aria-hidden="true" data-reveal>
          {[...layers].reverse().map((l, i) => (
            <div
              key={l.title}
              className={`${styles.ring} ${i === 0 ? styles.ringOuter : ""}`}
              style={{ "--ring": layers.length - i } as React.CSSProperties}
            >
              <span className={styles.badge}>{layers.length - i}</span>
            </div>
          ))}
          <div className={styles.core}>
            <Icon name="home" size={34} />
            <span>{protection.centerLabel}</span>
          </div>
        </div>

        <div>
          <SectionHeading id="protection-title" eyebrow={protection.eyebrow} title={protection.title} lead={protection.lead} />
          <ol className={styles.list}>
            {layers.map((l, i) => (
              <li
                key={l.title}
                className={`${styles.item} ${i === layers.length - 1 ? styles.itemSafe : ""}`}
                data-reveal
                style={{ "--reveal-i": i } as React.CSSProperties}
              >
                <span className={styles.num} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.title}>
                    <Icon name={l.icon} size={20} />
                    {l.title}
                  </h3>
                  <p className={styles.text}>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {showLinks && (
            <div className="btn-row">
              <Link href="/landlord-safe" className="btn btn-light">
                {protection.safeLink}
                <Icon name="arrow" size={20} />
              </Link>
              <Link href="/about#partner-title" className="btn btn-ghost-light">
                {protection.partnerLink}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
