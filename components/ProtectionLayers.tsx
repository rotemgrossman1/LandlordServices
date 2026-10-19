import Image from "next/image";
import Link from "next/link";
import { partner, protection, stats } from "@/content/site";
import { initials } from "@/lib/format";
import Icon from "./Icon";
import styles from "./ProtectionLayers.module.css";

/**
 * The legal edge: concentric layers of protection around the owner's apartment.
 * With `showLinks` (home page) it also shows who stands behind the shield, with real proof.
 */
export default function ProtectionLayers({ showLinks = true }: { showLinks?: boolean }) {
  const layers = protection.layers;
  const proof = stats.filter((s) => s.value);
  return (
    <section className={`section section-dark ${styles.section}`} aria-labelledby="protection-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="protection-title" className={styles.heading}>
            {protection.title}
          </h2>
          <p className={`lead ${styles.lead}`}>{protection.lead}</p>
        </div>

        <div className={styles.inner}>
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

          <ol className={styles.list}>
            {layers.map((l, i) => (
              <li key={l.title} className={`${styles.item} ${i === layers.length - 1 ? styles.itemSafe : ""}`}>
                <span className={styles.num} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className={styles.title}>{l.title}</h3>
                  <p className={styles.text}>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {showLinks && partner.name && (
          <div className={styles.partner}>
            {partner.photo ? (
              <Image src={partner.photo} alt={partner.name} width={128} height={128} className={styles.avatar} />
            ) : (
              <span className={styles.avatar} aria-hidden="true">
                {initials(partner.name)}
              </span>
            )}
            <div className={styles.person}>
              <h3 className={styles.name}>{partner.name}</h3>
              <p className={styles.role}>{partner.role}</p>
              {partner.bio && <p className={styles.bio}>{partner.bio}</p>}
              <Link href="/about#partner-title" className={styles.more}>
                {protection.partnerLink}
                <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className={styles.proof}>
              {proof.length > 0 && (
                <dl className={styles.stats}>
                  {proof.map((s) => (
                    <div key={s.label}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <Link href="/landlord-safe" className="btn btn-light">
                {protection.safeLink}
                <Icon name="arrow" size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
