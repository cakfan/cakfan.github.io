"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/button";
import Container from "@/components/ui/container";
import SocialLinks from "@/components/ui/social-links";

const meta = [
  { key: "home.metaBased", valueKey: "home.metaBasedValue" },
  { key: "home.metaFocus", valueKey: "home.metaFocusValue" },
  { key: "home.metaStatus", valueKey: "home.metaStatusValue" },
] as const;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-border">
      <Container className="py-12 sm:py-24 lg:py-28 [@media(max-height:480px)]:py-8">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <div>
            <p className="label-mono text-muted-foreground">
              <span className="text-accent">00</span>
              <span aria-hidden="true"> / </span>
              {t("home.eyebrow")}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              [{t("home.availability")}]
            </p>

            <h1 className="mt-8 max-w-[16ch] text-display font-semibold text-foreground [@media(max-height:480px)]:mt-5">
              {t("home.tagline")}
            </h1>

            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("home.subtitle")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/work" className="w-full sm:w-auto">
                {t("home.viewWork")}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {t("home.getInTouch")}
              </ButtonLink>
            </div>

            <SocialLinks className="mt-8" />
          </div>

          <aside className="lg:border-l lg:border-border lg:pl-8">
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-1">
              {meta.map((item) => (
                <div key={item.key} className="border-t border-border pt-4">
                  <dt className="label-mono text-muted-foreground">
                    {t(item.key)}
                  </dt>
                  <dd className="mt-1.5 text-sm text-foreground">
                    {t(item.valueKey)}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
