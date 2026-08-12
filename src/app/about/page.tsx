import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/about-page-content";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-Stack Developer based in Jember, Indonesia — building for business results, not just demos.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About — Taufan Fatahillah",
    description:
      "Full-Stack Developer based in Jember, Indonesia — building for business results, not just demos.",
    url: `${siteUrl}/about`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "About — Taufan Fatahillah",
      },
    ],
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Taufan Fatahillah",
    description:
      "Full-Stack Developer based in Jember, Indonesia — building for business results, not just demos.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
