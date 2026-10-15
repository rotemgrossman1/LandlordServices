import Image from "next/image";
import Link from "next/link";
import { cta, home, pages, site } from "@/content/site";
import { telHref } from "@/lib/format";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.since}>{home.sinceLabel}</p>
          <h1 className={styles.title}>{pages.home.h1}</h1>
          <p className={styles.promise}>{home.promise}</p>
          <p className={styles.intro}>{pages.home.intro}</p>
          <div className={styles.actions}>
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
            </Link>
            <a href={telHref(site.phone)} className="btn btn-outline">
              {cta.call} <span className="ltr">{site.phone}</span>
            </a>
          </div>
        </div>
        <div className={styles.media}>
          <Image src="/images/hero-placeholder.svg" alt="" width={560} height={440} priority />
        </div>
      </div>
    </section>
  );
}
