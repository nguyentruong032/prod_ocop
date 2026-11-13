import type { Metadata, Viewport } from 'next';
import { Providers, Header, Footer, FontLoader } from '@ocop/ui';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tin tức & Sự kiện OCOP - Cập nhật mới nhất về sản phẩm, chính sách, hội chợ',
    template: '%s | Tin tức & Sự kiện OCOP Việt Nam',
  },
  description: 'Cổng thông tin chính thức về Tin tức và Sự kiện OCOP Việt Nam. Cập nhật chính sách mới, báo cáo thị trường, hội chợ, triển lãm, workshop xuất khẩu và đào tạo chủ thể OCOP.',
  keywords: [
    'tin tức OCOP', 'sự kiện OCOP', 'hội chợ OCOP', 'triển lãm OCOP',
    'chính sách OCOP', 'thị trường OCOP', 'xuất khẩu OCOP', 'workshop OCOP',
    'đăng ký OCOP', 'chương trình OCOP', 'mỗi xã một sản phẩm'
  ],
  authors: [{ name: 'Bộ Công Thương - Cục Thị trường trong nước' }],
  creator: 'OCOP Việt Nam',
  publisher: 'OCOP Việt Nam',
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/tin-tuc-su-kien',
    siteName: 'OCOP Việt Nam',
    title: 'Tin tức & Sự kiện OCOP Việt Nam',
    description: 'Cập nhật mới nhất: chính sách, thị trường, hội chợ, triển lãm, workshop xuất khẩu OCOP.',
    images: [
      {
        url: '/images/og/tin-tuc-su-kien-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Tin tức & Sự kiện OCOP Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin tức & Sự kiện OCOP Việt Nam',
    description: 'Cập nhật mới nhất: chính sách, thị trường, hội chợ, triển lãm, workshop xuất khẩu OCOP.',
    images: ['/images/og/tin-tuc-su-kien-og.jpg'],
    creator: '@ocopvietnam',
  },
  alternates: {
    canonical: '/tin-tuc-su-kien',
    types: {
      'application/rss+xml': '/tin-tuc-su-kien/rss.xml',
      'application/atom+xml': '/tin-tuc-su-kien/atom.xml',
    },
  },
  other: {
    'article:author': 'OCOP Việt Nam',
    'article:publisher': 'OCOP Việt Nam',
    'article:section': 'Tin tức & Sự kiện',
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