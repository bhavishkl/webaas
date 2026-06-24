import type { ClientConfig } from "@/core/types";

import { abcGymConfig } from "./abcgym";
import { powerGymConfig } from "./powergym";
import { fitzoneConfig } from "./fitzone";
import { spiceHubConfig } from "./spicehub";
import { royalFoodsConfig } from "./royalfoods";

const clients: Record<string, ClientConfig> = {
  abcgym: abcGymConfig,
  powergym: powerGymConfig,
  fitzone: fitzoneConfig,
  spicehub: spiceHubConfig,
  royalfoods: royalFoodsConfig,
};

export function getClient(slug: string): ClientConfig | undefined {
  return clients[slug];
}

export function getAllClients(): ClientConfig[] {
  return Object.values(clients);
}

export function getAllClientSlugs(): string[] {
  return Object.keys(clients);
}
