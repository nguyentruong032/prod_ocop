import { notFound, permanentRedirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { getEvent, listEvents } from "@/lib/data/events";
import { lookupRedirect } from "@/lib/redirects";
import { EventDetailView } from "@/components/features/news/EventDetailView";
import {
  buildMetadata,
  buildEventJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const res = await listEvents({ limit: 50 });
  return res.docs.map((e) => ({ slug: e.slug, locale: "vi" }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const event = await getEvent(slug);
  if (!event) return {};

  return buildMetadata({
    title: event.seo?.title || event.title,
    description: event.seo?.description || event.excerpt,
    path: `/${locale}/tin-tuc-su-kien/su-kien/${slug}`,
    seo: event.seo,
    coverImage: event.coverImage,
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const isDraft = (await draftMode()).isEnabled;
  const event = await getEvent(slug, isDraft);

  if (!event) {
    const redirectUrl = await lookupRedirect(
      `/${locale}/tin-tuc-su-kien/su-kien/${slug}`,
    );
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const eventPath = `/${locale}/tin-tuc-su-kien/su-kien/${slug}`;
  const eventJsonLd = buildEventJsonLd(event, eventPath);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Trang chủ", url: `/${locale}` },
    { name: "Tin tức & Sự kiện", url: `/${locale}/tin-tuc-su-kien` },
    {
      name: "Xúc tiến thương mại",
      url: `/${locale}/tin-tuc-su-kien/xuc-tien-thuong-mai`,
    },
    { name: event.title, url: eventPath },
  ]);

  return (
    <>
      <JsonLd data={eventJsonLd} />
      <JsonLd data={breadcrumbs} />
      <EventDetailView event={event} />
    </>
  );
}
