import fs from "fs";
import path from "path";

function getClientSlugs(): string[] {
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

const map: Record<string, string> = {};

// Map all slugs to their .vercel.app domain
getClientSlugs().forEach(slug => {
  map[`${slug}glb.vercel.app`] = slug;
});

export const TENANT_MAP: Record<string, string> = map;
