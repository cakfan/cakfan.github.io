import { cn } from "@/lib/utils";

type HandleContentProps = { dot?: boolean; mono?: boolean };

function HandleContent({ dot = true, mono = false }: HandleContentProps) {
  return (
    <>
      @withcakfan
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "ml-[0.12em] inline-block h-[0.16em] w-[0.16em]",
            mono ? "bg-current" : "bg-accent"
          )}
        />
      )}
    </>
  );
}

type HandleProps = HandleContentProps & {
  className?: string;
  /** Jadikan tautan Instagram dengan rel="me". */
  link?: boolean;
};

/**
 * Handle sebagai aset visual: mono, lowercase, tracking lebar.
 * Kotak accent hanya dipakai bila tidak ada accent lain dalam komposisi.
 */
export default function Handle({
  className,
  dot,
  mono,
  link = false,
}: HandleProps) {
  const classes = cn("font-mono lowercase tracking-[0.14em]", className);

  if (!link) {
    return (
      <span className={classes}>
        <HandleContent dot={dot} mono={mono} />
      </span>
    );
  }

  return (
    <a
      href="https://instagram.com/withcakfan"
      rel="me"
      target="_blank"
      className={cn(classes, "transition-colors hover:text-foreground")}
    >
      <HandleContent dot={dot} mono={mono} />
    </a>
  );
}
