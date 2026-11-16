import Link from "next/link";
import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Plain text with [text](/path) and [text](https://…) links, as used in article paragraphs.
 * Internal paths go through `link` so they get the /en prefix on English pages.
 */
export default function RichText({ text, link }: { text: string; link: (path: string) => string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      href.startsWith("/") ? (
        <Link key={start} href={link(href)}>
          {label}
        </Link>
      ) : (
        <a key={start} href={href} target="_blank" rel="noopener">
          {label}
        </a>
      ),
    );
    last = start + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}

/** The same text with the link markup removed (for meta descriptions and JSON-LD) */
export function plainText(text: string): string {
  return text.replace(LINK, "$1");
}
