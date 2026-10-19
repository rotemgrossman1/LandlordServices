import Image from "next/image";
import Link from "next/link";
import { cta, home, images, pages, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import NumbersStrip from "./NumbersStrip";
import OwnerPhone from "./OwnerPhone";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            <Icon name="home" size={18} />
            {home.eyebrow}
          </p>
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
                className="btn btn-outline"
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
          <NumbersStrip />
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
