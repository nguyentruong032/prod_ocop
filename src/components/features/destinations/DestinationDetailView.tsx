import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { MediaImage } from "@/components/ui/MediaImage";
import { RichText } from "@/components/ui/RichText";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { DestinationSubnav } from "./DestinationSubnav";
import type { Destination, Province } from "@/payload-types";

export interface DestinationDetailViewProps {
  destination: Destination;
  relatedDestinations?: Destination[];
  locale?: string;
}

const kindLabels: Record<string, string> = {
  CRAFT_VILLAGE: "Làng nghề truyền thống",
  ECO_TOUR: "Du lịch sinh thái",
  DESTINATION: "Điểm đến văn hóa",
};

const ecosystemLabels: Record<string, string> = {
  HIGHLAND_TEA_COFFEE: "Cao nguyên Chè & Cà phê",
  RIVER_GARDEN_DELTA: "Sông nước Miệt vườn",
  MEDICINAL_FOREST: "Rừng Dược liệu Bản địa",
  COASTAL_ISLAND: "Duyên hải & Đảo ngọc",
};

const craftLabels: Record<string, string> = {
  GOM_SU: "Gốm sứ",
  DET_MAY: "Dệt the & Thổ cẩm",
  MAY_TRE_DAN: "Mây tre đan",
  DIEU_KHAC: "Điêu khắc mỹ nghệ",
  KIM_HOAN: "Kim hoàn & Đậu bạc",
  KHAC: "Thủ công truyền thống",
};

export function DestinationDetailView({
  destination,
  relatedDestinations = [],
  locale = "vi",
}: DestinationDetailViewProps) {
  const provinceName =
    typeof destination.province === "object" && destination.province !== null
      ? (destination.province as Province).name
      : undefined;

  const kindLabel = kindLabels[destination.kind] || "Điểm đến OCOP";

  const jsonLdData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: destination.title,
    description: destination.excerpt || destination.title,
    url: `https://ocopvietnam.gov.vn/${locale}/diem-den-du-lich/${destination.slug}`,
    ...(destination.coverImage && typeof destination.coverImage === "string"
      ? { image: destination.coverImage }
      : {}),
    ...(provinceName || destination.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: destination.address || "",
            addressLocality: provinceName || "Việt Nam",
            addressCountry: "VN",
          },
        }
      : {}),
  };

  const breadcrumbItems = [
    { label: "Điểm đến du lịch", href: `/${locale}/diem-den-du-lich` },
    ...(destination.kind === "ECO_TOUR"
      ? [
          {
            label: "Du lịch sinh thái",
            href: `/${locale}/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop`,
          },
        ]
      : destination.kind === "CRAFT_VILLAGE"
        ? [
            {
              label: "Làng nghề truyền thống",
              href: `/${locale}/diem-den-du-lich/lang-nghe-truyen-thong`,
            },
          ]
        : []),
    { label: destination.title },
  ];

  return (
    <article className="w-full bg-background min-h-screen">
      <JsonLd data={jsonLdData} />
      <DestinationSubnav
        activeTab={
          destination.kind === "ECO_TOUR"
            ? "eco"
            : destination.kind === "CRAFT_VILLAGE"
              ? "craft"
              : "all"
        }
        locale={locale}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Header Block */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="primary">{kindLabel}</Badge>
            {provinceName && <Badge variant="secondary">{provinceName}</Badge>}
            {destination.kind === "CRAFT_VILLAGE" &&
              destination.isNationalHeritage && (
                <Badge variant="outline">Di sản Quốc gia</Badge>
              )}
            {destination.kind === "ECO_TOUR" && destination.isFeaturedRoute && (
              <Badge variant="outline">Tuyến tiêu biểu</Badge>
            )}
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
            {destination.title}
          </h1>

          {destination.address && (
            <p className="flex items-center gap-2 text-sm text-on-surface-variant font-body-sm mb-4">
              <span className="material-symbols-outlined text-[18px] text-accent">
                location_on
              </span>
              <span>{destination.address}</span>
            </p>
          )}

          {destination.excerpt && (
            <p className="font-serif text-lg sm:text-xl text-on-surface/90 italic leading-relaxed pt-2 border-t border-surface-container/60">
              {destination.excerpt}
            </p>
          )}
        </header>

        {/* Hero Visual */}
        <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden bg-surface-container shadow-md border border-surface-container/70 mb-10">
          <MediaImage
            media={destination.coverImage || "/anh_phong_canh.webp"}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Specific Type Info: Eco Tour or Craft Village */}
        {destination.kind === "ECO_TOUR" && (
          <section className="bg-surface-container-low rounded-2xl p-6 sm:p-8 mb-10 border border-surface-container/80">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-primary">
                route
              </span>
              <span>Lịch Trình Hành Trình Trải Nghiệm</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-surface-container/60">
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Hệ sinh thái nông nghiệp
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.ecosystem
                    ? ecosystemLabels[destination.ecosystem] ||
                      destination.ecosystem
                    : "Sinh thái tổng hợp"}
                </span>
              </div>
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Thời lượng tour
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.durationDays
                    ? `${destination.durationDays} ngày`
                    : "1 ngày"}
                </span>
              </div>
            </div>

            {/* Timeline Itinerary */}
            {destination.itinerary && destination.itinerary.length > 0 && (
              <div className="space-y-6">
                {destination.itinerary.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                        N{item.day || idx + 1}
                      </div>
                      {idx < (destination.itinerary?.length || 0) - 1 && (
                        <div className="w-0.5 flex-1 bg-primary/20 my-2" />
                      )}
                    </div>
                    <div className="pt-1 pb-4">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-1">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {destination.kind === "CRAFT_VILLAGE" && (
          <section className="bg-surface-container-low rounded-2xl p-6 sm:p-8 mb-10 border border-surface-container/80">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-secondary">
                history_edu
              </span>
              <span>Thông Tin Di Sản Làng Nghề</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Nhóm nghề
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.craftGroup
                    ? craftLabels[destination.craftGroup] ||
                      destination.craftGroup
                    : "Thủ công mỹ nghệ"}
                </span>
              </div>
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Niên đại
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.ageYears
                    ? `Hơn ${destination.ageYears} năm`
                    : "Cổ truyền"}
                </span>
              </div>
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Nghệ nhân tiêu biểu
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.artisanCount
                    ? `${destination.artisanCount} nghệ nhân`
                    : "Đang cập nhật"}
                </span>
              </div>
              <div>
                <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold block mb-1">
                  Xếp hạng
                </span>
                <span className="text-base font-bold text-primary">
                  {destination.isNationalHeritage
                    ? "Di sản Quốc gia"
                    : "Làng nghề cấp tỉnh"}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Content Body */}
        {destination.content && (
          <div className="mb-12">
            <RichText content={destination.content} />
          </div>
        )}

        {/* Related Destinations */}
        {relatedDestinations.length > 0 && (
          <section className="mt-16 pt-10 border-t border-surface-container">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
              Điểm Đến &amp; Tuyến Trải Nghiệm Khác
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default DestinationDetailView;
