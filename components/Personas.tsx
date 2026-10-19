import { personas } from "@/content/site";
import AccentText from "./AccentText";
import styles from "./Personas.module.css";

/**
 * "Who is it for", laid out as the design's manifesto: eyebrow on one side, a large
 * headline on the other, then the lead and each typical owner (pain + our answer)
 * in two columns under a hairline.
 */
export default function Personas() {
  if (personas.items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="personas-title">
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{personas.eyebrow}</p>
        <div>
          <h2 id="personas-title" className={styles.heading}>
            <AccentText text={personas.title} accent={personas.titleAccent} />
          </h2>
          <ul className={styles.list}>
            {personas.lead && (
              <li className={styles.lead}>
                <p>{personas.lead}</p>
              </li>
            )}
            {personas.items.map((p) => (
              <li key={p.title} className={styles.item}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.pain}>{p.pain}</p>
                {p.solution && <p className={styles.solution}>{p.solution}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
