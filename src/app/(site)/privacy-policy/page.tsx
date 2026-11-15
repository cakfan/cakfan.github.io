import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import PrivacyPolicyPageContent from "@/components/pages/privacy-policy-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for applications published by Taufan Fatahillah on Google Play Store.",
  path: "/privacy-policy",
  keywords: ["Taufan Fatahillah", "Privacy Policy", "Google Play", "Android Apps"],
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageContent />;
}
