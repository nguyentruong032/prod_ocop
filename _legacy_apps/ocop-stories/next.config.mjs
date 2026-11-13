import { commonProductionConfig, createCommonHeaders } from '../../packages/tsconfig/next-common.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...commonProductionConfig,
  reactStrictMode: true,
  compress: true,

  // OCOP Stories micro-frontend runs on port 3001
  // assetPrefix ensures chunk/script URLs are absolute
  // so they load correctly when accessed via web-shell rewrite (port 3000)
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/stories-static',

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
    return createCommonHeaders({ staticPrefix: '/stories-static', isChildApp: true });
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
