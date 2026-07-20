"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getFeaturedWork, getLocalizedWork } from "@/lib/get-work";
import TechStack from "@/components/ui/tech-stack";
import MetricStat from "@/components/work/metric-stat";

export default function FeaturedCaseStudy() {
  const { t, locale } = useTranslation();
  const featured = getFeaturedWork();
  if (!featured) return null;
  const f = getLocalizedWork(featured, locale);

  return (
    <section className="py-20 border-t">
      <div className="container-section">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-semibold text-teal tracking-widest uppercase">
            {t("home.featuredHeading")}
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            {t("home.featuredViewAll")} <ArrowRight size={12} />
          </Link>
        </div>

        <Link
          href={`/work/${f.slug}`}
          className="group block rounded-xl border bg-background overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-0">
            <div className="relative aspect-video md:aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={f.images[0]}
                alt={`${f.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-teal uppercase tracking-widest">
                  {t("work.clientWork")}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {f.tagline}
                </p>
                <TechStack items={f.stack} className="mb-4" />
              </div>

              {f.metric && (
                <div className="pt-4 border-t">
                  <MetricStat value={f.metric.value} label={f.metric.label} />
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
