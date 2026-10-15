import Link from "next/link";
import type { Metadata } from "next";
import { labels } from "@/content/site";

export const metadata: Metadata = { title: labels.notFoundTitle };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>{labels.notFoundTitle}</h1>
        <p className="lead">{labels.notFoundText}</p>
        <p className="btn-row">
          <Link href="/" className="btn btn-primary">
            {labels.backHome}
          </Link>
          <Link href="/contact" className="btn btn-outline">
            {labels.contactUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
