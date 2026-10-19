import Image from "next/image";
import Link from "next/link";
import { areas, cta, home } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./AreasStrip.module.css";

/**
 * Where we work, in the design's portfolio layout: photo cards of the cities themselves
 * (not our properties) and the full list of cities. Hidden when the list is empty.
 */
export default function AreasStrip() {
  if (areas.cities.length === 0) return null;
  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">{home.areasEyebrow}</p>
            <h2 id="areas-title" className={styles.heading}>
              <AccentText text={home.areasTitle} accent={home.areasTitleAccent} />
            </h2>
          </div>
          <Link href={cta.primaryHref} className={styles.link}>
            {cta.primary}
            <span className={styles.linkCircle} aria-hidden="true">
              <Icon name="arrow" size={18} />
            </span>
          </Link>
        </div>

        {areas.featured.length > 0 && (
          <ul className={styles.grid}>
            {areas.featured.map((a) => (
              <li key={a.city} className={styles.card}>
                <div className={styles.media}>
                  <Image src={a.image} alt={a.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw" />
                  <span className={styles.chip}>{a.region}</span>
                </div>
                <h3 className={styles.city}>{a.city}</h3>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.all}>
          <p className={styles.allLabel}>{home.areasAllLabel}</p>
          <p className={styles.cities}>{areas.cities.join(" · ")}</p>
          {home.areasLead && <p className={styles.lead}>{home.areasLead}</p>}
        </div>
      </div>
    </section>
  );
}
