import { cn } from "@/lib/utils";

export default function Metric({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const isNumeric = /\d/.test(value);

  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-3 gap-y-1", className)}>
      <span
        className={cn(
          "tracking-tight text-accent",
          isNumeric
            ? "font-mono text-3xl tabular-nums sm:text-4xl"
            : "text-h3 font-semibold"
        )}
      >
        {value}
      </span>
      <span className="label-mono text-muted-foreground">{label}</span>
    </div>
  );
}
