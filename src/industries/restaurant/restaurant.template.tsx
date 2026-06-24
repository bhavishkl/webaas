import type { ClientConfig, ThemeColors, SectionLabels } from "@/core/types";
import { Navbar } from "@/components/common/navbar";
import { renderSection } from "@/sections/registry";
import { restaurantConfig } from "./restaurant.config";

interface RestaurantTemplateProps {
  client: ClientConfig;
  colors: ThemeColors;
}

export function RestaurantTemplate({ client, colors }: RestaurantTemplateProps) {
  const sectionOrder = restaurantConfig.sectionOrder;
  const sectionLabels: SectionLabels = {
    ...restaurantConfig.sectionLabels,
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
