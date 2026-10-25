import Image from "next/image";
import Link from "next/link";
import { cta, images, personas } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./Personas.module.css";

/**
 * "Who is it for", on cream so the page isn't dark section after dark section:
 * the eyebrow, headline and lead beside a framed building photo, then each typical owner
 * (pain + our answer) as a card that fades in one after another.
 */
export default function Personas() {
  if (personas.items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="personas-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <div>
            <p className="eyebrow">{personas.eyebrow}</p>
            <h2 id="personas-title" className={styles.heading}>
              <AccentText text={personas.title} accent={personas.titleAccent} />
            </h2>
            {personas.lead && <p className={styles.lead}>{personas.lead}</p>}
          </div>
          {images.personas && (
            <div className={styles.media}>
              <Image
                src={images.personas}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={styles.photo}
              />
            </div>
          )}
        </div>

        <ul className={styles.list}>
          {personas.items.map((p, i) => (
            <li
              key={p.title}
              className={styles.card}
              data-reveal
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.pain}>{p.pain}</p>
              {p.solution && <p className={styles.solution}>{p.solution}</p>}
            </li>
          ))}
          {personas.closingTitle && (
            <li
              className={`${styles.card} ${styles.closing}`}
              data-reveal
              style={{ "--reveal-delay": `${personas.items.length * 110}ms` } as React.CSSProperties}
            >
              <h3 className={styles.title}>{personas.closingTitle}</h3>
              {personas.closingText && <p className={styles.closingText}>{personas.closingText}</p>}
              <Link href={cta.primaryHref} className="btn btn-primary">
                {cta.primary}
                <Icon name="arrow" size={18} className="icon-diag" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
