import { EventCard } from './EventCard';

interface EventsCalendarHubProps {
  className?: string;
}

export function EventsCalendarHub({ className }: EventsCalendarHubProps) {
  const events = [
    {
      title: 'Hội chợ OCOP Quốc gia 2026 - Giai đoạn 1',
      date: '15 - 18/11/2026',
      location: 'Trung tâm Triển lãm Quốc gia, Hà Nội',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRfi7oEXCeK4AXQIIRhkm7cQ4ULDYf0IZgGISUSM9uS_3NybevcFgtjJfnHhq98EAobenvVhnsHZ38BrX280-Hfd1Y9vs6AtyJhtjyrvc8EwQ9MpEkWcT60f2bqUre2RSQNV5Napg1-9Erzyb3mtmllOnR6R_4ax-VRIUfSfTTUalVMhyT2iE6G86XPnWSlu5NQtg6PoS-sMnD3AvL7ZZIY9S00yC80kqGQf90iAE',
      alt: 'Không gian hội chợ OCOP rộng rãi với các gian hàng trình bày đặc sản các tỉnh, đèn lồng đỏ vàng, băng rôn chào mừng, người tham quan đông đúc.',
      status: 'upcoming' as const,
      description: 'Hội chợ quy tụ hơn 500 sản phẩm OCOP 3-5 sao từ 63 tỉnh thành. Diễn ra các buổi trình diễn nấu ăn trực tiếp, hội thảo truy xuất nguồn gốc và kết nối cung - cầu.',
      link: '#',
    },
    {
      title: 'Diễn đàn Xúc tiến Thương mại Số vùng miền núi',
      date: '22 - 23/11/2026',
      location: 'Khách sạn Mường Thanh, Lào Cai',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkIL5uLiszk4Zk1iPaDHG9SDUoXBKTLFfVEaorN9FbN2VQQm5j-R_PVaAucsO7DNOe9k5IGrTn6UOhBwLvMy6GJGkPe8zioM-RqokbzpH559lXWP-SBq2g96VhWNeJTHf9PZafYEdXHLVWjQUK_vhk7_GZ8zi1u4mXfjuTEj4FjVTQOHFJO_crboaD5Wkpdt7jY4Qdr5FZtXgHepyyoQHZ1xDLrF5y1sVyV0w-L4',
      alt: 'Hội nghị thảo luận chính sách thương mại điện tử cho vùng núi, màn hình hiển thị bản đồ số hóa vùng nguyên liệu, đại biểu các tỉnh đông bảng.',
      status: 'upcoming' as const,
      description: 'Tập trung giải pháp thương mại điện tử cho các sản phẩm OCOP vùng cao. Ra mắt sàn TMĐT "OCOP Digital" kết nối trực tiếp nông dân - người tiêu dùng.',
      link: '#',
    },
    {
      title: 'Workshop: Chuẩn hóa bao bì thân thiện môi trường',
      date: '28/11/2026',
      location: 'Trung tâm Hội nghị VCCI, TP.HCM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqfEpZlqidqajik2gOU0x0_yGeiK5NKVPOqaVh3meBWTSRNTuYGx1yaNlBmMBIA4q9IOb3RW-WoS5UMogdcFqg7lp4W2XZQ4dIfyocMgZFTlM11uIqdJoXkuU0qbdEWC1I0H8W301PLH0xY2S49h-DHjdocLxI1WsG4MWX3NiUbxROpBuTFKcft85vu3VhJJJz5-QQw_51lXTVXxS_0D4ZuJ1sc3-SY9D8Ujropow',
      alt: 'Buổi workshop với các mẫu bao bì phân hủy sinh học, túi giấy kraft, hộp mía, chuyên gia thuyết trình về tiêu chuẩn bao bì xanh cho xuất khẩu.',
      status: 'registration' as const,
      description: 'Hướng dẫn kỹ thuật chuyển đổi bao bì nhựa sang vật liệu tái chế, phân hủy. Hỗ trợ 50% chi phí thiết kế bao bì mới cho sản phẩm OCOP 4-5 sao.',
      link: '#',
    },
    {
      title: 'Tuần lễ OCOP Đồng bằng Sông Cửu Long',
      date: '05 - 10/12/2026',
      location: 'Quảng trường 30/4, Cần Thơ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1LEKw4aCODgV45-iQaN0q8iZ_gEeTYAjLyEO02l94ftTwYR47TLIyUqEYfDWOPA42VYpbB7HMyZxedzAeT6MjvQ0zZRLlW0GO-3ZBBWd2aAqpSE3dgBPvGVftTiaG8MBsyw5cYsS4BlBChA-ADgUVUFVJC9KYa3QGx_CGfEFw85py_DUI81xNIlS2nryXrM7a1FQ5_Fft0DJzzhdqhISc04k2vD7nQuldZkpn6hA',
      alt: 'Lễ khai mạc tuần lễ OCOP tại Cần Thơ, sàn diễn trung tâm, các gian hàng đặc sản Nam Bộ: bơ, sầu riêng, gạo ST25, nước mắm Phú Quốc.',
      status: 'upcoming' as const,
      description: 'Triển lãm - Bán hàng đặc sản 13 tỉnh miền Tây. Chương trình "Một ngày một sao" vinh danh sản phẩm tiêu biểu từng tỉnh. Kết nối đơn hàng xuất khẩu qua cảng Cái Mép.',
      link: '#',
    },
    {
      title: 'Hội nghị thẩm định OCOP 5 sao cấp Quốc gia',
      date: '18/10/2026',
      location: 'Bộ Nông nghiệp & PTNT, Hà Nội',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Lf3CR6Q6gDdPr73iwIfUaD7VGQCwBqbMZD_B5lM2GMxNfM0SAK3d_Tdoa0ikaGhMHoZkSdYhAbK2FmfbSaehb3ZlLJ8frhd_HEjHXM4Ub8t4pRdo5grlQUx7j31XWuo16QQURkbL6lZQcK5Hm8TRvBE6ocpCCHkpAo0muESOzzCK07SHW8Vb4rE0VrFGLc3yeFEQGM3sFVtDPU2geoxnWuEyWd_UT48qnzzXow',
      alt: 'Phòng họp trang trọng tại Bộ NN&PTNT, hội đồng thẩm định 15 chuyên gia xem xét hồ sơ 5 sao, màn trình chiếu tiêu chuẩn quốc tế.',
      status: 'ended' as const,
      description: 'Xét duyệt 47 hồ sơ đề cử chứng nhận 5 sao. 38 hồ sơ đạt chuẩn, 9 hồ sơ yêu cầu bổ sung chứng minh năng lực xuất khẩu. Công bố kết quả ngày 25/10.',
      link: '#',
    },
    {
      title: 'Chương trình đào tạo Kỹ thuật số cho HTX',
      date: '20 - 22/10/2026',
      location: 'Trường Cao đẳng Nông nghiệp Hà Nội',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS6aFP6GKdjnwEa_gHT6MWH7G2yDappzViuwKx6ULQAGRPB5uejZ4yME1WrAjwdDl1QojvPMfDx5eONRfNS1XkDUUZKAzrx-ZgHyYnq_qYK4mNKKg0UGLyIiRi2XEUaFd9JsitfWkcr_8nuRgJynqgbsv2ZVmN_XMFq2zXX16rrA-Gz3RYOo-B-BOWW2h0bzdRm3ohJrBnKR_9tAtgMd6Z81W4S778HqNaCW7Tq0c',
      alt: 'Lớp học thực hành trên máy tính, giảng viên hướng dẫn HTX sử dụng phần mềm quản lý chuỗi cung ứng, truy xuất nguồn gốc QR code.',
      status: 'ended' as const,
      description: 'Đào tạo 120 cử nhân quản trị HTX về: ERP nông nghiệp, marketing số, truy xuất nguồn gốc blockchain. Cấp chứng chỉ "Quản trị số OCOP" mức cơ bản.',
      link: '#',
    },
  ];

  return (
    <section className={`max-w-[1360px] mx-auto px-gutter-mobile md:px-margin-tablet lg:px-margin py-space-xl ${className || ''}`} id="lich-su-kien">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">Lịch sự kiện</span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">Nhật ký Hoạt động & Hội chợ</h2>
        </div>
        <a className="mt-space-md md:mt-0 inline-flex items-center text-secondary font-label-md text-label-md uppercase tracking-wider hover:text-on-secondary-container transition-colors" href="#">
          Xem toàn bộ lịch
          <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {events.map((event, index) => (
          <EventCard key={index} {...event} variant={index < 2 ? 'featured' : 'default'} />
        ))}
      </div>
    </section>
  );
}