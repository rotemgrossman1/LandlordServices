import { cta, form, home, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import ContactForm from "./ContactForm";
import Icon from "./Icon";
import styles from "./CtaBand.module.css";

/** Final call-to-action: WhatsApp/phone plus a short contact form. */
export default function CtaBand() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.band} data-reveal>
          <div className={styles.text}>
            <h2 id="cta-title">{home.ctaTitle}</h2>
            <p className="lead">{home.ctaText}</p>
            <div className={styles.actions}>
              {site.whatsapp && (
                <a
                  href={whatsappHref(site.whatsapp, cta.whatsappText)}
                  className="btn btn-whatsapp"
                  rel="noopener"
                  target="_blank"
                >
                  <Icon name="whatsapp" size={20} />
                  {cta.whatsappLong}
                </a>
              )}
              <a href={telHref(site.phone)} className="btn btn-ghost-light">
                <Icon name="phone" size={20} />
                <span className="ltr">{site.phone}</span>
              </a>
            </div>
          </div>
          <div className={styles.formBox}>
            <h3 className={styles.formTitle}>{form.title}</h3>
            <ContactForm idPrefix="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
