interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
      <span className="text-mist text-sm uppercase tracking-[0.15em] font-medium font-mono">
        {children}
      </span>
    </div>
  );
}