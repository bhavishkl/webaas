import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import type { ServicesProps } from "./services.types";
import { servicesStyles as s } from "./services.styles";

export function Services({ content, sectionLabel }: ServicesProps) {
  return (
    <SectionWrapper id="services" background="surface">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>{sectionLabel || "Services"}</Badge>
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
          {content.services.map((service, i) => (
            <div key={i} className={s.card}>
              {service.image ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className={s.iconWrapper}>
                  <span className="text-2xl">{service.icon || "⚡"}</span>
                </div>
              )}
              <h3 className={s.title}>{service.title}</h3>
              <p className={s.description}>{service.description}</p>
              {service.price && <p className={s.price}>{service.price}</p>}
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
