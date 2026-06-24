import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TENANT_MAP } from './config/tenant';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Let Next.js specific and static files pass through without rewriting
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.includes('/api/') ||
    url.pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  const DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === "true";

  // Check if hostname maps to a tenant
  const tenantSlug = TENANT_MAP[hostname];

  if (tenantSlug) {
    // Add custom header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tenant-slug', tenantSlug);
    
    // We rewrite everything to root (/) but with the header injected
    return NextResponse.rewrite(new URL('/', request.url), {
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (DEV_MODE) {
    // In dev mode without a tenant, let it fall through to the dashboard on /
    return NextResponse.next();
  } else {
    // In production without a tenant, we 404
    return NextResponse.rewrite(new URL('/404', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
