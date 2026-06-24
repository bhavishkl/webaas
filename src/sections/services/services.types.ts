import type { ServicesContent, ThemeColors } from "@/core/types";

export interface ServicesProps {
  content: ServicesContent;
  colors: ThemeColors;
  /** Override the section title label (e.g. "Our Menu" instead of "Our Services") */
  sectionLabel?: string;
}
