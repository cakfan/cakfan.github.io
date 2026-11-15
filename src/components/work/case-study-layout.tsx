"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { getAllWork, getLocalizedWork } from "@/lib/get-work";
import type { WorkItem } from "@/types/work";
import Container from "@/components/ui/container";
import Prose from "@/components/ui/prose";
import { ButtonLink } from "@/components/ui/button";
import Metric from "@/components/work/metric";
import WorkCard, { WorkCover } from "@/components/work/work-card";

function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-10 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
        <h2 className="label-mono text-muted-foreground">
          <span className="text-accent">{index}</span>
          <span aria-hidden="true"> / </span>
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default function CaseStudyLayout({ work }: { work: WorkItem }) {
  const { t, locale } = useTranslation();
  const item = getLocalizedWork(work, locale);

  const hasContext = Boolean(item.context);
  const hasApproach = Boolean(item.approach || (item.challenges && item.challenges.length));
  const hasResults = Boolean(item.results || item.metric || item.clientMeta);

  let counter = 0;
  const nextIndex = () => String(++counter).padStart(2, "0");
  const contextIndex = hasContext ? nextIndex() : "";
  const approachIndex = hasApproach ? nextIndex() : "";
  const resultsIndex = hasResults ? nextIndex() : "";
  const moreIndex = nextIndex();

  const tierIndex = String(item.tier).padStart(2, "0");

  const others = getAllWork()
    .filter((candidate) => candidate.slug !== item.slug)
    .sort((a, b) => {
      const score = (candidate: WorkItem) =>
        (candidate.tier === item.tier ? 0 : 2) +
        (candidate.category === item.category ? 0 : 1);
      return score(a) - score(b);
    })
    .slice(0, 2)
    .map((candidate) => getLocalizedWork(candidate, locale));

  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={15} strokeWidth={1.75} aria-hidden="true" />
          {t("work.backToWork")}
        </Link>

        <header className="mt-8">
          <p className="label-mono text-muted-foreground">
            <span className="text-accent">{tierIndex}</span>
            <span aria-hidden="true"> / </span>
            {t(`work.category.${item.category}`)}
          </p>

          <h1 className="mt-5 text-h1 font-semibold text-foreground">{item.title}</h1>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {item.tagline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {item.liveUrl ? (
              <ButtonLink href={item.liveUrl} external size="sm">
                {t("work.liveSite")}
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
              </ButtonLink>
            ) : null}
            {item.githubUrl ? (
              <ButtonLink href={item.githubUrl} external variant="secondary" size="sm">
                {t("work.sourceCode")}
              </ButtonLink>
            ) : null}
            {item.docsUrl ? (
              <ButtonLink href={item.docsUrl} external variant="secondary" size="sm">
                {t("work.docs")}
              </ButtonLink>
            ) : null}
            {item.npmUrl ? (
              <ButtonLink href={item.npmUrl} external variant="secondary" size="sm">
                {t("work.npm")}
              </ButtonLink>
            ) : null}
          </div>
        </header>

        <div className="mt-10">
          <WorkCover
            item={item}
            index="00"
            sizes="(max-width: 1024px) 100vw, 960px"
            className="aspect-[16/10] rounded-card border border-border sm:aspect-[16/9]"
          />
        </div>

        {hasContext ? (
          <CaseSection index={contextIndex} title={t("work.businessContext")}>
            <Prose text={item.context ?? ""} />
          </CaseSection>
        ) : null}

        {hasApproach ? (
          <CaseSection index={approachIndex} title={t("work.approachDecisions")}>
            {item.approach ? <Prose text={item.approach} /> : null}

            {item.challenges && item.challenges.length > 0 ? (
              <div className={item.approach ? "mt-8" : ""}>
                <h3 className="label-mono text-muted-foreground">
                  {t("work.challenges")}
                </h3>
                <ul className="mt-4 space-y-3">
                  {item.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CaseSection>
        ) : null}

        {hasResults ? (
          <CaseSection index={resultsIndex} title={t("work.results")}>
            {item.metric ? (
              <Metric
                value={item.metric.value}
                label={item.metric.label}
                className="rounded-card border border-border bg-card px-5 py-4"
              />
            ) : null}

            {item.results ? (
              <div className={item.metric ? "mt-6" : ""}>
                <Prose text={item.results} />
              </div>
            ) : null}

            {item.clientMeta ? (
              <dl className="mt-8 grid gap-3 rounded-card border border-border bg-card p-5 text-sm sm:grid-cols-3">
                {item.clientMeta.address ? (
                  <div>
                    <dt className="label-mono text-muted-foreground">
                      {t("work.address")}
                    </dt>
                    <dd className="mt-1.5">{item.clientMeta.address}</dd>
                  </div>
                ) : null}
                {item.clientMeta.hours ? (
                  <div>
                    <dt className="label-mono text-muted-foreground">
                      {t("work.hours")}
                    </dt>
                    <dd className="mt-1.5">{item.clientMeta.hours}</dd>
                  </div>
                ) : null}
                {item.clientMeta.phone ? (
                  <div>
                    <dt className="label-mono text-muted-foreground">
                      {t("work.phone")}
                    </dt>
                    <dd className="mt-1.5">{item.clientMeta.phone}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
          </CaseSection>
        ) : null}

        <CaseSection index={moreIndex} title={t("work.moreWork")}>
          <div className="grid gap-5 sm:grid-cols-2">
            {others.map((other, index) => (
              <WorkCard
                key={other.slug}
                item={other}
                variant="default"
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              {t("home.ctaSubtitle")}
            </p>
            <ButtonLink href="/contact" size="sm">
              {t("home.getInTouch")}
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </CaseSection>
      </div>
    </Container>
  );
}
