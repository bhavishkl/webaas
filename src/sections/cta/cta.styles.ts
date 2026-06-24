export const ctaStyles = {
  wrapper: "relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center",
  bg: "absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]",
  glow: "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl",
  glow2: "absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/5 blur-3xl",
  content: "relative z-10",
  title: "text-3xl sm:text-4xl font-bold text-white mb-4",
  description: "text-lg text-white/80 max-w-2xl mx-auto mb-8",
  buttons: "flex flex-col sm:flex-row gap-4 justify-center",
} as const;
