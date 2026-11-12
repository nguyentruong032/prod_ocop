import { SubNavigation } from './SubNavigation';

interface SubPageLayoutProps {
  children: React.ReactNode;
  subNavItems?: Array<{ href: string; label: string; key: string }>;
  parentHref?: string;
  parentLabel?: string;
}

export function SubPageLayout({
  children,
  subNavItems,
  parentHref = '/tin-tuc-su-kien',
  parentLabel = 'Tin tức & sự kiện',
}: SubPageLayoutProps) {
  return (
    <div className="min-h-full flex flex-col">
      <SubNavigation
        parentHref={parentHref}
        parentLabel={parentLabel}
        items={subNavItems || [
          { href: '/tin-tuc-su-kien/chinh-sach-va-co-che', label: 'Chính sách và cơ chế OCOP', key: 'chinh-sach-va-co-che' },
          { href: '/tin-tuc-su-kien/xuc-tien-thuong-mai', label: 'Xúc tiến thương mại', key: 'xuc-tien-thuong-mai' },
          { href: '/tin-tuc-su-kien/ocop-dia-phuong', label: 'OCOP địa phương', key: 'ocop-dia-phuong' },
        ]}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
}