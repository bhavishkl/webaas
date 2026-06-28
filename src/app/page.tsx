import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getClient, getAllClients } from "@/clients/registry";
import { Navbar } from "@/components/common/navbar";
import { renderSection } from "@/sections/registry";
import { resolveTheme } from "@/theme";
import { BaseTemplate } from "@/templates/base-template";
import { DEV_MODE } from "@/config/env";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ client?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const headersList = await headers();
  const tenantSlug = headersList.get("x-tenant-slug");
  const params = await searchParams;

  const slug = tenantSlug || (DEV_MODE ? params.client : undefined);

  if (slug) {
    const clientConfig = await getClient(slug);
    if (clientConfig) {
      // Allow the component to export its own metadata
      if ((clientConfig as any).metadata) {
        return (clientConfig as any).metadata;
      }
      return {
        title: `${clientConfig.businessName} — ${clientConfig.tagline || ""}`,
        description: clientConfig.hero.description || `Welcome to ${clientConfig.businessName}`,
      };
    }
  }
  
  return {
    title: "WebAAS — Multi-Industry Website Platform",
    description: "Scalable multi-industry website agency platform.",
  };
}

export default async function RootPage({ searchParams }: PageProps) {
  const headersList = await headers();
  const tenantSlug = headersList.get("x-tenant-slug");
  const params = await searchParams;

  // 1. TENANT MODE (Hostname Resolved) or QUERY PARAM MODE (Dev Preview)
  const activeSlug = tenantSlug || (DEV_MODE ? params.client : undefined);

  if (activeSlug) {
    const clientConfig = await getClient(activeSlug);
    if (!clientConfig) {
      notFound();
    }

    const theme = resolveTheme(clientConfig);
    const CustomTemplate = clientConfig.CustomTemplate;

    return (
      <BaseTemplate client={clientConfig} theme={theme}>
        {CustomTemplate ? (
          <CustomTemplate client={clientConfig} colors={theme.config.colors} />
        ) : (
          <>
            <Navbar
              businessName={clientConfig.businessName}
              logoUrl={clientConfig.logo?.url}
              logoAlt={clientConfig.logo?.alt}
              sectionOrder={clientConfig.sectionOrder}
              sectionLabels={clientConfig.sectionLabels || {}}
            />
            <main className="pt-0">
              {clientConfig.sectionOrder.map((section) =>
                renderSection(section, { 
                  client: clientConfig, 
                  colors: theme.config.colors, 
                  sectionLabels: clientConfig.sectionLabels || {} 
                })
              )}
            </main>
          </>
        )}
      </BaseTemplate>
    );
  }

  // 2. DEV DASHBOARD MODE
  if (DEV_MODE) {
    const clients = await getAllClients();

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
              Click any client card below to preview their website.
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
                <Link
                  key={client.slug}
                  href={`/?client=${client.slug}`}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 block"
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
                    Template: {client.CustomTemplate ? "Custom" : "Standard"}
                  </p>
                  {client.tagline && (
                    <p className="mt-1 text-sm text-gray-500">
                      {client.tagline}
                    </p>
                  )}
                  
                  <div className="mt-4 text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Click to preview →
                  </div>
                </Link>
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
