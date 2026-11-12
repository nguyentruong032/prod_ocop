import type { Metadata, Viewport } from 'next';
import { Providers } from '@/components/Providers';
import { Header, Footer } from '@ocop/ui';
import { FontLoader } from '@/components/FontLoader';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: {
    default: 'Câu chuyện OCOP – Hồn sản phẩm',
    template: '%s | Câu chuyện OCOP',
  },
  description: 'Đi sâu vào phần hồn của mỗi sản phẩm: hành trình khởi nghiệp của các chủ thể, văn hóa bản địa và những thước phim tài liệu sống động.',
  keywords: ['OCOP', 'câu chuyện OCOP', 'chủ thể OCOP', 'văn hóa bản địa', 'phóng sự đa phương tiện'],
  authors: [{ name: 'OCOP Vietnam' }],
  creator: 'OCOP Vietnam',
  publisher: 'OCOP Vietnam',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ocop.vn/cau-chuyen-ocop',
    siteName: 'Câu chuyện OCOP',
    title: 'Câu chuyện OCOP – Hồn sản phẩm',
    description: 'Đi sâu vào phần hồn của mỗi sản phẩm: hành trình khởi nghiệp của các chủ thể, văn hóa bản địa và những thước phim tài liệu sống động.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Câu chuyện OCOP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Câu chuyện OCOP – Hồn sản phẩm',
    description: 'Đi sâu vào phần hồn của mỗi sản phẩm: hành trình khởi nghiệp của các chủ thể, văn hóa bản địa và những thước phim tài liệu sống động.',
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
