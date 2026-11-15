import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Monogram({
  href = "/",
  className,
}: {
  href?: string | null;
  className?: string;
}) {
  const content = (
    <>
      <span className="font-semibold tracking-[-0.05em]">tf</span>
      <span className="text-accent" aria-hidden="true">
        .
      </span>
    </>
  );

  const classes = cn(
    "inline-flex items-baseline text-lg font-semibold text-foreground transition-opacity hover:opacity-70",
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
