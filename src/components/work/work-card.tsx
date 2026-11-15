"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import type { WorkItem } from "@/types/work";
import TagList from "@/components/ui/tag-list";
import Metric from "@/components/work/metric";

export function getCoverImage(item: WorkItem): string | undefined {
  return item.images.find(
    (image) => image && !image.includes("placeholder") && !image.endsWith(".svg")
  );
}

export function WorkCover({
  item,
  index,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  item: WorkItem;
  index?: string;
  className?: string;
  sizes?: string;
}) {
  const image = getCoverImage(item);
  const { t } = useTranslation();

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {image ? (
        <Image
          src={image}
          alt={`${item.title} — project screenshot`}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="label-mono text-accent">{index ?? "—"}</span>
            <span className="label-mono text-right text-muted-foreground">
              {t(`work.category.${item.category}`)}
            </span>
          </div>
          <div>
            <span className="block h-px w-10 bg-accent" aria-hidden="true" />
            <p className="mt-4 max-w-[18ch] text-h3 font-semibold leading-tight text-foreground">
              {item.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryIndex({
  item,
  index,
}: {
  item: WorkItem;
  index?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="label-mono text-muted-foreground">
        {t(`work.category.${item.category}`)}
      </span>
      {index ? <span className="label-mono text-accent">{index}</span> : null}
    </div>
  );
}

function FeaturedCard({ item, index }: { item: WorkItem; index?: string }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group grid overflow-hidden rounded-card border border-border bg-card transition-colors duration-200 hover:border-foreground/30 md:grid-cols-[1.15fr_1fr]"
    >
      <WorkCover
        item={item}
        index={index}
        sizes="(max-width: 768px) 100vw, 55vw"
        className="aspect-[16/10] border-b border-border md:aspect-auto md:min-h-[22rem] md:border-b-0 md:border-r"
      />

      <div className="flex flex-col justify-between gap-8 p-5 sm:p-6">
        <div>
          <CategoryIndex item={item} index={index} />
          <h3 className="mt-4 text-h3 font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-3 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            {item.tagline}
          </p>
          <TagList items={item.stack} className="mt-5" />
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
          {item.metric ? (
            <Metric value={item.metric.value} label={item.metric.label} />
          ) : (
            <span className="label-mono text-muted-foreground">
              {index ? `Case ${index}` : "Case study"}
            </span>
          )}
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            aria-hidden="true"
            className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
          />
        </div>
      </div>
    </Link>
  );
}

function DefaultCard({ item, index }: { item: WorkItem; index?: string }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card transition-colors duration-200 hover:border-foreground/30"
    >
      <WorkCover
        item={item}
        index={index}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[16/10] border-b border-border"
      />

      <div className="flex flex-1 flex-col p-5">
        <CategoryIndex item={item} index={index} />
        <h3 className="mt-3 text-base font-semibold text-foreground transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.tagline}
        </p>
        <TagList items={item.stack} className="mt-4 pt-1" />
      </div>
    </Link>
  );
}

function CompactCard({ item, index }: { item: WorkItem; index?: string }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex min-h-14 items-center gap-4 border-b border-border py-3 transition-colors hover:bg-muted/50"
    >
      <span className="label-mono w-8 shrink-0 text-accent">{index ?? "—"}</span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mt-0.5 truncate font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          {item.stack.join(" · ")}
        </p>
      </div>
      <ArrowUpRight
        size={15}
        strokeWidth={1.75}
        aria-hidden="true"
        className="shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
      />
    </Link>
  );
}

export default function WorkCard({
  item,
  variant = "default",
  index,
}: {
  item: WorkItem;
  variant?: "featured" | "default" | "compact";
  index?: string;
}) {
  if (variant === "featured") return <FeaturedCard item={item} index={index} />;
  if (variant === "compact") return <CompactCard item={item} index={index} />;
  return <DefaultCard item={item} index={index} />;
}
