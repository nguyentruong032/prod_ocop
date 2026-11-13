import React from "react";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings } from "@/lib/data/globals";
import "../globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-noto-serif",
});

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return [{ locale: "vi" }];
}

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await params;

  if (locale !== "vi") {
    notFound();
  }

  const settings = await getSiteSettings();

  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${notoSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-surface text-on-surface antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
