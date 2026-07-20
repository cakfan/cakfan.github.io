import type { Metadata } from "next";
import { getAllWork } from "@/lib/get-work";
import WorkPageHeader from "@/components/pages/work-page-header";
import WorkPageClient from "@/components/work/work-page-client";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects and client work by Taufan Fatahillah — from local business websites to engineering experiments.",
};

export default function WorkPage() {
  const items = getAllWork();

  return (
    <section className="section-padding">
      <div className="container-section">
        <WorkPageHeader />
        <WorkPageClient items={items} />
      </div>
    </section>
  );
}
