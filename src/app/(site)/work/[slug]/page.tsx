import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getWorkBySlug } from "@/lib/get-work";
import { siteUrl } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import CaseStudyLayout from "@/components/work/case-study-layout";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };

  const firstImage = work.images.find(
    (image) => !image.includes("placeholder") && !image.endsWith(".svg")
  );

  const ogImage = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `${siteUrl}${firstImage}`
    : undefined;

  return createPageMetadata({
    title: work.title,
    description: work.tagline,
    path: `/work/${work.slug}`,
    keywords: [work.title, ...work.stack, "portfolio", "Taufan Fatahillah"],
    ...(ogImage ? { ogImage, ogImageAlt: `${work.title} screenshot` } : {}),
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: work.title,
        item: `${siteUrl}/work/${work.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyLayout work={work} />
    </>
  );
}
