import Image from "next/image";
import Link from "next/link";
import { home, images, pages, services } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./ServiceCards.module.css";

/**
 * Home "what we do": numbered rows (number, title, one line, arrow) over a building photo
 * under a dark forest tint; each row links to its full description.
 */
export default function ServiceCards() {
  if (services.length === 0) return null;
  return (
    <section className={`section section-dark ${images.services ? "photo-section" : ""}`} aria-labelledby="services-title">
      {images.services && (
        <Image src={images.services} alt="" fill sizes="100vw" className={`photo-section-bg ${styles.bg}`} />
      )}
      <div className="container">
        {/* The home intro (the page's direct answer) lives here, so the hero keeps one supporting line */}
        <SectionHeading
          id="services-title"
          eyebrow={home.servicesEyebrow}
          title={home.servicesTitle}
          accent={home.servicesTitleAccent}
          accentBlock
          large
          rule
          side={pages.home.intro && <p className="section-head-note">{pages.home.intro}</p>}
          className={styles.head}
        />

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
