import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import AboutPageContent from "@/components/pages/about-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Software Engineer based in Jember, Indonesia — building across web, mobile, and APIs.",
  path: "/about",
  keywords: ["Taufan Fatahillah", "Software Engineer", "Jember", "Indonesia", "About"],
  type: "profile",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
