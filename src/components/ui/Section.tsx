import { ReactNode, ElementType } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  bg?: "void" | "surface" | "none";
  id?: string;
}

const bgStyles: Record<NonNullable<SectionProps["bg"]>, string> = {
  void: "bg-void",
  surface: "bg-surface",
  none: "",
};

export function Section({
  children,
  className = "",
  as: Tag = "section",
  bg = "none",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={`py-section-y px-section-x ${bgStyles[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </Tag>
  );
}