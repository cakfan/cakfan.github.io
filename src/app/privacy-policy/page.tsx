import type { Metadata } from "next";
import PrivacyPolicyPageContent from "@/components/pages/privacy-policy-page-content";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for applications published by Taufan Fatahillah on Google Play Store.",
  keywords: [
    "Taufan Fatahillah",
    "Privacy Policy",
    "Google Play",
    "Android Apps",
  ],
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy — Taufan Fatahillah",
    description:
      "Privacy Policy for applications published by Taufan Fatahillah on Google Play Store.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Taufan Fatahillah",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Taufan Fatahillah",
    description:
      "Privacy Policy for applications published by Taufan Fatahillah on Google Play Store.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageContent />;
}
