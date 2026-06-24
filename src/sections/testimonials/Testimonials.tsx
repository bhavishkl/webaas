import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import type { TestimonialsProps } from "./testimonials.types";
import { testimonialsStyles as s } from "./testimonials.styles";

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className={s.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? s.starFilled : s.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <SectionWrapper id="testimonials" background="surface">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Testimonials</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="mt-4 text-[var(--color-text-muted)] text-lg">
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {content.testimonials.map((testimonial, i) => (
            <div key={i} className={s.card}>
              <StarRating rating={testimonial.rating} />
              <p className={s.quote}>&ldquo;{testimonial.content}&rdquo;</p>
              <div className={s.authorRow}>
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={s.avatar}
                  />
                ) : (
                  <div className={s.avatarPlaceholder}>
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className={s.authorName}>{testimonial.name}</div>
                  <div className={s.authorRole}>
                    {[testimonial.role, testimonial.company]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
