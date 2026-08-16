import type { Metadata } from "next";
import ExperiencePageContent from "@/components/pages/experience-page-content";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Taufan Fatahillah — freelance, engineering, and volunteer work.",
  keywords: [
    "Taufan Fatahillah",
    "Experience",
    "Full-Stack Developer",
    "Freelance",
    "Open Source",
  ],
  alternates: { canonical: `${siteUrl}/experience` },
  openGraph: {
    title: "Experience — Taufan Fatahillah",
    description:
      "Professional experience of Taufan Fatahillah — freelance, engineering, and volunteer work.",
    url: `${siteUrl}/experience`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Experience — Taufan Fatahillah",
      },
    ],
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience — Taufan Fatahillah",
    description:
      "Professional experience of Taufan Fatahillah — freelance, engineering, and volunteer work.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
