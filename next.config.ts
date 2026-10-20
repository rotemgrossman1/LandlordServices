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

// Pages are static, so a per-request nonce isn't possible: Next's inline bootstrap scripts need
// 'unsafe-inline'. Dev mode also needs 'unsafe-eval'. Everything else is served from our own origin.
const isDev = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // No includeSubDomains: other landlords.co.il subdomains may not all serve HTTPS.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return oldWixRedirects.flatMap(([source, destination]) => {
      const encoded = encodeURI(source);
      const sources = encoded === source ? [source] : [source, encoded];
      return sources.map((s) => ({ source: s, destination, statusCode: 301 as const }));
    });
  },
};

export default nextConfig;
