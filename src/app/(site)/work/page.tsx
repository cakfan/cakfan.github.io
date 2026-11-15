import type { Metadata } from "next";
import { getAllWork } from "@/lib/get-work";
import { createPageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/container";
import WorkPageHeader from "@/components/pages/work-page-header";
import WorkList from "@/components/work/work-list";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Projects by Taufan Fatahillah — client work, engineering projects, and experiments.",
  path: "/work",
  keywords: [
    "Taufan Fatahillah",
    "Portfolio",
    "Projects",
    "Software Engineer",
    "Next.js",
    "Indonesia",
  ],
});

export default function WorkPage() {
  const items = getAllWork();

  return (
    <Container className="py-14 sm:py-20">
      <WorkPageHeader />
      <WorkList items={items} />
    </Container>
  );
}
