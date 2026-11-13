import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLandingPage, listProvinces } from "@/lib/data/globals";
import { SubmissionPageView } from "@/components/features/submissions/SubmissionPageView";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const landing = await getLandingPage("submission-page");

  return buildMetadata({
    title: landing?.seo?.title || landing?.heading || "Gửi Bài & Hồ Sơ Thông Tin OCOP",
    description: landing?.seo?.description || landing?.intro || "Cổng tiếp nhận trực tuyến bài viết và hồ sơ OCOP.",
    path: `/${locale}/gui-bai-ho-so-ocop`,
    seo: landing?.seo,
  });
}

export default async function SubmissionPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const [landing, provinces] = await Promise.all([
    getLandingPage("submission-page"),
    listProvinces(),
  ]);

  return <SubmissionPageView landing={landing} provinces={provinces} />;
}
