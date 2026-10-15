import LegalPage from "@/components/LegalPage";
import { legal, pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.privacy, "/privacy");

export default function PrivacyPage() {
  return <LegalPage page={pages.privacy} sections={legal.privacy} />;
}
