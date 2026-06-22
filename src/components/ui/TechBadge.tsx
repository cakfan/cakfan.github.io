export default function TechBadge({ label, index = 0 }: { label: string; index?: number }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-muted/50 text-muted-foreground opacity-0 animate-scale-in hover:scale-105 transition-transform duration-200"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {label}
    </span>
  );
}
