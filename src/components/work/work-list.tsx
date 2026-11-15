"use client";

import { useMemo } from "react";
import { useTranslation } from "@/lib/i18n";
import type { WorkItem } from "@/types/work";
import { getLocalizedWork } from "@/lib/get-work";
import WorkCard from "@/components/work/work-card";
import WorkAnchorNav, {
  type WorkSection,
} from "@/components/work/work-anchor-nav";

type WorkGroup = WorkSection & { items: WorkItem[] };

export default function WorkList({ items }: { items: WorkItem[] }) {
  const { t, locale } = useTranslation();

  const sections = useMemo<WorkGroup[]>(() => {
    const localized = items.map((item) => getLocalizedWork(item, locale));

    return [
      {
        id: "client-work",
        index: "01",
        label: t("work.localBusiness"),
        count: localized.filter((item) => item.tier === 1).length,
        items: localized.filter((item) => item.tier === 1),
      },
      {
        id: "engineering",
        index: "02",
        label: t("work.engineering"),
        count: localized.filter((item) => item.tier === 2).length,
        items: localized.filter((item) => item.tier === 2),
      },
      {
        id: "experiments",
        index: "03",
        label: t("work.experiments"),
        count: localized.filter((item) => item.tier === 3).length,
        items: localized.filter((item) => item.tier === 3),
      },
    ].filter((section) => section.items.length > 0);
  }, [items, locale, t]);

  if (sections.length === 0) {
    return (
      <p className="mt-10 text-muted-foreground">{t("work.noProjects")}</p>
    );
  }

  return (
    <>
      <WorkAnchorNav sections={sections} />

      <div className="mt-12 space-y-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="flex items-end justify-between gap-4 border-t border-border pt-5">
              <h2
                id={`${section.id}-heading`}
                className="label-mono text-muted-foreground"
              >
                <span className="text-accent">{section.index}</span>
                <span aria-hidden="true"> / </span>
                {section.label}
              </h2>
              <span className="label-mono text-muted-foreground">
                {t("work.count").replace("{count}", String(section.count))}
              </span>
            </div>

            {section.id === "experiments" ? (
              <div className="mt-4 border-t border-border">
                {section.items.map((item, index) => (
                  <WorkCard
                    key={item.slug}
                    item={item}
                    variant="compact"
                    index={String(index + 1).padStart(2, "0")}
                  />
                ))}
              </div>
            ) : (
              <div
                className={
                  section.id === "client-work"
                    ? "mt-6 grid gap-5"
                    : "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                }
              >
                {section.items.map((item, index) => (
                  <WorkCard
                    key={item.slug}
                    item={item}
                    variant={section.id === "client-work" ? "featured" : "default"}
                    index={String(index + 1).padStart(2, "0")}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
