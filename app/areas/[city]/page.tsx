import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AccentText from "@/components/AccentText";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { cityPages, cta, home, labels, site, type Photo } from "@/content/site";
import { whatsappHref } from "@/lib/format";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const page = cityPages.find((c) => c.slug === city);
  return page ? buildMetadata(page.meta, `/areas/${page.slug}`) : {};
}

function Credit({ photo }: { photo: Photo }) {
  if (!photo.credit) return null;
  return (
    <a href={photo.creditUrl} className={styles.credit} target="_blank" rel="noopener license">
      {home.photoCredit} {photo.credit}
    </a>
  );
}

/** One city: photo hero, a gallery, our work there with its facts, what we do, local FAQ. */
export default async function CityAreaPage({ params }: Props) {
  const { city } = await params;
  const page = cityPages.find((c) => c.slug === city);
  if (!page) notFound();
  const facts = page.facts.filter((f) => f.value);

  return (
    <>
      <section className={`on-dark ${styles.hero}`}>
        {page.hero.src && (
          <Image src={page.hero.src} alt={page.hero.alt} fill priority sizes="100vw" className={styles.photo} />
        )}
        <div className={styles.scrim} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className={styles.title}>
            <AccentText text={page.meta.h1} accent={page.meta.h1Accent} />
          </h1>
          <p className={styles.lead}>{page.meta.intro}</p>
          <div className="btn-row">
            <Link href={cta.primaryHref} className="btn btn-primary">
              {cta.primary}
              <Icon name="arrow" size={18} className="icon-diag" />
            </Link>
            {site.whatsapp && (
              <a
                href={whatsappHref(site.whatsapp, cta.whatsappText)}
                className={`btn btn-whatsapp ${styles.heroWhatsapp}`}
                rel="noopener"
                target="_blank"
              >
                <Icon name="whatsapp" size={20} />
                {cta.whatsapp}
              </a>
            )}
          </div>
        </div>
        <Credit photo={page.hero} />
      </section>

      {page.gallery.length > 0 && (
        <section className="section" aria-labelledby="gallery-title">
          <div className="container">
            <SectionHeading id="gallery-title" title={page.galleryTitle} />
            <ul className={styles.gallery}>
              {page.gallery.map((photo) => (
                <li key={photo.src} className={styles.galleryItem}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 720px) 50vw, 100vw"
                  />
                  <Credit photo={photo} />
                </li>
              ))}
            </ul>
            {page.galleryNote && <p className={styles.note}>{page.galleryNote}</p>}
          </div>
        </section>
      )}

      <section className="section section-alt" aria-labelledby="work-title">
        <div className={`container ${styles.work}`}>
          <div className="prose">
            <h2 id="work-title">{page.workTitle}</h2>
            {page.work.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {facts.length > 0 && (
            <ul className={styles.facts}>
              {facts.map((f) => (
                <li key={f.label} className={styles.fact}>
                  <span className={styles.factValue}>{f.value}</span>
                  <span className={styles.factLabel}>{f.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {page.includes.length > 0 && (
        <section className="section" aria-labelledby="includes-title">
          <div className="container">
            <SectionHeading id="includes-title" title={page.includesTitle} />
            <ul className={`check-list ${styles.includes}`}>
              {page.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="more-link">
              <Link href="/services">
                {labels.allServices} <Icon name="arrow" size={16} />
              </Link>
            </p>
          </div>
        </section>
      )}

      {page.faq.length > 0 && (
        <section className="section section-alt" aria-labelledby="city-faq-title">
          <div className="container">
            <SectionHeading id="city-faq-title" eyebrow={home.faqEyebrow} title={home.faqTitle} />
            <Faq items={page.faq} />
          </div>
        </section>
      )}

      <CtaBand />
      {page.faq.length > 0 && <JsonLd data={faqJsonLd(page.faq)} />}
    </>
  );
}
