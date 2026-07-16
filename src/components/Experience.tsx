"use client";

import { useTranslation } from "@/lib/i18n";

export default function Experience() {
  const { t, tArray } = useTranslation();
  const experiences = tArray<{
    role: string;
    company: string;
    period: string;
    descriptions: string[];
  }>("experience.items");

  return (
    <section id="experience" aria-label="Experience" className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
            {t("experience.heading")}
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            {t("experience.subtitle")}
          </p>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp) => (
                <div key={exp.company + exp.period} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-blue-500 bg-background" />
                  <div className="text-xs text-muted-foreground mb-1">
                    {exp.period}
                  </div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-blue-500 mb-2">{exp.company}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {exp.descriptions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
