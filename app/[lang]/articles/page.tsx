import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { getContent } from "@/content";
import { formatDate } from "@/lib/format";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata() {
  const { pages } = await getContent();
  return buildMetadata(pages.articles, "/articles");
}

/** All articles, newest first. Not linked anywhere (and a 404, see lib/routes.ts) while there are none. */
export default async function ArticlesPage() {
  const { articles, labels, lang, link, pages } = await getContent();
  return (
    <>
      <PageIntro page={pages.articles} eyebrow={labels.articles} />
      {articles.length > 0 && (
        <section className="section">
          <div className="container">
            <ul className={styles.grid}>
              {articles.map((a) => (
                <li key={a.slug} className={styles.card}>
                  {a.image.src && (
                    <div className={styles.media}>
                      <Image src={a.image.src} alt="" fill sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                  )}
                  <div className={styles.body}>
                    <p className={styles.date}>
                      <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
                    </p>
                    <h2 className={styles.title}>
                      <Link href={link(`/articles/${a.slug}`)} className={styles.cardLink}>
                        {a.meta.h1}
                      </Link>
                    </h2>
                    <p className={styles.excerpt}>{a.meta.description}</p>
                    <span className={styles.more} aria-hidden="true">
                      {labels.readArticle} <Icon name="arrow" size={16} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand />
      <JsonLd data={await breadcrumbJsonLd("/articles", labels.articles)} />
    </>
  );
}
