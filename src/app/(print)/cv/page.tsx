"use client";

import { useTranslation } from "@/lib/i18n";
import type { Project, Experience, CvLocalBusinessItem } from "@/lib/types";
import { contactEmail } from "@/lib/site";
import BulletList from "@/components/ui/bullet-list";

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6 last:mb-0 print:mb-2.5">
      <h2 className="label-mono border-b border-border pb-1.5 text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function CvPage() {
  const { t, tArray } = useTranslation();

  const experiences = tArray<Experience>("experience.items");
  const projects = tArray<Project>("projects.items");
  const localBusiness = tArray<CvLocalBusinessItem>("localBusiness.items");

  return (
    <div className="px-4 pb-16 pt-8 sm:px-8 print:p-0">
      <div className="mx-auto max-w-[52rem] overflow-hidden rounded-card border border-border bg-card print:rounded-none print:border-0">
        <div className="cv-document p-6 sm:p-10 print:p-0">
          <header className="mb-8 border-b-2 border-accent pb-5">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Taufan Fatahillah
            </h1>
            <p className="mt-1 text-sm font-medium text-accent">Software Engineer</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-[0.03em] text-muted-foreground">
              <span>Jember, East Java, Indonesia</span>
              <a href={`mailto:${contactEmail}`} className="hover:text-foreground">
                {contactEmail}
              </a>
              <a
                href="https://linkedin.com/in/cakfan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                linkedin.com/in/cakfan
              </a>
              <a
                href="https://github.com/cakfan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                github.com/cakfan
              </a>
              <a
                href="https://cakfan.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                cakfan.github.io
              </a>
            </div>
          </header>

          <CvSection title={t("cv.sections.profile")}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("cv.profile")}
            </p>
          </CvSection>

          <CvSection title={t("cv.sections.experience")}>
            <div className="space-y-5 print:space-y-3">
              {experiences.map((experience) => (
                <div key={experience.company + experience.period} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      {experience.company}
                    </span>
                    <span className="whitespace-nowrap font-mono text-[11px] text-muted-foreground">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-accent">
                    {experience.role}
                  </p>
                  <BulletList items={experience.descriptions} />
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title={t("cv.sections.skills")}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t("cv.skills.frontEndLabel")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cv.skills.frontEnd")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t("cv.skills.backEndLabel")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cv.skills.backEnd")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {t("cv.skills.mobileLabel")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cv.skills.mobile")}
                </p>
              </div>
            </div>
          </CvSection>

          <CvSection title={t("cv.sections.projects")}>
            <div className="space-y-4 print:space-y-2.5">
              {projects.map((project) => (
                <div key={project.name} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      {project.name}
                    </span>
                    <span className="ml-4 font-mono text-[11px] text-muted-foreground">
                      {project.tech.join(", ")}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="break-all font-mono text-[11px] text-muted-foreground">
                    {project.demo
                      ? project.demo.replace(/^https?:\/\//, "")
                      : project.github.replace("https://github.com/", "github.com/")}
                  </span>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title={t("cv.sections.localBusiness")}>
            <div className="space-y-4 print:space-y-2.5">
              {localBusiness.map((business) => (
                <div key={business.name} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      {business.name}
                    </span>
                    <span className="ml-4 font-mono text-[11px] text-muted-foreground">
                      {business.category}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {business.description}
                  </p>
                  <span className="break-all font-mono text-[11px] text-muted-foreground">
                    {new URL(business.demo).hostname +
                      new URL(business.demo).pathname}
                  </span>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title={t("cv.sections.education")}>
            <p className="text-sm font-semibold text-foreground">
              {t("cv.education.degree")}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {t("cv.education.detail")}
            </p>
          </CvSection>

          <CvSection title={t("cv.sections.certifications")}>
            <BulletList items={tArray<string>("cv.certs")} />
          </CvSection>

          <CvSection title={t("cv.sections.languages")}>
            <BulletList items={tArray<string>("cv.languages")} />
          </CvSection>
        </div>
      </div>
    </div>
  );
}
