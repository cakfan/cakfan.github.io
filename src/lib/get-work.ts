import workData from "../../content/work.json";
import experienceData from "../../content/experience.json";
import siteConfigData from "../../content/site-config.json";
import type {
  WorkItem,
  WorkTier,
  WorkCategory,
  ExperienceItem,
  SiteConfig,
} from "@/types/work";

function sanitizeWorkItem(raw: Record<string, unknown>): WorkItem {
  return {
    slug: raw.slug as string,
    tier: raw.tier as WorkTier,
    category: raw.category as WorkCategory,
    title: raw.title as string,
    tagline: raw.tagline as string,
    metric: (raw.metric as WorkItem["metric"]) ?? undefined,
    context: (raw.context as string) ?? undefined,
    approach: (raw.approach as string) ?? undefined,
    challenges: (raw.challenges as string[]) ?? undefined,
    results: (raw.results as string) ?? undefined,
    stack: raw.stack as string[],
    liveUrl: (raw.liveUrl as string) ?? undefined,
    githubUrl: (raw.githubUrl as string) ?? undefined,
    images: raw.images as string[],
    clientMeta: raw.clientMeta
      ? {
          address: (raw.clientMeta as Record<string, unknown>).address as string | undefined,
          hours: (raw.clientMeta as Record<string, unknown>).hours as string | undefined,
          phone: (raw.clientMeta as Record<string, unknown>).phone as string | undefined,
        }
      : undefined,
    translations: (raw.translations as WorkItem["translations"]) ?? undefined,
  };
}

const work: WorkItem[] = (workData as Record<string, unknown>[]).map(sanitizeWorkItem);
const experience: ExperienceItem[] = experienceData as ExperienceItem[];
const siteConfig: SiteConfig = siteConfigData as SiteConfig;

export function getAllWork(): WorkItem[] {
  return work;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((item) => item.slug === slug);
}

export function getWorkByTier(tier: WorkTier): WorkItem[] {
  return work.filter((item) => item.tier === tier);
}

export function getWorkByCategory(category: WorkCategory): WorkItem[] {
  return work.filter((item) => item.category === category);
}

export function getFeaturedWork(): WorkItem | undefined {
  return work.find((item) => item.tier === 1);
}

export function getAllExperience(): ExperienceItem[] {
  return experience;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getAllSlugs(): string[] {
  return work.map((item) => item.slug);
}

export function getLocalizedWork(item: WorkItem, locale: string): WorkItem {
  const t = locale === "id" ? item.translations?.id : undefined;
  if (!t) return item;
  return {
    ...item,
    tagline: t.tagline ?? item.tagline,
    metric: t.metric ?? item.metric,
    context: t.context ?? item.context,
    approach: t.approach ?? item.approach,
    challenges: t.challenges ?? item.challenges,
    results: t.results ?? item.results,
    clientMeta: t.clientMeta ?? item.clientMeta,
  };
}
