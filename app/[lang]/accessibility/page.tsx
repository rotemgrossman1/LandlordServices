import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { getContent } from "@/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const { pages } = await getContent();
  return buildMetadata(pages.accessibility, "/accessibility");
}

export default async function AccessibilityPage() {
  const { legal, pages } = await getContent();
  return (
    <>
      <LegalPage page={pages.accessibility} sections={legal.accessibility} updated={legal.accessibilityUpdated} />
      <JsonLd data={await breadcrumbJsonLd("/accessibility", pages.accessibility.h1)} />
    </>
  );
}
