import React from "react";

export const metadata = {
  title: "Hercules Fitness Centre | Kalaburagi",
  description: "Build strength, lose fat, and transform your lifestyle at Hercules Fitness Centre. Kalaburagi's premium 4.9⭐ rated unisex gym.",
  keywords: "Gym in Kalaburagi, Best Gym Kalaburagi, Personal Training, Weight Loss Gym, Muscle Gain, Strength Training, Hercules Fitness Centre, Fitness Center Kalaburagi",
};

export default function HerculesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans p-4 md:p-6 lg:p-8 selection:bg-amber-500 selection:text-black">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.8);
        }
      `}</style>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* HEADER BLOCK */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 bg-[#141414] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-white/5 shadow-2xl">
          <div className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
            HERCULES<span className="text-amber-500">.</span>
          </div>
          <div className="flex gap-4">
            <a 
              href="#join" 
              className="bg-amber-500 text-black px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Start Today
            </a>
          </div>
        </div>

        {/* HERO BLOCK (Row 1-2, Col 1-2) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 bg-[#141414] rounded-[2rem] relative overflow-hidden group border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
            alt="Hercules Gym Workout"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            <div className="inline-block bg-amber-500/20 text-amber-500 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 self-start backdrop-blur-md">
              Kalaburagi's Premium Gym
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 drop-shadow-xl">
              Build Strength.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Transform Life.</span>
            </h1>
            <p className="text-lg text-neutral-300 font-medium max-w-sm leading-relaxed">
              Modern equipment, expert trainers, and personalized fitness programs for men and women.
            </p>
          </div>
        </div>

        {/* STATS BLOCK (Row 1, Col 3) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#141414] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border border-white/5 hover:border-amber-500/30 transition-colors">
          <div className="text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-md">
            4.9<span className="text-amber-500 text-5xl">★</span>
          </div>
          <div className="text-sm font-black uppercase tracking-widest text-amber-500 mb-1">Top Rated Gym</div>
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">90+ Reviews</div>
        </div>

        {/* TIMING BLOCK (Row 1/2, Col 4 on LG, Row 2 Col 3 on MD) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-gradient-to-br from-amber-600 to-amber-500 rounded-[2rem] p-8 flex flex-col justify-center text-black shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-20">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Hours</h3>
          <div className="relative z-10">
            <div className="font-black uppercase tracking-widest text-xs mb-1 opacity-80">Mon - Sat</div>
            <div className="font-bold mb-4 leading-tight">5:00 AM - 10:00 AM<br/>4:30 PM - 10:00 PM</div>
            <div className="font-black uppercase tracking-widest text-xs mb-1 opacity-80">Sunday</div>
            <div className="font-bold">5:00 AM - 10:00 AM</div>
          </div>
        </div>

        {/* ABOUT US BLOCK (Row 2, Col 3-4 on LG) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors" />
          <h2 className="text-xl font-black uppercase tracking-widest text-amber-500 mb-4 relative z-10">The Facility</h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium relative z-10">
            Hercules Fitness Centre Unisex is a premium gym offering strength training, cardio, weight loss, muscle gain, and personal training in a motivating, hygienic, and beginner-friendly environment. Members appreciate the quality equipment, supportive trainers, and disciplined atmosphere.
          </p>
        </div>

        {/* PROGRAMS BLOCK (Row 3, Full Width) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 bg-[#141414] rounded-[2rem] p-8 md:p-12 border border-white/5">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-2 bg-amber-500 rounded-full" /> Our Programs
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Strength Training", "Weight Loss Programs", "Muscle Gain Programs", 
              "Personal Training", "Cardio Training", "Functional Training", 
              "Cross Fitness", "General Fitness", "Women's Fitness", "Nutrition Guidance"
            ].map((program, i) => (
              <span key={i} className="px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-300 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/5 transition-all cursor-default">
                {program}
              </span>
            ))}
          </div>
        </div>

        {/* REVIEWS SUMMARY (Row 4, Col 1-2) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#1a1a1a] rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/5 flex flex-col justify-center">
          <div className="text-8xl text-amber-500/10 font-serif absolute -top-4 left-4 pointer-events-none">"</div>
          <h2 className="text-xl font-black uppercase tracking-widest text-amber-500 mb-6 relative z-10">Member Reviews</h2>
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-medium italic relative z-10">
            "Members consistently praise the knowledgeable trainers, well-maintained equipment, cleanliness, motivating atmosphere, and noticeable fitness results. Many reviews highlight the friendly coaching and supportive environment for beginners."
          </p>
        </div>

        {/* WHY CHOOSE US (Row 4, Col 3) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#141414] rounded-[2rem] p-8 border border-white/5 overflow-y-auto max-h-[350px] custom-scrollbar">
          <h2 className="text-xl font-black uppercase tracking-widest text-white mb-6 sticky top-0 bg-[#141414] pb-2">Why Us?</h2>
          <ul className="space-y-4">
            {[
              "4.9⭐ Rated Gym", "90+ Positive Reviews", "Certified Trainers", 
              "Modern Equipment", "Separate Guidance for Beginners", "Customized Workout Plans", 
              "Spacious Workout Area", "Hygienic Environment", "Friendly Atmosphere", "Affordable Memberships"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold tracking-wide text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* FACILITIES (Row 4, Col 4 on LG, Col 1-3 on MD) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 bg-[#141414] rounded-[2rem] overflow-hidden relative group border border-white/5 min-h-[350px]">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop" 
            alt="Gym Facilities"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-8 z-10">
            <h3 className="text-xl font-black uppercase tracking-widest text-amber-500 mb-4">Facilities</h3>
            <p className="text-sm text-neutral-300 font-bold leading-relaxed">
              Imported Gym Equipment • Cardio Zone • Free Weights • Strength Machines • Functional Training Area • Changing Room • Locker Facility • Drinking Water • Parking
            </p>
          </div>
        </div>

        {/* BENEFITS BLOCK */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 bg-[#141414] rounded-[2rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">
              Core <br/><span className="text-amber-500">Benefits</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "Weight Loss", "Muscle Gain", "Fat Burning", "Better Strength", 
              "Increased Stamina", "Improved Flexibility", "Healthy Lifestyle", 
              "Confidence Boost", "Stress Relief"
            ].map((benefit, i) => (
              <span key={i} className="px-4 py-2 bg-[#0a0a0a] rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-400">
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER CTA BLOCK */}
        <div id="join" className="col-span-1 md:col-span-3 lg:col-span-4 bg-amber-500 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 mt-4 text-black hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(245,158,11,0.2)]">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
              Ready To <br/>Transform?
            </h2>
            <p className="text-xl font-black uppercase tracking-widest opacity-80">
              Book a Free Gym Visit • Join Hercules Fitness
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-4">
            <a 
              href="tel:+919972998307" 
              className="bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xl hover:bg-neutral-800 hover:scale-105 transition-all text-center"
            >
              +91 99729 98307
            </a>
          </div>
        </div>

        {/* COPYRIGHT & ADDRESS */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 text-center mt-8 mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">
            Near Jagat Circle, New Jewargi Road, Kalaburagi, Karnataka 585102
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} Hercules Fitness Centre Unisex. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
