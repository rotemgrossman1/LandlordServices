import { cta, site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import styles from "./MobileBar.module.css";

/** Sticky call / WhatsApp bar, mobile only. WhatsApp shows only when a number is set. */
export default function MobileBar() {
  return (
    <div className={styles.bar}>
      {site.whatsapp && (
        <a
          href={whatsappHref(site.whatsapp, cta.whatsappText)}
          className={`${styles.item} ${styles.wa}`}
          rel="noopener"
          target="_blank"
        >
          <Icon name="whatsapp" size={20} />
          {cta.whatsapp}
        </a>
      )}
      <a href={telHref(site.phone)} className={`${styles.item} ${styles.call}`}>
        <Icon name="phone" size={20} />
        {cta.call}
      </a>
    </div>
  );
}
