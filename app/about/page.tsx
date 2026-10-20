import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import NumbersStrip from "@/components/NumbersStrip";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import TeamGrid from "@/components/TeamGrid";
import { about, areas, home, images, labels, pages, partner, site, team } from "@/content/site";
import { initials } from "@/lib/format";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.about, "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro page={pages.about} eyebrow={home.sinceLabel} />

      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <div className="prose">
            <h2 id="story-title">{labels.story}</h2>
            {about.story.map((p) => (
              <p key={p} className={styles.storyText}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.numbers}>
            <NumbersStrip />
            {areas.regions.length > 0 && (
              <p className={styles.regions}>
                <Icon name="mapPin" size={18} />
                {areas.regions.join(" · ")}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" title={labels.values} />
          <ul className={styles.values}>
            {about.values.map((v, i) => (
              <li key={v.title} className={styles.value}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="partner-title">
        <div className={`container ${styles.partner}`}>
          {partner.photo ? (
            <Image src={partner.photo} alt={partner.name} width={320} height={400} className={styles.partnerPhoto} />
          ) : (
            <span className={styles.partnerAvatar} aria-hidden="true">
              {initials(partner.name)}
            </span>
          )}
          <div className="prose">
            <h2 id="partner-title">{partner.name}</h2>
            <p className={styles.partnerRole}>{partner.role}</p>
            <p className="lead">{partner.bio}</p>
          </div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="section" aria-labelledby="team-title">
          <div className="container">
            <SectionHeading id="team-title" title={labels.team} lead={labels.teamLead} />
            <TeamGrid />
          </div>
        </section>
      )}

      <section className="section section-alt" aria-labelledby="office-title">
        <div className={`container ${styles.office}`}>
          <div>
            <h2 id="office-title">{labels.office}</h2>
            <p className="lead">{labels.officeLead}</p>
            <p className={styles.address}>
              <Icon name="mapPin" size={20} />
              {site.address.full}
            </p>
            <div className="btn-row">
              <a href={site.mapsUrl} className="btn btn-outline">
                {labels.maps}
              </a>
              <a href={site.wazeUrl} className="btn btn-outline">
                {labels.waze}
              </a>
            </div>
          </div>
          {images.office && (
            <Image src={images.office} alt="" width={560} height={380} className={styles.officePhoto} />
          )}
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbJsonLd("/about")} />
    </>
  );
}
