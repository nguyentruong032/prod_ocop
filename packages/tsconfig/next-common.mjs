// Production next.js common configuration for @ocop monorepo
/** @type {import('next').NextConfig} */

export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)',
  },
  {
    key: 'Content-Security-Policy-Report-Only',
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'" +
      (process.env.NODE_ENV !== 'production' ? " 'unsafe-eval'" : "") +
      "; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://lh3.googleusercontent.com https://images.unsplash.com; media-src 'self' data: blob:; frame-src 'self' https://www.youtube.com https://player.vimeo.com https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';",
  },
];

export async function createCommonHeaders({ staticPrefix = '', isChildApp = false } = {}) {
  const headersList = [];

  // Security headers on /:path*
  // Next.js rewrites in web-shell proxy upstream responses directly without applying web-shell's own headers().
  // Therefore, child apps MUST include securityHeaders on /:path* so rewritten routes receive security headers.
  headersList.push({
    source: '/:path*',
    headers: securityHeaders,
  });

  // Cache-Control for immutable Next.js static assets (31536000s = 1 year)
  headersList.push({
    source: '/_next/static/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],
  });

  if (staticPrefix) {
    const cleanPrefix = staticPrefix.replace(/^\/+|\/+$/g, '');
    headersList.push({
      source: `/${cleanPrefix}/_next/static/:path*`,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    });
  }

  // Cache-Control for fonts and images
  headersList.push(
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=604800',
        },
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=604800',
        },
      ],
    }
  );

  return headersList;
}

export const commonProductionConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
};
