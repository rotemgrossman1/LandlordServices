import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { about, labels, pages, partner, site, team } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.about, "/about");

export default function AboutPage() {
  return (
    <>
      <PageIntro page={pages.about} />

      <section className="section" aria-labelledby="story-title">
        <div className="container prose">
          <h2 id="story-title">{labels.story}</h2>
          {about.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title">{labels.values}</h2>
          <ul className={styles.values}>
            {about.values.map((v) => (
              <li key={v.title} className={styles.value}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="partner-title">
        <div className={`container ${styles.partner}`}>
          {partner.photo && (
            <Image src={partner.photo} alt={partner.name} width={320} height={400} className={styles.photo} />
          )}
          <div className="prose">
            <h2 id="partner-title">{labels.partner}</h2>
            <h3>
              {partner.name} – {partner.role}
            </h3>
            <p>{partner.bio}</p>
          </div>
        </div>

        {team.length > 0 && (
          <ul className={`container ${styles.team}`}>
            {team.map((m) => (
              <li key={m.name}>
                {m.photo && <Image src={m.photo} alt={m.name} width={240} height={300} className={styles.photo} />}
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section section-alt" aria-labelledby="office-title">
        <div className={`container ${styles.office}`}>
          <div>
            <h2 id="office-title">{labels.office}</h2>
            <p>{site.address.full}</p>
            <p>
              <a href={site.mapsUrl}>{labels.maps}</a> · <a href={site.wazeUrl}>{labels.waze}</a>
            </p>
          </div>
          <Image src="/images/office-placeholder.svg" alt="" width={560} height={360} className={styles.photo} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
