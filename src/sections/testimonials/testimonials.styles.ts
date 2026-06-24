export const testimonialsStyles = {
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "p-8 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow duration-300",
  stars: "flex gap-1 mb-4",
  starFilled: "text-amber-400",
  starEmpty: "text-gray-300",
  quote: "text-[var(--color-text-muted)] leading-relaxed italic mb-6",
  authorRow: "flex items-center gap-4",
  avatar: "w-12 h-12 rounded-full object-cover ring-2 ring-[var(--color-primary)]/20",
  avatarPlaceholder: "w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold text-lg",
  authorName: "font-semibold text-[var(--color-text)]",
  authorRole: "text-sm text-[var(--color-text-muted)]",
} as const;
