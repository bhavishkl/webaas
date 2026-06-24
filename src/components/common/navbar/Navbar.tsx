"use client";

import { useState } from "react";
import { cn } from "@/core/utils";
import { Container } from "@/components/ui/container";
import type { NavbarProps } from "./navbar.types";
import type { SectionName } from "@/core/types";

const defaultLabels: Record<SectionName, string> = {
  hero: "Home",
  about: "About",
  services: "Services",
  gallery: "Gallery",
  testimonials: "Testimonials",
  faq: "FAQ",
  contact: "Contact",
  cta: "CTA",
  footer: "Footer",
};

/** Sections that should appear as nav links (exclude hero, cta, footer) */
const navExclude: SectionName[] = ["hero", "cta", "footer"];

export function Navbar({
  businessName,
  logoUrl,
  logoAlt,
  sectionOrder,
  sectionLabels = {},
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = sectionOrder
    .filter((s) => !navExclude.includes(s))
    .map((s) => ({
      id: s,
      label: sectionLabels[s] || defaultLabels[s] || s,
    }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Business Name */}
          <a href="#hero" className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={logoAlt || businessName}
                className="h-8 w-8 object-contain"
              />
            )}
            <span className="text-xl font-bold text-[var(--color-text)] tracking-tight">
              {businessName}
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-surface)] transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-surface)] transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
