import Link from "next/link";
import Comparison from "@/components/Comparison";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageIntro from "@/components/PageIntro";
import { home, labels, pages, services } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.services, "/services");

export default function ServicesPage() {
  return (
    <>
      <PageIntro page={pages.services} eyebrow={home.servicesEyebrow}>
        <nav className={styles.toc} aria-label={labels.onThisPage}>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <Icon name={s.icon} size={18} />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section ${i % 2 === 1 ? "section-alt" : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`container ${styles.service}`}>
            <div>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <p className="lead">{s.short}</p>
              <h3 className={styles.subhead}>{labels.forWhom}</h3>
              <p>{s.forWhom}</p>
              {s.id === "landlord-safe" && (
                <Link href="/landlord-safe" className="btn btn-primary">
                  {labels.learnMore} – Landlord Safe
                  <Icon name="arrow" size={20} />
                </Link>
              )}
            </div>
            <div className={styles.includes}>
              <h3 className={styles.subhead}>{labels.includes}</h3>
              <ul className="check-list">
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Moved here from the home page; alternates with the last service's background */}
      <Comparison alt={services.length % 2 === 1} />

      <CtaBand />
    </>
  );
}
