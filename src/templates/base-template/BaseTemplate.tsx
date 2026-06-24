import type { BaseTemplateProps } from "./base-template.types";

/**
 * BaseTemplate wraps all industry templates with CSS custom properties
 * injected from the resolved theme. This enables all sections to use
 * `var(--color-primary)` etc. without prop drilling.
 */
export function BaseTemplate({ theme, children }: BaseTemplateProps) {
  return (
    <div
      style={theme.cssVariables as React.CSSProperties}
      className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] antialiased"
    >
      {children}
    </div>
  );
}
