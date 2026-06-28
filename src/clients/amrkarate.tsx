import React from "react";

export function AMRKaratePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-red-600 selection:text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-black text-xl italic tracking-tighter shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              AMR
            </div>
            <span className="font-black text-xl tracking-widest uppercase">Karate Club</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#services" className="hover:text-red-500 transition-colors">Programs</a>
            <a href="#why-us" className="hover:text-red-500 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
          <a
            href="tel:+918904926731"
            className="bg-red-600 text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            Join Today
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop"
            alt="Karate Training"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Red glow effects */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/50 border border-red-500/30 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Kalaburagi's Premier Martial Arts Academy
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
              Forge Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Discipline.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-medium mb-10 max-w-2xl leading-relaxed border-l-4 border-red-600 pl-6">
              Professional karate training for kids, teens, adults, and women. Learn self-defence, fitness, discipline, confidence, and leadership.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="bg-red-600 text-white px-8 py-4 rounded-sm text-lg font-bold tracking-widest uppercase hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                Book a Free Trial
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-sm text-lg font-bold tracking-widest uppercase text-white border border-white/20 hover:bg-white/5 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & STATS */}
      <section id="about" className="py-24 relative bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
                More Than Just <span className="text-red-600">Fighting</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                A.M.R Karate Club provides structured karate training for all age groups, focusing on martial arts, physical fitness, discipline, confidence, self-defence, and personality development in a safe learning environment.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-white mb-2">5.0⭐</div>
                  <div className="text-sm font-bold tracking-widest text-red-500 uppercase">100+ Reviews</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-sm font-bold tracking-widest text-red-500 uppercase">Safe Environment</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rotate-3 rounded-xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop" 
                alt="Kids Karate Training" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES MARQUEE & LIST */}
      <section id="services" className="py-24 bg-neutral-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-4">Our <span className="text-red-600">Programs</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Comprehensive training structured for every age and skill level.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Kids Karate", desc: "Build focus, coordination, and confidence early." },
            { title: "Teen & Adult Karate", desc: "Advanced techniques, fitness, and stress relief." },
            { title: "Women's Self Defence", desc: "Empowerment and practical safety skills." },
            { title: "Fitness Training", desc: "High-intensity workouts for overall health." },
            { title: "Competition Coaching", desc: "Prepare for tournaments and championships." },
            { title: "Personal Coaching", desc: "One-on-one attention for rapid progress." },
          ].map((service, idx) => (
            <div key={idx} className="bg-neutral-950 p-8 rounded-xl border border-white/5 hover:border-red-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-bl-full -mr-16 -mt-16 group-hover:bg-red-600/20 transition-all" />
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">{service.title}</h3>
              <p className="text-neutral-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & BENEFITS */}
      <section id="why-us" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black uppercase mb-10">Why Choose <span className="text-red-600">Us</span></h2>
              <ul className="space-y-4">
                {[
                  "Experienced instructors & structured curriculum",
                  "Safe training and friendly environment",
                  "Focus on discipline and personality development",
                  "Competition preparation and individual attention",
                  "Affordable coaching for all age groups"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300 bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                    <span className="w-8 h-8 rounded-full bg-red-950/50 text-red-500 flex items-center justify-center font-black shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-black uppercase mb-10">Core <span className="text-red-600">Benefits</span></h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Confidence", "Discipline", "Fitness", "Flexibility", 
                  "Strength", "Focus", "Coordination", "Self-defence", 
                  "Stress relief", "Healthy lifestyle"
                ].map((benefit, i) => (
                  <span key={i} className="px-6 py-3 bg-neutral-900 border border-white/5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-red-600 hover:border-red-600 transition-all cursor-default">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-neutral-900 rounded-xl border border-white/5">
                <h3 className="text-xl font-black uppercase mb-4">Facilities</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Fully equipped training hall, premium karate mats, structured group classes, official belt grading, personal guidance, and a pristine, clean environment to ensure the best experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer id="contact" className="bg-neutral-900 pt-24 pb-12 border-t border-red-900/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Begin?</span></h2>
            <div className="flex justify-center gap-6">
              <a href="tel:+918904926731" className="bg-red-600 text-white px-10 py-5 rounded-sm text-lg font-bold tracking-widest uppercase hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                Call Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-black text-sm italic tracking-tighter">
                  AMR
                </div>
                <span className="font-black text-lg tracking-widest uppercase">Karate Club</span>
              </div>
              <p className="text-neutral-500 text-sm">
                Empowering individuals through traditional martial arts and modern fitness.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-white mb-6">Visit Us</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Reshmi Campus, Kusnoor Road,<br />
                Kusnoor, Kalaburagi,<br />
                Karnataka 585106
              </p>
              <div className="text-red-500 font-bold text-sm tracking-widest uppercase">
                Mon–Sun: 9:00 AM – 5:00 PM
              </div>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-white mb-6">Contact</h4>
              <a href="tel:+918904926731" className="text-3xl font-black hover:text-red-500 transition-colors block mb-2">
                +91 89049 26731
              </a>
              <div className="flex gap-4 mt-6">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 text-neutral-600 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} A.M.R Karate Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
