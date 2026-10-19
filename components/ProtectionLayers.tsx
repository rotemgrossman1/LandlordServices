import Image from "next/image";
import Link from "next/link";
import { partner, protection } from "@/content/site";
import { initials } from "@/lib/format";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./ProtectionLayers.module.css";

/**
 * The legal edge, in the design's sand split card: concentric protection rings on a
 * forest panel, and the four layers beside them. With `showLinks` (home page) it also
 * shows who stands behind the shield and links on.
 */
export default function ProtectionLayers({ showLinks = true }: { showLinks?: boolean }) {
  const layers = protection.layers;
  const safe = layers[layers.length - 1];
  return (
    <section className={styles.section} aria-labelledby="protection-title">
      <div className={styles.card}>
        <div className={`on-dark ${styles.visualPanel}`}>
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
              <Icon name="home" size={30} />
              <span>{protection.centerLabel}</span>
            </div>
          </div>
          {safe && (
            <div className={styles.note}>
              <p className={styles.noteTitle}>{safe.title}</p>
              <p className={styles.noteText}>{safe.text}</p>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <p className="eyebrow">{protection.eyebrow}</p>
          <h2 id="protection-title" className={styles.heading}>
            <AccentText text={protection.title} accent={protection.titleAccent} />
          </h2>
          <p className={styles.lead}>{protection.lead}</p>

          <ol className={styles.list}>
            {layers.map((l, i) => (
              <li key={l.title} className={styles.item}>
                <span className={`${styles.num} ${i === layers.length - 1 ? styles.numSafe : ""}`} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.title}>{l.title}</h3>
                  <p className={styles.text}>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {showLinks && partner.name && (
            <div className={styles.partner}>
              {partner.photo ? (
                <Image src={partner.photo} alt={partner.name} width={56} height={56} className={styles.avatar} />
              ) : (
                <span className={styles.avatar} aria-hidden="true">
                  {initials(partner.name)}
                </span>
              )}
              <div>
                <p className={styles.name}>{partner.name}</p>
                <p className={styles.role}>{partner.role}</p>
                {partner.bio && <p className={styles.bio}>{partner.bio}</p>}
                {protection.partnerProof && <p className={styles.proof}>{protection.partnerProof}</p>}
              </div>
            </div>
          )}

          {showLinks && (
            <div className={styles.links}>
              <Link href="/landlord-safe" className="btn btn-outline">
                {protection.safeLink}
                <Icon name="arrow" size={18} />
              </Link>
              <Link href="/about#partner-title" className={styles.more}>
                {protection.partnerLink}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
