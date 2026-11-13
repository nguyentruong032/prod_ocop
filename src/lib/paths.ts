export type DocPathCollection =
  | 'articles'
  | 'events'
  | 'legal-documents'
  | 'products'
  | 'producers'
  | 'destinations';

export interface DocPathDoc {
  slug: string;
  kind?: string | null;
}

export function getDocPath(
  collection: DocPathCollection,
  doc: DocPathDoc,
  locale = 'vi',
): string {
  const prefix = `/${locale}`;

  switch (collection) {
    case 'articles': {
      if (doc.kind === 'NEWS') {
        return `${prefix}/tin-tuc-su-kien/tin-tuc/${doc.slug}`;
      }
      if (doc.kind === 'STORY') {
        return `${prefix}/cau-chuyen-ocop/${doc.slug}`;
      }
      if (doc.kind === 'INTEGRATION') {
        return `${prefix}/ocop-hoi-nhap/${doc.slug}`;
      }
      return `${prefix}/tin-tuc-su-kien/tin-tuc/${doc.slug}`;
    }
    case 'events':
      return `${prefix}/tin-tuc-su-kien/su-kien/${doc.slug}`;
    case 'legal-documents':
      return `${prefix}/tin-tuc-su-kien/chinh-sach-va-co-che?doc=${doc.slug}`;
    case 'products':
      return `${prefix}/san-pham-ocop/${doc.slug}`;
    case 'producers':
      return `${prefix}/chu-the-ocop/${doc.slug}`;
    case 'destinations':
      return `${prefix}/diem-den-du-lich/${doc.slug}`;
    default:
      return `${prefix}/`;
  }
}
