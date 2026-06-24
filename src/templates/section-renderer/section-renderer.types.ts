import type { ClientConfig, ThemeColors, SectionName, SectionLabels } from "@/core/types";

export interface SectionRendererProps {
  client: ClientConfig;
  colors: ThemeColors;
  sectionOrder: SectionName[];
  sectionLabels?: SectionLabels;
}
