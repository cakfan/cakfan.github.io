"use client";

import TechBadge from "./ui/TechBadge";
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
          <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
            {t("about.heading")}
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            {t("about.tagline")}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
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
