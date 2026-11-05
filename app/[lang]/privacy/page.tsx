import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { getContent } from "@/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const { pages } = await getContent();
  return buildMetadata(pages.privacy, "/privacy");
}

export default async function PrivacyPage() {
  const { legal, pages } = await getContent();
  return (
    <>
      <LegalPage page={pages.privacy} sections={legal.privacy} />
      <JsonLd data={await breadcrumbJsonLd("/privacy", pages.privacy.h1)} />
    </>
  );
}
