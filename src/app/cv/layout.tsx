import type { Metadata } from "next";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "CV — Taufan Fatahillah",
  description:
    "Resume / CV of Taufan Fatahillah — Software Engineer with experience across web, mobile, and APIs.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  openGraph: {
    title: "CV — Taufan Fatahillah",
    description:
      "Resume / CV of Taufan Fatahillah — Software Engineer with experience across web, mobile, and APIs.",
    url: `${siteUrl}/cv`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "CV — Taufan Fatahillah",
      },
    ],
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV - Taufan Fatahillah",
    description:
      "Resume / CV of Taufan Fatahillah - Software Engineer with experience across web, mobile, and APIs.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
