import { ReactNode } from "react";

type BadgeVariant = "default" | "outline" | "solid";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-2 text-mist border border-hairline",
  outline: "bg-transparent text-mist border border-hairline",
  solid: "bg-brand-wash text-gradient-brand border border-brand/20",
};

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, icon, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full px-3 py-1.5
        text-xs font-medium ${variantStyles[variant]} ${className}
      `}
    >
      {icon}
      {children}
    </span>
  );
}