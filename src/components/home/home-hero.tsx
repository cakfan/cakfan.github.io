"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getSiteConfig } from "@/lib/get-work";

export default function HomeHero() {
  const { t } = useTranslation();
  const config = getSiteConfig();

  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="container-section py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm text-muted-foreground bg-muted/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t("home.availability")}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {config.title}{" "}
            <span className="text-teal italic">{t("home.tagline")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
            {t("home.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("home.viewWork")}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium hover:bg-muted transition-colors"
            >
              {t("home.getInTouch")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
