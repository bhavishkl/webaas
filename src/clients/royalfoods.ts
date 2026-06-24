import type { ClientConfig } from "@/core/types";

export const royalFoodsConfig: ClientConfig = {
  slug: "royalfoods",
  templateSlug: "restaurant",
  businessName: "Royal Foods",
  tagline: "Fine Dining Redefined",
  colors: {
    primary: "#a78bfa",
    secondary: "#7c3aed",
    accent: "#c4b5fd",
    background: "#09090b",
    surface: "#18181b",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    border: "#27272a",
  },
  hero: {
    title: "Fine Dining Redefined",
    subtitle: "Royal Foods — Where Elegance Meets Flavor",
    description: "An award-winning culinary destination featuring contemporary European cuisine, crafted with locally-sourced ingredients and presented as art.",
    ctaText: "Book Your Experience",
    ctaLink: "#contact",
    secondaryCtaText: "Tasting Menu",
    secondaryCtaLink: "#services",
    backgroundImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  },
  about: {
    title: "The Royal Experience",
    subtitle: "Michelin-Starred Excellence",
    description: "Royal Foods is a culinary theater where every course tells a story. Our executive chef, with two decades of experience across Michelin-starred kitchens in Paris and London, brings a philosophy of 'less is more' — letting exceptional ingredients speak for themselves.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    stats: [
      { label: "Michelin Stars", value: "2" },
      { label: "Wine Labels", value: "400+" },
      { label: "Tasting Courses", value: "12" },
      { label: "Awards Won", value: "18" },
    ],
  },
  services: {
    title: "Tasting Menu",
    subtitle: "A journey through 12 courses of perfection",
    services: [
      { title: "Amuse-Bouche", description: "Chef's daily creation — a single perfect bite to awaken the palate.", icon: "✨", price: "Incl." },
      { title: "Seared Scallops", description: "Hand-dived scallops with cauliflower purée, truffle vinaigrette, and micro herbs.", icon: "🐚", price: "$38" },
      { title: "Wagyu Tartare", description: "A5 wagyu beef tartare with quail egg yolk, capers, and house-made brioche.", icon: "🥩", price: "$42" },
      { title: "Lobster Thermidor", description: "Nova Scotia lobster in cognac cream with gruyère gratin and asparagus tips.", icon: "🦞", price: "$55" },
      { title: "Sommelier Pairing", description: "Five expertly paired wines selected by our head sommelier to complement each course.", icon: "🍷", price: "$85" },
      { title: "Grand Dessert", description: "Dark chocolate sphere with gold leaf, raspberry coulis, and vanilla bean ice cream.", icon: "🍫", price: "$22" },
    ],
  },
  gallery: {
    title: "Visual Journey",
    subtitle: "Art on every plate",
    images: [
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Fine dining plate", caption: "Signature Plating" },
      { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Restaurant ambiance", caption: "Intimate Ambiance" },
      { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Dining room", caption: "Grand Dining Room" },
      { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", alt: "Chef at work", caption: "Kitchen Theater" },
      { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80", alt: "Wine cellar", caption: "400+ Label Cellar" },
      { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", alt: "Cocktail bar", caption: "Cocktail Lounge" },
    ],
  },
  testimonials: {
    title: "Guest Experiences",
    subtitle: "Stories from our distinguished guests",
    testimonials: [
      { name: "Victoria Ashton", role: "Food Critic", company: "Gastronomy Weekly", content: "Royal Foods delivers a dining experience that transcends the ordinary. Every course is a masterpiece of flavor and presentation.", rating: 5 },
      { name: "James Whitfield", role: "Wine Collector", content: "The sommelier's pairing was extraordinary. They have one of the finest wine cellars I've encountered outside of Bordeaux.", rating: 5 },
      { name: "Elena Marchetti", role: "Anniversary Dinner", content: "We celebrated our 25th anniversary here, and it was the most magical dining experience of our lives. Pure perfection.", rating: 5 },
    ],
  },
  faq: {
    title: "Before Your Visit",
    subtitle: "Everything you need to know",
    faqs: [
      { question: "Is there a dress code?", answer: "Smart casual is our minimum. We recommend business formal for weekend dinner service." },
      { question: "How far in advance should I book?", answer: "We recommend booking at least 2 weeks in advance for weekend dining. Our 12-course tasting menu requires 48 hours notice." },
      { question: "Do you accommodate dietary restrictions?", answer: "Absolutely. Please inform us of any dietary needs when booking, and our chef will create a personalized menu for you." },
    ],
  },
  contact: {
    title: "Reserve Your Table",
    subtitle: "An unforgettable evening awaits",
    address: "1 Grand Avenue, Uptown, NY 10005",
    phone: "+1 (555) 321-9876",
    email: "reservations@royalfoods.com",
    hours: "Dinner Only: Tue-Sun 6PM-11PM | Closed Mondays",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/royalfoods" },
      { platform: "Facebook", url: "https://facebook.com/royalfoods" },
    ],
  },
  cta: {
    title: "An Evening to Remember",
    description: "Reserve your table at Royal Foods and experience dining elevated to an art form.",
    buttonText: "Book Now",
    buttonLink: "#contact",
  },
  footer: {
    links: [
      { label: "About", href: "#about" },
      { label: "Tasting Menu", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reservations", href: "#contact" },
    ],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/royalfoods" },
      { platform: "Facebook", url: "https://facebook.com/royalfoods" },
    ],
  },
};
