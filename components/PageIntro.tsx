import type { PageMeta } from "@/content/site";
import styles from "./PageIntro.module.css";

/** Page H1 + the direct 2–3 sentence answer that opens every inner page. */
export default function PageIntro({ page }: { page: PageMeta }) {
  return (
    <section className={styles.intro}>
      <div className="container">
        <h1>{page.h1}</h1>
        {page.intro && <p className="lead">{page.intro}</p>}
      </div>
    </section>
  );
}
