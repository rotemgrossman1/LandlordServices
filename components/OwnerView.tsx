import { ownerView } from "@/content/site";
import Icon from "./Icon";
import Logo from "./Logo";
import SectionHeading from "./SectionHeading";
import styles from "./OwnerView.module.css";

/** "What it looks like from your side": benefit points + an illustrative phone with updates. */
export default function OwnerView() {
  return (
    <section className="section section-alt" aria-labelledby="owner-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <SectionHeading id="owner-title" eyebrow={ownerView.eyebrow} title={ownerView.title} lead={ownerView.lead} />
          <ul className={styles.points}>
            {ownerView.points.map((p, i) => (
              <li key={p.title} className={styles.point} data-reveal style={{ "--reveal-i": i } as React.CSSProperties}>
                <span className={styles.pointIcon}>
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h3 className={styles.pointTitle}>{p.title}</h3>
                  <p className={styles.pointText}>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className={styles.figure} data-reveal>
          <div className={styles.phone}>
            <div className={styles.notch} aria-hidden="true" />
            <div className={styles.screenHead}>
              <span className={styles.avatar} aria-hidden="true">
                <Logo markOnly />
              </span>
              <span>
                <strong>{ownerView.mock.from}</strong>
                <span className={styles.subtitle}>{ownerView.mock.subtitle}</span>
              </span>
            </div>
            <ul className={styles.messages}>
              {ownerView.mock.messages.map((m) => (
                <li key={m.title} className={styles.message}>
                  <span className={styles.msgIcon}>
                    <Icon name={m.icon} size={18} />
                  </span>
                  <span>
                    <strong>{m.title}</strong>
                    <span className={styles.msgText}>{m.text}</span>
                  </span>
                  <span className={styles.tick} aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <figcaption className={styles.note}>{ownerView.mock.note}</figcaption>
        </figure>
      </div>
    </section>
  );
}
