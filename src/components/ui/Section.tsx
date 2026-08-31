import { ReactNode, ElementType } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: ElementType;
  bg?: "void" | "surface" | "none";
  id?: string;
}

/** Mona Sans on the section and all headings (overrides global Fraunces heading rule). */
const monaSansScope =
  "font-sans [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h5]:!font-sans [&_h6]:!font-sans";

const bgStyles: Record<NonNullable<SectionProps["bg"]>, string> = {
  void: "bg-void",
  surface: "bg-surface",
  none: "",
};

export function Section({
  children,
  className = "",
  containerClassName = "max-w-[1240px] mx-auto",
  as: Tag = "section",
  bg = "none",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-12 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-14 ${monaSansScope} ${bgStyles[bg]} ${className}`}
    >
      <div className={containerClassName}>{children}</div>
    </Tag>
  );
}