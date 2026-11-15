import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  /** Beri judul hanya bila mark berdiri sendiri; di dalam lockup biarkan dekoratif. */
  title?: string;
  dot?: "accent" | "current";
  /** Titik lebih besar untuk ukuran tampil <= 48px (favicon, avatar, watermark). */
  compact?: boolean;
  /** Animasi gambar-satu-kali; hanya untuk initial load halaman utama. */
  animate?: boolean;
};

export default function Mark({
  className,
  title,
  dot = "accent",
  compact = false,
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
        <path d="M12 7V18.5C12 22 14.5 24 17.5 24" pathLength={1} />
        <path d="M8 13H18.5" pathLength={1} />
      </g>
      <rect
        x={21}
        y={compact ? 20 : 20.5}
        width={compact ? 5.5 : 5}
        height={compact ? 5.5 : 5}
        className={dot === "accent" ? "fill-accent" : "fill-current"}
      />
    </svg>
  );
}
