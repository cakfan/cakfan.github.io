import Link from "next/link";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  href?: string | null;
  className?: string;
};

/**
 * Wordmark: nama lengkap lowercase + kotak accent di baseline.
 * Titik selalu kotak (bukan glyph `.`) agar identik dengan mark.
 */
export default function Wordmark({ href = "/", className }: WordmarkProps) {
  const content = (
    <span className="inline-flex items-baseline">
      <span className="tracking-[-0.035em]">taufan fatahillah</span>
      <span
        aria-hidden="true"
        className="ml-[0.07em] inline-block h-[0.16em] w-[0.16em] bg-accent"
      />
    </span>
  );

  const classes = cn(
    "inline-flex items-baseline text-[0.95rem] font-semibold text-foreground transition-opacity hover:opacity-70",
    className
  );

  if (!href) {
    return (
      <span className={classes} aria-label="Taufan Fatahillah">
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} aria-label="Taufan Fatahillah — Home">
      {content}
    </Link>
  );
}
