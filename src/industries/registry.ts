import type { IndustryConfig, ClientConfig, ThemeColors } from "@/core/types";
import { gymConfig, GymTemplate } from "./gym";
import { restaurantConfig, RestaurantTemplate } from "./restaurant";
import type { ComponentType } from "react";

export interface TemplateEntry {
  config: IndustryConfig;
  Template: ComponentType<{ client: ClientConfig; colors: ThemeColors }>;
}

const templates: Record<string, TemplateEntry> = {
  gym: {
    config: gymConfig,
    Template: GymTemplate,
  },
  restaurant: {
    config: restaurantConfig,
    Template: RestaurantTemplate,
  },
};

export function getTemplate(slug: string): TemplateEntry | undefined {
  return templates[slug];
}

export function getAllTemplates(): Array<{ slug: string; config: IndustryConfig }> {
  return Object.entries(templates).map(([slug, entry]) => ({
    slug,
    config: entry.config,
  }));
}
