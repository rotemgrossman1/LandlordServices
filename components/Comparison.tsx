import { comparison, images, type CompareValue } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./Comparison.module.css";

const valueIcon = { yes: "check", no: "x", you: "user" } as const;
const total = comparison.rows.length;

/** How many rows a column covers ("yes") */
function covered(col: number) {
  return comparison.rows.filter((r) => r.values[col] === "yes").length;
}

function Cell({ value }: { value: CompareValue }) {
  return (
    <span className={`${styles.value} ${styles[value]}`}>
      <span className={styles.mark}>
        <Icon name={valueIcon[value]} size={16} />
      </span>
      <span className={styles.valueLabel}>{comparison.valueLabels[value]}</span>
    </span>
  );
}

/**
 * Self-managed vs broker vs Landlord: three score tiles (how much each option covers)
 * over a real <table>, so it reads well for everyone.
 */
export default function Comparison({ alt = false }: { alt?: boolean }) {
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
              style={{ "--fill": `${(covered(i) / total) * 100}%` } as React.CSSProperties}
            >
              <span className={styles.tileName}>{c}</span>
              <span className={styles.tileNumber} aria-hidden="true">
                {covered(i)}
                <small>/{total}</small>
              </span>
              <span className={styles.tileBar} aria-hidden="true" />
              <span className={styles.tileLabel}>
                {comparison.tally.replace("{n}", String(covered(i))).replace("{total}", String(total))}
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
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {comparison.note && <p className={styles.note}>{comparison.note}</p>}
      </div>
    </section>
  );
}
