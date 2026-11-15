import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const siteName = "Taufan Fatahillah";
const defaultOgImage = `${siteUrl}/og.png`;

interface PageMetadataOptions {
  /** Page title without the site name. */
  title: string;
  description: string;
  /** Route path with a leading slash. Omit for the home page. */
  path?: string;
  keywords?: string[];
  /** Absolute OG image URL. Defaults to the branded social card. */
  ogImage?: string;
  ogImageAlt?: string;
  type?: "website" | "profile" | "article";
  noIndex?: boolean;
}

/**
 * Builds consistent title, canonical, Open Graph, and Twitter metadata
 * for a page. The root layout owns the `%s | Taufan Fatahillah` title
 * template, so `title` stays unprefixed here.
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = defaultOgImage,
  ogImageAlt,
  type = "website",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const socialTitle = `${title} — ${siteName}`;
  const image = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: ogImageAlt ?? socialTitle,
  };

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      images: [image],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
