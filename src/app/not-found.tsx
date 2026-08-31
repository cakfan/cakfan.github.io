import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-section text-center">
        <p className="text-teal font-semibold tracking-widest uppercase text-sm mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
