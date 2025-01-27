import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title:
    "Taufan Fatahillah — Building Seamless Front-End Solutions with Modern Web Technologies ⚡",
  description:
    "Hi, I'm Taufan Fatahillah, a passionate Front-End Engineer specializing in Next.js, React, TailwindCSS, and TypeScript. With a focus on performance and user experience, I bring ideas to life through clean and modern web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
