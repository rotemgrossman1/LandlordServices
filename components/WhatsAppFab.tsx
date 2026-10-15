import { cta, site } from "@/content/site";
import { whatsappHref } from "@/lib/format";
import Icon from "./Icon";
import styles from "./WhatsAppFab.module.css";

/** Floating WhatsApp button (desktop; mobile uses MobileBar). Hidden when no number is set. */
export default function WhatsAppFab() {
  if (!site.whatsapp) return null;
  return (
    <a
      href={whatsappHref(site.whatsapp, cta.whatsappText)}
      className={styles.fab}
      rel="noopener"
      target="_blank"
    >
      <Icon name="whatsapp" size={26} />
      <span className={styles.label}>{cta.whatsappLong}</span>
    </a>
  );
}
