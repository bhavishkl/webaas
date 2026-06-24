export const servicesStyles = {
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "group relative p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
  iconWrapper: "w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300",
  title: "text-xl font-bold text-[var(--color-text)] mb-3",
  description: "text-[var(--color-text-muted)] leading-relaxed",
  price: "mt-4 text-lg font-bold text-[var(--color-primary)]",
} as const;
