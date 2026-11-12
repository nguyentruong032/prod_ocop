import type { Metadata, Viewport } from 'next';
import { Providers } from '@/components/Providers';
import { Header, Footer } from '@ocop/ui';
import { FontLoader } from '@/components/FontLoader';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3002'),
  title: {
    default: 'Điểm đến & Du lịch OCOP – Hành trình trải nghiệm bản sắc',
    template: '%s | Điểm đến & Du lịch OCOP',
  },
  description:
    'Khám phá các làng nghề truyền thống, tuyến du lịch sinh thái nông thôn và bản đồ phân bố sản phẩm OCOP khắp Việt Nam.',
  keywords: ['OCOP', 'Điểm đến du lịch', 'Làng nghề truyền thống', 'Du lịch sinh thái', 'Bản đồ OCOP'],
  authors: [{ name: 'OCOP Vietnam' }],
  creator: 'OCOP Vietnam',
  publisher: 'OCOP Vietnam',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ocop.vn/diem-den-du-lich',
    siteName: 'Điểm đến & Du lịch OCOP',
    title: 'Điểm đến & Du lịch OCOP – Hành trình trải nghiệm bản sắc',
    description:
      'Khám phá các làng nghề truyền thống, tuyến du lịch sinh thái nông thôn và bản đồ phân bố sản phẩm OCOP khắp Việt Nam.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Điểm đến du lịch OCOP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Điểm đến & Du lịch OCOP – Hành trình trải nghiệm bản sắc',
    description:
      'Khám phá các làng nghề truyền thống, tuyến du lịch sinh thái nông thôn và bản đồ phân bố sản phẩm OCOP khắp Việt Nam.',
    images: ['/images/og-default.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f9ff' },
    { media: '(prefers-color-scheme: dark)', color: '#121c2c' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1 w-full" id="main-content">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
