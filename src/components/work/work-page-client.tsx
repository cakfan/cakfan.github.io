"use client";

import { useState, useMemo } from "react";
import type { WorkItem, WorkCategory } from "@/types/work";
import { useTranslation } from "@/lib/i18n";
import { getLocalizedWork } from "@/lib/get-work";
import WorkCard from "@/components/work/work-card";
import WorkFilter from "@/components/work/work-filter";

type FilterOption = "all" | WorkCategory;

export default function WorkPageClient({ items }: { items: WorkItem[] }) {
  const { t, locale } = useTranslation();
  const [filter, setFilter] = useState<FilterOption>("all");

  const localized = useMemo(
    () => items.map((item) => getLocalizedWork(item, locale)),
    [items, locale]
  );

  const filtered =
    filter === "all" ? localized : localized.filter((item) => item.category === filter);

  const tier1 = filtered.filter((item) => item.tier === 1);
  const tier2 = filtered.filter((item) => item.tier === 2);
  const tier3 = filtered.filter((item) => item.tier === 3);

  return (
    <>
      <div className="mb-12">
        <WorkFilter onFilter={setFilter} />
      </div>

      {tier1.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
            {t("work.clientWork")}
          </h2>
          <div className="grid gap-8">
            {tier1.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      )}

      {tier2.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
            {t("work.engineering")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier2.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      )}

      {tier3.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            {t("work.experiments")}
          </h2>
          <div className="grid gap-2">
            {tier3.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <p className="text-muted-foreground text-center py-12">
          {t("work.noProjects")}
        </p>
      )}
    </>
  );
}
