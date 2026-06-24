// =============================================================================
// Core Types — Shared interfaces used across 3+ features
// =============================================================================

// ---------------------------------------------------------------------------
// Theme & Colors
// ---------------------------------------------------------------------------

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
}

// ---------------------------------------------------------------------------
// Logo
// ---------------------------------------------------------------------------

export interface Logo {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export interface Stat {
  label: string;
  value: string;
}

export interface AboutContent {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  stats?: Stat[];
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface Service {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  price?: string;
}

export interface ServicesContent {
  title: string;
  subtitle?: string;
  services: Service[];
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryContent {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialsContent {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export interface ContactContent {
  title: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  mapEmbedUrl?: string;
  socials?: SocialLink[];
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  copyrightText?: string;
  links?: FooterLink[];
  socials?: SocialLink[];
}

// ---------------------------------------------------------------------------
// Section Name
// ---------------------------------------------------------------------------

export type SectionName =
  | "hero"
  | "about"
  | "services"
  | "gallery"
  | "testimonials"
  | "faq"
  | "contact"
  | "cta"
  | "footer";

// ---------------------------------------------------------------------------
// Section Label Override — lets industries rename sections (e.g. "Menu")
// ---------------------------------------------------------------------------

export type SectionLabels = Partial<Record<SectionName, string>>;

// ---------------------------------------------------------------------------
// Client Config — The complete configuration for a single client site
// ---------------------------------------------------------------------------

export interface ClientConfig {
  slug: string;
  templateSlug: string;
  businessName: string;
  tagline?: string;
  logo?: Logo;
  colors: ThemeColors;
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  contact: ContactContent;
  cta: CTAContent;
  footer: FooterContent;
  customSections?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Industry Config — Defaults and structure for an entire industry vertical
// ---------------------------------------------------------------------------

export interface IndustryConfig {
  slug: string;
  name: string;
  description: string;
  defaultColors: ThemeColors;
  sectionOrder: SectionName[];
  sectionLabels?: SectionLabels;
  defaultContent: Partial<ClientConfig>;
}
