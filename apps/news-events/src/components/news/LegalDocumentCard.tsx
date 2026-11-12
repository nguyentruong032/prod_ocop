'use client';
interface LegalDocumentCardProps {
  documentNumber: string;
  issuingAuthority: string;
  title: string;
  excerpt: string;
  effectiveDate: string;
  pdfSize: string;
  pdfLink?: string;
  summaryLink?: string;
}

export function LegalDocumentCard({ documentNumber, issuingAuthority, title, excerpt, effectiveDate, pdfSize, pdfLink = '#', summaryLink = '#' }: LegalDocumentCardProps) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <span className="px-2.5 py-0.5 bg-surface-container text-primary font-mono text-[11px] font-bold rounded">{documentNumber}</span>
          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded font-medium">{issuingAuthority}</span>
        </div>
        <h4 className="font-title-editorial text-title-editorial font-bold text-primary mb-space-sm hover:text-secondary cursor-pointer transition-colors">
          {title}
        </h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md">
          {excerpt}
        </p>
      </div>
      <div className="pt-space-md bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-lg flex items-center justify-between">
        <span className="text-body-sm text-outline font-mono">Hiệu lực: {effectiveDate}</span>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center text-primary hover:text-secondary text-body-sm font-medium transition-colors" title="Xem tóm tắt" onClick={(e) => { e.preventDefault(); }}>
            <span className="material-symbols-outlined text-[18px]">visibility</span>
          </button>
          <a className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary uppercase font-semibold hover:text-on-secondary-container transition-colors" href={pdfLink}>
            <span className="material-symbols-outlined text-[16px]">download</span>
            PDF ({pdfSize})
          </a>
        </div>
      </div>
    </div>
  );
}