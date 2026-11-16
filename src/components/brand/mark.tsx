import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  /** Beri judul hanya bila mark berdiri sendiri; di dalam lockup biarkan dekoratif. */
  title?: string;
  dot?: "accent" | "current";
  /** Animasi gambar-satu-kali; hanya untuk initial load halaman utama. */
  animate?: boolean;
};

/**
 * Mark: bingkai persegi + titik accent di tengah.
 * Bingkai = frame yang sudah ditutup, titik = "titik akhir".
 * Sengaja tanpa huruf: pada 16 px, batang + palang apa pun terbaca seperti salib.
 */
export default function Mark({
  className,
  title,
  dot = "accent",
  animate = false,
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn(
        "h-[1.15em] w-[1.15em]",
        animate && "brand-draw",
        className
      )}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g stroke="currentColor" strokeWidth={3} strokeLinecap="square" fill="none">
        <path d="M6.5 6.5H25.5V25.5H6.5Z" pathLength={1} />
      </g>
      <rect
        x={13.25}
        y={13.25}
        width={5.5}
        height={5.5}
        className={dot === "accent" ? "fill-accent" : "fill-current"}
      />
    </svg>
  );
}
