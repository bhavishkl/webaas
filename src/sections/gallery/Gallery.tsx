import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import type { GalleryProps } from "./gallery.types";
import { galleryStyles as s } from "./gallery.styles";

export function Gallery({ content }: GalleryProps) {
  return (
    <SectionWrapper id="gallery" background="default">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Gallery</Badge>
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
          {content.images.map((image, i) => (
            <div key={i} className={s.item}>
              <img src={image.src} alt={image.alt} className={s.image} />
              <div className={s.overlay}>
                <p className={s.caption}>{image.caption || image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
