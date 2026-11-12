import { Metadata } from 'next';
import { SearchResultsClient } from '@/components/search/SearchResultsClient';

export const metadata: Metadata = {
  title: 'Tra cứu & Tìm kiếm OCOP | Cổng dữ liệu số hóa di sản nông thôn',
  description:
    'Hệ thống tra cứu và tìm kiếm thông tin sản phẩm, câu chuyện di sản, làng nghề truyền thống và chủ thể OCOP trên toàn quốc.',
};

export default function TimKiemPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-0">
      <SearchResultsClient />
    </main>
  );
}
