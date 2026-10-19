import Link from "next/link";
import { home, services } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./ServiceCards.module.css";

/** Home "what we do": the design's dark numbered rows; each row links to its full description. */
export default function ServiceCards() {
  if (services.length === 0) return null;
  return (
    <section className={`section section-dark ${styles.section}`} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">{home.servicesEyebrow}</p>
            <h2 id="services-title" className={styles.heading}>
              <AccentText text={home.servicesTitle} accent={home.servicesTitleAccent} block />
            </h2>
          </div>
          {home.servicesLead && <p className={styles.lead}>{home.servicesLead}</p>}
        </div>

        <ol className={styles.list}>
          {services.map((s, i) => (
            <li key={s.id}>
              <Link href={`/services#${s.id}`} className={styles.row}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.short}</p>
                <span className={styles.circle} aria-hidden="true">
                  <Icon name="arrow" size={18} className="icon-diag" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className={styles.more}>
          <Link href="/services">
            {home.servicesMore}
            <Icon name="arrow" size={18} />
          </Link>
        </p>
      </div>
    </section>
  );
}
