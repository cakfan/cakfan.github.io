"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Gauge,
  MessageCircle,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import type { LocalBusinessItem } from "@/lib/types";

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceProcessStep {
  title: string;
  description: string;
}

const benefitIcons = [Gauge, Search, Smartphone, Palette, MessageCircle, ShieldCheck];

const caseStudySlugs: Record<string, string> = {
  dkmcakes: "dkm-cakes",
  emasaji: "emasaji",
};

export default function ServicesPageContent() {
  const { t, tArray } = useTranslation();
  const benefits = tArray<ServiceBenefit>("services.benefits");
  const features = tArray<string>("services.features");
  const process = tArray<ServiceProcessStep>("services.process");
  const examples = tArray<LocalBusinessItem>("localBusiness.items");

  return (
    <section className="section-padding">
      <div className="container-section">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
            {t("services.heading")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
            {t("services.subtitle")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t("services.description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("services.ctaButton")}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
              {t("services.benefitsHeading")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <div
                    key={benefit.title}
                    className="rounded-xl border bg-background p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-teal" />
                    </div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
              {t("services.featuresHeading")}
            </h2>
            <div className="rounded-xl border bg-background p-6 sm:p-8">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className="text-teal shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
              {t("services.processHeading")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t("services.processSubtitle")}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-xs font-semibold text-teal tracking-widest uppercase mb-6">
              {t("services.examplesHeading")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {t("services.examplesSubtitle")}
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {examples.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-xl border bg-background overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={`/projects/${item.slug}.jpg`}
                      alt={`${item.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-teal/10 text-teal font-medium">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={item.demo}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        {t("services.examplesVisitSite")}
                        <ExternalLink size={14} />
                      </Link>
                      <Link
                        href={`/work/${caseStudySlugs[item.slug] ?? item.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t("services.examplesViewCase")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-balance">
              {t("services.ctaHeading")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {t("services.ctaSubtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("services.ctaButton")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
