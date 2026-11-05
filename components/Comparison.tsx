import { getContent } from "@/content";
import type { CompareValue } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./Comparison.module.css";

const valueIcon = { yes: "check", no: "x", you: "user" } as const;
type Rows = { values: CompareValue[] }[];

/** How many rows a column covers ("yes") */
function covered(rows: Rows, col: number) {
  return rows.filter((r) => r.values[col] === "yes").length;
}

function Cell({ value, mark, label }: { value: CompareValue; mark?: string; label: string }) {
  return (
    <span className={`${styles.value} ${styles[value]}`}>
      <span className={styles.mark}>
        <Icon name={valueIcon[value]} size={16} />
      </span>
      <span className={styles.valueLabel}>
        {label}
        {mark && <sup className={styles.footMark}>{mark}</sup>}
      </span>
    </span>
  );
}

/**
 * Self-managed vs broker vs Landlord: three score tiles (how much each option covers)
 * over a real <table>, so it reads well for everyone.
 */
export default async function Comparison({ alt = false }: { alt?: boolean }) {
  const { comparison, images } = await getContent();
  const total = comparison.rows.length;
  if (comparison.rows.length === 0) return null;
  return (
    <section
      className={`section ${alt ? "section-alt" : ""} ${images.comparison ? styles.withPhoto : ""}`}
      style={images.comparison ? ({ "--photo": `url(${images.comparison})` } as React.CSSProperties) : undefined}
      aria-labelledby="compare-title"
    >
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="compare-title"
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          accent={comparison.titleAccent}
          lead={comparison.lead}
        />
        <ul className={styles.tiles}>
          {comparison.columns.map((c, i) => (
            <li
              key={c}
              className={`${styles.tile} ${i === comparison.highlight ? styles.tileOurs : ""}`}
              style={{ "--fill": `${(covered(comparison.rows, i) / total) * 100}%` } as React.CSSProperties}
            >
              <span className={styles.tileName}>{c}</span>
              <span className={styles.tileNumber} aria-hidden="true">
                {covered(comparison.rows, i)}
                <small>/{total}</small>
              </span>
              <span className={styles.tileBar} aria-hidden="true" />
              <span className={styles.tileLabel}>
                {comparison.tally.replace("{n}", String(covered(comparison.rows, i))).replace("{total}", String(total))}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <caption className="visually-hidden">{comparison.title}</caption>
            <thead>
              <tr>
                <td />
                {comparison.columns.map((c, i) => (
                  <th key={c} scope="col" className={i === comparison.highlight ? styles.ours : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={i} className={i === comparison.highlight ? styles.ours : undefined}>
                      <Cell value={v} label={comparison.valueLabels[v]} mark={i === comparison.highlight ? row.mark : undefined} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {comparison.notes.map((n) => (
          <p key={n} className={styles.note}>
            {n}
          </p>
        ))}
      </div>
    </section>
  );
}
