import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { labels, pages, services } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = buildMetadata(pages.services, "/services");

export default function ServicesPage() {
  return (
    <>
      <PageIntro page={pages.services} />

      <nav className={`container ${styles.toc}`} aria-label={pages.services.h1}>
        <ul>
          {services.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section ${i % 2 === 1 ? "section-alt" : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`container ${styles.service}`}>
            <div>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <p className="lead">{s.short}</p>
              <h3>{labels.forWhom}</h3>
              <p>{s.forWhom}</p>
              {s.id === "landlord-safe" && (
                <p>
                  <Link href="/landlord-safe">{labels.learnMore} – Landlord Safe</Link>
                </p>
              )}
            </div>
            <div>
              <h3>{labels.includes}</h3>
              <ul className="check-list">
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
