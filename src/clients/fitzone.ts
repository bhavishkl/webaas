import type { ClientConfig } from "@/core/types";

export const fitzoneConfig: ClientConfig = {
  slug: "fitzone",
  templateSlug: "gym",
  businessName: "FitZone",
  tagline: "Fitness for Everyone",
  colors: {
    primary: "#06b6d4",
    secondary: "#0891b2",
    accent: "#22d3ee",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#f8fafc",
    textMuted: "#94a3b8",
    border: "#334155",
  },
  hero: {
    title: "Fitness for Everyone",
    subtitle: "FitZone — Your Friendly Neighborhood Gym",
    description: "A welcoming space for all fitness levels. Fun classes, modern equipment, and a supportive community.",
    ctaText: "Try Free Class",
    ctaLink: "#contact",
    secondaryCtaText: "See Classes",
    secondaryCtaLink: "#services",
    backgroundImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80",
  },
  about: {
    title: "Welcome to FitZone",
    subtitle: "Where Everyone Belongs",
    description: "FitZone was founded with a simple mission: make fitness accessible, fun, and welcoming for everyone. Whether you're taking your first steps or training for a marathon, our inclusive community has a place for you.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    stats: [
      { label: "Happy Members", value: "3,800+" },
      { label: "Weekly Classes", value: "50+" },
      { label: "Certified Trainers", value: "20" },
      { label: "Locations", value: "3" },
    ],
  },
  services: {
    title: "Group Classes",
    subtitle: "Something for everyone — all levels welcome",
    services: [
      { title: "Zumba", description: "Dance your way to fitness with energetic Latin-inspired workouts.", icon: "💃", price: "$25/mo" },
      { title: "Spin Class", description: "High-energy cycling sessions with pumping music and motivating instructors.", icon: "🚴", price: "$30/mo" },
      { title: "Pilates", description: "Core-focused low-impact exercises for strength, flexibility, and posture.", icon: "🤸", price: "$28/mo" },
      { title: "Aqua Fitness", description: "Low-impact water-based workouts perfect for all ages and fitness levels.", icon: "🏊", price: "$32/mo" },
      { title: "Kids Fitness", description: "Fun, age-appropriate exercise programs that keep kids active and healthy.", icon: "🧒", price: "$20/mo" },
      { title: "Senior Wellness", description: "Gentle exercise programs designed for older adults focusing on mobility and balance.", icon: "🌿", price: "$22/mo" },
    ],
  },
  gallery: {
    title: "Life at FitZone",
    subtitle: "See why our members love it here",
    images: [
      { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80", alt: "Group fitness class", caption: "Group Classes" },
      { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80", alt: "Spin studio", caption: "Spin Studio" },
      { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Yoga session", caption: "Yoga Classes" },
      { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Modern equipment", caption: "Modern Equipment" },
      { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", alt: "Training zone", caption: "Open Training Area" },
      { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80", alt: "Community event", caption: "Community Events" },
    ],
  },
  testimonials: {
    title: "Member Love",
    subtitle: "Join thousands of happy FitZone members",
    testimonials: [
      { name: "Amanda Torres", role: "Member", company: "Since 2022", content: "FitZone is the first gym where I actually look forward to working out. The Zumba classes are so much fun!", rating: 5 },
      { name: "Robert Kim", role: "Family Membership", content: "My whole family goes to FitZone — the kids program is fantastic and keeps my children active and engaged.", rating: 5 },
      { name: "Grace Nguyen", role: "Senior Member", content: "The senior wellness program has improved my mobility tremendously. The staff is patient and caring.", rating: 5 },
    ],
  },
  faq: {
    title: "Questions & Answers",
    subtitle: "We're here to help",
    faqs: [
      { question: "Is FitZone beginner-friendly?", answer: "Absolutely! We pride ourselves on being the most welcoming gym in town. Every class has modification options for beginners." },
      { question: "Do you offer family memberships?", answer: "Yes! Our family plans cover up to 4 members at a significant discount. Kids under 6 are free." },
      { question: "Can I freeze my membership?", answer: "Yes, you can freeze your membership for up to 3 months per year at no additional cost." },
    ],
  },
  contact: {
    title: "Start Your Journey",
    subtitle: "Come visit us or drop a message",
    address: "789 Wellness Blvd, Midtown, NY 10003",
    phone: "+1 (555) 246-8135",
    email: "hello@fitzone.com",
    hours: "Mon-Fri: 6AM-10PM | Sat-Sun: 7AM-8PM",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/fitzone" },
      { platform: "Facebook", url: "https://facebook.com/fitzone" },
      { platform: "TikTok", url: "https://tiktok.com/@fitzone" },
    ],
  },
  cta: {
    title: "First Class is On Us!",
    description: "Try any group class for free — no commitment, no pressure. Just show up and have fun.",
    buttonText: "Book Free Class",
    buttonLink: "#contact",
  },
  footer: {
    links: [
      { label: "About", href: "#about" },
      { label: "Classes", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    socials: [
      { platform: "Instagram", url: "https://instagram.com/fitzone" },
      { platform: "Facebook", url: "https://facebook.com/fitzone" },
      { platform: "TikTok", url: "https://tiktok.com/@fitzone" },
    ],
  },
};
