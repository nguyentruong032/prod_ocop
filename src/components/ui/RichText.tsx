import React from "react";
import Link from "next/link";
import { MediaImage } from "./MediaImage";
import type { Media } from "@/payload-types";

interface LexicalNode {
  type: string;
  tag?: string;
  listType?: string;
  format?: number | string;
  text?: string;
  url?: string;
  children?: LexicalNode[];
  fields?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface RichTextProps {
  content?: { root?: LexicalNode } | Record<string, unknown> | null;
  className?: string;
}

function renderTextNode(node: LexicalNode, index: number): React.ReactNode {
  let text: React.ReactNode = node.text || "";
  const format = typeof node.format === "number" ? node.format : 0;

  // Lexical text format bitwise flags: 1 = bold, 2 = italic, 4 = strikethrough, 8 = underline, 16 = code
  if (format & 1) text = <strong key={`b-${index}`}>{text}</strong>;
  if (format & 2) text = <em key={`i-${index}`}>{text}</em>;
  if (format & 8) text = <u key={`u-${index}`}>{text}</u>;
  if (format & 4) text = <s key={`s-${index}`}>{text}</s>;
  if (format & 16)
    text = (
      <code
        key={`c-${index}`}
        className="px-1.5 py-0.5 rounded bg-surface-container-high text-xs font-mono"
      >
        {text}
      </code>
    );

  return <React.Fragment key={index}>{text}</React.Fragment>;
}

function renderBlockNode(node: LexicalNode, index: number): React.ReactNode {
  const fields = node.fields || {};
  const blockType = fields.blockType;

  switch (blockType) {
    case "image": {
      const media = fields.media as Media | string | undefined;
      const caption = fields.caption as string | undefined;
      const credit = fields.credit as string | undefined;
      const isWide = fields.size === "wide";

      return (
        <div
          key={index}
          className={`my-8 ${isWide ? "-mx-4 md:-mx-12 lg:-mx-20" : "max-w-2xl mx-auto"}`}
        >
          <MediaImage
            media={media}
            caption={caption}
            credit={credit}
            showCaption={true}
            className="w-full"
            imageClassName="rounded-lg shadow-sm"
          />
        </div>
      );
    }
    case "gallery": {
      const images = (fields.images || []) as Array<{
        image: Media | string;
        id?: string;
      }>;
      const caption = fields.caption as string | undefined;

      return (
        <figure key={index} className="my-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((item, imgIdx) => (
              <div
                key={item.id || imgIdx}
                className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xs"
              >
                <MediaImage
                  media={item.image}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-xs text-on-surface-variant font-body-sm italic">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "pullQuote": {
      const quote = fields.quote as string | undefined;
      const attribution = fields.attribution as string | undefined;

      return (
        <blockquote
          key={index}
          className="my-8 p-6 md:p-8 bg-surface-beige rounded-xl border-l-4 border-accent"
        >
          <p className="font-serif text-lg md:text-xl text-primary font-medium italic leading-relaxed">
            "{quote}"
          </p>
          {attribution && (
            <cite className="block mt-3 text-sm font-semibold text-on-surface-variant not-italic">
              — {attribution}
            </cite>
          )}
        </blockquote>
      );
    }
    case "embedVideo": {
      const url = (fields.url as string) || "";
      const caption = fields.caption as string | undefined;

      let embedSrc: string | null = null;
      try {
        const parsedUrl = new URL(url);
        const host = parsedUrl.hostname.toLowerCase();

        if (
          host === "youtube.com" ||
          host === "www.youtube.com" ||
          host === "m.youtube.com" ||
          host === "youtu.be"
        ) {
          let videoId: string | null = null;
          if (host === "youtu.be") {
            videoId =
              parsedUrl.pathname.replace(/^\/+/, "").split("/")[0] || null;
          } else {
            videoId = parsedUrl.searchParams.get("v");
          }
          if (videoId) {
            embedSrc = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`;
          }
        } else if (
          host === "vimeo.com" ||
          host === "www.vimeo.com" ||
          host === "player.vimeo.com"
        ) {
          const match = parsedUrl.pathname.match(/\/(\d+)/);
          if (match && match[1]) {
            embedSrc = `https://player.vimeo.com/video/${encodeURIComponent(match[1])}`;
          }
        }
      } catch {
        embedSrc = null;
      }

      if (!embedSrc) {
        if (!url) return null;
        return (
          <div key={index} className="my-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary underline break-all font-body-sm"
            >
              {caption || url}
            </a>
          </div>
        );
      }

      return (
        <figure key={index} className="my-8 max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-md">
            <iframe
              src={embedSrc}
              title={caption || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-xs text-on-surface-variant font-body-sm">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
    default:
      return null;
  }
}

function renderChildren(children?: LexicalNode[]): React.ReactNode {
  if (!children || !Array.isArray(children)) return null;

  return children.map((node, index) => {
    if (node.type === "text") {
      return renderTextNode(node, index);
    }

    if (node.type === "link") {
      const href = node.url || "#";
      const isInternal = href.startsWith("/") || href.startsWith("#");

      if (isInternal) {
        return (
          <Link
            key={index}
            href={href}
            className="text-primary font-medium underline underline-offset-4 hover:text-primary-action transition-colors"
          >
            {renderChildren(node.children)}
          </Link>
        );
      }

      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium underline underline-offset-4 hover:text-primary-action transition-colors"
        >
          {renderChildren(node.children)}
        </a>
      );
    }

    if (node.type === "paragraph") {
      return (
        <p key={index} className="mb-4 leading-relaxed text-on-surface">
          {renderChildren(node.children)}
        </p>
      );
    }

    if (node.type === "heading") {
      const tag = node.tag || "h2";
      const headingClass =
        tag === "h2"
          ? "font-serif text-2xl md:text-3xl font-bold text-primary mt-8 mb-4"
          : tag === "h3"
            ? "font-serif text-xl md:text-2xl font-bold text-primary mt-6 mb-3"
            : "font-serif text-lg md:text-xl font-bold text-primary mt-4 mb-2";

      const HeadingTag = tag as "h2" | "h3" | "h4" | "h5" | "h6";
      return (
        <HeadingTag key={index} className={headingClass}>
          {renderChildren(node.children)}
        </HeadingTag>
      );
    }

    if (node.type === "list") {
      const isNumbered = node.listType === "number";
      const ListTag = isNumbered ? "ol" : "ul";
      const listClass = isNumbered
        ? "list-decimal ml-6 mb-4 space-y-1"
        : "list-disc ml-6 mb-4 space-y-1";

      return (
        <ListTag key={index} className={listClass}>
          {renderChildren(node.children)}
        </ListTag>
      );
    }

    if (node.type === "listitem") {
      return <li key={index}>{renderChildren(node.children)}</li>;
    }

    if (node.type === "quote") {
      return (
        <blockquote
          key={index}
          className="my-6 pl-4 border-l-4 border-primary/30 italic text-on-surface-variant"
        >
          {renderChildren(node.children)}
        </blockquote>
      );
    }

    if (node.type === "block") {
      return renderBlockNode(node, index);
    }

    return (
      <React.Fragment key={index}>
        {renderChildren(node.children)}
      </React.Fragment>
    );
  });
}

export function RichText({ content, className = "" }: RichTextProps) {
  if (!content) return null;
  const root =
    "root" in content && content.root ? (content.root as LexicalNode) : null;
  if (!root) return null;

  return (
    <div
      className={`rich-text prose max-w-none font-body-md text-on-surface ${className}`}
    >
      {renderChildren(root.children)}
    </div>
  );
}

export default RichText;
