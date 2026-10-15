import { home, site } from "@/content/site";
import { telHref } from "@/lib/format";
import ContactForm from "./ContactForm";
import styles from "./CtaBand.module.css";

/** Final call-to-action with a short contact form. */
export default function CtaBand() {
  return (
    <section className={styles.band} aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id="cta-title">{home.ctaTitle}</h2>
          <p className="lead">{home.ctaText}</p>
          <p className={styles.phone}>
            <a href={telHref(site.phone)} className="ltr">
              {site.phone}
            </a>
          </p>
        </div>
        <div className={styles.formBox}>
          <ContactForm idPrefix="cta" />
        </div>
      </div>
    </section>
  );
}
