import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taufan Fatahillah — Software Engineer",
    template: "%s | Taufan Fatahillah",
  },
  description:
    "Software Engineer building fast, reliable applications across web, mobile, and APIs. TypeScript, React, Next.js, Kotlin.",
  keywords: [
    "Taufan Fatahillah",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Kotlin",
    "Android",
    "API",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Taufan Fatahillah" }],
  creator: "Taufan Fatahillah",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Taufan Fatahillah — Software Engineer",
    description:
      "Software Engineer building fast, reliable applications across web, mobile, and APIs.",
    url: siteUrl,
    siteName: "Taufan Fatahillah",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Taufan Fatahillah — Software Engineer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufan Fatahillah — Software Engineer",
    description:
      "Software Engineer building fast, reliable applications across web, mobile, and APIs.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A0C0B" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F4F5F1" media="(prefers-color-scheme: light)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taufan Fatahillah",
              url: siteUrl,
              jobTitle: "Software Engineer",
              sameAs: [
                "https://www.linkedin.com/in/cakfan",
                "https://github.com/cakfan",
                "https://www.instagram.com/withcakfan",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: "Taufan Fatahillah",
              description:
                "Software Engineer portfolio — web, mobile, and API development.",
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || ((theme === 'system' || !theme) && systemDark);
                  document.documentElement.classList.toggle('dark', isDark);
                  var locale = localStorage.getItem('locale');
                  if (locale === 'id' || locale === 'en') {
                    document.documentElement.lang = locale;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
