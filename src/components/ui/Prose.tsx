import { cn } from "@/lib/utils";

export default function Prose({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[68ch] space-y-5", className)}>
      {text.split(/\n{2,}/).map((paragraph, index) => (
        <p
          key={index}
          className="whitespace-pre-line text-base leading-[1.75] text-muted-foreground text-pretty sm:text-[1.0625rem]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
