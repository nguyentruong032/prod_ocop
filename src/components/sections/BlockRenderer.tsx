import React from "react";
import { HeroSection } from "./HeroSection";
import { QuickLinksSection } from "./QuickLinksSection";
import { KpiStatsSection } from "./KpiStatsSection";
import { FeaturedNewsSection } from "./FeaturedNewsSection";
import { FeaturedProductsSection } from "./FeaturedProductsSection";
import { FeaturedStoriesSection } from "./FeaturedStoriesSection";
import { FeaturedDestinationsSection } from "./FeaturedDestinationsSection";
import { IntegrationPillarsSection } from "./IntegrationPillarsSection";
import { CtaBannerSection } from "./CtaBannerSection";
import { RichTextSection } from "./RichTextSection";
import type { HomeBlock } from "@/payload-types";

export interface BlockRendererProps {
  blocks?: HomeBlock[] | null;
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case "hero":
            return <HeroSection key={`hero-${index}`} block={block} />;
          case "quickLinks":
            return (
              <QuickLinksSection key={`quickLinks-${index}`} block={block} />
            );
          case "kpiStats":
            return <KpiStatsSection key={`kpiStats-${index}`} block={block} />;
          case "featuredNews":
            return (
              <FeaturedNewsSection
                key={`featuredNews-${index}`}
                block={block}
              />
            );
          case "featuredProducts":
            return (
              <FeaturedProductsSection
                key={`featuredProducts-${index}`}
                block={block}
              />
            );
          case "featuredStories":
            return (
              <FeaturedStoriesSection
                key={`featuredStories-${index}`}
                block={block}
              />
            );
          case "featuredDestinations":
            return (
              <FeaturedDestinationsSection
                key={`featuredDestinations-${index}`}
                block={block}
              />
            );
          case "integrationPillars":
            return (
              <IntegrationPillarsSection
                key={`integrationPillars-${index}`}
                block={block}
              />
            );
          case "ctaBanner":
            return (
              <CtaBannerSection key={`ctaBanner-${index}`} block={block} />
            );
          case "richText":
            return <RichTextSection key={`richText-${index}`} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export default BlockRenderer;
