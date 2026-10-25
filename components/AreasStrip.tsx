import Image from "next/image";
import Link from "next/link";
import { areas, cityPages, cta, home } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./AreasStrip.module.css";

/**
 * Where we work, in the design's portfolio layout on cream: photo cards of the cities themselves
 * (not our properties) with a caption line under each, and the full list of cities.
 * Hidden when the list is empty.
 */
export default function AreasStrip() {
  if (areas.cities.length === 0) return null;
  return (
    <section className="section" aria-labelledby="areas-title">
      <div className="container">
        <SectionHeading
          id="areas-title"
          eyebrow={home.areasEyebrow}
          title={home.areasTitle}
          accent={home.areasTitleAccent}
          large
          rule
          side={
            <Link href={cta.primaryHref} className={styles.link}>
              {cta.primary}
              <span className={styles.linkCircle} aria-hidden="true">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          }
        />

        {areas.featured.length > 0 && (
          <ul className={styles.grid}>
            {areas.featured.map((a) => {
              const page = cityPages.find((c) => c.city === a.city);
              return (
                <li key={a.city} className={styles.card}>
                  <div className={styles.media}>
                    <Image src={a.image} alt={a.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw" />
                    {page && (
                      <span className={styles.photoArrow} aria-hidden="true">
                        <Icon name="arrow" size={18} />
                      </span>
                    )}
                    {a.credit && (
                      <a href={a.creditUrl} className={styles.credit} target="_blank" rel="noopener license">
                        {home.photoCredit} {a.credit}
                      </a>
                    )}
                  </div>
                  <div className={styles.caption}>
                    <div className={styles.names}>
                      <h3 className={styles.city}>
                        {page ? (
                          <Link href={`/areas/${page.slug}`} className={styles.cityLink}>
                            {a.city}
                          </Link>
                        ) : (
                          a.city
                        )}
                      </h3>
                      {a.region && a.region !== a.city && <p className={styles.region}>{a.region}</p>}
                    </div>
                    {page && home.areasCityMore && (
                      <span className={styles.more} aria-hidden="true">
                        {home.areasCityMore}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className={styles.all}>
          <p className={styles.allLabel}>{home.areasAllLabel}</p>
          <ul className={styles.cities}>
            {areas.cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          {home.areasLead && <p className={styles.lead}>{home.areasLead}</p>}
        </div>
      </div>
    </section>
  );
}
