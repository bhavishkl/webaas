import type { SectionName } from "@/core/types";

export interface NavbarProps {
  businessName: string;
  logoUrl?: string;
  logoAlt?: string;
  sectionOrder: SectionName[];
  sectionLabels?: Partial<Record<SectionName, string>>;
}
