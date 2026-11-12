import Link from 'next/link';

interface SubnavProps {
  activeTab?: 'overview' | 'lang-nghe' | 'du-lich-sinh-thai' | 'ban-do';
}

export function DestinationSubnav({ activeTab }: SubnavProps) {
  return (
    <div className="bg-white pt-3 pb-0 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-gray-200">
          <Link
            href="/diem-den-du-lich"
            data-subnav="parent"
            className={`text-lg md:text-xl font-bold text-[#2C5E2E] pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'border-[#2C5E2E]'
                : 'border-transparent hover:border-[#2C5E2E]'
            }`}
          >
            Điểm đến du lịch
          </Link>

          <nav className="flex items-center gap-x-5 overflow-x-auto no-scrollbar">
            <Link
              href="/diem-den-du-lich/lang-nghe-truyen-thong"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'lang-nghe'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Làng nghề truyền thống
            </Link>
            <Link
              href="/diem-den-du-lich/du-lich-sinh-thai-trai-nghiem-ocop"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'du-lich-sinh-thai'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Du lịch sinh thái - Trải nghiệm OCOP
            </Link>
            <Link
              href="/diem-den-du-lich/ban-do-ocop-viet-nam"
              data-subnav="item"
              className={`pb-2 -mb-[2px] border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'ban-do'
                  ? 'text-lg md:text-xl font-bold text-[#2C5E2E] border-[#2C5E2E]'
                  : 'subnav-link text-[13px] font-medium text-gray-700 hover:text-[#2C5E2E] border-transparent hover:border-[#2C5E2E]'
              }`}
            >
              Bản đồ OCOP Việt Nam
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
