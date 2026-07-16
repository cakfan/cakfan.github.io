"use client";

import { useTranslation } from "@/lib/i18n";
import type { Experience } from "@/lib/types";
import SectionHeader from "./ui/SectionHeader";

export default function ExperienceSection() {
  const { t, tArray } = useTranslation();
  const experiences = tArray<Experience>("experience.items");

  return (
    <section id="experience" aria-label="Experience" className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeader heading={t("experience.heading")} subtitle={t("experience.subtitle")} className="mb-10" />

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={exp.company + exp.period} className="relative pl-8">
                  <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${i === 0 ? "border-2 border-blue-500 bg-background dot-pulse" : "border-2 border-blue-500/50 bg-blue-500/50"}`} />
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
