import type { Metadata } from "next";
import { getAllWork } from "@/lib/get-work";
import WorkPageHeader from "@/components/pages/work-page-header";
import WorkPageClient from "@/components/work/work-page-client";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects by Taufan Fatahillah — client work, engineering projects, and experiments.",
  keywords: [
    "Taufan Fatahillah",
    "Portfolio",
    "Projects",
    "Software Engineer",
    "Next.js",
    "Indonesia",
  ],
  alternates: { canonical: `${siteUrl}/work` },
  openGraph: {
    title: "Work — Taufan Fatahillah",
    description:
      "Projects by Taufan Fatahillah — client work, engineering projects, and experiments.",
    url: `${siteUrl}/work`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Work — Taufan Fatahillah",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Taufan Fatahillah",
    description:
      "Projects by Taufan Fatahillah — client work, engineering projects, and experiments.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function WorkPage() {
  const items = getAllWork();

  return (
    <section className="section-padding">
      <div className="container-section">
        <WorkPageHeader />
        <WorkPageClient items={items} />
      </div>
    </section>
  );
}
