import type { Metadata } from "next";
import ExperiencePageContent from "@/components/pages/experience-page-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Taufan Fatahillah — freelance, engineering, and volunteer work.",
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
