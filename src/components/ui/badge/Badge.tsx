import { cn } from "@/core/utils";
import type { BadgeProps } from "./badge.types";

const variantStyles: Record<string, string> = {
  default: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  outline: "border border-[var(--color-border)] text-[var(--color-text-muted)]",
  accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
