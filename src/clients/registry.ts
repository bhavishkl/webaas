import fs from "fs";
import path from "path";
import type { ClientConfig } from "@/core/types";

export function getAllClientSlugs(): string[] {
  try {
    const clientsDir = path.join(process.cwd(), "src", "clients");
    const files = fs.readdirSync(clientsDir);
    return files
      .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
      .map((file) => file.replace(/\.tsx?$/, ""))
      .filter((slug) => slug !== "index" && slug !== "registry");
  } catch (e) {
    return [];
  }
}

export async function getClient(slug: string): Promise<ClientConfig | undefined> {
  const slugs = getAllClientSlugs();
  if (!slugs.includes(slug)) return undefined;

  try {
    const mod = await import(`@/clients/${slug}`);

    // If it has a standard config export (e.g. abcGymConfig)
    const config = Object.values(mod).find(
      (v: any) => v && typeof v === "object" && v.slug === slug
    );
    
    if (config) {
      return config as ClientConfig;
    }

    // Otherwise, assume it's a completely hardcoded TSX standalone page
    // Look for a default export or any exported function component
    const CustomTemplate = mod.default || Object.values(mod).find(v => typeof v === 'function');
    if (CustomTemplate) {
      return {
        slug,
        businessName: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        colors: { primary: "#000", secondary: "#000", accent: "#000", background: "#000", surface: "#000", text: "#fff", textMuted: "#ccc", border: "#333" },
        hero: { title: "", subtitle: "", description: "", ctaText: "", ctaLink: "" },
        about: { title: "", description: "" },
        services: { title: "", services: [] },
        gallery: { title: "", images: [] },
        testimonials: { title: "", testimonials: [] },
        faq: { title: "", faqs: [] },
        contact: { title: "" },
        cta: { title: "", description: "", buttonText: "", buttonLink: "" },
        footer: {},
        sectionOrder: [],
        CustomTemplate,
        metadata: mod.metadata
      } as unknown as ClientConfig;
    }
  } catch (e) {
    console.error(`Error loading client ${slug}:`, e);
  }

  return undefined;
}

export async function getAllClients(): Promise<ClientConfig[]> {
  const slugs = getAllClientSlugs();
  const clients = await Promise.all(slugs.map(slug => getClient(slug)));
  return clients.filter(Boolean) as ClientConfig[];
}
