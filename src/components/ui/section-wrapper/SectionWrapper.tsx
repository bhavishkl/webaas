import { cn } from "@/core/utils";
import type { SectionWrapperProps } from "./section-wrapper.types";

const bgStyles: Record<string, string> = {
  default: "bg-[var(--color-background)]",
  surface: "bg-[var(--color-surface)]",
  primary: "bg-[var(--color-primary)] text-white",
  none: "",
};

const paddingStyles: Record<string, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

export function SectionWrapper({
  children,
  id,
  className,
  background = "default",
  padding = "md",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgStyles[background], paddingStyles[padding], className)}
    >
      {children}
    </section>
  );
}
