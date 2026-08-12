import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/services-page-content";

const siteUrl = "https://cakfan.github.io";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landing Page Development for Small Businesses",
  serviceType: "Landing page development",
  description:
    "Fast, SEO-friendly, mobile-responsive websites built for small businesses and UMKM in Indonesia — from consultation to deployment.",
  provider: {
    "@type": "Person",
    name: "Taufan Fatahillah",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "UMKM (small and medium businesses)",
  },
  serviceOutput: "Website",
  url: `${siteUrl}/services`,
};

export const metadata: Metadata = {
  title: "Landing Page Development for Small Businesses",
  description:
    "Landing page and website development for UMKM in Indonesia — fast, SEO-friendly, mobile-responsive, and built for business results.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Landing Page Development for Small Businesses — Taufan Fatahillah",
    description:
      "Landing page and website development for UMKM in Indonesia — fast, SEO-friendly, mobile-responsive, and built for business results.",
    url: `${siteUrl}/services`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Landing Page Development for Small Businesses",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Development for Small Businesses — Taufan Fatahillah",
    description:
      "Landing page and website development for UMKM in Indonesia — fast, SEO-friendly, mobile-responsive, and built for business results.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicesPageContent />
    </>
  );
}
