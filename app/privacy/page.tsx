import JsonLd from "@/components/JsonLd";
import LegalPage from "@/components/LegalPage";
import { legal, pages } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.privacy, "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <LegalPage page={pages.privacy} sections={legal.privacy} />
      <JsonLd data={breadcrumbJsonLd("/privacy", pages.privacy.h1)} />
    </>
  );
}
