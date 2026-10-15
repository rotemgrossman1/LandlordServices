import { cta, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import styles from "./MobileBar.module.css";

/** Sticky call / WhatsApp bar, mobile only. WhatsApp shows only when a number is set. */
export default function MobileBar() {
  return (
    <div className={styles.bar}>
      <a href={telHref(site.phone)} className={`${styles.item} ${styles.call}`}>
        {cta.call} <span className="ltr">{site.phone}</span>
      </a>
      {site.whatsapp && (
        <a href={whatsappHref(site.whatsapp)} className={`${styles.item} ${styles.wa}`} rel="noopener">
          {cta.whatsapp}
        </a>
      )}
    </div>
  );
}
