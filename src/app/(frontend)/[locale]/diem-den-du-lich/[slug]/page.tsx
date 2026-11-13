import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { getDestination, listDestinations } from "@/lib/data/destinations";
import { DestinationDetailView } from "@/components/features/destinations/DestinationDetailView";
import { lookupRedirect } from "@/lib/redirects";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "vi") return {};
  const destination = await getDestination(slug);
  if (!destination) return {};
  return buildMetadata({
    title: destination.seo?.title || destination.title,
    description: destination.seo?.description || destination.excerpt || destination.title,
    path: `/${locale}/diem-den-du-lich/${slug}`,
    seo: destination.seo,
  });
}

export default async function DestinationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();

  const destination = await getDestination(slug);
  if (!destination) {
    const redirectUrl = await lookupRedirect(`/${locale}/diem-den-du-lich/${slug}`);
    if (redirectUrl) permanentRedirect(redirectUrl);
    notFound();
  }

  const related = await listDestinations({
    kind: destination.kind,
    limit: 3,
  });

  const filteredRelated = related.docs.filter((d) => d.slug !== slug).slice(0, 3);

  return (
    <DestinationDetailView
      destination={destination}
      relatedDestinations={filteredRelated}
      locale={locale}
    />
  );
}
