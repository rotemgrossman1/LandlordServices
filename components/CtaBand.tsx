import Image from "next/image";
import { cta, form, home, partner, site } from "@/content/site";
import { initials, telHref, whatsappHref } from "@/lib/format";
import ContactForm from "./ContactForm";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./CtaBand.module.css";

/**
 * Closing call to action, after the design's contact block: a large headline, then what
 * happens next, who stands behind it, and the short form.
 */
export default function CtaBand() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className="container">
        <SectionHeading
          id="cta-title"
          eyebrow={home.ctaEyebrow}
          title={home.ctaTitle}
          accent={home.ctaTitleAccent}
          accentBlock
          large
          className={styles.head}
        />

        <div className={styles.panel}>
          <div className={styles.text}>
            <p className={styles.lead}>{home.ctaText}</p>

            {home.ctaNext.length > 0 && (
              <>
                <h3 className={styles.nextTitle}>{home.ctaNextTitle}</h3>
                <ol className={styles.next}>
                  {home.ctaNext.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              </>
            )}

            {partner.name && (
              <div className={styles.partner}>
                {partner.photo ? (
                  <Image src={partner.photo} alt="" width={56} height={56} className={styles.avatar} />
                ) : (
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(partner.name)}
                  </span>
                )}
                <p>
                  <strong>{partner.name}</strong>, {partner.role}
                  {home.ctaPartnerText && <span className={styles.partnerText}>{home.ctaPartnerText}</span>}
                </p>
              </div>
            )}

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
              <a href={telHref(site.phone)} className="btn btn-outline">
                <Icon name="phone" size={20} />
                {cta.call} <span className="ltr">{site.phone}</span>
              </a>
            </div>
          </div>

          <div className={styles.formBox} id="cta-form">
            <h3 className={styles.formTitle}>{form.titleShort}</h3>
            <ContactForm idPrefix="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
