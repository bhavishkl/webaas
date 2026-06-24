export const contactStyles = {
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
  infoCard: "p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]",
  infoItem: "flex items-start gap-4 py-4",
  infoIcon: "w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0",
  infoLabel: "text-sm text-[var(--color-text-muted)] mb-1",
  infoValue: "text-[var(--color-text)] font-medium",
  formCard: "p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]",
  input: "w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all duration-200",
  textarea: "w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all duration-200 min-h-[120px] resize-none",
} as const;
