import React from 'react';

export const DuocLieuStoriesSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-surface-container-low/60 border-t border-[#E2DBD0]/60">
      <div className="max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
              Tư liệu điền dã &amp; Nhân học
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Người giữ mạch nguồn thảo dược dưới tán rừng già
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              Hành trình ghi chép cùng các thầy thuốc gia truyền, nghệ nhân thu hái và nhà khoa học bảo tồn nguồn gen thuốc Nam quý giá.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary font-semibold transition-colors"
            href="#"
          >
            <span>Xem tất cả ký sự</span>
            <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
          </a>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ký sự 1: Người Dao Đỏ Sa Pa */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group">
            <div className="h-60 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Portrait of an elderly Red Dao ethnic woman healer with traditional embroidered headdress preparing wild herbal bath leaves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL2XAYBIyUPB8r3nDgZJ4rjKjFVdbkbRHhSQNbJDDAUp01YY7HDZHXRXYRllwJD36Saj0VrXAf3Qv5KIxABXcymiSWBxawZKBgbPluE3q6vQ2lPmTFTcOFCCcx1b_q_Juzhi6il6P8XhBVrAZiiGtTgY0Isz40xJ7mvGCNUUk-htHCpT4m4J-kzYdBetP5Ke_i3X8RRbgQ68rosc0C2KwbcgIm303s24IWYbe27HE"
               loading="lazy" decoding="async"/>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm">
                Tri thức người Dao Đỏ
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-outline">
                  Ký sự điền dã • 10 phút đọc
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary font-semibold group-hover:text-secondary transition-colors">
                  Lá thuốc Tả Phìn và pho tri thức chữa bệnh bằng thảo mộc truyền khẩu
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  Hơn 30 vị thảo mộc thu hái tận rừng sâu được bà Chảo Mẩy Chán phối kết tỉ mỉ theo bài thuốc tắm đẻ ngàn đời của phụ nữ Dao đỏ, nay đã được chuẩn hóa thành sản phẩm OCOP tiêu biểu.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2DBD0]/60 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">Bút ký: Trần Hoàng Ly</span>
                <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                  menu_book
                </span>
              </div>
            </div>
          </article>

          {/* Ký sự 2: Giữ giống Sâm Ngọc Linh Kon Tum */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group">
            <div className="h-60 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Middle aged Xo Dang indigenous forest ranger walking through misty primary mountain rainforest tending to small flowering ginseng plants"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmcSAh26rNBQh6uQKW_LWzmTqHHiDkDEasph1ZUkuYaji5nqpNhhaWbbPkeLt1yl6DMqehb-TJTuJM8T5q7dpS9YqvGH_zutTa13Twj-lUGx2agqkYtrPQvFYFTGzKE-6c7jwPaP3KgLfi-hu1HIX9X56dOO0MN4eQYfZIoMOR7wbzn4pH_GZmkUmBRE1utH6SkLPbZ4WHcSsH2cDLzTHqLhDJbjGdY8VeKpqYdfo"
               loading="lazy" decoding="async"/>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#B85D3B] text-surface-container-lowest font-label-sm text-label-sm">
                Đại ngàn Tây Nguyên
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-outline">
                  Phóng sự điều tra • 14 phút đọc
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary font-semibold group-hover:text-secondary transition-colors">
                  Những người Xơ Đăng gác rừng, giữ gen sâm mẹ trên đỉnh trời Tu Mơ Rông
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  Đối diện với cơn sốt giá bạc triệu, người dân làng Kon Trang vẫn giữ nguyên quy ước bất thành văn: chỉ hái hạt ươm mầm, tuyệt đối không tận diệt gốc sâm cổ thụ nuôi sống buôn làng.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2DBD0]/60 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">Bút ký: Nguyễn Văn Chung</span>
                <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                  menu_book
                </span>
              </div>
            </div>
          </article>

          {/* Ký sự 3: Bảo tồn rừng Quế cổ Trà Bồng */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group">
            <div className="h-60 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Cor ethnic artisan shaving and peeling huge ancient cinnamon tree bark in central highland forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLyolSiPxFvl1RQE0QT535RMokxRX64FBmA6WG6gPeO-0Dey9l6PHzQUjsLgfovY2FBMHyxhaQl8CFJJeCHstqUUfGdC5tIxJWRxQMRxMwCrGSsPhkElplhoAdJI_LF90Sb5cpWFCP0Jk3JXX9ukcpInYAQKshxrhhA2-BTpNtIgMBbeXo44aNyc3ymZveI4LkLznRVHN3aIpHnXyBQACJ9B7kjnCWD5SQQBSjQtE"
               loading="lazy" decoding="async"/>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#1F4D3A] text-on-primary font-label-sm text-label-sm">
                Văn hóa người Cor
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-outline">
                  Ký họa văn hóa • 8 phút đọc
                </span>
                <h3 className="font-headline-sm text-title-editorial text-primary font-semibold group-hover:text-secondary transition-colors">
                  Khói lò chưng cất và hồn cây quế rồng trong tâm thức người Cor
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  Cây quế không chỉ là dược liệu xuất khẩu mà còn là sính lễ cưới hỏi, biểu tượng cho lòng trung thực và sự gắn kết trường tồn giữa con người với đất đai xứ Quảng.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2DBD0]/60 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline">Bút ký: Lê Thảo Linh</span>
                <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                  menu_book
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
