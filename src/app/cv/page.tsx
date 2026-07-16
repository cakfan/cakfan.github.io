"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

export default function CvPage() {
  const { t, tArray } = useTranslation();

  const experiences = tArray<{
    role: string;
    company: string;
    period: string;
    descriptions: string[];
  }>("experience.items");

  const projects = tArray<{
    name: string;
    description: string;
    demo: string | null;
    github: string;
    tech: string[];
  }>("projects.items");

  const localBusiness = tArray<{
    name: string;
    category: string;
    description: string;
    demo: string;
  }>("localBusiness.items");

  return (
    <>
      <style>{`
        header, footer, button[aria-label="Back to top"] { display: none !important; }
        @media print {
          .cv-toolbar { display: none !important; }
        }
      `}</style>

      <div className="cv-toolbar fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container-section flex items-center justify-between h-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="cv-content pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-[800px] mx-auto bg-background rounded-xl shadow-lg border overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-blue-500">
              <h1 className="text-3xl font-bold tracking-tight mb-1">
                Taufan Fatahillah
              </h1>
              <p className="text-blue-500 font-medium">
                Full-Stack Developer
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Jember, East Java, Indonesia &nbsp;|&nbsp;{" "}
                <a href="https://linkedin.com/in/cakfan" target="_blank" className="hover:underline">
                  linkedin.com/in/cakfan
                </a>
                &nbsp;|&nbsp;{" "}
                <a href="https://github.com/cakfan" target="_blank" className="hover:underline">
                  github.com/cakfan
                </a>
                &nbsp;|&nbsp;{" "}
                <a href="https://cakfan.github.io" target="_blank" className="hover:underline">
                  cakfan.github.io
                </a>
              </p>
            </div>

            {/* Profile */}
            <Section title="Profile">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("cv.profile")}
              </p>
            </Section>

            {/* Work Experience */}
            <Section title="Work Experience">
              <div className="space-y-5">
                {experiences.map((exp) => (
                  <div key={exp.company + exp.period}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="font-semibold text-sm">{exp.company}</span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-blue-500 font-medium mb-1">
                      {exp.role}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-0.5">
                      {exp.descriptions.map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted-foreground" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Technical Skills */}
            <Section title="Technical Skills">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Front-End</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.frontEnd")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Back-End & Others</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.backEnd")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Mobile (Basic)</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.mobile")}</p>
                </div>
              </div>
            </Section>

            {/* Featured Projects */}
            <Section title="Featured Projects">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-sm font-semibold">{project.name}</span>
                      <span className="text-xs text-blue-500 ml-4">
                        {project.tech.join(", ")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-0.5">
                      {project.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {project.demo
                        ? new URL(project.demo).hostname
                        : project.github.replace("https://github.com/", "github.com/")}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Local Business */}
            <Section title="Local Business">
              <div className="space-y-4">
                {localBusiness.map((biz) => (
                  <div key={biz.name}>
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-sm font-semibold">{biz.name}</span>
                      <span className="text-xs text-blue-500 ml-4">{biz.category}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-0.5">{biz.description}</p>
                    <span className="text-xs text-muted-foreground">
                      {new URL(biz.demo).hostname + new URL(biz.demo).pathname}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div>
                <p className="text-sm font-semibold">{t("cv.education.degree")}</p>
                <p className="text-sm text-muted-foreground">{t("cv.education.detail")}</p>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certifications & Training">
              <ul className="text-sm text-muted-foreground space-y-0.5">
                {tArray<string>("cv.certs").map((cert, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted-foreground" />
                    {cert}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <ul className="text-sm text-muted-foreground space-y-0.5">
                {tArray<string>("cv.languages").map((lang, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted-foreground" />
                    {lang}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 pb-1 border-b border-border">
        {title}
      </h2>
      {children}
    </div>
  );
}
