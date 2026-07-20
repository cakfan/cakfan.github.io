"use client";

import { useTranslation } from "@/lib/i18n";
import type { WorkItem } from "@/types/work";
import MetricStat from "@/components/work/metric-stat";

export default function CaseStudyResults({ item }: { item: WorkItem }) {
  const { t } = useTranslation();
  if (!item.results && !item.metric) return null;

  return (
    <section>
      <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
        {t("work.results")}
      </h2>

      {item.metric && (
        <div className="mb-8">
          <MetricStat value={item.metric.value} label={item.metric.label} />
        </div>
      )}

      {item.results && (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {item.results}
          </p>
        </div>
      )}

      {item.clientMeta && (
        <div className="mt-8 p-6 rounded-xl border bg-muted/30">
          <h3 className="text-sm font-semibold mb-3">{t("work.businessDetails")}</h3>
          <dl className="grid gap-2 text-sm">
            {item.clientMeta.address && (
              <div className="flex gap-2">
                <dt className="text-muted-foreground">{t("work.address")}</dt>
                <dd>{item.clientMeta.address}</dd>
              </div>
            )}
            {item.clientMeta.hours && (
              <div className="flex gap-2">
                <dt className="text-muted-foreground">{t("work.hours")}</dt>
                <dd>{item.clientMeta.hours}</dd>
              </div>
            )}
            {item.clientMeta.phone && (
              <div className="flex gap-2">
                <dt className="text-muted-foreground">{t("work.phone")}</dt>
                <dd>{item.clientMeta.phone}</dd>
              </div>
            )}
          </dl>
        </div>
      )}
    </section>
  );
}
