// =============================================================================
// Section Registry — maps section names to their components
// =============================================================================

import type { SectionName, ClientConfig, ThemeColors, SectionLabels } from "@/core/types";
import { Hero } from "./hero";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { FAQ } from "./faq";
import { Contact } from "./contact";
import { CTA } from "./cta";
import { Footer } from "./footer";

export interface SectionRendererConfig {
  client: ClientConfig;
  colors: ThemeColors;
  sectionLabels?: SectionLabels;
}

/**
 * Render a single section by name, pulling data from client config.
 */
export function renderSection(
  section: SectionName,
  config: SectionRendererConfig
): React.ReactNode {
  const { client, colors, sectionLabels } = config;

  switch (section) {
    case "hero":
      return <Hero key="hero" content={client.hero} colors={colors} businessName={client.businessName} />;
    case "about":
      return <About key="about" content={client.about} colors={colors} />;
    case "services":
      return (
        <Services
          key="services"
          content={client.services}
          colors={colors}
          sectionLabel={sectionLabels?.services}
        />
      );
    case "gallery":
      return <Gallery key="gallery" content={client.gallery} colors={colors} />;
    case "testimonials":
      return <Testimonials key="testimonials" content={client.testimonials} colors={colors} />;
    case "faq":
      return <FAQ key="faq" content={client.faq} colors={colors} />;
    case "contact":
      return <Contact key="contact" content={client.contact} colors={colors} businessName={client.businessName} />;
    case "cta":
      return <CTA key="cta" content={client.cta} colors={colors} />;
    case "footer":
      return <Footer key="footer" content={client.footer} colors={colors} businessName={client.businessName} />;
    default:
      return null;
  }
}
