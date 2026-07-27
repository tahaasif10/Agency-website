import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

export function Card({ children, className = "", hover = true, highlight = false }: CardProps) {
  return (
    <div
      className={`
        rounded-xl border p-6 md:p-7 transition-all duration-300
        ${highlight
          ? "border-brand/40 bg-brand-wash"
          : "border-hairline bg-surface"}
        ${hover ? "hover:border-hairline-strong hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardIcon({ children, highlight = false }: { children: ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`
        w-11 h-11 rounded-xl flex items-center justify-center mb-6
        ${highlight ? "bg-brand text-ink" : "bg-surface-2 text-ink"}
      `}
    >
      {children}
    </div>
  );
}