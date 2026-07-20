"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Philosophy() {
  const { t } = useTranslation();

  return (
    <section className="py-20 border-t">
      <div className="container-section max-w-3xl">
        <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
          {t("home.philosophyHeading")}
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{t("home.philosophyP1")}</p>
          <p>{t("home.philosophyP2")}</p>
          <p>{t("home.philosophyP3")}</p>
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("home.philosophyReadMore")} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
