"use client";

import Link from "next/link";
import {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

// Keep all standard buttons solid black, with a subtle lift on hover and no
// color-shift treatment. This matches the site's design and avoids the white
// button issue from the light theme tokens.
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-[#060607] bg-[#060607] text-white shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
  secondary:
    "border border-[#060607] bg-[#060607] text-white shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
  outline: "border border-ink bg-transparent text-ink",
  ghost: "border border-transparent bg-transparent text-ink",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border text-center font-mono font-semibold tracking-wide uppercase",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {icon ? <span className="relative z-10 inline-flex items-center">{icon}</span> : null}
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </>
  );

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}