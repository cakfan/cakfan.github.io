"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

interface ServiceBenefit {
  title: string;
  description: string;
}

export default function ServicesPageContent() {
  const { t, tArray } = useTranslation();
  const benefits = tArray<ServiceBenefit>("services.benefits").slice(0, 3);

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        index="01"
        label={t("services.heading")}
        title={t("services.subtitle")}
        description={t("services.description")}
        as="h1"
        titleClassName="text-h1"
      />

      <section className="mt-14 border-t border-border pt-8">
        <h2 className="label-mono text-muted-foreground">
          <span className="text-accent">02</span>
          <span aria-hidden="true"> / </span>
          {t("services.benefitsHeading")}
        </h2>

        <ul className="mt-6 grid border-t border-border sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <span className="label-mono text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <h2 className="max-w-[24ch] text-h2 font-semibold text-foreground">
            {t("services.ctaHeading")}
          </h2>
          <p className="mt-3 max-w-[44ch] text-base leading-relaxed text-muted-foreground">
            {t("services.ctaSubtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href="/contact">
            {t("services.ctaButton")}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            {t("home.viewWork")}
            <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </Container>
  );
}
