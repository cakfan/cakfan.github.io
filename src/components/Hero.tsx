"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { assets } from "@/assets";
import { useTranslation } from "@/lib/i18n";
import LetterGlitch from "./LetterGlitch";

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
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
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
            target="_blank"
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
