import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  description,
  as: Heading = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const labelContent = (
    <>
      <span className="text-accent">{index}</span>
      <span aria-hidden="true"> / </span>
      {label}
    </>
  );

  return (
    <div className={cn("max-w-[68ch]", className)}>
      {title ? (
        <p className="label-mono text-muted-foreground">{labelContent}</p>
      ) : (
        <Heading className="label-mono text-muted-foreground">{labelContent}</Heading>
      )}

      {title ? (
        <Heading
          className={cn(
            "mt-5 text-h2 font-semibold tracking-tight text-foreground",
            titleClassName
          )}
        >
          {title}
        </Heading>
      ) : null}

      {description ? (
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
