import Link from "next/link";
import Mark from "./mark";
import { cn } from "@/lib/utils";

type LockupProps = {
  href?: string | null;
  className?: string;
  /** Animasi gambar-satu-kali; hanya untuk initial load halaman utama. */
  animate?: boolean;
};

/**
 * Lockup primary: mark + wordmark.
 * Titik accent hanya ada satu — di wordmark. Mark memakai titik currentColor.
 */
export default function Lockup({
  href = "/",
  className,
  animate = false,
}: LockupProps) {
  const content = (
    <>
      <Mark
        dot="current"
        animate={animate}
        className="h-[1.05em] w-[1.05em] shrink-0"
      />
      <span className="inline-flex items-baseline">
        <span className="tracking-[-0.035em]">taufan fatahillah</span>
        <span
          aria-hidden="true"
          className="ml-[0.07em] inline-block h-[0.16em] w-[0.16em] bg-accent"
        />
      </span>
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-[0.45em] text-[0.95rem] font-semibold text-foreground transition-opacity hover:opacity-70",
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
