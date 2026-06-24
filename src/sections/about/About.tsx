import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import type { AboutProps } from "./about.types";
import { aboutStyles as s } from "./about.styles";

export function About({ content }: AboutProps) {
  return (
    <SectionWrapper id="about" background="default">
      <Container>
        <div className={s.grid}>
          {/* Image */}
          {content.image && (
            <div className={s.imageWrapper}>
              <img src={content.image} alt={content.title} className={s.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div>
            <Badge>About Us</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="mt-2 text-lg text-[var(--color-primary)] font-medium">
                {content.subtitle}
              </p>
            )}
            <p className="mt-6 text-[var(--color-text-muted)] leading-relaxed text-lg">
              {content.description}
            </p>

            {/* Stats */}
            {content.stats && content.stats.length > 0 && (
              <div className={s.statsGrid}>
                {content.stats.map((stat, i) => (
                  <div key={i} className={s.statCard}>
                    <div className={s.statValue}>{stat.value}</div>
                    <div className={s.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
