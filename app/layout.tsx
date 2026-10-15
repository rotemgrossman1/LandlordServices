import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileBar from "@/components/MobileBar";
import { labels, pages, site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pages.home.title,
  description: pages.home.description,
  applicationName: site.nameHe,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#12394a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body>
        <a href="#main" className="skip-link">
          {labels.skip}
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBar />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
