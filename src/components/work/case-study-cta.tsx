"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import type { WorkItem } from "@/types/work";
import { getAllWork } from "@/lib/get-work";

export default function CaseStudyCta({ current }: { current: WorkItem }) {
  const { t } = useTranslation();
  const all = getAllWork();
  const others = all.filter((w) => w.slug !== current.slug).slice(0, 2);

  return (
    <section className="pt-12 border-t">
      <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
        {t("work.moreWork")}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {others.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group p-5 rounded-xl border hover:bg-muted/50 transition-colors"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              {t(`work.category.${item.category}`)}
            </span>
            <h3 className="text-base font-semibold mt-1 group-hover:text-teal transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {item.tagline}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/work"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("work.viewAllWork")}
        </Link>
      </div>
    </section>
  );
}
