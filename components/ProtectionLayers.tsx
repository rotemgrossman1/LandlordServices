import Image from "next/image";
import Link from "next/link";
import { images, protection } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./ProtectionLayers.module.css";

/**
 * The legal edge, in the design's sand split card: a law photo on one side with the
 * Landlord Safe note over it, and the four layers beside it. With `showLinks`
 * (home page) it links on to the Landlord Safe page.
 */
export default function ProtectionLayers({ showLinks = true }: { showLinks?: boolean }) {
  const layers = protection.layers;
  const safe = layers[layers.length - 1];
  return (
    <section className={styles.section} aria-labelledby="protection-title">
      <div className={styles.card}>
        <div className={`on-dark ${styles.visualPanel}`}>
          {images.protection && (
            <Image
              src={images.protection}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.photo}
            />
          )}
          <div className={styles.scrim} aria-hidden="true" />
          {safe && (
            <div className={styles.note} data-reveal>
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

          {showLinks && (
            <div className={styles.links}>
              <Link href="/landlord-safe" className="btn btn-outline">
                {protection.safeLink}
                <Icon name="arrow" size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
