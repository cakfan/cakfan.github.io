export default function TechStack({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="text-xs text-muted-foreground tracking-wide"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
