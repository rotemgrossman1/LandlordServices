import { personas } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./Personas.module.css";

/** "Who is it for": one card per typical owner, with their pain and our answer. */
export default function Personas() {
  if (personas.items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="personas-title">
      <div className="container">
        <SectionHeading id="personas-title" eyebrow={personas.eyebrow} title={personas.title} lead={personas.lead} />
        <ul className={styles.grid}>
          {personas.items.map((p, i) => (
            <li
              key={p.title}
              className={styles.card}
              data-reveal
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <span className={styles.icon}>
                <Icon name={p.icon} size={26} />
              </span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.pain}>{p.pain}</p>
              <p className={styles.solution}>
                <Icon name="check" size={18} />
                <span>{p.solution}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
