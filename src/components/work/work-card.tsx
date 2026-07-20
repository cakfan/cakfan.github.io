"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { assets } from "@/assets";
import type { WorkItem } from "@/types/work";
import TechStack from "@/components/ui/tech-stack";
import MetricStat from "@/components/work/metric-stat";

function Tier1Card({ item }: { item: WorkItem }) {
  const { t } = useTranslation();
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group block rounded-xl border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="grid md:grid-cols-[1fr,auto] gap-0">
        <div className="relative aspect-video md:aspect-[4/3] overflow-hidden bg-muted">
          <ViewTransition name={`work-image-${item.slug}`}>
            <Image
              src={item.images[0]}
              alt={`${item.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </ViewTransition>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between min-w-0 md:max-w-sm">
          <div>
            <span className="text-xs font-medium text-teal uppercase tracking-widest">
              {t("work.clientWork")}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {item.tagline}
            </p>
            <TechStack items={item.stack} className="mb-4" />
          </div>

          {item.metric && (
            <div className="pt-4 border-t">
              <MetricStat value={item.metric.value} label={item.metric.label} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function Tier2Card({ item }: { item: WorkItem }) {
  const { t } = useTranslation();
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group block rounded-xl border bg-background overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <ViewTransition name={`work-image-${item.slug}`}>
          <Image
            src={item.images[0]}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </ViewTransition>
      </div>

      <div className="p-5">
          <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-xs font-medium text-teal uppercase tracking-widest">
              {t("work.engineering")}
            </span>
            <h3 className="text-base font-semibold mt-1">{item.title}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {item.tagline}
        </p>
        <TechStack items={item.stack} />
      </div>
    </Link>
  );
}

function Tier3Card({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex items-center gap-4 p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
    >
      <div className="relative w-16 h-12 rounded overflow-hidden bg-muted shrink-0">
        <ViewTransition name={`work-image-${item.slug}`}>
          <Image
            src={item.images[0]}
            alt={`${item.title} screenshot`}
            fill
            sizes="64px"
            className="object-cover object-top"
          />
        </ViewTransition>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium truncate">{item.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{item.tagline}</p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        {item.liveUrl && (
          <ExternalLink size={12} className="text-muted-foreground" aria-hidden="true" />
        )}
        {item.githubUrl && (
          <Image src={assets.githubBlack} alt="GitHub" className="w-3 block dark:hidden" />
        )}
      </div>
    </Link>
  );
}

export default function WorkCard({ item }: { item: WorkItem }) {
  switch (item.tier) {
    case 1:
      return <Tier1Card item={item} />;
    case 2:
      return <Tier2Card item={item} />;
    case 3:
      return <Tier3Card item={item} />;
  }
}
