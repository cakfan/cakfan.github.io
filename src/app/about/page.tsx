import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/about-page-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-Stack Developer based in Jember, Indonesia — building for business results, not just demos.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
