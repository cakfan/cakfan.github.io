"use client";

import { useTranslation } from "@/lib/i18n";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
}

export default function ExperiencePageContent() {
  const { t, tArray } = useTranslation();
  const experiences = tArray<ExperienceItem>("experience.items");

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        index="01"
        label={t("experience.heading")}
        title={t("experience.subtitle")}
        as="h1"
        titleClassName="text-h1"
      />

      <div className="mt-12 border-t border-border">
        {experiences.map((experience) => (
          <article
            key={experience.company + experience.period}
            className="grid gap-4 border-b border-border py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
              {experience.period}
            </p>

            <div>
              <h2 className="text-h3 font-semibold text-foreground">
                {experience.role}
              </h2>
              <p className="mt-1 text-sm text-accent">{experience.company}</p>

              <ul className="mt-4 space-y-2">
                {experience.descriptions.map((description) => (
                  <li
                    key={description}
                    className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-px w-3 shrink-0 bg-border"
                      aria-hidden="true"
                    />
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
