import type { ReactNode } from "react";
import type { PageMeta } from "@/content/site";
import AccentText from "./AccentText";
import styles from "./PageIntro.module.css";

/** Inner-page opening: off-white band with eyebrow, H1 and the direct 2–3 sentence answer. */
export default function PageIntro({
  page,
  eyebrow,
  titleClassName,
  children,
}: {
  page: PageMeta;
  eyebrow?: string;
  titleClassName?: string; // extra class for the H1 (e.g. the article title font)
  children?: ReactNode;
}) {
  return (
    <section className={styles.intro}>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={titleClassName ? `${styles.title} ${titleClassName}` : styles.title}>
          <AccentText text={page.h1} accent={page.h1Accent} />
        </h1>
        {page.intro && <p className={`lead ${styles.lead}`}>{page.intro}</p>}
        {children}
      </div>
    </section>
  );
}
