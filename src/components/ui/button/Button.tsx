"use client";

import { cn } from "@/core/utils";
import type { ButtonProps } from "./button.types";

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-lg shadow-[var(--color-primary)]/25",
  secondary:
    "bg-[var(--color-secondary)] text-white hover:brightness-110",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  ghost:
    "text-[var(--color-text)] hover:bg-[var(--color-surface)]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
