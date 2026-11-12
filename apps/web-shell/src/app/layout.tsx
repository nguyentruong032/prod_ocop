import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header, Footer } from '@ocop/ui';
import { FontLoader } from '@/components/FontLoader';

// Viewport configuration
export const viewport: Viewport = {
  themeColor: '#012d1d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Default metadata for the entire site
export const metadata: Metadata = {
  title: {
    default: 'OCOP Việt Nam - Tạp chí tri thức bản địa & di sản nông thôn',
    template: '%s | OCOP Việt Nam',
  },
  description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
  keywords: [
    'OCOP',
    'Việt Nam',
    'sản phẩm OCOP',
    'du lịch nông thôn',
    'văn hóa bản địa',
    'di sản nông thôn',
    'người giữ nghề',
    'hội nhập quốc tế',
  ],
  authors: [{ name: 'OCOP Việt Nam' }],
  creator: 'OCOP Việt Nam',
  publisher: 'OCOP Việt Nam',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ocopvietnam.vn',
    siteName: 'OCOP Việt Nam',
    title: 'OCOP Việt Nam - Tạp chí tri thức bản địa & di sản nông thôn',
    description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'OCOP Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ocopvietnam',
    creator: '@ocopvietnam',
    title: 'OCOP Việt Nam - Tạp chí tri thức bản địa & di sản nông thôn',
    description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
    images: ['/images/twitter-default.jpg'],
  },
  alternates: {
    canonical: 'https://ocopvietnam.vn',
    languages: {
      'vi-VN': 'https://ocopvietnam.vn',
      'en-US': 'https://ocopvietnam.vn/en/',
    },
  },
  other: {
    'theme-color': '#012d1d',
    'color-scheme': 'light',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <FontLoader />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for faster navigation */}
        <link rel="dns-prefetch" href="https://ocopvietnam.vn" />
        
        {/* Viewport and theme color */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#012d1d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f0f1a" media="(prefers-color-scheme: dark)" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-text-primary antialiased">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-surface-elevated"
          >
            Bỏ qua nội dung chính
          </a>
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}