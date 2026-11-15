import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  id,
  divider = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        divider && "border-t border-border",
        className
      )}
    >
      {children}
    </section>
  );
}
