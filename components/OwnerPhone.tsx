import { ownerView } from "@/content/site";
import Icon from "./Icon";
import Logo from "./Logo";
import styles from "./OwnerPhone.module.css";

/** Illustrative phone with the updates an owner receives. Captioned as an illustration. */
export default function OwnerPhone() {
  return (
    <figure className={styles.figure}>
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
  );
}
