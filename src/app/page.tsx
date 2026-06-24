import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getClient, getAllClients } from "@/clients/registry";
import { getTemplate } from "@/industries/registry";
import { resolveTheme } from "@/theme";
import { BaseTemplate } from "@/templates/base-template";
import { DEV_MODE } from "@/config/env";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const tenantSlug = headersList.get("x-tenant-slug");
  
  if (tenantSlug) {
    const clientConfig = getClient(tenantSlug);
    if (clientConfig) {
      return {
        title: `${clientConfig.businessName} — ${clientConfig.tagline || ""}`,
        description: clientConfig.hero.description,
      };
    }
  }
  
  return {
    title: "WebAAS — Multi-Industry Website Platform",
    description: "Scalable multi-industry website agency platform.",
  };
}

export default async function RootPage() {
  const headersList = await headers();
  const tenantSlug = headersList.get("x-tenant-slug");

  // 1. TENANT MODE (Hostname Resolved)
  if (tenantSlug) {
    const clientConfig = getClient(tenantSlug);
    if (!clientConfig) {
      notFound();
    }

    const templateEntry = getTemplate(clientConfig.templateSlug);
    if (!templateEntry) {
      notFound();
    }

    const theme = resolveTheme(templateEntry.config, clientConfig);
    const { Template } = templateEntry;

    return (
      <BaseTemplate client={clientConfig} theme={theme}>
        <Template client={clientConfig} colors={theme.config.colors} />
      </BaseTemplate>
    );
  }

  // 2. DEV DASHBOARD MODE
  if (DEV_MODE) {
    const clients = getAllClients();

    return (
      <div className="min-h-screen bg-[#09090b] text-white">
        {/* Dev Dashboard Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dev Preview Dashboard
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              WebAAS Clients
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Simulate tenant resolution locally by adding host mappings in src/config/tenant.ts.
              <br />
              (This dashboard is disabled in production).
            </p>
          </div>
        </header>

        {/* Client Cards */}
        <main className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => {
              return (
                <div
                  key={client.slug}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Color indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: client.colors.primary }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: client.colors.secondary }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: client.colors.accent }}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                    {client.businessName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Template: {client.templateSlug}
                  </p>
                  {client.tagline && (
                    <p className="mt-1 text-sm text-gray-500">
                      {client.tagline}
                    </p>
                  )}
                  
                  <div className="mt-4 text-xs text-indigo-400">
                    Map a hostname to &quot;{client.slug}&quot; in tenant.ts to preview.
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  // 3. PRODUCTION FALLBACK
  notFound();
}
