import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageIntro from "@/components/PageIntro";
import { cta, form, labels, pages, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.contact, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro page={pages.contact} eyebrow={labels.contactUs} />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.formBox}>
            <h2 className={styles.formTitle}>{form.titleShort}</h2>
            <ContactForm />
          </div>

          <address className={styles.details}>
            {site.whatsapp && (
              <a
                href={whatsappHref(site.whatsapp, cta.whatsappText)}
                className={`${styles.method} ${styles.wa}`}
                rel="noopener"
                target="_blank"
              >
                <span className={styles.methodIcon}>
                  <Icon name="whatsapp" size={24} />
                </span>
                <span>
                  <strong>{cta.whatsappLong}</strong>
                  <span className={`ltr ${styles.methodText}`}>{site.whatsapp}</span>
                </span>
              </a>
            )}
            <a href={telHref(site.phone)} className={styles.method}>
              <span className={styles.methodIcon}>
                <Icon name="phone" size={24} />
              </span>
              <span>
                <strong>{labels.phone}</strong>
                <span className={`ltr ${styles.methodText}`}>{site.phone}</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className={styles.method}>
              <span className={styles.methodIcon}>
                <Icon name="mail" size={24} />
              </span>
              <span>
                <strong>{labels.email}</strong>
                <span className={styles.methodText}>{site.email}</span>
              </span>
            </a>
            <div className={styles.method}>
              <span className={styles.methodIcon}>
                <Icon name="mapPin" size={24} />
              </span>
              <span>
                <strong>{labels.address}</strong>
                <span className={styles.methodText}>{site.address.full}</span>
                <span className={styles.mapLinks}>
                  <a href={site.mapsUrl}>{labels.maps}</a> · <a href={site.wazeUrl}>{labels.waze}</a>
                </span>
              </span>
            </div>
            {site.hours && (
              <div className={styles.method}>
                <span className={styles.methodIcon}>
                  <Icon name="clock" size={24} />
                </span>
                <span>
                  <strong>{labels.hours}</strong>
                  <span className={styles.methodText}>{site.hours}</span>
                </span>
              </div>
            )}
          </address>
        </div>
      </section>
    </>
  );
}
