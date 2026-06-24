import type { ClientConfig } from "@/core/types";

export const powerGymConfig: ClientConfig = {
  slug: "powergym",
  templateSlug: "gym",
  businessName: "Power Gym",
  tagline: "Unleash Your Potential",
  colors: {
    primary: "#dc2626",
    secondary: "#991b1b",
    accent: "#f97316",
    background: "#09090b",
    surface: "#18181b",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    border: "#27272a",
  },
  hero: {
    title: "Unleash Your Potential",
    subtitle: "Power Gym — Elite Training Facility",
    description: "Where raw power meets cutting-edge science. Our elite facility is designed for those who refuse to settle for average.",
    ctaText: "Join Now",
    ctaLink: "#contact",
    secondaryCtaText: "Explore Programs",
    secondaryCtaLink: "#services",
    backgroundImage: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=1920&q=80",
  },
  about: {
    title: "Built for Champions",
    subtitle: "Elite Performance Center",
    description: "Power Gym is the region's premier strength training destination. With competition-grade equipment, Olympic platforms, and a no-excuses training culture, we attract serious lifters and athletes from across the state.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    stats: [
      { label: "Competition Athletes", value: "180+" },
      { label: "Olympic Platforms", value: "8" },
      { label: "National Titles Won", value: "24" },
      { label: "Squat Racks", value: "12" },
    ],
  },
  services: {
    title: "Training Programs",
    subtitle: "Programs designed for serious results",
    services: [
      { title: "Powerlifting", description: "Structured squat, bench, and deadlift programs for competition and strength gains.", icon: "🏋️", price: "$69/mo" },
      { title: "Olympic Weightlifting", description: "Learn the snatch and clean & jerk from nationally certified coaches.", icon: "🥇", price: "$79/mo" },
      { title: "Strongman Training", description: "Atlas stones, log press, and farmer carries — train like the world's strongest.", icon: "💪", price: "$65/mo" },
      { title: "Sports Performance", description: "Sport-specific conditioning for athletes looking to gain a competitive edge.", icon: "⚡", price: "$85/mo" },
      { title: "Nutrition Coaching", description: "Customized meal plans and macro tracking to fuel your performance goals.", icon: "🥗", price: "$45/mo" },
      { title: "Recovery & Mobility", description: "Foam rolling, stretching protocols, and cold plunge sessions for optimal recovery.", icon: "🧊", price: "$30/mo" },
    ],
  },
  gallery: {
    title: "The Power Gym Experience",
    subtitle: "See our world-class facility",
    images: [
      { src: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80", alt: "Heavy lifting area", caption: "Heavy Lifting Zone" },
      { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80", alt: "Olympic platforms", caption: "Olympic Platforms" },
      { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80", alt: "Dumbbell rack", caption: "Equipment Wall" },
      { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Training floor", caption: "Main Training Floor" },
      { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Recovery area", caption: "Recovery Zone" },
      { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", alt: "Boxing area", caption: "Combat Sports Area" },
    ],
  },
  testimonials: {
    title: "Athlete Testimonials",
    subtitle: "Hear from our champions",
    testimonials: [
      { name: "Marcus Johnson", role: "Powerlifter", company: "National Champion", content: "Power Gym gave me the tools, coaching, and environment I needed to win my first national title. There's no gym like it.", rating: 5 },
      { name: "Lisa Park", role: "CrossFit Athlete", content: "The equipment is unmatched and the coaching staff actually knows what they're talking about. I've PRd every lift since joining.", rating: 5 },
      { name: "James O'Brien", role: "Strongman Competitor", content: "Finally a gym with proper strongman equipment. The community here pushes everyone to be their best.", rating: 5 },
    ],
  },
  faq: {
    title: "FAQ",
    subtitle: "Common questions about Power Gym",
    faqs: [
      { question: "Is Power Gym only for advanced lifters?", answer: "No! While we attract serious athletes, we welcome all experience levels. Our coaches will help you get started safely." },
      { question: "Do you have day pass options?", answer: "Yes, we offer day passes for $20. If you're visiting from out of town, just ask about our weekly rate." },
      { question: "Can I drop weights?", answer: "Absolutely. Our platforms are designed for it. We encourage proper Olympic lifting technique." },
    ],
  },
  contact: {
    title: "Join Power Gym",
    subtitle: "Start training at the elite level",
    address: "456 Iron Street, Industrial District, NY 10002",
    phone: "+1 (555) 987-6543",
    email: "info@powergym.com",
    hours: "Mon-Sat: 5AM-10PM | Sun: 8AM-6PM",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/powergym" },
      { platform: "YouTube", url: "https://youtube.com/powergym" },
    ],
  },
  cta: {
    title: "Train With the Best",
    description: "Power Gym memberships start at $59/month. No contracts. Cancel anytime.",
    buttonText: "Get Started",
    buttonLink: "#contact",
  },
  footer: {
    links: [
      { label: "About", href: "#about" },
      { label: "Programs", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/powergym" },
      { platform: "YouTube", url: "https://youtube.com/powergym" },
    ],
  },
};
