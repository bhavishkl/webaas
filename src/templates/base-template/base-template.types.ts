import type { ClientConfig, ThemeColors } from "@/core/types";
import type { ResolvedTheme } from "@/theme";

export interface BaseTemplateProps {
  client: ClientConfig;
  theme: ResolvedTheme;
  children: React.ReactNode;
}
