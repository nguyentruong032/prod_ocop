import { Be_Vietnam_Pro, Noto_Serif } from 'next/font/google';
import './globals.css';

/* ─── next/font with CSS variable export ─── */
/* Subset: vietnamese + latin | Weights: 400/500/600/700 + italic 400 */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--nf-be-vietnam-pro',
  fallback: ['system-ui', 'sans-serif'],
});

/* Subset: vietnamese + latin | Weights: 400/600/700 + italic 400 */
const notoSerif = Noto_Serif({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--nf-noto-serif',
  fallback: ['Georgia', 'serif'],
});

export const metadata = {
  title: 'OCOP Việt Nam Điện tử',
  description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'OCOP Việt Nam Điện tử',
    description: 'Chuyên trang thông tin điện tử giới thiệu sản phẩm OCOP Việt Nam qua câu chuyện văn hóa bản địa, người giữ nghề, du lịch nông thôn và dữ liệu hội nhập.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'OCOP Việt Nam Điện tử',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" class={`${beVietnamPro.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body class="font-sans antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}