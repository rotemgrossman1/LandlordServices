import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/content";

// The 404 page. proxy.ts rewrites every unknown URL here, in the visitor's language, with a 404
// status (Next's not-found files don't render inside a root layout under [lang]).

export async function generateMetadata(): Promise<Metadata> {
  const { labels } = await getContent();
  return { title: labels.notFoundTitle, robots: { index: false } };
}

export default async function NotFoundPage() {
  const { labels, link } = await getContent();
  return (
    <section className="section">
      <div className="container prose">
        <h1>{labels.notFoundTitle}</h1>
        <p className="lead">{labels.notFoundText}</p>
        <p className="btn-row">
          <Link href={link("/")} className="btn btn-primary">
            {labels.backHome}
          </Link>
          <Link href={link("/contact")} className="btn btn-outline">
            {labels.contactUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
