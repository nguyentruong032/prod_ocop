import { commonProductionConfig, createCommonHeaders } from '../../packages/tsconfig/next-common.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...commonProductionConfig,
  reactStrictMode: true,
  compress: true,

  // Multi-Zones rewrites for micro-frontend architecture
  async rewrites() {
    // Products micro-frontend rewrites are ALWAYS enabled (not gated by ENABLE_MICROFRONTENDS)
    // This allows /san-pham-ocop/* to work independently
    const productsRewrites = [
      // Products micro-frontend
      {
        source: '/san-pham-ocop',
        destination: 'http://localhost:3004/san-pham-ocop',
      },
      {
        source: '/san-pham-ocop/:path*',
        destination: 'http://localhost:3004/san-pham-ocop/:path*',
      },
      // THÊM DÒNG QUAN TRỌNG NÀY ĐỂ CHUYỂN TIẾP CÁC FILE JS/CSS CHUNKS SANG PORT 3004:
      {
        source: '/products-static/_next/:path*',
        destination: 'http://localhost:3004/products-static/_next/:path*',
      },
    ];

    // News & Events micro-frontend rewrites are ALWAYS enabled (not gated by ENABLE_MICROFRONTENDS)
    // This allows /tin-tuc-su-kien/* to work independently
    const newsEventsRewrites = [
      // News & Events micro-frontend (port 3003)
      {
        source: '/tin-tuc-su-kien',
        destination: 'http://localhost:3003/',
      },
      {
        source: '/tin-tuc-su-kien/:path*',
        destination: 'http://localhost:3003/:path*',
      },
      // OCOP Integration (port 3003)
      {
        source: '/ocop-hoi-nhap',
        destination: 'http://localhost:3003/ocop-hoi-nhap',
      },
      {
        source: '/ocop-hoi-nhap/:path*',
        destination: 'http://localhost:3003/ocop-hoi-nhap/:path*',
      },
      // Static assets for News & Events (assetPrefix: /news-static)
      {
        source: '/news-static/_next/:path*',
        destination: 'http://localhost:3003/news-static/_next/:path*',
      },
    ];

    // OCOP Stories micro-frontend rewrites are ALWAYS enabled (not gated by ENABLE_MICROFRONTENDS)
    // This allows /cau-chuyen-ocop/* to work independently
    const ocopStoriesRewrites = [
      // OCOP Stories micro-frontend (port 3001)
      {
        source: '/cau-chuyen-ocop',
        destination: 'http://localhost:3001/cau-chuyen-ocop',
      },
      {
        source: '/cau-chuyen-ocop/:path*',
        destination: 'http://localhost:3001/cau-chuyen-ocop/:path*',
      },
      // Static assets for OCOP Stories (assetPrefix: /stories-static)
      {
        source: '/stories-static/_next/:path*',
        destination: 'http://localhost:3001/stories-static/_next/:path*',
      },
    ];

    // Tourism Destinations micro-frontend rewrites are ALWAYS enabled (not gated by ENABLE_MICROFRONTENDS)
    // This allows /diem-den-du-lich/* to work independently
    const tourismDestinationsRewrites = [
      // Tourism Destinations micro-frontend (port 3002)
      {
        source: '/diem-den-du-lich',
        destination: 'http://localhost:3002/diem-den-du-lich',
      },
      {
        source: '/diem-den-du-lich/:path*',
        destination: 'http://localhost:3002/diem-den-du-lich/:path*',
      },
      // Static assets for Tourism Destinations (assetPrefix: /destinations-static)
      {
        source: '/destinations-static/_next/:path*',
        destination: 'http://localhost:3002/destinations-static/_next/:path*',
      },
    ];

    // Only enable other micro-frontend rewrites when ENABLE_MICROFRONTENDS is true
    // This prevents ECONNREFUSED errors when running web-shell standalone
    if (process.env.ENABLE_MICROFRONTENDS === 'true') {
      return [
        // Registration micro-frontend
        {
          source: '/gui-bai-ho-so-ocop/:path*',
          destination: 'http://localhost:3005/gui-bai-ho-so-ocop/:path*',
        },
        // Integration - could be separate or in news
        {
          source: '/ocop-hoi-nhap/:path*',
          destination: 'http://localhost:3003/ocop-hoi-nhap/:path*',
        },
        // API Gateway proxy
        {
          source: '/api/:path*',
          destination: 'http://localhost:3006/api/:path*',
        },
        // Include products rewrites
        ...productsRewrites,
        // Include news-events rewrites
        ...newsEventsRewrites,
        // Include OCOP Stories rewrites
        ...ocopStoriesRewrites,
        // Include Tourism Destinations rewrites
        ...tourismDestinationsRewrites,
      ];
    }
    // Return only products, news-events, OCOP Stories, and Tourism Destinations rewrites when ENABLE_MICROFRONTENDS is not true
    return [
      ...productsRewrites,
      ...newsEventsRewrites,
      ...ocopStoriesRewrites,
      ...tourismDestinationsRewrites,
    ];
  },

  // Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.gstatic.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for security and performance
  async headers() {
    return createCommonHeaders({ isChildApp: false });
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['@ocop/ui', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Output configuration for Docker/standalone deployment
  output: 'standalone',
};

export default nextConfig;