import { Button } from "@/components/ui/button";
import type { HeroProps } from "./hero.types";
import { heroStyles as s } from "./hero.styles";

export function Hero({ content, businessName }: HeroProps) {
  const bgImage = content.backgroundImage
    ? { backgroundImage: `url(${content.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))` };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={bgImage}
    >
      {/* Overlay */}
      <div
        className={s.overlay}
        style={{ opacity: content.overlayOpacity ?? 0.6 }}
      />

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-accent)]/15 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className={s.contentWrapper}>
        <h1 className={s.title}>
          {content.title || businessName}
        </h1>

        {content.subtitle && (
          <p className={s.subtitle}>{content.subtitle}</p>
        )}

        {content.description && (
          <p className={s.description}>{content.description}</p>
        )}

        <div className={s.ctaWrapper}>
          <Button variant="primary" size="lg" href={content.ctaLink}>
            {content.ctaText}
          </Button>
          {content.secondaryCtaText && (
            <Button variant="outline" size="lg" href={content.secondaryCtaLink}>
              {content.secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
