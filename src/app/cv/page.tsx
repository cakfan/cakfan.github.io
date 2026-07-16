import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import type { Project, Experience, CvLocalBusinessItem } from "@/lib/types";
import LanguageToggle from "@/components/LanguageToggle";
import BulletList from "@/components/ui/BulletList";

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  title: "CV — Taufan Fatahillah",
  description:
    "Resume / CV of Taufan Fatahillah — Full-Stack Developer specializing in Next.js, React, TypeScript, and TailwindCSS.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  openGraph: {
    title: "CV — Taufan Fatahillah",
    description:
      "Resume / CV of Taufan Fatahillah — Full-Stack Developer specializing in Next.js, React, TypeScript, and TailwindCSS.",
    url: `${siteUrl}/cv`,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "CV — Taufan Fatahillah",
      },
    ],
    type: "profile",
    locale: "en_US",
  },
};

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

export default function CvPage() {
  const { t, tArray } = useTranslation();

  const experiences = tArray<Experience>("experience.items");
  const projects = tArray<Project>("projects.items");
  const localBusiness = tArray<CvLocalBusinessItem>("localBusiness.items");

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
            {t("cv.toolbar.back")}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Download size={16} />
              {t("cv.toolbar.downloadPdf")}
            </button>
          </div>
        </div>
      </div>

      <div className="cv-content pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-[800px] mx-auto bg-background rounded-xl shadow-lg border overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-8 pb-6 border-b-2 border-blue-500">
              <h1 className="text-3xl font-bold tracking-tight mb-1">
                Taufan Fatahillah
              </h1>
              <p className="text-blue-500 font-medium">
                Full-Stack Developer
              </p>
              <div className="text-sm text-muted-foreground mt-2 flex flex-wrap items-center justify-center gap-x-2">
                <span>Jember, East Java, Indonesia</span>
                <span className="hidden sm:inline">|</span>
                <a href="https://linkedin.com/in/cakfan" target="_blank" className="hover:underline">linkedin.com/in/cakfan</a>
                <span className="hidden sm:inline">|</span>
                <a href="https://github.com/cakfan" target="_blank" className="hover:underline">github.com/cakfan</a>
                <span className="hidden sm:inline">|</span>
                <a href="https://cakfan.github.io" target="_blank" className="hover:underline">cakfan.github.io</a>
              </div>
            </div>

            <Section title={t("cv.sections.profile")}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("cv.profile")}
              </p>
            </Section>

            <Section title={t("cv.sections.experience")}>
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
                    <BulletList items={exp.descriptions} />
                  </div>
                ))}
              </div>
            </Section>

            <Section title={t("cv.sections.skills")}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1">{t("cv.skills.frontEndLabel")}</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.frontEnd")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{t("cv.skills.backEndLabel")}</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.backEnd")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{t("cv.skills.mobileLabel")}</h4>
                  <p className="text-sm text-muted-foreground">{t("cv.skills.mobile")}</p>
                </div>
              </div>
            </Section>

            <Section title={t("cv.sections.projects")}>
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

            <Section title={t("cv.sections.localBusiness")}>
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

            <Section title={t("cv.sections.education")}>
              <div>
                <p className="text-sm font-semibold">{t("cv.education.degree")}</p>
                <p className="text-sm text-muted-foreground">{t("cv.education.detail")}</p>
              </div>
            </Section>

            <Section title={t("cv.sections.certifications")}>
              <BulletList items={tArray<string>("cv.certs")} />
            </Section>

            <Section title={t("cv.sections.languages")}>
              <BulletList items={tArray<string>("cv.languages")} />
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
