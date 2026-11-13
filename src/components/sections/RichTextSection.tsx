import React from "react";
import { RichText } from "@/components/ui/RichText";
import type { RichTextBlock } from "@/payload-types";

export interface RichTextSectionProps {
  block: RichTextBlock;
}

export function RichTextSection({ block }: RichTextSectionProps) {
  if (!block.content) return null;

  return (
    <section className="w-full bg-surface-container-lowest py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <RichText content={block.content} className="max-w-4xl mx-auto" />
      </div>
    </section>
  );
}

export default RichTextSection;
