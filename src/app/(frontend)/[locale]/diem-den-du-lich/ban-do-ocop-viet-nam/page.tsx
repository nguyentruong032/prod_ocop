import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { DestinationSubnav } from "@/components/features/destinations/DestinationSubnav";
import { GisMetricsSection } from "@/components/features/destinations/map/GisMetricsSection";
import { InteractiveGisWorkspace } from "@/components/features/destinations/map/InteractiveGisWorkspace";
import { RepresentativeProvincesGrid } from "@/components/features/destinations/map/RepresentativeProvincesGrid";
import { GeospatialJournalismSection } from "@/components/features/destinations/map/GeospatialJournalismSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi" && locale !== "en") return {};

  return buildMetadata({
    title: "Bản đồ GIS OCOP Việt Nam — Không gian Văn hóa & Sản vật",
    description:
      "Bản đồ tương tác GIS số hóa tọa độ nông sản OCOP 63 tỉnh thành, các làng nghề di sản và các điểm du lịch nông thôn đạt chuẩn quốc gia.",
    path: `/${locale}/diem-den-du-lich/ban-do-ocop-viet-nam`,
  });
}

export default async function VietnamOcopMapPage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await params;
  if (locale !== "vi" && locale !== "en") {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-surface flex flex-col">
      <DestinationSubnav activeTab="map" locale={locale} />
      <GisMetricsSection />
      <InteractiveGisWorkspace />
      <RepresentativeProvincesGrid />
      <GeospatialJournalismSection />
    </div>
  );
}
