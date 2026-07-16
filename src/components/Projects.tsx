"use client";

import { useTranslation } from "@/lib/i18n";
import type { Project } from "@/lib/types";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  const { t, tArray } = useTranslation();
  const projects = tArray<Project>("projects.items");

  return (
    <section id="projects" aria-label="Projects" className="section-padding bg-muted/30">
      <div className="container-section">
        <SectionHeader heading={t("projects.heading")} subtitle={t("projects.subtitle")} />

        <div className="max-w-4xl mx-auto columns-1 sm:columns-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
