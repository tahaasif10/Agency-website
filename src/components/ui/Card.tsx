import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /**
   * Drops the card's own border. Use it when the card sits inside a
   * `gap-1 p-1 bg-ink/[0.06] border border-hairline` tray, which already frames it.
   */
  bare?: boolean;
}

export function Card({ children, className = "", bare = false }: CardProps) {
  return (
    <div
      className={`
        group relative flex h-full flex-col justify-between overflow-hidden
        bg-surface p-6 sm:p-8 cursor-default
        outline outline-1 outline-offset-[-1px] outline-transparent
        transition-[outline-color] duration-200 ease-out
        hover:outline-brand/50
        ${bare ? "" : "border border-hairline"}
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
        mb-6 flex h-11 w-11 items-center justify-center transition-colors duration-200
        ${
          highlight
            ? "bg-brand text-ink"
            : "border border-hairline bg-surface-2 text-ink group-hover:border-brand/50"
        }
      `}
    >
      {children}
    </div>
  );
}