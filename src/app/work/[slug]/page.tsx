import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getWorkBySlug } from "@/lib/get-work";
import { Tier1Template, Tier2Template } from "@/components/pages/work-detail-templates";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };

  return {
    title: work.title,
    description: work.tagline,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        {work.tier === 1 ? (
          <Tier1Template work={work} />
        ) : (
          <Tier2Template work={work} />
        )}
      </div>
    </section>
  );
}
