// =============================================================================
// Theme Resolver — merges industry defaults with client overrides
// =============================================================================

import type { IndustryConfig, ClientConfig } from "@/core/types";
import type { ResolvedTheme, ThemeConfig } from "./theme.types";

/**
 * Merge industry default colors with client-specific overrides.
 * Client colors always win when provided.
 */
export function resolveTheme(
  industry: IndustryConfig,
  client: ClientConfig
): ResolvedTheme {
  const mergedColors = {
    ...industry.defaultColors,
    ...client.colors,
  };

  const config: ThemeConfig = {
    colors: mergedColors,
  };

  const cssVariables: Record<string, string> = {
    "--color-primary": mergedColors.primary,
    "--color-secondary": mergedColors.secondary,
    "--color-accent": mergedColors.accent,
    "--color-background": mergedColors.background,
    "--color-surface": mergedColors.surface,
    "--color-text": mergedColors.text,
    "--color-text-muted": mergedColors.textMuted,
    "--color-border": mergedColors.border,
  };

  return { cssVariables, config };
}

export type { ResolvedTheme, ThemeConfig };
