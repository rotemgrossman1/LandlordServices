import { comparison, type CompareValue } from "@/content/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import styles from "./Comparison.module.css";

const valueIcon = { yes: "check", no: "x", you: "user" } as const;

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

/** Self-managed vs broker vs Landlord. A real <table> so it reads well for everyone. */
export default function Comparison({ alt = false }: { alt?: boolean }) {
  if (comparison.rows.length === 0) return null;
  return (
    <section className={`section ${alt ? "section-alt" : ""}`} aria-labelledby="compare-title">
      <div className="container">
        <SectionHeading
          id="compare-title"
          eyebrow={comparison.eyebrow}
          title={comparison.title}
          accent={comparison.titleAccent}
          lead={comparison.lead}
        />
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
