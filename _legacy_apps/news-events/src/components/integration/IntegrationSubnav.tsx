import Link from 'next/link';

interface IntegrationSubnavProps {
  activeTab?: 'overview' | 'xuat-khau' | 'tieu-chuan' | 'chuyen-doi-so';
}

export function IntegrationSubnav({ activeTab }: IntegrationSubnavProps) {
  return (
    <div className="bg-white pt-3 pb-0 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-gray-200">
          <Link
            href="/ocop-hoi-nhap"
            data-subnav="parent"
            className={`text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'border-[#2C5E2E]'
                : 'border-transparent hover:border-[#2C5E2E]'
            }`}
          >
            OCOP Hội nhập
          </Link>

          <nav className="flex items-center gap-x-5 overflow-x-auto no-scrollbar">
            <Link
              href="/ocop-hoi-nhap/xuat-khau-va-thi-truong-quoc-te"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'xuat-khau'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Xuất khẩu &amp; thị trường quốc tế
            </Link>
            <Link
              href="/ocop-hoi-nhap/tieu-chuan-va-chung-nhan-quoc-te"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'tieu-chuan'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Tiêu chuẩn &amp; chứng nhận quốc tế
            </Link>
            <Link
              href="/ocop-hoi-nhap/chuyen-doi-so-OCOP"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'chuyen-doi-so'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Chuyển đổi số OCOP
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
