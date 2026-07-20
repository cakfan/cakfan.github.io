"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import type { WorkItem } from "@/types/work";
import TechStack from "@/components/ui/tech-stack";

export default function CaseStudyHero({ item }: { item: WorkItem }) {
  const { t } = useTranslation();

  return (
    <div className="mb-12">
      <div className="relative aspect-video md:aspect-[21/9] rounded-xl overflow-hidden bg-muted mb-8">
        <ViewTransition name={`work-image-${item.slug}`}>
          <Image
            src={item.images[0]}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover object-top"
            priority
          />
        </ViewTransition>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-medium text-teal uppercase tracking-widest">
          {t(`work.category.${item.category}`)}
        </span>
        {item.stack.length > 0 && (
          <>
            <span className="text-muted-foreground">·</span>
            <TechStack items={item.stack} />
          </>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {item.title}
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {item.tagline}
      </p>

      <div className="flex flex-wrap gap-3">
        {item.liveUrl && (
          <Link
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} />
            {t("work.liveSite")}
          </Link>
        )}
        {item.githubUrl && (
          <Link
            href={item.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
          >
            {t("work.sourceCode")}
          </Link>
        )}
      </div>
    </div>
  );
}
