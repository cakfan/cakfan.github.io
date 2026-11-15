import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import ExperiencePageContent from "@/components/pages/experience-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Professional experience of Taufan Fatahillah — software engineering, freelance, and open source.",
  path: "/experience",
  keywords: [
    "Taufan Fatahillah",
    "Experience",
    "Software Engineer",
    "Freelance",
    "Open Source",
  ],
  type: "profile",
});

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
