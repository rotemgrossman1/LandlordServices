import Image from "next/image";
import Link from "next/link";
import { cta, images, personas } from "@/content/site";
import AccentText from "./AccentText";
import Icon from "./Icon";
import styles from "./Personas.module.css";

/**
 * "Who is it for", in the design's editorial layout on off-white: the eyebrow and a portrait
 * photo in a narrow column, the statement headline, lead and numbered list of typical owners
 * (pain + our answer) in a wide one, ending on a simple next step.
 */
export default function Personas() {
  if (personas.items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="personas-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.aside}>
          <p className="eyebrow">{personas.eyebrow}</p>
          {images.personas && (
            <div className={styles.media}>
              <Image
                src={images.personas}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className={styles.photo}
              />
            </div>
          )}
        </div>

        <div className={styles.main}>
          <h2 id="personas-title" className={styles.heading}>
            <AccentText text={personas.title} accent={personas.titleAccent} />
          </h2>
          {personas.lead && <p className={styles.lead}>{personas.lead}</p>}

          <ol className={styles.list}>
            {personas.items.map((p, i) => (
              <li
                key={p.title}
                className={styles.item}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.title}>{p.title}</h3>
                <div className={styles.body}>
                  <p className={styles.pain}>{p.pain}</p>
                  {p.solution && <p className={styles.solution}>{p.solution}</p>}
                </div>
              </li>
            ))}
          </ol>

          {personas.closingTitle && (
            <div className={styles.closing}>
              <div>
                <h3 className={styles.closingTitle}>{personas.closingTitle}</h3>
                {personas.closingText && <p className={styles.closingText}>{personas.closingText}</p>}
              </div>
              <Link href={cta.primaryHref} className={`btn btn-pill ${styles.closingBtn}`}>
                {cta.primary}
                <span className="btn-circle" aria-hidden="true">
                  <Icon name="arrow" size={16} className="icon-diag" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
