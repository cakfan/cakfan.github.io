import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/get-work";

export const dynamic = "force-static";

const siteUrl = "https://cakfan.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
