import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { CTAProps } from "./cta.types";
import { ctaStyles as s } from "./cta.styles";

export function CTA({ content }: CTAProps) {
  return (
    <SectionWrapper id="cta" background="none" padding="lg">
      <Container>
        <div className={s.wrapper}>
          {/* Gradient Background */}
          <div className={s.bg} />
          <div className={s.glow} />
          <div className={s.glow2} />

          {/* Content */}
          <div className={s.content}>
            <h2 className={s.title}>{content.title}</h2>
            <p className={s.description}>{content.description}</p>
            <div className={s.buttons}>
              <Button
                variant="secondary"
                size="lg"
                href={content.buttonLink}
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                {content.buttonText}
              </Button>
              {content.secondaryButtonText && (
                <Button
                  variant="outline"
                  size="lg"
                  href={content.secondaryButtonLink}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {content.secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
