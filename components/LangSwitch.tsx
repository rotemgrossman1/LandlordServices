import { langs, localePath, type Lang } from "@/lib/i18n";
import Flag from "./Flag";
import styles from "./LangSwitch.module.css";

/**
 * 🇮🇱 עברית / 🇺🇸 English. Links to the same page in each language; `?lang=` tells proxy.ts to
 * remember the choice in a cookie, then it redirects to the clean URL. Plain <a> links, so the
 * page reloads with the right `lang` and `dir`. Works without JavaScript.
 */
export default function LangSwitch({
  lang,
  path,
  names,
  label,
}: {
  lang: Lang;
  path: string; // the current page without its language prefix, e.g. "/services"
  names: Record<Lang, string>;
  label: string;
}) {
  return (
    <nav className={styles.switch} aria-label={label}>
      <ul className={styles.list}>
        {langs.map((l) => (
          <li key={l}>
            <a
              href={`${localePath(l, path)}?lang=${l}`}
              hrefLang={l}
              lang={l}
              className={styles.link}
              aria-current={l === lang ? "true" : undefined}
            >
              <Flag lang={l} />
              <span>{names[l]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
