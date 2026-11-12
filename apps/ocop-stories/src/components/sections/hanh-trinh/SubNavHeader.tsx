import Link from 'next/link';

interface SubNavHeaderProps {
  currentPath?: string;
}

export function SubNavHeader({ currentPath = '/cau-chuyen-ocop' }: SubNavHeaderProps) {
  const isParentActive = currentPath === '/cau-chuyen-ocop';

  return (
    <div className="bg-white pt-3 pb-0">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-gray-200">
          <Link
            href="/cau-chuyen-ocop"
            data-subnav="parent"
            className={`text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 ${
              isParentActive ? 'border-[#2C5E2E]' : 'border-transparent hover:border-[#2C5E2E]'
            } whitespace-nowrap transition-colors`}
          >
            Câu chuyện OCOP
          </Link>
          <nav className="flex items-center gap-x-5 overflow-x-auto no-scrollbar" aria-label="Danh mục câu chuyện">
            <Link
              href="/cau-chuyen-ocop/hanh-trinh-chu-the-ocop"
              data-subnav="item"
              className={`whitespace-nowrap transition-colors pb-2 -mb-[2px] border-b-2 ${
                currentPath === '/cau-chuyen-ocop/hanh-trinh-chu-the-ocop'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Hành trình chủ thể OCOP
            </Link>
            <Link
              href="/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia"
              data-subnav="item"
              className={`whitespace-nowrap transition-all pb-2 -mb-[2px] border-b-2 ${
                currentPath === '/cau-chuyen-ocop/van-hoa-tinh-hoa-ban-dia'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Văn hóa & Tinh hoa bản địa
            </Link>
            <Link
              href="/cau-chuyen-ocop/phong-su-da-phuong-tien"
              data-subnav="item"
              className={`whitespace-nowrap transition-all pb-2 -mb-[2px] border-b-2 ${
                currentPath === '/cau-chuyen-ocop/phong-su-da-phuong-tien'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Phóng sự đa phương tiện
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
