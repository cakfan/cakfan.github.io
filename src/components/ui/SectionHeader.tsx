interface SectionHeaderProps {
  heading: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ heading, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto mb-12 ${className ?? ""}`}>
      <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
        {heading}
      </h2>
      <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {subtitle}
      </p>
    </div>
  );
}
