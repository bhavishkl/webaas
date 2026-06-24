import type { IndustryConfig } from "@/core/types";

export const gymConfig: IndustryConfig = {
  slug: "gym",
  name: "Gym & Fitness",
  description: "Websites for gyms, fitness centers, and personal trainers",
  defaultColors: {
    primary: "#e65100",
    secondary: "#bf360c",
    accent: "#ff9100",
    background: "#0a0a0a",
    surface: "#141414",
    text: "#fafafa",
    textMuted: "#a0a0a0",
    border: "#262626",
  },
  sectionOrder: [
    "hero",
    "about",
    "services",
    "testimonials",
    "gallery",
    "cta",
    "contact",
    "faq",
    "footer",
  ],
  sectionLabels: {
    services: "Programs",
  },
  defaultContent: {
    hero: {
      title: "Transform Your Body, Transform Your Life",
      subtitle: "Your Fitness Journey Starts Here",
      description: "State-of-the-art equipment, expert trainers, and a community that pushes you to be your best.",
      ctaText: "Start Free Trial",
      ctaLink: "#contact",
      secondaryCtaText: "View Programs",
      secondaryCtaLink: "#services",
    },
  },
};
