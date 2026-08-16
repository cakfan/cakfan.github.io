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

  const title = `${work.title} — Taufan Fatahillah`;
  const siteUrl = "https://cakfan.github.io";
  const firstImage = work.images[0];
  let ogImage = `${siteUrl}/og.png`;
  if (firstImage) {
    if (firstImage.startsWith("http")) {
      ogImage = firstImage;
    } else if (!firstImage.endsWith(".svg")) {
      ogImage = `${siteUrl}${firstImage}`;
    }
  }

  const keywords = [work.title, ...work.stack, "portfolio", "Taufan Fatahillah"];

  return {
    title: work.title,
    description: work.tagline,
    keywords,
    alternates: { canonical: `${siteUrl}/work/${work.slug}` },
    openGraph: {
      title,
      description: work.tagline,
      url: `${siteUrl}/work/${work.slug}`,
      siteName: "Taufan Fatahillah",
      images: [
        {
          url: ogImage,
          alt: `${work.title} screenshot`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: work.tagline,
      images: [ogImage],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const siteUrl = "https://cakfan.github.io";
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
      { "@type": "ListItem", position: 3, name: work.title, item: `${siteUrl}/work/${work.slug}` },
    ],
  };

  return (
    <section className="section-padding">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="container-section max-w-2xl mx-auto">
        {work.tier === 1 ? (
          <Tier1Template work={work} />
        ) : (
          <Tier2Template work={work} />
        )}
      </div>
    </section>
  );
}
