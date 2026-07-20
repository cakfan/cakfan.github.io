"use client";

import { useTranslation } from "@/lib/i18n";

export default function ExperiencePageContent() {
  const { t, tArray } = useTranslation();
  const experiences = tArray<{ role: string; company: string; period: string; descriptions: string[] }>("experience.items");

  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
          {t("experience.heading")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          {t("experience.subtitle")}
        </h1>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={exp.company + exp.period} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${
                    i === 0
                      ? "border-2 border-teal bg-background dot-pulse"
                      : "border-2 border-teal/50 bg-teal/50"
                  }`}
                />
                <div className="text-xs text-muted-foreground mb-1">
                  {exp.period}
                </div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-teal mb-3">{exp.company}</p>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {exp.descriptions.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-teal/60 shrink-0" aria-hidden="true">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
