import type { Metadata } from "next";
import { Newsreader, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { I18nProvider } from "@/lib/i18n";

const newsreader = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://cakfan.github.io";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="oklch(14% 0.005 80)" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="oklch(97.5% 0.002 90)" media="(prefers-color-scheme: light)" />
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
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
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
      <body className={`${newsreader.variable} ${geist.variable} antialiased`}>
        <I18nProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTopButton />
        </I18nProvider>
      </body>
    </html>
  );
}
