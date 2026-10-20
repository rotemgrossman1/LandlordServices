import Image from "next/image";
import Link from "next/link";
import { areas, cta, home, images, pages, partner, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./Hero.module.css";

/** Full-bleed photo hero: giant serif H1 with its accent line, a side note and the actions. */
export default function Hero() {
  return (
    <section className={`on-dark ${styles.hero}`} data-fab-hide>
      {images.hero && (
        <Image
          src={images.hero}
          alt={images.heroAlt}
          fill
          priority
          sizes="100vw"
          className={styles.photo}
        />
      )}
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.headline}>
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 className={styles.title}>
            <AccentText text={pages.home.h1} accent={pages.home.h1Accent} block />
          </h1>
        </div>

        <div className={styles.note}>
          <p className={styles.promise}>{home.promise}</p>
          <p className={styles.intro}>{pages.home.intro}</p>
          <div className={styles.actions}>
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
              <Icon name="arrow" size={18} className="icon-diag" />
            </Link>
            {site.whatsapp ? (
              <a
                href={whatsappHref(site.whatsapp, cta.whatsappText)}
                className={`btn btn-whatsapp ${styles.secondary}`}
                rel="noopener"
                target="_blank"
              >
                <Icon name="whatsapp" size={20} />
                {cta.whatsapp}
              </a>
            ) : (
              <a href={telHref(site.phone)} className={`btn btn-ghost-light ${styles.secondary}`}>
                <Icon name="phone" size={20} />
                {cta.call}
              </a>
            )}
          </div>
          {partner.name && (
            <p className={styles.partner}>
              {home.ledBy} {partner.name}, {partner.role}
            </p>
          )}
        </div>
      </div>

      {areas.regions.length > 0 && (
        <p className={styles.badge}>
          {home.sinceLabel} · {areas.regions.join(" ו")}
        </p>
      )}
    </section>
  );
}
