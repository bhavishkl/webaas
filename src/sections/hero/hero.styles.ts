export const heroStyles = {
  overlay: "absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent",
  contentWrapper: "relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto",
  title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight",
  subtitle: "mt-4 text-lg sm:text-xl md:text-2xl text-white/80 font-light",
  description: "mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed",
  ctaWrapper: "mt-10 flex flex-col sm:flex-row gap-4",
} as const;
