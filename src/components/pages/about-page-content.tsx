"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getSiteConfig } from "@/lib/get-work";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

const techGroups = [
  { labelKey: "about.frontEnd", valueKey: "about.frontEndList" },
  { labelKey: "about.backEnd", valueKey: "about.backEndList" },
  { labelKey: "about.tools", valueKey: "about.toolsList" },
];

export default function AboutPageContent() {
  const { t } = useTranslation();
  const config = getSiteConfig();

  const intro = t("about.bio1")
    .replace("{name}", config.name)
    .replace("{title}", config.title);

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        index="01"
        label={t("about.heading")}
        title={t("about.subtitle")}
        description={intro}
        as="h1"
        titleClassName="text-h1"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="max-w-[66ch] space-y-5 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
          <p>{t("about.bio2")}</p>
          <p>{t("about.bio3")}</p>
          <p>{t("about.bio4")}</p>
          <p className="text-foreground">{t("about.bio5")}</p>
        </div>

        <aside>
          <h2 className="label-mono text-muted-foreground">
            {t("about.techHeading")}
          </h2>
          <dl className="mt-4 border-t border-border">
            {techGroups.map((group) => (
              <div
                key={group.labelKey}
                className="border-b border-border py-4"
              >
                <dt className="text-sm font-medium text-foreground">
                  {t(group.labelKey)}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t(group.valueKey)}
                </dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/work" variant="ghost" className="mt-6 px-0">
            {t("about.seeWork")}
            <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </aside>
      </div>
    </Container>
  );
}
