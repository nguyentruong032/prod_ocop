import React from "react";
import Link from "next/link";
import { Badge } from "./Badge";
import { getDocPath } from "@/lib/paths";
import type { LegalDocument, Media } from "@/payload-types";

export interface LegalDocRowProps {
  doc: LegalDocument;
  className?: string;
}

export function LegalDocRow({ doc, className = "" }: LegalDocRowProps) {
  const href = getDocPath("legal-documents", doc);

  const formattedDate = doc.issuedDate
    ? new Date(doc.issuedDate).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;

  let pdfUrl: string | null = null;
  if (doc.pdfFile) {
    if (typeof doc.pdfFile === "string") {
      pdfUrl = doc.pdfFile;
    } else if (typeof doc.pdfFile === "object" && doc.pdfFile !== null) {
      const media = doc.pdfFile as Media;
      pdfUrl =
        media.url || (media.filename ? `/media/${media.filename}` : null);
    }
  }

  return (
    <div
      className={`p-4 sm:p-5 rounded-xl bg-surface-container-lowest border border-surface-container hover:border-outline-variant hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group ${className}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-surface-beige text-primary border border-surface-container">
            {doc.docNumber}
          </span>
          {doc.level && <Badge variant="surface">{doc.level}</Badge>}
          {formattedDate && (
            <span className="text-xs text-on-surface-variant font-body-sm">
              Ban hành: {formattedDate}
            </span>
          )}
        </div>

        <h3 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
          <Link href={href}>{doc.title}</Link>
        </h3>

        {doc.issuingAuthority && (
          <p className="text-xs text-on-surface-variant/80 mt-2 font-body-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-outline">
              account_balance
            </span>
            <span>Cơ quan ban hành: {doc.issuingAuthority}</span>
            {doc.signer && <span> · Người ký: {doc.signer}</span>}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-surface-container">
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-secondary font-body-sm text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-surface-container"
          >
            <span className="material-symbols-outlined text-[16px]">
              picture_as_pdf
            </span>
            <span>Tải PDF</span>
          </a>
        )}

        <Link
          href={href}
          className="h-9 px-4 rounded-lg bg-primary hover:bg-primary-action text-on-primary font-body-sm text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <span>Xem chi tiết</span>
          <span className="material-symbols-outlined text-[16px]">
            visibility
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LegalDocRow;
