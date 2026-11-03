import type { Metadata } from "next";
import TapScanPrivacyPolicyPageContent from "@/components/pages/tapscan-privacy-policy-page-content";

const siteUrl = "https://cakfan.github.io";
const pageUrl = `${siteUrl}/privacy-policy/tapscan`;
const description =
  "Privacy Policy for TapScan, an offline PDF document scanner for Android.";

export const metadata: Metadata = {
  title: "TapScan Privacy Policy",
  description,
  keywords: [
    "TapScan",
    "TapScan Privacy Policy",
    "PDF scanner",
    "Android document scanner",
  ],
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "TapScan Privacy Policy - Taufan Fatahillah",
    description,
    url: pageUrl,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "TapScan Privacy Policy - Taufan Fatahillah",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TapScan Privacy Policy - Taufan Fatahillah",
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function TapScanPrivacyPolicyPage() {
  return <TapScanPrivacyPolicyPageContent />;
}
