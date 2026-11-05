import Link from "next/link";
import { getContent } from "@/content";
import { telHref, whatsappHref } from "@/lib/format";
import CookieSettingsButton from "./CookieSettingsButton";
import Icon from "./Icon";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default async function Footer() {
  const { areas, cityPages, cookieNotice, cta, labels, nav, services, site, link } = await getContent();
  return (
    <footer className={styles.footer} data-fab-hide>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo tone="light" label={site.nameHe} />
          <p className={styles.tagline}>{labels.footerTagline}</p>
          <div className="btn-row">
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
          </div>
        </div>

        <div>
          <h2 className={styles.heading}>{labels.services}</h2>
          <ul className={styles.list}>
            {services.map((s) => (
              <li key={s.id}>
                <Link href={link(`/services#${s.id}`)}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={labels.footerNav}>
          <h2 className={styles.heading}>{labels.links}</h2>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={link(item.href)}>{item.label}</Link>
              </li>
            ))}
            {cityPages.map((c) => (
              <li key={c.slug}>
                <Link href={link(`/areas/${c.slug}`)}>{labels.cityPage.replace("{city}", c.city)}</Link>
              </li>
            ))}
            <li>
              <Link href={link("/privacy")}>{labels.privacy}</Link>
            </li>
            <li>
              <Link href={link("/accessibility")}>{labels.accessibility}</Link>
            </li>
            <li>
              <CookieSettingsButton label={cookieNotice.settings} />
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>{labels.contactUs}</h2>
          <ul className={`${styles.list} ${styles.contact}`}>
            <li>
              <Icon name="phone" size={18} />
              <a href={telHref(site.phone)} className="ltr">
                {site.phone}
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="mapPin" size={18} />
              <a href={site.mapsUrl}>{site.address.full}</a>
            </li>
            {site.hours && (
              <li>
                <Icon name="clock" size={18} />
                <span>{site.hours}</span>
              </li>
            )}
          </ul>
          {areas.regions.length > 0 && (
            <p className={styles.small}>
              {labels.areas}: {areas.regions.join(" · ")}
            </p>
          )}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.legalName || site.nameHe}. {labels.rights}.
          {site.companyId && ` ${labels.companyId} ${site.companyId}`}
        </p>
        {site.facebook && (
          <a href={site.facebook} rel="noopener">
            {labels.facebook}
          </a>
        )}
      </div>
    </footer>
  );
}
