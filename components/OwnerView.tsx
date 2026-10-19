import { ownerView } from "@/content/site";
import Icon from "./Icon";
import OwnerPhone from "./OwnerPhone";
import SectionHeading from "./SectionHeading";
import styles from "./OwnerView.module.css";

/** "What it looks like from your side": benefit points + the illustrative phone. */
export default function OwnerView() {
  return (
    <section className="section section-alt" aria-labelledby="owner-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <SectionHeading id="owner-title" title={ownerView.title} lead={ownerView.lead} />
          <ul className={styles.points}>
            {ownerView.points.map((p, i) => (
              <li key={p.title} className={styles.point}>
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

        <OwnerPhone />
      </div>
    </section>
  );
}
