import { cn } from "@/core/utils";
import type { CardProps } from "./card.types";

export function Card({
  title,
  description,
  image,
  imageAlt,
  children,
  className,
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden transition-all duration-300",
        hoverable && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || ""}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      {(title || description || children) && (
        <div className="p-6">
          {title && (
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
