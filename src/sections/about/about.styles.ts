export const aboutStyles = {
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
  imageWrapper: "relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl",
  image: "w-full h-full object-cover",
  statsGrid: "grid grid-cols-2 gap-6 mt-8",
  statCard: "p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center",
  statValue: "text-3xl font-bold text-[var(--color-primary)]",
  statLabel: "text-sm text-[var(--color-text-muted)] mt-1",
} as const;
