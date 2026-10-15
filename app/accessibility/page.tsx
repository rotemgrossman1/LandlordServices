import LegalPage from "@/components/LegalPage";
import { legal, pages } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.accessibility, "/accessibility");

export default function AccessibilityPage() {
  return <LegalPage page={pages.accessibility} sections={legal.accessibility} />;
}
