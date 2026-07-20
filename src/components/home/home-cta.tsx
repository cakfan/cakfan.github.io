"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function HomeCta() {
  const { t } = useTranslation();

  return (
    <section className="py-20 border-t">
      <div className="container-section text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {t("home.ctaHeading")}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t("home.ctaSubtitle")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {t("home.getInTouch")}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
