import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import TapScanPrivacyPolicyPageContent from "@/components/pages/tapscan-privacy-policy-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "TapScan Privacy Policy",
  description:
    "Privacy Policy for TapScan, an offline PDF document scanner for Android.",
  path: "/privacy-policy/tapscan",
  keywords: [
    "TapScan",
    "TapScan Privacy Policy",
    "PDF scanner",
    "Android document scanner",
  ],
  noIndex: true,
});

export default function TapScanPrivacyPolicyPage() {
  return <TapScanPrivacyPolicyPageContent />;
}
