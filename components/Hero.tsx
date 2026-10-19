import Image from "next/image";
import Link from "next/link";
import { cta, home, images, pages, partner, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import OwnerPhone from "./OwnerPhone";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} data-fab-hide>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>{pages.home.h1}</h1>
          <p className={styles.promise}>{home.promise}</p>
          <p className={styles.intro}>{pages.home.intro}</p>
          <div className={styles.actions}>
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
              <Icon name="arrow" size={20} />
            </Link>
            {site.whatsapp ? (
              <a
                href={whatsappHref(site.whatsapp, cta.whatsappText)}
                className="btn btn-whatsapp"
                rel="noopener"
                target="_blank"
              >
                <Icon name="whatsapp" size={20} />
                {cta.whatsappLong}
              </a>
            ) : (
              <a href={telHref(site.phone)} className="btn btn-outline">
                <Icon name="phone" size={20} />
                {cta.call} <span className="ltr">{site.phone}</span>
              </a>
            )}
          </div>
          <p className={styles.proof}>
            {partner.name && (
              <strong>
                {home.ledBy} {partner.name}, {partner.role}
              </strong>
            )}
            <span>
              {home.sinceText} {home.sinceLabel}
            </span>
          </p>
        </div>

        <div className={styles.media}>
          {images.hero ? (
            <div className={styles.frame}>
              <Image src={images.hero} alt="" fill sizes="(min-width: 960px) 520px, 100vw" priority />
            </div>
          ) : (
            <OwnerPhone />
          )}
        </div>
      </div>
    </section>
  );
}
