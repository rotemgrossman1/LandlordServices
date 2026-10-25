import Link from "next/link";
import { home, pages, services } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./ServiceCards.module.css";

/** Home "what we do": numbered rows on forest (number, title, one line, arrow); each row links to its full description. */
export default function ServiceCards() {
  if (services.length === 0) return null;
  return (
    <section className="section section-dark" aria-labelledby="services-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">{home.servicesEyebrow}</p>
            <h2 id="services-title" className={styles.heading}>
              <AccentText text={home.servicesTitle} accent={home.servicesTitleAccent} block />
            </h2>
          </div>
          {/* The home intro (the page's direct answer) lives here, so the hero keeps one supporting line */}
          {pages.home.intro && <p className={styles.lead}>{pages.home.intro}</p>}
        </div>

        <ol className={styles.list}>
          {services.map((s, i) => (
            <li key={s.id}>
              <Link href={`/services#${s.id}`} className={styles.row}>
                <span className={styles.number} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.short}</p>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrow" size={18} />
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
