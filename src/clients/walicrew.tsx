import React from "react";

export const metadata = {
  title: "Walicrew Dance Class | Kalaburagi",
  description: "Train with Kalaburagi's energetic dance crew. Master Hip-Hop, Freestyle, Bollywood, and stage performance through fun, professional, and confidence-building dance classes.",
  keywords: "Dance Classes Kalaburagi, Hip-Hop Dance Classes, Freestyle Dance, Bollywood Dance Classes, Dance Studio Gulbarga, Wedding Choreography, Kids Dance Classes, Dance Academy Near Me",
};

export default function WalicrewPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* TOP SCROLLING MARQUEE */}
      <div className="bg-yellow-400 text-black py-2 border-b-4 border-black relative z-50">
        <div className="w-[200%] flex animate-marquee font-black text-sm tracking-widest uppercase">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-4 whitespace-nowrap">
              ADMISSIONS OPEN • MORNING & EVENING BATCHES • 
            </span>
          ))}
        </div>
      </div>

      {/* BRUTALIST NAVIGATION */}
      <nav className="w-full border-b-4 border-white bg-black sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-4xl font-black italic tracking-tighter text-yellow-400 drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform cursor-pointer">
            WALI<span className="text-white">CREW.</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold uppercase tracking-widest text-sm">
            <a href="#manifesto" className="hover:text-yellow-400 hover:-translate-y-1 transition-all">Manifesto</a>
            <a href="#about" className="hover:text-yellow-400 hover:-translate-y-1 transition-all">Crew</a>
            <a href="#classes" className="hover:text-yellow-400 hover:-translate-y-1 transition-all">Styles</a>
            <a href="#join" className="hover:text-yellow-400 hover:-translate-y-1 transition-all">Join</a>
          </div>
          <a
            href="tel:+918722273909"
            className="hidden sm:block border-4 border-white bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all"
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 px-6 max-w-7xl mx-auto border-b-4 border-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative z-10 mt-8 lg:mt-0">
            <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              THE <br/>
              <span className="text-yellow-400 drop-shadow-[6px_6px_0px_rgba(255,255,255,1)]">STREETS</span> <br/>
              ARE OURS.
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-lg mb-12 leading-snug border-l-8 border-yellow-400 pl-6 uppercase text-neutral-300">
              Train with Kalaburagi's most energetic dance crew. Master Hip-Hop, Freestyle, Bollywood, and stage performance.
            </p>
            <a
              href="#join"
              className="inline-block bg-white text-black border-4 border-black px-10 py-5 text-xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] transition-all"
            >
              Book Trial Class
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square border-8 border-white bg-yellow-400 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop"
                alt="Walicrew Dancers"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black border-4 border-black px-6 py-2 text-2xl font-black uppercase transform -rotate-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                5.0⭐ RATED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION (From Design 2) */}
      <section id="manifesto" className="bg-yellow-400 text-black border-b-4 border-white py-24 px-6 relative overflow-hidden">
        <div className="absolute -right-20 top-10 text-[250px] font-black text-black/5 leading-none pointer-events-none transform -rotate-6">
          CREW
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 border-b-8 border-black inline-block pb-4">
            Our Manifesto.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-2xl md:text-3xl font-black uppercase leading-tight">
            <p>
              We don't just teach steps. We build <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Confidence</span>, forge <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Fitness</span>, and own the <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Stage</span>.
            </p>
            <p>
              From raw beginners to stage veterans, WALICREW is a brotherhood of rhythm. Professional choreography, real street vibes, and zero excuses.
            </p>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {['No Judgement', 'Pure Energy', 'Real Technique', 'Live Performance'].map((tag, i) => (
              <div key={i} className="border-4 border-black px-6 py-3 font-black text-xl hover:bg-black hover:text-yellow-400 transition-colors">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION: ABOUT & WHY CHOOSE US (From Design 1) */}
      <section id="about" className="border-b-4 border-white grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 md:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-white bg-black">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">The <span className="text-yellow-400">Crew</span></h2>
          <p className="text-xl font-bold leading-relaxed text-neutral-300 mb-8 uppercase">
            WALICREW DANCE CLASS provides professional dance training for kids, teens, and adults. We focus on creativity, rhythm, fitness, confidence, and live performance in a friendly and motivating environment.
          </p>
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              'Confidence', 'Fitness', 'Stage Presence', 'Stress Relief', 'Flexibility'
            ].map((tag, i) => (
              <span key={i} className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 font-black uppercase tracking-wider text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-10 md:p-20 bg-yellow-400 text-black relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 relative z-10 drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">Why Us?</h2>
          <ul className="space-y-6 relative z-10">
            {[
              "Professional choreography",
              "Experienced trainers",
              "Kids & adults batches",
              "Performance opportunities",
              "Group & personal training",
              "Affordable coaching"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-3xl font-black leading-none mt-1">✕</span>
                <span className="text-2xl font-black uppercase leading-tight">{item}</span>
              </li>
            ))}
          </ul>
          <div className="absolute -right-20 -bottom-10 text-[180px] font-black text-black/10 leading-none pointer-events-none transform -rotate-12">
            WALI
          </div>
        </div>
      </section>

      {/* SERVICES (BRUTALIST GRID) (From Design 1) */}
      <section id="classes" className="py-24 px-6 max-w-7xl mx-auto border-b-4 border-white">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-transparent break-words" style={{ WebkitTextStroke: '3px white' }}>
            STYLES & BATCHES
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Hip-Hop",
            "Freestyle",
            "Bollywood",
            "Kids Batches",
            "Adults Batches",
            "Ladies Batches",
            "Wedding Choreo",
            "Stage Training",
            "Workshops"
          ].map((style, i) => (
            <div key={i} className="group border-4 border-white p-8 bg-black hover:bg-yellow-400 transition-colors cursor-crosshair relative hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] duration-200">
              <div className="text-5xl text-white font-black group-hover:text-black transition-colors opacity-20 absolute top-4 right-4">
                0{i + 1}
              </div>
              <h3 className="text-4xl font-black uppercase text-white group-hover:text-black transition-colors mt-12 leading-none">
                {style}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES BANNER (From Design 1) */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <h2 className="text-6xl md:text-7xl font-black uppercase shrink-0 drop-shadow-[4px_4px_0px_rgba(250,204,21,1)]">
            OUR <br/>STUDIO
          </h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            {["Spacious dance studio", "Mirror practice area", "Premium Music System", "Clean environment"].map((f, i) => (
              <div key={i} className="bg-black text-yellow-400 border-4 border-black px-6 py-4 font-black uppercase text-xl hover:bg-yellow-400 hover:text-black transition-colors">
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (From Design 1 - "JOIN THE CREW") */}
      <footer id="join" className="bg-black pt-24 pb-12 px-6 max-w-7xl mx-auto border-t-4 border-white">
        <div className="border-8 border-yellow-400 p-8 md:p-20 text-center relative overflow-hidden bg-black mb-24 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(250,204,21,1)] transition-all duration-300">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 relative z-10 text-white drop-shadow-[6px_6px_0px_rgba(250,204,21,1)]">
            JOIN THE CREW
          </h2>
          <p className="text-xl md:text-3xl font-bold uppercase text-neutral-400 mb-12 relative z-10">
            Morning & Evening Batches Available
          </p>
          <a
            href="tel:+918722273909"
            className="inline-block relative z-10 bg-yellow-400 text-black border-4 border-black px-8 py-5 md:px-12 md:py-6 text-2xl md:text-4xl font-black uppercase tracking-widest hover:bg-white transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            +91 87222 73909
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          <div>
            <div className="text-5xl font-black italic tracking-tighter text-yellow-400 mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
              WALI<span className="text-white">CREW.</span>
            </div>
            <p className="text-xl font-bold uppercase text-neutral-400 max-w-md leading-relaxed border-l-4 border-yellow-400 pl-4">
              Shrushti Arcade, Beside Good Luck Hotel, S.B. Temple Road, Khuba Plot, Brahampur, Kalaburagi, Karnataka.
            </p>
          </div>
          <div className="text-left md:text-right flex flex-col justify-between">
             <div className="flex flex-col md:items-end gap-2">
               <a href="#" className="text-3xl font-black uppercase hover:text-yellow-400 transition-colors">Instagram →</a>
               <a href="#" className="text-3xl font-black uppercase hover:text-yellow-400 transition-colors">YouTube →</a>
               <a href="#" className="text-3xl font-black uppercase hover:text-yellow-400 transition-colors">Facebook →</a>
             </div>
             <div className="mt-12 text-sm font-bold uppercase tracking-widest text-neutral-600">
               © {new Date().getFullYear()} Walicrew Dance Class. All Rights Reserved.
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
