import React from "react";
import type { ClientConfig, ThemeColors } from "@/core/types";

export const dhrivyaConfig: ClientConfig = {
  slug: "dhrivya",
  sectionOrder: ["hero", "services", "about", "gallery", "testimonials", "contact", "footer"],
  sectionLabels: { services: "Treatments", about: "Our Practice" },
  CustomTemplate: DentistTemplate,
  businessName: "Dhrivya Dentist Clinic",
  tagline: "Smile with Confidence",
  logo: {
    url: "https://images.unsplash.com/photo-1598256989800-fea5ce514baf?w=100&q=80", // A generic teeth/medical logo placeholder
    alt: "Dhrivya Dentist Clinic Logo",
  },
  colors: {
    primary: "#0d9488",     // Teal
    secondary: "#0f766e",   // Dark Teal
    accent: "#d97706",      // Amber
    background: "#f8fafc",  // Light Slate
    surface: "#ffffff",
    text: "#0f172a",        // Dark Slate
    textMuted: "#64748b",
    border: "#e2e8f0",
  },
  hero: {
    title: "Artistry in Every Smile.",
    subtitle: "Experience modern dentistry designed around your comfort.",
    description: "At Dhrivya Dentist Clinic, we combine advanced dental technology with a gentle, personalized approach to give you the healthy, radiant smile you deserve.",
    ctaText: "Book Your Visit",
    ctaLink: "#contact",
    secondaryCtaText: "Explore Treatments",
    secondaryCtaLink: "#treatments",
    backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop", // Modern clean clinic
  },
  services: {
    title: "Signature Treatments",
    subtitle: "Comprehensive care tailored to your unique smile.",
    services: [
      {
        title: "Cosmetic Dentistry",
        description: "Transform your smile with premium veneers, professional whitening, and aesthetic bonding crafted for natural perfection.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>',
      },
      {
        title: "Restorative Care",
        description: "Reclaim your dental health with advanced implants, crowns, and bridges that look and feel just like your natural teeth.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>',
      },
      {
        title: "Preventive Dentistry",
        description: "Keep your smile pristine with routine cleanings, comprehensive exams, and tailored oral hygiene plans.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>',
      },
    ],
  },
  about: {
    title: "A New Standard in Dental Care",
    subtitle: "Our Philosophy",
    description: "We believe that going to the dentist shouldn't be a chore—it should be a refined experience. From our spa-like clinic environment to our investment in the latest pain-free technology, every aspect of Dhrivya Dentist Clinic is designed with your peace of mind at the forefront.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1500&auto=format&fit=crop", // Dental operation or tools
    stats: [
      { label: "Happy Patients", value: "5k+" },
      { label: "Years Experience", value: "15+" },
      { label: "Expert Specialists", value: "4" },
      { label: "Awards Won", value: "12" },
    ],
  },
  gallery: {
    title: "Our Clinic",
    images: [], // Handled uniquely in template or omitted if we want
  },
  testimonials: {
    title: "Patient Stories",
    subtitle: "Don't just take our word for it.",
    testimonials: [
      {
        name: "Sarah Jenkins",
        content: "I've always been terrified of the dentist, but the team at Dhrivya made me feel entirely at ease. The environment is so calming and the results of my whitening are stunning.",
        role: "Patient",
      },
      {
        name: "Michael Chen",
        content: "Professional, efficient, and incredibly skilled. They replaced a crown for me and it looks better than the original tooth. Highly recommended.",
        role: "Patient",
      },
      {
        name: "Elena Rodriguez",
        content: "The best dental experience I've ever had. Their attention to detail and modern equipment make all the difference. I actually look forward to my checkups now!",
        role: "Patient",
      },
    ],
  },
  faq: {
    title: "Questions?",
    faqs: [], // Not explicitly used in the bespoke template right now
  },
  contact: {
    title: "Dhrivya Dentist Clinic",
    subtitle: "A modern approach to comprehensive dental care.",
    address: "123 Harmony Wellness Blvd, Suite 200, Cityville, ST 12345",
    phone: "+1 (555) 123-4567",
    email: "hello@dhrivyadental.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
  },
  cta: {
    title: "Ready for your best smile?",
    description: "Book an appointment today.",
    buttonText: "Book Now",
    buttonLink: "#contact",
  },
  footer: {
    copyrightText: "© 2026 Dhrivya Dentist Clinic. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

// Creative bespoke template for Dentist that ignores traditional SectionRenderer
export function DentistTemplate({ client, colors }: { client: ClientConfig; colors: ThemeColors; }) {
  return (
    <div
      className="min-h-screen font-sans selection:bg-teal-500 selection:text-white"
      style={
        {
          backgroundColor: colors.background,
          color: colors.text,
          "--primary": colors.primary,
          "--secondary": colors.secondary,
          "--accent": colors.accent,
          "--text": colors.text,
          "--text-muted": colors.textMuted,
          "--surface": colors.surface,
          "--border": colors.border,
        } as React.CSSProperties
      }
    >
      {/* Floating Creative Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white/20 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {client.logo?.url && (
            <img src={client.logo.url} alt={client.logo.alt} className="h-8 object-contain" />
          )}
          <span className="text-xl font-light tracking-widest text-slate-800">
            {client.businessName}
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-slate-600">
          <a href="#treatments" className="hover:text-teal-600 transition-colors">Treatments</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">Our Practice</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/30"
        >
          Book Visit
        </a>
      </nav>

      {/* Hero Section - Asymmetrical and Creative */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-slate-50 z-10" />
          {client.hero.backgroundImage && (
            <img
              src={client.hero.backgroundImage}
              alt="Hero Background"
              className="w-full h-full object-cover opacity-20"
            />
          )}
          {/* Decorative blurred shapes */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-3xl" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-6 tracking-wider uppercase">
              {client.tagline}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-[1.1]">
              {client.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-12 max-w-2xl leading-relaxed">
              {client.hero.description}
            </p>
            <div className="flex gap-6 items-center">
              <a
                href={client.hero.ctaLink}
                className="bg-slate-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-800 transition-all shadow-xl"
              >
                {client.hero.ctaText}
              </a>
              {client.hero.secondaryCtaText && (
                <a
                  href={client.hero.secondaryCtaLink}
                  className="text-slate-900 font-medium hover:text-teal-600 transition-colors"
                >
                  {client.hero.secondaryCtaText} &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section - Overlapping Cards Grid */}
      <section id="treatments" className="py-32 relative bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-serif text-slate-900 mb-6">{client.services.title}</h2>
              <p className="text-xl text-slate-500 font-light">{client.services.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {client.services.services.map((service, idx) => (
              <div 
                key={idx} 
                className={`group bg-slate-50 rounded-3xl p-10 hover:bg-teal-600 hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl ${idx % 2 === 1 ? 'md:mt-16' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-teal-600 mb-8 group-hover:text-teal-600 group-hover:shadow-lg transition-all duration-500">
                  {/* Creative fallback if icon isn't there, we'll just use a tooth SVG or initial */}
                  {service.icon ? (
                    <span className="text-3xl" dangerouslySetInnerHTML={{ __html: service.icon }} />
                  ) : (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-serif text-slate-900 group-hover:text-white mb-4 transition-colors">{service.title}</h3>
                <p className="text-slate-500 group-hover:text-teal-50 font-light leading-relaxed mb-6 transition-colors">
                  {service.description}
                </p>
                {service.price && (
                  <div className="text-sm font-bold tracking-widest text-teal-600 group-hover:text-teal-100 transition-colors uppercase">
                    From {service.price}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Practice Section - Split Image and Typography */}
      <section id="about" className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-teal-600 rounded-3xl rotate-[-3deg] scale-105 opacity-50 blur-sm" />
              {client.about.image ? (
                <img 
                  src={client.about.image} 
                  alt="Our Practice" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl" 
                />
              ) : (
                <div className="relative z-10 w-full h-[600px] bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-700">
                  <span className="text-slate-500">Practice Image</span>
                </div>
              )}
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-6 block">
                {client.about.subtitle || "Our Philosophy"}
              </span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">
                {client.about.title}
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
                {client.about.description}
              </p>
              
              {client.about.stats && client.about.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-10">
                  {client.about.stats.map((stat, idx) => (
                    <div key={idx} className="border-t border-slate-800 pt-6">
                      <div className="text-4xl font-light text-teal-400 mb-2">{stat.value}</div>
                      <div className="text-sm font-medium tracking-wider text-slate-400 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Creative Marquee or Staggered Blocks */}
      {client.testimonials.testimonials.length > 0 && (
        <section className="py-32 bg-teal-50 overflow-hidden relative">
          <div className="container mx-auto px-6 mb-20 text-center relative z-10">
            <h2 className="text-5xl font-serif text-slate-900 mb-6">{client.testimonials.title}</h2>
            <p className="text-xl text-slate-600 font-light">{client.testimonials.subtitle}</p>
          </div>
          
          <div className="flex flex-nowrap gap-8 px-6 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {client.testimonials.testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[350px] md:w-[450px] bg-white rounded-[2rem] p-10 shadow-xl shadow-teal-900/5 relative"
              >
                <div className="text-6xl text-teal-200 font-serif absolute top-6 left-8">"</div>
                <p className="text-lg text-slate-700 font-light leading-relaxed relative z-10 mb-8 pt-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    {testimonial.role && <div className="text-sm text-slate-500">{testimonial.role}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Minimal Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-20 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
              <h3 className="text-2xl font-serif mb-6">{client.businessName}</h3>
              <p className="text-slate-400 font-light max-w-xs leading-relaxed">
                {client.contact.title} - {client.contact.subtitle}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-300 font-light">
                {client.contact.phone && <li>{client.contact.phone}</li>}
                {client.contact.email && <li>{client.contact.email}</li>}
                {client.contact.address && <li>{client.contact.address}</li>}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-6">Hours</h4>
              <ul className="space-y-4 text-slate-300 font-light">
                <li className="whitespace-pre-line">{client.contact.hours}</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
            <div>{client.footer.copyrightText || `© ${new Date().getFullYear()} ${client.businessName}. All rights reserved.`}</div>
            <div className="flex gap-6">
              {client.footer.links?.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Some custom CSS to hide scrollbar for the horizontal scrolling testimonials */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
