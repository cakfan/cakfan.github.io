import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import CvToolbar from "@/components/pages/cv-toolbar";

export const metadata: Metadata = createPageMetadata({
  title: "CV",
  description:
    "Resume / CV of Taufan Fatahillah — Software Engineer with experience across web, mobile, and APIs.",
  path: "/cv",
  type: "profile",
});

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-muted/40 print:bg-white">
      <CvToolbar />
      {children}
    </div>
  );
}
