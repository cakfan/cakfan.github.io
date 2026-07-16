"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { assets } from "@/assets";
import { useTranslation } from "@/lib/i18n";
import LetterGlitch from "./LetterGlitch";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/cakfan", icon: "linkedin" as const },
  { label: "GitHub", href: "https://github.com/cakfan", icon: "github" as const },
  { label: "Instagram", href: "https://instagram.com/withcakfan", icon: "instagram" as const },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <LetterGlitch opacity={0.18} />
      </div>

      <div className="container-section flex flex-col items-center text-center gap-6 pt-20 relative z-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm text-muted-foreground bg-muted/50 opacity-0 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t("hero.available")}
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight opacity-0 animate-slide-up"
          style={{ animationDelay: "250ms" }}
        >
          {t("hero.greeting")}{" "}
          <span className="text-blue-500">{t("hero.name")}</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "450ms" }}
        >
          {t("hero.subtitle")}
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "650ms" }}
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("hero.viewProjects")}
            <ArrowDown size={16} />
          </Link>
          <Link
            href="https://linkedin.com/in/cakfan"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
          >
            <Image src={assets.linkedin} alt="LinkedIn" className="w-4" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/cakfan"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
          >
            <Image src={assets.github} alt="GitHub" className="w-4" />
            GitHub
          </Link>
          <Link
            href="https://instagram.com/withcakfan"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
          >
            <Image src={assets.instagramBlack} alt="Instagram" className="w-4 block dark:hidden" />
            <Image src={assets.instagramWhite} alt="Instagram" className="w-4 hidden dark:block" />
            Instagram
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
          >
            <FileText size={16} />
            CV
          </Link>
        </div>
      </div>
    </section>
  );
}
