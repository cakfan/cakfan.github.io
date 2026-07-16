export default function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="text-sm text-muted-foreground space-y-0.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-muted-foreground" />
          {item}
        </li>
      ))}
    </ul>
  );
}
