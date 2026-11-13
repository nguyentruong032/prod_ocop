import type { Metadata, Viewport } from 'next';
import { Providers, Header, Footer, FontLoader } from '@ocop/ui';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sản phẩm OCOP - Trang chủ',
    template: '%s | Sản phẩm OCOP',
  },
  description: 'Khám phá các sản phẩm OCOP tiêu biểu từ các tỉnh thành trên khắp Việt Nam',
  keywords: ['OCOP', 'sản phẩm OCOP', 'một commune một sản phẩm', 'nông sản', 'du lịch'],
  authors: [{ name: 'OCOP Vietnam' }],
  creator: 'OCOP Vietnam',
  publisher: 'OCOP Vietnam',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ocopvietnam.vn/san-pham-ocop',
    siteName: 'Sản phẩm OCOP',
    title: 'Sản phẩm OCOP - Trang chủ',
    description: 'Khám phá các sản phẩm OCOP tiêu biểu từ các tỉnh thành trên khắp Việt Nam',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Sản phẩm OCOP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sản phẩm OCOP - Trang chủ',
    description: 'Khám phá các sản phẩm OCOP tiêu biểu từ các tỉnh thành trên khắp Việt Nam',
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
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
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