"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/core/utils";
import type { FAQProps } from "./faq.types";
import { faqStyles as s } from "./faq.styles";

export function FAQ({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" background="default">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="mt-4 text-[var(--color-text-muted)] text-lg">
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Accordion */}
        <div className={s.accordion}>
          {content.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(s.item, isOpen && "border-[var(--color-primary)]/50 shadow-lg")}
              >
                <button
                  className={s.trigger}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={s.question}>{faq.question}</span>
                  <svg
                    className={cn(s.chevron, isOpen && "rotate-180")}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={s.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
