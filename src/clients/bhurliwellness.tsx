import React from "react";

export const metadata = {
  title: "Bhurli Wellness Club | Kalaburagi",
  description: "Transform your health through yoga, fitness, and holistic wellness. Join Bhurli Wellness Club for expert-guided workouts.",
  keywords: "Yoga Classes Kalaburagi, Wellness Club Kalaburagi, Fitness Center Gulbarga, Weight Loss Yoga, Morning Yoga Classes, Health Club, Fitness Training, Yoga Near Me",
};

export default function BhurliWellnessPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#2C3D33] font-sans selection:bg-[#8CA894] selection:text-white font-light">
      
      {/* FLOATING PILL NAVIGATION */}
      <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
        <nav className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center gap-8 md:gap-16 pointer-events-auto border border-[#EBEAE4]">
          <div className="font-serif text-xl font-medium tracking-tight text-[#2C3D33]">
            Bhurli.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-[#65796C]">
            <a href="#philosophy" className="hover:text-[#8CA894] transition-colors">Philosophy</a>
            <a href="#offerings" className="hover:text-[#8CA894] transition-colors">Offerings</a>
            <a href="#community" className="hover:text-[#8CA894] transition-colors">Community</a>
          </div>
          <a
            href="tel:+919448414046"
            className="bg-[#2C3D33] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#435B4D] transition-colors"
          >
            Join Us
          </a>
        </nav>
      </div>

      {/* HERO SECTION (Inset Rounded Image) */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[75vh] md:h-[85vh] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-[#EBEAE4]">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
            alt="Yoga and Wellness"
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          
          <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase">
            Morning Batches: 5:45 AM – 6:45 AM
          </div>

          <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 max-w-2xl bg-[#F7F6F2]/95 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C3D33] mb-6 leading-[1.1] tracking-tight">
              Transform your health through holistic wellness.
            </h1>
            <p className="text-lg text-[#5A6D60] mb-8 leading-relaxed">
              Join Bhurli Wellness Club for expert-guided workouts that improve strength, flexibility, and overall well-being in a peaceful environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#8CA894] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#728A7A] transition-colors shadow-lg shadow-[#8CA894]/30"
              >
                Book a Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT */}
      <section id="philosophy" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#EBEAE4]">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" 
                alt="Wellness Coaching" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-lg flex items-center gap-4">
              <div className="text-4xl font-serif text-[#8CA894]">4.9</div>
              <div className="text-xs font-medium text-[#65796C] uppercase tracking-widest">
                Star Rating<br/>Google Reviews
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="text-xs font-medium text-[#8CA894] uppercase tracking-widest mb-6">Our Philosophy</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C3D33] mb-8 leading-[1.15]">
              Harmony of mind, body, and spirit.
            </h2>
            <p className="text-xl text-[#5A6D60] leading-relaxed mb-10">
              Bhurli Wellness Club is a wellness-focused fitness center offering yoga and fitness programs designed to improve physical health, mental wellness, flexibility, and overall lifestyle. We provide personalized guidance suitable for both beginners and experienced members.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Expert-guided yoga sessions",
                "Focus on holistic wellness",
                "Beginner-friendly approach",
                "Peaceful & clean environment",
                "Personalized health guidance",
                "Affordable coaching"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#8CA894]" />
                  <span className="text-[#4A5D4E] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS (Horizontal Scroll Cards) */}
      <section id="offerings" className="py-24 bg-[#EBEAE4] rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-4 px-4 md:px-12 lg:px-24 mb-24 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F7F6F2] rounded-full blur-[100px] opacity-50 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-xs font-medium text-[#8CA894] uppercase tracking-widest mb-6">Programs</div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C3D33] leading-tight">
              Curated Offerings
            </h2>
          </div>
          <p className="text-[#65796C] max-w-sm md:text-right">
            Swipe to explore our expert-designed wellness and fitness programs for every stage of your journey.
          </p>
        </div>

        <div className="relative z-10 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { title: "Yoga Classes", desc: "Traditional asanas focusing on breath, alignment, and flexibility." },
            { title: "Weight Loss", desc: "Structured programs blending cardio and mindful eating habits." },
            { title: "Wellness Coaching", desc: "Holistic guidance for a balanced, stress-free lifestyle." },
            { title: "General Fitness", desc: "Daily morning workouts to build stamina and overall strength." },
            { title: "Flexibility Training", desc: "Dedicated mobility sessions to improve posture and joints." },
            { title: "Beginner Programs", desc: "Step-by-step introduction to yoga and fitness fundamentals." }
          ].map((service, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[360px] h-[360px] bg-[#F7F6F2] rounded-[2rem] p-8 snap-center flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#8CA894]/20 flex items-center justify-center text-[#2C3D33] font-serif text-xl">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#2C3D33] mb-4 group-hover:text-[#8CA894] transition-colors">{service.title}</h3>
                <p className="text-[#65796C] leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#2C3D33] mb-16">
          The Path to Better Health
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "Weight Loss", "Improved Flexibility", "Better Posture", 
            "Stress Relief", "Increased Strength", "Mental Wellness", 
            "Better Mobility", "Healthy Lifestyle"
          ].map((benefit, i) => (
            <span key={i} className="px-8 py-4 bg-white border border-[#EBEAE4] rounded-full text-[#4A5D4E] font-medium hover:bg-[#8CA894] hover:text-white hover:border-[#8CA894] transition-all cursor-default shadow-sm">
              {benefit}
            </span>
          ))}
        </div>
      </section>

      {/* REVIEWS & COMMUNITY */}
      <section id="community" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 text-center border border-[#EBEAE4] shadow-sm relative">
          <div className="text-6xl text-[#8CA894] opacity-20 font-serif absolute top-12 left-12">"</div>
          <h2 className="text-2xl md:text-4xl font-serif text-[#2C3D33] mb-10 relative z-10 leading-relaxed">
            Members frequently praise the experienced instructors, peaceful atmosphere, effective yoga sessions, and the positive impact on flexibility, fitness, and overall health.
          </h2>
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#D4A373]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-[#65796C] font-medium">— Google Reviews Summary</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#2C3D33] text-[#F7F6F2] pt-24 pb-12 px-4 md:px-8 mt-12 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                Start Your <br/><span className="text-[#8CA894] italic">Wellness</span> Journey
              </h2>
              <a
                href="tel:+919448414046"
                className="inline-flex items-center justify-center bg-[#F7F6F2] text-[#2C3D33] px-10 py-5 rounded-full font-medium tracking-wide hover:bg-[#EBEAE4] transition-colors"
              >
                Call +91 94484 14046
              </a>
            </div>
            
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-xs font-medium text-[#8CA894] uppercase tracking-widest mb-6">Visit Us</h4>
              <p className="text-[#A4B3A8] leading-relaxed mb-6 font-medium">
                Plot No. 3, Sri Nagar, <br/>
                New Jewargi Road, <br/>
                Behind Chittari Saw Mill, <br/>
                Kalaburagi, Karnataka 585102
              </p>
              <div className="inline-block border border-[#435B4D] text-[#8CA894] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest">
                Mon–Sun: 5:45 AM – 6:45 AM
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-medium text-[#8CA894] uppercase tracking-widest mb-6">Facilities</h4>
              <ul className="space-y-3 text-[#A4B3A8] font-medium">
                <li>Yoga Hall</li>
                <li>Group Classes</li>
                <li>Wellness Coaching</li>
                <li>Guided Sessions</li>
                <li>Clean Environment</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#435B4D] text-sm text-[#8CA894]">
            <div className="font-serif text-xl mb-4 md:mb-0 text-white">Bhurli.</div>
            <div className="font-medium">© {new Date().getFullYear()} Bhurli Wellness Club. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
