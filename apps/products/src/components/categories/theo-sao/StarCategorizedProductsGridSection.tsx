'use client';

import React from 'react';

const STAR_PRODUCTS = [
  {
    id: 1,
    title: 'Trà Shan Tuyết Cổ Thụ Fìn Hò',
    location: 'Hoàng Su Phì, Hà Giang',
    category: 'Đồ uống',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Chế biến Chè Phìn Hồ • Búp chè cổ thụ trên 200 năm tuổi tại độ cao 1.600m.',
    code: 'MS: HG-5S-004',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrn7mJPOytz4lqD2vT5L5APmFnrX8SY0_v_vzJxHeC99xaGviO3VWiYSdyBymNUxMSbuT3ZXLyL_uZwP3NUtcEPmqElSqAEJfoysnvyJWkvZmdhT9VG3gpxjV1UaqUu1Ae8CK21w_fKctzfzU_YsVTl_MCv1xVmsvDUE8KIZo9Kwg1TKEnt3V5Ko53Mgt8c9tEeW9ChTxNhnxNfxJUpBrXmNYXUxHMbLbmi6UV9qo',
    alt: 'Trà Shan Tuyết Cổ Thụ Fìn Hò',
  },
  {
    id: 2,
    title: 'Tinh Dầu Quế Trà Bồng',
    location: 'Trà Bồng, Quảng Ngãi',
    category: 'Dược liệu',
    stars: '★★★★★ 5 SAO',
    desc: 'Công ty TNHH Hương Quế Trà Bồng • Chưng cất phân đoạn từ vỏ quế bản địa Coror.',
    code: 'MS: QN-5S-019',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVGKd44ghJ-iKnq_U3ffmzW4hRrpxlwzf1tAa0-H_jgzSS7mdnoOplmdv-ULkS17ELxljmDJOVZFMY0JEKza6RS_x5kxa0xiGhk21mX0Po2QVAgFdjIJDxmKsS5vL71WjHERmgbyJhr3PLn8TV4Otf-xR0oGJs0Hw9qkukePqx1oai4LWJL_P5N2S8bC04I_FjzJ88IljCUr9D84KnKLVDwWubSdXol76FVvjzHk8',
    alt: 'Tinh Dầu Quế Trà Bồng',
  },
  {
    id: 3,
    title: 'Cà Phê Arabica Cầu Đất Đặc Sản',
    location: 'Cầu Đất, Lâm Đồng',
    category: 'Đồ uống',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Cà phê Nguyên chất Cầu Đất • Canh tác độ cao 1.650m, sơ chế ướt khép kín.',
    code: 'MS: LD-5S-028',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAAYI0u3-hA1vm5tQznCgAYJpsZRXlmEsWevOpcF2xrY240jJX12ptzWqlLmnT-3wSkvUyKXByKAd9KWkJBMESudT089jdjyMcYg5cwnwEcmIcCZ6-UNACgUlSFV97Eh7NvkmTmUjaZBmoXSC2qA6g6ZjN4SaHchxunoMrJwnDj0DDUbnviaffROdcGYnA1dJ7GZ78UwyZZBbeBh79rTHB4eB9DPOANb1qlP8agqI',
    alt: 'Cà Phê Arabica Cầu Đất Đặc Sản',
  },
  {
    id: 4,
    title: 'Bộ Gốm Men Rạn Sen Cổ Bát Tràng',
    location: 'Bát Tràng, Hà Nội',
    category: 'Thủ công mỹ nghệ',
    stars: '★★★★★ 5 SAO',
    desc: 'Hợp tác xã Gốm sứ Nghệ nhân Bát Tràng • Men tro trấu tự nhiên nung lò củi truyền đời.',
    code: 'MS: HN-5S-002',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYtSa-JRQlotC-fRtaboZXMqbw-n4UsjzKpTTPf121cU3UQ_o1lL2CuQRUKmRT9PSj_cYbQFhA3g6Y_WK6oGUbbut4VnJp8IozyKJPucTeaXIpJ8L-Izb57YyjlFWIeNm1A4wmQv7Fhnha9O77QnWYdYEvgvd9opky0ycVB3hPi2-l4fk4Tnpz-I1NBBmQKjQHTJ9be2E-yRbM2E9kft807u094xRkT6M9RCVDnuM',
    alt: 'Bộ Gốm Men Rạn Sen Cổ Bát Tràng',
  },
  {
    id: 5,
    title: 'Đường Mật Hoa Dừa Hữu Cơ',
    location: 'Giồng Trôm, Bến Tre',
    category: 'Thực phẩm',
    stars: '★★★★★ 5 SAO',
    desc: 'Công ty Sokfarm Bến Tre • Thu mật hoa dừa tự nhiên, chỉ số đường huyết thấp GI.',
    code: 'MS: BT-5S-011',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwwNUSjhtXtInw1xa6y2E7jflX9Pp_1FMbfkY8TmaPw8WzG2egnd4JMJyS2fwVm_lMYqWm81ouOQVCB_CTDmY6tjapZH2y_gkQK6mPf1wFPrvkXSTPkoLauOTVPynh1BiS6efJh6t0I0l0OV582mQO5GVkpJZIjDcjosQEaCWP4iUm8uAFRoOoZNrgG3WLM-yVQMHholj7aZgIwuNpirdFgcAUJOYj7m0S0WvE3Eo',
    alt: 'Đường Mật Hoa Dừa Hữu Cơ',
  },
  {
    id: 6,
    title: 'Mật Ong Rừng Tràm U Minh',
    location: 'U Minh Hạ, Cà Mau',
    category: 'Thực phẩm',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Gác Kèo Ong Rừng U Minh • Phương thức gác kèo di sản văn hóa phi vật thể.',
    code: 'MS: CM-5S-007',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0lNzxmGh6E9_nfraBD5aUDeuBvHFcXir66-HPpOxStcgEuqXB5udjnciMrrLbfadnCLofiGRUMD7yw57wUL9a9i2qdz9JgvPnRJ2FvfgmMed4x2Xd9hqUrIt7dWwG5klLthJdvAqCjVMlCdpJS2SyAzFs9dtiJjedWuGad50lcJLdfhtVgLCw3F3kufEIYHP4ARTjX4nH31Cv9y7I52qrticsaEzWzHmziDPOMSI',
    alt: 'Mật Ong Rừng Tràm U Minh',
  },
  {
    id: 7,
    title: 'Mắm Tôm Đặc Sản Ba Làng',
    location: 'Thị xã Nghi Sơn, Thanh Hóa',
    category: 'Thực phẩm',
    stars: '★★★★★ 5 SAO',
    desc: 'Công ty CP CB Hải sản Ba Làng • Tôm moi biển tươi ủ muối hạt tinh khiết 12 tháng.',
    code: 'MS: TH-5S-016',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqlnu4DYiwmKzr7vwgetjv5okLkDq3hGCHVZ9ArsbQ88TvG0MkWUuQGkZyTPb8Zod4Fs2nLtmpxg8fmzL6Q7TaNkqweCA_7DeN4mUYDsxwCOEsBmaztu6qRlQHeMX9Sx6_aBMBcLbur1b0cmzJTSPRdmYBY3x256TSig6Cj-1qRtNBl5foXQs6iDV8tLWlFxCWWxqgiiZifzgDPRERv-V6OtOtqHKfBG5tgDWscgA',
    alt: 'Mắm Tôm Đặc Sản Ba Làng',
  },
  {
    id: 8,
    title: 'Hạt Điều Rang Củi Bù Đăng',
    location: 'Bù Đăng, Bình Phước',
    category: 'Nông sản',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Nông nghiệp Bù Đăng • Phương pháp rang củi lửa nhỏ giữ trọn vẹn vị béo ngậy.',
    code: 'MS: BP-5S-022',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAveGuoPq1O335qzWLQbf9AodHQuuShtNnOhOC7tClwDpBS9EM5870yGHkihXVKyZ8kazB1iqDZZ4yH_Qlsa2SkfyWBL5tSNBMLYOJb151oUeMt_uTJStl4NRVyZhyxif_672pU-EWmFPgANzNOE0p93-2JehFjSXBBUtivf-gtlURLrhy83hZ4DV2lzuqgKe3uYRv4X2ZsYMlfD9El_-rMbCr4kG5LlmEDhNL_8fk',
    alt: 'Hạt Điều Rang Củi Bù Đăng',
  },
  {
    id: 9,
    title: 'Chiếu Cói Nghệ Thuật Nga Sơn',
    location: 'Nga Sơn, Thanh Hóa',
    category: 'Thủ công',
    stars: '★★★★★ 5 SAO',
    desc: 'Làng nghề Chiếu Cói Nga Sơn • Sợi cói đồng mặn dẻo dai kết hợp kỹ thuật dệt hoa đôi.',
    code: 'MS: TH-5S-005',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_hLfy5JpetOYjqzHxNPLgfO4M5bT4GsWOTElqJGSf0VzOBh5Xd8QI9M2QT5hzKrgSx37WfSDL4J0DLxR6NXBBe7K1gBJlEDaj7oMGRQD1_FzcSebqrCa9RJb-4GdlXzoaPxsF_7wyddZo2zHYmbw8avsdGt3xtrf3GB8VgAR66Fwo7QH2j5iGdOxbkgIV9FKHnFypHkk2h66S9ZAcdWsb-nO4UOd3Kwb7LaiFB0',
    alt: 'Chiếu Cói Nghệ Thuật Nga Sơn',
  },
  {
    id: 10,
    title: 'Bưởi Đường Lá Cam Tân Triều',
    location: 'Vĩnh Cửu, Đồng Nai',
    category: 'Nông sản',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Nông nghiệp Tân Triều • Thổ nhưỡng cù lao phù sa sông Đồng Nai trù phú.',
    code: 'MS: DN-5S-033',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjhp-Ii1DU1p0Yt6EGJFy0VUn5Xe_gw0AfgO_Mi7lNdrGE6f-nXuZr2NxQIiMKmCJmZcUueI9gpSPobgvW7xV4glwJ92WCoCey9p7TO5sHZX_0KSULXoZrYyogCpSv9pkAiNmyeRThGHtzfJturD39XRG0Xn_WwwWPcxKaSoqz3cbSC_VY93r3VftbQzdZZQTaTEwNjvWPoVhLtc_vG8b-JTE6JyS7iYeP-Rzqahs',
    alt: 'Bưởi Đường Lá Cam Tân Triều',
  },
  {
    id: 11,
    title: 'Miến Dong Cự Đà Truyền Thống',
    location: 'Quốc Oai, Hà Nội',
    category: 'Thực phẩm',
    stars: '★★★★★ 5 SAO',
    desc: 'HTX Miến Cự Đà • Tinh bột củ dong riềng đỏ nguyên chất không phụ gia tẩy trắng.',
    code: 'MS: HN-5S-018',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGHAuMsFxWeFDsOoyuamE091ZODRnkOpDLVlxYj-pudzJyjIb-klpO73azvZwbocCjlAKxYZAV-TRncci22ADyT0ZLYU31Y9ZEjS7x_dNXc1cxzjw6_nBeje9Tlwo4vXkip7mc0rH2olGQ7TTlzSJVbk8oNlS3mSAF3OzVPYaOvv-NEJ0ZrIfsdIz-XtQlk_bAw4fY0YtS7T33TLh82CYD_OITb7h4XpOLK5TCZo0',
    alt: 'Miến Dong Cự Đà Truyền Thống',
  },
  {
    id: 12,
    title: 'Sôcôla Nguyên Bản Alluvia',
    location: 'Châu Thành, Bến Tre',
    category: 'Thực phẩm',
    stars: '★★★★★ 5 SAO',
    desc: 'Công ty TNHH Ca Cao Xuân Cương • Hạt ca cao Trinitario phù sa sông Mekong.',
    code: 'MS: BT-5S-041',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbCPc8vyKr3LqKq83M78oshcOUHaV74YuzfvQmZYlqaHO6IybyTEzYHaK9Gv-O8D2m6RK3x7fHBYYLP99taNNUnCbaLnXOhCOuMbvf6gga-XX6T5PJpg5qHaNxV3JpTYQtpHn6-ZbVbFCAk0nKyYzwalIHD_xbjXurcPkv7zArmhDppulwKV_9H-xPQLQ6vYb1o5DhsiZAC7ueMNHxja9Uj9xtR2KAiorQ39OWm_c',
    alt: 'Sôcôla Nguyên Bản Alluvia',
  },
];

export function StarCategorizedProductsGridSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-[#d5e1dc] pb-3">
        <h3 className="text-xl font-bold font-headline-sm text-primary">Danh mục Sản phẩm Phân hạng OCOP</h3>
        <div className="flex items-center gap-3 text-xs text-on-surface-variant">
          <span>Sắp xếp:</span>
          <select
            className="bg-transparent border border-[#d5e1dc] rounded px-2.5 py-1 text-xs text-primary font-medium focus:outline-none"
            aria-label="Sắp xếp sản phẩm"
          >
            <option>Mới công nhận nhất (2024)</option>
            <option>Theo thứ tự hạng sao cao nhất</option>
            <option>Tên A - Z</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {STAR_PRODUCTS.map((prod) => (
          <article
            key={prod.id}
            className="bg-surface-container-lowest border border-[#d5e1dc] rounded overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8efea]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={prod.image}
                alt={prod.alt}
               loading="lazy" decoding="async"/>
              <div className="absolute top-2.5 left-2.5 bg-[#C89B3C] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                {prod.stars}
              </div>
              <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-medium px-2 py-0.5 rounded border border-[#d5e1dc]">
                {prod.category}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">pin_drop</span> {prod.location}
                </p>
                <h4 className="font-headline-sm font-bold text-base text-primary mt-1 line-clamp-1 group-hover:text-secondary transition-colors">
                  {prod.title}
                </h4>
                <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                  {prod.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[#eaf0ee] flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant font-mono">{prod.code}</span>
                <a
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-[#1F4D3A] text-white text-xs font-semibold hover:bg-primary transition-colors"
                  href="#"
                >
                  Tìm hiểu nguồn gốc
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Phân trang Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8">
        <button
          className="h-9 w-9 flex items-center justify-center rounded border border-[#d5e1dc] text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
          disabled
          aria-label="Trang trước"
          type="button"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>
        <button
          className="h-9 w-9 flex items-center justify-center rounded bg-primary text-white font-bold text-sm"
          type="button"
        >
          1
        </button>
        <button
          className="h-9 w-9 flex items-center justify-center rounded border border-[#d5e1dc] text-on-surface hover:border-primary hover:text-primary font-medium text-sm transition-colors"
          type="button"
        >
          2
        </button>
        <button
          className="h-9 w-9 flex items-center justify-center rounded border border-[#d5e1dc] text-on-surface hover:border-primary hover:text-primary font-medium text-sm transition-colors"
          type="button"
        >
          3
        </button>
        <span className="px-2 text-on-surface-variant">...</span>
        <button
          className="h-9 w-9 flex items-center justify-center rounded border border-[#d5e1dc] text-on-surface hover:border-primary hover:text-primary font-medium text-sm transition-colors"
          type="button"
        >
          45
        </button>
        <button
          className="h-9 w-9 flex items-center justify-center rounded border border-[#d5e1dc] text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
          aria-label="Trang sau"
          type="button"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
