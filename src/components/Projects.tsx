"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Projects() {
  const { t, tArray } = useTranslation();
  const projects = tArray<{
    name: string;
    slug: string | null;
    description: string;
    tech: string[];
    demo: string | null;
    github: string;
  }>("projects.items");

  return (
    <section id="projects" aria-label="Projects" className="section-padding bg-muted/30">
      <div className="container-section">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
            {t("projects.heading")}
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl border bg-background overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {project.slug && (
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={`/projects/${project.slug}.jpg`}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label={`${project.name} demo`}
                      >
                        <ExternalLink size={16} />
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label={`${project.name} source code`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
