import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { labels, pages, site } from "@/content/site";
import { telHref } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.contact, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro page={pages.contact} />
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.formBox}>
            <ContactForm />
          </div>

          <address className={styles.details}>
            <dl>
              <dt>{labels.phone}</dt>
              <dd>
                <a href={telHref(site.phone)} className="ltr">
                  {site.phone}
                </a>
              </dd>
              <dt>{labels.mobile}</dt>
              <dd>
                <a href={telHref(site.mobile)} className="ltr">
                  {site.mobile}
                </a>
              </dd>
              <dt>{labels.email}</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
              <dt>{labels.address}</dt>
              <dd>
                {site.address.full}
                <br />
                <a href={site.mapsUrl}>{labels.maps}</a> · <a href={site.wazeUrl}>{labels.waze}</a>
              </dd>
              {site.hours && (
                <>
                  <dt>{labels.hours}</dt>
                  <dd>{site.hours}</dd>
                </>
              )}
            </dl>
          </address>
        </div>
      </section>
    </>
  );
}
