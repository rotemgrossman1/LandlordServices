import type { ReactNode } from "react";
import type { PageMeta } from "@/content/site";
import styles from "./PageIntro.module.css";

/** Page H1 + the direct 2–3 sentence answer that opens every inner page. */
export default function PageIntro({
  page,
  eyebrow,
  children,
}: {
  page: PageMeta;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.intro}>
      <div className={styles.shape} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={styles.title}>{page.h1}</h1>
        {page.intro && <p className={`lead ${styles.lead}`}>{page.intro}</p>}
        {children}
      </div>
    </section>
  );
}
