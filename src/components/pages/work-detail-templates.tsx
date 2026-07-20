"use client";

import { useTranslation } from "@/lib/i18n";
import { getLocalizedWork } from "@/lib/get-work";
import type { WorkItem } from "@/types/work";
import CaseStudyHero from "@/components/work/case-study-hero";
import CaseStudyResults from "@/components/work/case-study-results";
import CaseStudyCta from "@/components/work/case-study-cta";

export function Tier1Template({ work }: { work: WorkItem }) {
  const { t, locale } = useTranslation();
  const w = getLocalizedWork(work, locale);

  return (
    <>
      <CaseStudyHero item={w} />

      {w.context && (
        <section className="py-10 border-t">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
            {t("work.businessContext")}
          </h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line max-w-prose">
            {w.context}
          </p>
        </section>
      )}

      {(w.approach || w.challenges) && (
        <section className="py-10 border-t">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
            {t("work.approachDecisions")}
          </h2>
          {w.approach && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line max-w-prose mb-6">
              {w.approach}
            </p>
          )}
          {w.challenges && w.challenges.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">{t("work.challenges")}</h3>
              <ul className="space-y-2">
                {w.challenges.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-teal shrink-0">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="py-10 border-t">
        <CaseStudyResults item={w} />
      </section>

      <CaseStudyCta current={w} />
    </>
  );
}

export function Tier2Template({ work }: { work: WorkItem }) {
  const { t, locale } = useTranslation();
  const w = getLocalizedWork(work, locale);

  return (
    <>
      <CaseStudyHero item={w} />

      {(w.approach || w.results) && (
        <section className="py-10 border-t">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
            {t("work.aboutProject")}
          </h2>
          {w.approach && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line max-w-prose mb-4">
              {w.approach}
            </p>
          )}
          {w.results && (
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line max-w-prose">
              {w.results}
            </p>
          )}
        </section>
      )}

      <CaseStudyCta current={w} />
    </>
  );
}
