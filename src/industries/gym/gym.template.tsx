import type { ClientConfig, ThemeColors, SectionLabels } from "@/core/types";
import { Navbar } from "@/components/common/navbar";
import { renderSection } from "@/sections/registry";
import { gymConfig } from "./gym.config";

interface GymTemplateProps {
  client: ClientConfig;
  colors: ThemeColors;
}

export function GymTemplate({ client, colors }: GymTemplateProps) {
  const sectionOrder = gymConfig.sectionOrder;
  const sectionLabels: SectionLabels = {
    ...gymConfig.sectionLabels,
  };

  return (
    <>
      <Navbar
        businessName={client.businessName}
        logoUrl={client.logo?.url}
        logoAlt={client.logo?.alt}
        sectionOrder={sectionOrder}
        sectionLabels={sectionLabels}
      />
      <main className="pt-0">
        {sectionOrder.map((section) =>
          renderSection(section, { client, colors, sectionLabels })
        )}
      </main>
    </>
  );
}
