"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export default function AboutStrip() {
  const { t } = useTranslation();

  return (
    <Section divider>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            index="02"
            label={t("home.aboutLabel")}
            title={t("home.aboutHeading")}
            titleClassName="text-h1"
          />

          <div className="max-w-[62ch]">
            <p className="text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
              {t("home.aboutStrip")}
            </p>
            <ButtonLink href="/about" variant="ghost" className="mt-6 px-0">
              {t("home.aboutLink")}
              <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
