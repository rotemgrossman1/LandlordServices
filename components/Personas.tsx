import { personas } from "@/content/site";
import SectionHeading from "./SectionHeading";
import styles from "./Personas.module.css";

/** "Who is it for": one short line per typical owner, so visitors recognise themselves fast. */
export default function Personas() {
  if (personas.items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="personas-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="personas-title" eyebrow={personas.eyebrow} title={personas.title} lead={personas.lead} />
        <ul className={styles.list}>
          {personas.items.map((p) => (
            <li key={p.title} className={styles.item}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.pain}>{p.pain}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
