import { renderSection } from "@/sections/registry";
import type { SectionRendererProps } from "./section-renderer.types";

/**
 * SectionRenderer takes a section order array and client config,
 * then renders the corresponding sections in sequence.
 */
export function SectionRenderer({
  client,
  colors,
  sectionOrder,
  sectionLabels,
}: SectionRendererProps) {
  return (
    <>
      {sectionOrder.map((section) =>
        renderSection(section, { client, colors, sectionLabels })
      )}
    </>
  );
}
