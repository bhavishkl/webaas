export const footerStyles = {
  wrapper: "border-t border-[var(--color-border)]",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8 py-12",
  brandCol: "space-y-4",
  brandName: "text-xl font-bold text-[var(--color-text)]",
  linksCol: "space-y-3",
  linksTitle: "text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4",
  link: "block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200",
  socialsCol: "space-y-3",
  socialRow: "flex gap-3",
  socialLink: "w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 transition-all duration-200",
  bottom: "border-t border-[var(--color-border)] py-6 text-center text-sm text-[var(--color-text-muted)]",
} as const;
