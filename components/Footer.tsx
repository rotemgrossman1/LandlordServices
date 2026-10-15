import Link from "next/link";
import { labels, nav, site } from "@/content/site";
import { telHref } from "@/lib/format";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>
            {site.nameHe} <span className={styles.brandEn}>{site.name}</span>
          </p>
          <p className={styles.small}>{labels.footerTagline}</p>
        </div>

        <div>
          <h2 className={styles.heading}>{labels.contactUs}</h2>
          <ul className={styles.list}>
            <li>
              {labels.phone}: <a href={telHref(site.phone)} className="ltr">{site.phone}</a>
            </li>
            <li>
              {labels.mobile}: <a href={telHref(site.mobile)} className="ltr">{site.mobile}</a>
            </li>
            <li>
              {labels.email}: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              {labels.address}: <a href={site.mapsUrl}>{site.address.full}</a>
            </li>
            {site.hours && (
              <li>
                {labels.hours}: {site.hours}
              </li>
            )}
            {site.companyId && (
              <li>
                {labels.companyId} {site.companyId}
              </li>
            )}
          </ul>
        </div>

        <nav aria-label={labels.footerNav}>
          <h2 className={styles.heading}>{labels.links}</h2>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">{labels.privacy}</Link>
            </li>
            <li>
              <Link href="/accessibility">{labels.accessibility}</Link>
            </li>
            {site.facebook && (
              <li>
                <a href={site.facebook} rel="noopener">
                  {labels.facebook}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.legalName || site.nameHe}. {labels.rights}.
        </p>
      </div>
    </footer>
  );
}
