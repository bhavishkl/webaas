"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ContactProps } from "./contact.types";
import { contactStyles as s } from "./contact.styles";

export function Contact({ content, businessName }: ContactProps) {
  return (
    <SectionWrapper id="contact" background="surface">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Contact</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="mt-4 text-[var(--color-text-muted)] text-lg">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className={s.grid}>
          {/* Contact Info */}
          <div className={s.infoCard}>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
              Get in Touch with {businessName}
            </h3>

            {content.address && (
              <div className={s.infoItem}>
                <div className={s.infoIcon}><span className="text-lg">📍</span></div>
                <div>
                  <div className={s.infoLabel}>Address</div>
                  <div className={s.infoValue}>{content.address}</div>
                </div>
              </div>
            )}

            {content.phone && (
              <div className={s.infoItem}>
                <div className={s.infoIcon}><span className="text-lg">📞</span></div>
                <div>
                  <div className={s.infoLabel}>Phone</div>
                  <div className={s.infoValue}>{content.phone}</div>
                </div>
              </div>
            )}

            {content.email && (
              <div className={s.infoItem}>
                <div className={s.infoIcon}><span className="text-lg">✉️</span></div>
                <div>
                  <div className={s.infoLabel}>Email</div>
                  <div className={s.infoValue}>{content.email}</div>
                </div>
              </div>
            )}

            {content.hours && (
              <div className={s.infoItem}>
                <div className={s.infoIcon}><span className="text-lg">🕐</span></div>
                <div>
                  <div className={s.infoLabel}>Hours</div>
                  <div className={s.infoValue}>{content.hours}</div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form (Visual only — no backend) */}
          <div className={s.formCard}>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className={s.input} />
                <input type="email" placeholder="Your Email" className={s.input} />
              </div>
              <input type="text" placeholder="Subject" className={s.input} />
              <textarea placeholder="Your Message" className={s.textarea} />
              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
