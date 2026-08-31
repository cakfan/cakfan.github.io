import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/services-page-content";

const siteUrl = "https://cakfan.github.io";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Engineering & Development",
  serviceType: "Software Development",
  description:
    "Full-cycle software development — from architecture and API design to deployment and monitoring.",
  provider: {
    "@type": "Person",
    name: "Taufan Fatahillah",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceOutput: "Software",
  url: `${siteUrl}/services`,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering and development services — web, mobile, APIs, and more.",
  alternates: { canonical: `${siteUrl}/services` },
  keywords: [
    "Taufan Fatahillah",
    "Software Engineer",
    "Web Development",
    "Mobile Development",
    "API Development",
    "Full-Stack Developer",
    "Indonesia",
  ],
  openGraph: {
    title: "Services — Taufan Fatahillah",
    description:
      "Software engineering and development services — web, mobile, APIs, and more.",
    url: `${siteUrl}/services`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Services — Taufan Fatahillah",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Taufan Fatahillah",
    description:
      "Software engineering and development services — web, mobile, APIs, and more.",
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
