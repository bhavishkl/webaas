import type { IndustryConfig } from "@/core/types";

export const restaurantConfig: IndustryConfig = {
  slug: "restaurant",
  name: "Restaurant & Dining",
  description: "Websites for restaurants, cafes, and food establishments",
  defaultColors: {
    primary: "#d4a053",
    secondary: "#8b6914",
    accent: "#e8c547",
    background: "#0c0a08",
    surface: "#1a1612",
    text: "#faf8f5",
    textMuted: "#a89f94",
    border: "#2a241e",
  },
  sectionOrder: [
    "hero",
    "about",
    "services",
    "gallery",
    "testimonials",
    "cta",
    "contact",
    "faq",
    "footer",
  ],
  sectionLabels: {
    services: "Our Menu",
  },
  defaultContent: {
    hero: {
      title: "An Unforgettable Dining Experience",
      subtitle: "Where Every Dish Tells a Story",
      description: "Savor exquisite flavors crafted by our world-class chefs using the finest ingredients.",
      ctaText: "Reserve a Table",
      ctaLink: "#contact",
      secondaryCtaText: "View Menu",
      secondaryCtaLink: "#services",
    },
  },
};
