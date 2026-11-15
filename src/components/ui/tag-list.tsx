import { cn } from "@/lib/utils";

export default function TagList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-control border border-border px-2 py-1 font-mono text-[11px] leading-none tracking-[0.06em] text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
