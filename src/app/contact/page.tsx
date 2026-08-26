import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/contact-page-content";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Taufan Fatahillah — open to full-time opportunities and interesting projects.",
  keywords: [
    "Taufan Fatahillah",
    "Contact",
    "Software Engineer",
    "Indonesia",
  ],
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact — Taufan Fatahillah",
    description:
      "Get in touch with Taufan Fatahillah — open to full-time opportunities and interesting projects.",
    url: `${siteUrl}/contact`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Contact — Taufan Fatahillah",
      },
    ],
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Taufan Fatahillah",
    description:
      "Get in touch with Taufan Fatahillah — open to full-time opportunities and freelance projects.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
