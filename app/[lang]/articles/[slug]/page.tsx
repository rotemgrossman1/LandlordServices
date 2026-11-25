import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AreasLinks from "@/components/AreasLinks";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import RichText, { plainText } from "@/components/RichText";
import { getContent } from "@/content";
import { articles as heArticles } from "@/content/site";
import { formatDate } from "@/lib/format";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// Slugs are the same in both languages
export function generateStaticParams() {
  return heArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { articles } = await getContent();
  const article = articles.find((a) => a.slug === slug);
  return article
    ? buildMetadata(article.meta, `/articles/${article.slug}`, { article: true, image: article.image.src || undefined })
    : {};
}

/** One article: intro, sections, related services as hashtags, full-width image, FAQ and sources. */
export default async function ArticlePage({ params }: Props) {
  const { articles, labels, lang, link, services } = await getContent();
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const path = `/articles/${article.slug}`;
  const related = article.services
    .map((id) => services.find((s) => s.id === id))
    .filter((s) => s !== undefined);
  const faq = article.faq.map((q) => ({ ...q, answer: plainText(q.answer) }));

  return (
    <>
      <PageIntro page={{ ...article.meta, intro: "" }} eyebrow={labels.articles} titleClassName={styles.title}>
        <p className={styles.dates}>
          {article.author && (
            <>
              {labels.author} {article.author}
              {" · "}
            </>
          )}
          {labels.published} <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
          {article.updated && (
            <>
              {" · "}
              {labels.lastUpdated} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
            </>
          )}
        </p>
      </PageIntro>

      <article className="section">
        <div className={`container ${styles.layout}`}>
          <div className={`prose ${styles.body}`}>
            {article.meta.intro && (
              <p className="lead">
                <RichText text={article.meta.intro} link={link} />
              </p>
            )}
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p}>
                    <RichText text={p} link={link} />
                  </p>
                ))}
                {section.bullets.length > 0 && (
                  <ul className="check-list">
                    {section.bullets.map((b) => (
                      <li key={b}>
                        <RichText text={b} link={link} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.after?.map((p) => (
                  <p key={p}>
                    <RichText text={p} link={link} />
                  </p>
                ))}
              </section>
            ))}

            {related.length > 0 && (
              <nav className={styles.tags} aria-labelledby="related-title">
                <h2 id="related-title" className={styles.smallHeading}>
                  {labels.relatedServices}
                </h2>
                <ul>
                  {related.map((s) => (
                    <li key={s.id}>
                      <Link href={`${link("/services")}#${s.id}`} className={styles.tag}>
                        <span aria-hidden="true">#</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {article.image.src && (
            <figure className={styles.figure}>
              <Image
                src={article.image.src}
                alt={article.image.alt}
                width={1600}
                height={900}
                sizes="(min-width: 1360px) 1360px, 100vw"
              />
            </figure>
          )}
        </div>
      </article>

      {article.faq.length > 0 && (
        <section className="section section-alt" aria-labelledby="article-faq-title">
          <div className="container">
            <h2 id="article-faq-title" className={styles.faqTitle}>
              {labels.articleFaq}
            </h2>
            <Faq items={faq} />
          </div>
        </section>
      )}

      {article.sources.length > 0 && (
        <section className="section" aria-labelledby="sources-title">
          <div className="container">
            <div className="prose">
              <h2 id="sources-title" className={styles.smallHeading}>
                {labels.sources}
              </h2>
              <p className={styles.sourcesNote}>{labels.sourcesNote}</p>
              <ol className={styles.sources}>
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener">
                      {s.title}
                    </a>
                    <span className={styles.sourceMeta}>
                      {" – "}
                      {s.publisher}
                      {s.date && (
                        <>
                          {", "}
                          <time dateTime={s.date}>{formatDate(s.date, lang)}</time>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="more-link">
                <Link href={link("/articles")}>
                  {labels.allArticles} <Icon name="arrow" size={16} />
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      <AreasLinks alt />

      <CtaBand />
      <JsonLd data={await articleJsonLd(article, path)} />
      {article.faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}
      <JsonLd data={await breadcrumbJsonLd(path, article.meta.h1)} />
    </>
  );
}
