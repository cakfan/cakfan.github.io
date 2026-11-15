import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import ServicesPageContent from "@/components/pages/services-page-content";

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

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Software engineering and development services — web, mobile, APIs, and more.",
  path: "/services",
  keywords: [
    "Taufan Fatahillah",
    "Software Engineer",
    "Web Development",
    "Mobile Development",
    "API Development",
    "Full-Stack Developer",
    "Indonesia",
  ],
});

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
