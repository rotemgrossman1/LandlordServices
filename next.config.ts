import type { NextConfig } from "next";

// Old Wix URLs → new pages (301; `permanent: true` would send 308). Each entry is registered in both its
// raw Hebrew form and its URL-encoded form so either request matches.
const oldWixRedirects: [string, string][] = [
  ["/אודות", "/about"],
  ["/שירותי-ניהול", "/services"],
  ["/שאלות-נפוצות", "/faq"],
  ["/שאלות-נפוצות-שירותי-ניהול-1", "/faq"],
  ["/שאלות-נפוצות-landlord-safe", "/landlord-safe#faq"],
  ["/יצירת-קשר", "/contact"],
  ["/כמה-זה-עולה-לי", "/faq"],
  ["/באיזה-אזור-אתם-פעילים", "/faq"],
  ["/למה-לבחור-בנו", "/about"],
  ["/אילו-שירותים-אתם-מספקים", "/services"],
  ["/למי-מיועד-השירות", "/services"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return oldWixRedirects.flatMap(([source, destination]) => {
      const encoded = encodeURI(source);
      const sources = encoded === source ? [source] : [source, encoded];
      return sources.map((s) => ({ source: s, destination, statusCode: 301 as const }));
    });
  },
};

export default nextConfig;
