import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { legal, pages } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.accessibility, "/accessibility");

export default function AccessibilityPage() {
  return (
    <>
      <LegalPage page={pages.accessibility} sections={legal.accessibility} />
      <JsonLd data={breadcrumbJsonLd("/accessibility", pages.accessibility.h1)} />
    </>
  );
}
