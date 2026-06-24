export const faqStyles = {
  accordion: "max-w-3xl mx-auto space-y-4",
  item: "rounded-2xl border border-[var(--color-border)] overflow-hidden transition-all duration-300",
  trigger: "w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-surface)] transition-colors duration-200 cursor-pointer",
  question: "text-lg font-semibold text-[var(--color-text)] pr-4",
  chevron: "w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 shrink-0",
  answer: "px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed",
} as const;
