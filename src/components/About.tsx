"use client";

import TechBadge from "./ui/TechBadge";
import SectionHeader from "./ui/SectionHeader";
import { useTranslation } from "@/lib/i18n";

const techs = [
  "Next.js", "React", "TypeScript", "TailwindCSS",
  "JavaScript", "Shadcn-UI", "Express.js", "NestJS",
  "Git", "Docker", "HTML5", "CSS3",
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" aria-label="About" className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <SectionHeader heading={t("about.heading")} subtitle={t("about.tagline")} className="mb-0" />
          <p className="text-muted-foreground leading-relaxed mb-8 mt-6">
            {t("about.bio")}
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <TechBadge key={tech} label={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
