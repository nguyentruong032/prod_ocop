/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    loader: 'custom',
    loaderFile: './src/lib/media-loader.ts',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vi',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
