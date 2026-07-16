import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { I18nProvider } from "@/lib/i18n";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://cakfan.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taufan Fatahillah — Front-End Engineer",
    template: "%s | Taufan Fatahillah",
  },
  description:
    "Front-End Engineer specializing in Next.js, React, TypeScript, and TailwindCSS. Building fast, modern, and user-friendly web applications.",
  keywords: [
    "Taufan Fatahillah",
    "Front-End Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
    "Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Taufan Fatahillah — Front-End Engineer",
    description:
      "Front-End Engineer specializing in Next.js, React, TypeScript, and TailwindCSS. Building fast, modern, and user-friendly web applications.",
    url: siteUrl,
    siteName: "Taufan Fatahillah",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufan Fatahillah — Front-End Engineer",
    description:
      "Front-End Engineer specializing in Next.js, React, TypeScript, and TailwindCSS.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Taufan Fatahillah",
              url: siteUrl,
              jobTitle: "Front-End Engineer",
              sameAs: [
                "https://www.linkedin.com/in/taufanfatahillah",
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
                "Front-End Engineer portfolio — Next.js, React, TypeScript, TailwindCSS.",
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
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
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
