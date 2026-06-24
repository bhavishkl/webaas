// =============================================================================
// Theme Types — collocated with the theme resolver
// =============================================================================

import type { ThemeColors } from "@/core/types";

export interface ThemeConfig {
  colors: ThemeColors;
  fontFamily?: string;
  borderRadius?: string;
}

export interface ResolvedTheme {
  cssVariables: Record<string, string>;
  config: ThemeConfig;
}
