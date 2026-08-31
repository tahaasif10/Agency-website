import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-hairline bg-surface hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(6,6,7,0.10)] hover:border-hairline-strong transition-all duration-300 ease-out cursor-default group overflow-hidden
        ${className}
      `}
    >
      <span
        className="
          pointer-events-none absolute left-1/2 top-0 -translate-x-1/2
          h-[2px] w-[calc(100%-1rem)] rounded-full bg-brand
          origin-center scale-x-0 transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      />
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