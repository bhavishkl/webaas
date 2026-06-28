import React from "react";

export const metadata = {
  title: "IDC Dance Studio | Kalaburagi",
  description: "Learn, Dance, Perform. Professional dance classes for kids and adults with expert instructors in Hip-Hop, Bollywood, Urban, and Wedding Choreography.",
  keywords: "Dance Classes Kalaburagi, Dance Studio Gulbarga, Hip-Hop Classes, Bollywood Dance Classes, Urban Dance Academy, Kids Dance Classes, Wedding Choreography, Dance Coaching, Dance Academy Near Me",
};

export function IDCDancePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-fuchsia-600 selection:text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center font-black text-xl tracking-tighter shadow-[0_0_15px_rgba(192,38,211,0.5)]">
              IDC
            </div>
            <span className="font-black text-xl tracking-widest uppercase">Dance Studio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-neutral-400 uppercase">
            <a href="#about" className="hover:text-fuchsia-500 transition-colors">About</a>
            <a href="#services" className="hover:text-fuchsia-500 transition-colors">Classes</a>
            <a href="#gallery" className="hover:text-fuchsia-500 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-fuchsia-500 transition-colors">Contact</a>
          </div>
          <a
            href="tel:+919902202883"
            className="bg-fuchsia-600 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-fuchsia-700 transition-all shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)]"
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
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2000&auto=format&fit=crop"
            alt="Professional Dance Training"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Neon glow effects */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] z-10" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-950/50 border border-fuchsia-500/30 rounded-full text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
              Admissions Open • Evening Batches
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
              Learn, Dance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Perform.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-medium mb-10 max-w-2xl leading-relaxed border-l-4 border-fuchsia-600 pl-6">
              Professional dance classes for kids and adults with expert instructors in Hip-Hop, Bollywood, Urban, and Wedding Choreography.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="bg-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-bold tracking-widest uppercase hover:bg-fuchsia-700 transition-all shadow-[0_0_20px_rgba(192,38,211,0.4)]"
              >
                Book a Trial Class
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full text-lg font-bold tracking-widest uppercase text-white border border-white/20 hover:bg-white/5 transition-colors"
              >
                Explore Classes
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
                Unleash Your <span className="text-fuchsia-500">Rhythm</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                IDC Dance Studio offers energetic and professional dance training for all age groups. Whether you're a beginner or an experienced dancer, the academy focuses on technique, creativity, confidence, fitness, and stage performance through structured classes and experienced coaching.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-white mb-2">5.0⭐</div>
                  <div className="text-sm font-bold tracking-widest text-fuchsia-500 uppercase">Top Rated</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-sm font-bold tracking-widest text-fuchsia-500 uppercase">Stage Confidence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-purple-600 rotate-3 rounded-2xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000&auto=format&fit=crop" 
                alt="Dance Studio" 
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-neutral-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-4">Our <span className="text-fuchsia-500">Classes</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">From foundational steps to advanced stage performance.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {[
            "Hip-Hop Dance",
            "Bollywood Dance",
            "Urban Dance",
            "Kids Dance Classes",
            "Adult Dance Classes",
            "Beginner Program",
            "Advanced Training",
            "Wedding Choreography",
            "Stage Performance",
            "Dance Workshops",
            "Online Classes",
            "Offline Classes"
          ].map((service, idx) => (
            <div key={idx} className="bg-neutral-950 p-6 rounded-2xl border border-white/5 hover:border-fuchsia-500/50 transition-all group relative overflow-hidden flex items-center justify-center text-center h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all" />
              <h3 className="text-lg font-black uppercase tracking-wide relative z-10 group-hover:text-fuchsia-400 transition-colors">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-4">In <span className="text-purple-500">Action</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">A glimpse into our studio sessions and performances.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder images - you can edit these SRC links later */}
          <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop" alt="Gallery 1" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
          <img src="https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?q=80&w=800&auto=format&fit=crop" alt="Gallery 2" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
          <img src="https://images.unsplash.com/photo-1535525153412-5a42439a610f?q=80&w=800&auto=format&fit=crop" alt="Gallery 3" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
          <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop" alt="Gallery 4" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
          <img src="https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=800&auto=format&fit=crop" alt="Gallery 5" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
          <img src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop" alt="Gallery 6" className="w-full h-64 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500 grayscale hover:grayscale-0" />
        </div>
      </section>

      {/* WHY CHOOSE US & BENEFITS */}
      <section id="why-us" className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black uppercase mb-10">Why Choose <span className="text-fuchsia-500">Us</span></h2>
              <ul className="space-y-4">
                {[
                  "Experienced instructors & Beginner-friendly",
                  "Dedicated Kids & Adults batches",
                  "Performance opportunities & Stage confidence",
                  "Fitness-focused training & Creative choreography",
                  "Positive learning environment & Regular workshops",
                  "Personalized guidance for every student"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-white/5">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white flex items-center justify-center font-black shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-black uppercase mb-10">Core <span className="text-fuchsia-500">Benefits</span></h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Confidence", "Fitness", "Flexibility", "Rhythm", 
                  "Coordination", "Creativity", "Stage Presence", 
                  "Teamwork", "Stress Relief", "Personality Development"
                ].map((benefit, i) => (
                  <span key={i} className="px-6 py-3 bg-neutral-950 border border-white/5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-fuchsia-600 hover:border-fuchsia-600 transition-all cursor-default">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-neutral-950 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[40px]" />
                <h3 className="text-xl font-black uppercase mb-4 text-fuchsia-400">Facilities</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Spacious dance studio, Full-size mirrors, Premium music system, Clean practice area, Group classes, and dedicated Performance preparation areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer id="contact" className="bg-neutral-950 pt-24 pb-12 border-t border-fuchsia-900/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">Dance?</span></h2>
            <div className="flex justify-center gap-6">
              <a href="tel:+919902202883" className="bg-fuchsia-600 text-white px-10 py-5 rounded-full text-lg font-bold tracking-widest uppercase hover:bg-fuchsia-700 transition-all shadow-[0_0_30px_rgba(192,38,211,0.3)]">
                Call Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center font-black text-sm tracking-tighter">
                  IDC
                </div>
                <span className="font-black text-lg tracking-widest uppercase">Dance Studio</span>
              </div>
              <p className="text-neutral-500 text-sm">
                Empowering individuals through rhythm, movement, and performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-white mb-6">Visit Us</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Kalaburagi (Gulbarga),<br />
                Karnataka
              </p>
              <div className="text-fuchsia-500 font-bold text-sm tracking-widest uppercase">
                Evening Batches: 5:30 PM – 8:30 PM
              </div>
            </div>
            
            <div>
              <h4 className="font-bold tracking-widest uppercase text-white mb-6">Contact</h4>
              <a href="tel:+919902202883" className="text-3xl font-black hover:text-fuchsia-500 transition-colors block mb-2">
                +91 99022 02883
              </a>
              <div className="flex gap-4 mt-6">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-fuchsia-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-fuchsia-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-fuchsia-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">YT</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 text-neutral-600 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} IDC Dance Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 
        TODO / MISSING INFO (Ask Owner):
        - Founder name
        - Exact address (currently only Kalaburagi)
        - Fee structure
        - Batch timings (other than evening)
        - Social media links (FB, IG, YT)
        - Email address
        - Awards & achievements
        - Real gallery photos
        - Dance certifications
      */}
    </div>
  );
}
