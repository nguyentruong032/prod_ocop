"use client";

import React, { useState } from "react";

export interface StandardItem {
  id: string;
  code: string;
  name: string;
  authority: string;
  targetMarkets: string[];
  productCategories: string[];
  validity: string;
  auditFrequency: string;
  keyRequirements: string[];
  traceabilityLevel: "Cao" | "Rất cao" | "Nghiêm ngặt";
  ocopBenefit: string;
}

export const STANDARDS_DATABASE: StandardItem[] = [
  {
    id: "globalgap",
    code: "GlobalGAP",
    name: "Thực hành Nông nghiệp Tốt Toàn cầu",
    authority: "FoodPLUS GmbH (Đức / Toàn cầu)",
    targetMarkets: ["EU", "US", "JAPAN"],
    productCategories: ["Trái cây tươi", "Rau củ", "Trà", "Thủy sản nuôi"],
    validity: "1 năm",
    auditFrequency: "Hàng năm + Kiểm tra đột xuất",
    keyRequirements: [
      "Quản lý an toàn thực phẩm từ đất trồng đến thu hoạch",
      "Kiểm soát dư lượng thuốc BVTV & hóa chất nghiêm ngặt",
      "Bảo đảm phúc lợi lao động nông trại và bảo vệ môi trường",
    ],
    traceabilityLevel: "Rất cao",
    ocopBenefit: "Tấm vé thông hành xuất khẩu vào các chuỗi siêu thị lớn tại Châu Âu và Bắc Mỹ.",
  },
  {
    id: "usda-organic",
    code: "USDA Organic",
    name: "Chứng nhận Hữu cơ Bộ Nông nghiệp Hoa Kỳ",
    authority: "USDA (Bộ Nông nghiệp Hoa Kỳ)",
    targetMarkets: ["US", "GLOBAL"],
    productCategories: ["Gạo hữu cơ", "Cà phê", "Hạt tiêu", "Dược liệu", "Chè"],
    validity: "1 năm",
    auditFrequency: "Hàng năm",
    keyRequirements: [
      "Đất trồng không dùng phân bón hóa học/thuốc trừ sâu trong 3 năm",
      "100% không biến đổi gen (Non-GMO)",
      "Vùng đệm cách ly với nguồn ô nhiễm lân cận",
    ],
    traceabilityLevel: "Nghiêm ngặt",
    ocopBenefit: "Tăng giá trị xuất khẩu lên gấp 2–3 lần so với sản phẩm thông thường tại thị trường Mỹ.",
  },
  {
    id: "eu-organic",
    code: "EU Organic",
    name: "Tiêu chuẩn Nông nghiệp Hữu cơ Liên minh Châu Âu",
    authority: "Ủy ban Châu Âu (EC)",
    targetMarkets: ["EU"],
    productCategories: ["Trái cây sấy", "Dầu dừa", "Mắc ca", "Gia vị", "Trà"],
    validity: "1 năm",
    auditFrequency: "Hàng năm",
    keyRequirements: [
      "Tuyệt đối không sử dụng thuốc trừ sâu tổng hợp và phân bón hóa học",
      "Duy trì và tăng cường độ phì nhiêu sinh học của đất",
      "Ghi chép nhật ký canh tác số hóa minh bạch",
    ],
    traceabilityLevel: "Nghiêm ngặt",
    ocopBenefit: "Tạo uy tín tuyệt đối tại 27 quốc gia EU, hưởng thuế suất ưu đãi theo EVFTA.",
  },
  {
    id: "halal",
    code: "Halal (JAKIM/GCC)",
    name: "Chứng nhận Chuẩn Hồi giáo Quốc tế",
    authority: "JAKIM (Malaysia) / GSO (Vùng Vịnh)",
    targetMarkets: ["HALAL", "ASEAN", "MIDDLE_EAST"],
    productCategories: ["Bánh kẹo", "Nước ép", "Thực phẩm chế biến", "Dầu ăn", "Mỹ phẩm thiên nhiên"],
    validity: "1 - 3 năm",
    auditFrequency: "Hàng năm",
    keyRequirements: [
      "Không chứa bất kỳ thành phần nào từ lợn hoặc động vật cấm theo luật Hồi giáo",
      "Dây chuyền sản xuất cách ly hoàn toàn, thanh trùng theo nghi thức Halal",
      "Không sử dụng cồn và chất kích thích trong công thức sản phẩm",
    ],
    traceabilityLevel: "Rất cao",
    ocopBenefit: "Mở ra thị trường 2 tỷ người tiêu dùng Hồi giáo toàn cầu với nhu cầu nhập khẩu rất lớn.",
  },
  {
    id: "jas-organic",
    code: "JAS Organic",
    name: "Tiêu chuẩn Nông nghiệp Nhật Bản",
    authority: "Bộ Nông lâm Thủy sản Nhật Bản (MAFF)",
    targetMarkets: ["JAPAN"],
    productCategories: ["Trà xanh", "Gạo hữu cơ", "Nấm", "Rau củ quả", "Dược liệu"],
    validity: "1 năm",
    auditFrequency: "Hàng năm",
    keyRequirements: [
      "Quy trình kiểm soát đất và nước theo chuẩn phòng thí nghiệm khắt khe nhất",
      "Quản lý vi sinh vật và kim loại nặng đạt giới hạn cực thấp",
      "Thẩm định hồ sơ bởi tổ chức chứng nhận được MAFF ủy nhiệm",
    ],
    traceabilityLevel: "Nghiêm ngặt",
    ocopBenefit: "Tiêu chuẩn vàng để sản phẩm OCOP Việt Nam chinh phục các đối tác nhập khẩu Nhật Bản.",
  },
  {
    id: "haccp-iso",
    code: "HACCP & ISO 22000",
    name: "Hệ thống Phân tích Mối nguy & Kiểm soát Điểm tới hạn",
    authority: "Codex Alimentarius / ISO",
    targetMarkets: ["GLOBAL", "EU", "US", "JAPAN", "CHINA", "HALAL"],
    productCategories: ["Mọi nhóm thực phẩm & đồ uống chế biến"],
    validity: "3 năm",
    auditFrequency: "Giám sát định kỳ 12 tháng/lần",
    keyRequirements: [
      "Xác định và kiểm soát toàn bộ các điểm tới hạn (CCP) trong chuỗi sản xuất",
      "Quy trình vệ sinh nhà xưởng (SSOP) và thực hành sản xuất tốt (GMP)",
      "Kế hoạch phòng ngừa và ứng phó sự cố thu hồi sản phẩm khẩn cấp",
    ],
    traceabilityLevel: "Cao",
    ocopBenefit: "Điều kiện tiên quyết bắt buộc để OCOP đưa hàng vào hệ thống bán lẻ hiện đại toàn cầu.",
  },
];

export function StandardsMatrixClient() {
  const [selectedMarket, setSelectedMarket] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("globalgap");

  const filtered = STANDARDS_DATABASE.filter((item) => {
    const matchMarket =
      selectedMarket === "ALL" ||
      item.targetMarkets.includes(selectedMarket) ||
      item.targetMarkets.includes("GLOBAL");
    const matchQuery =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.productCategories.some((c) =>
        c.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchMarket && matchQuery;
  });

  return (
    <div className="w-full bg-surface-container-lowest rounded-xl border border-surface-container/80 shadow-xs p-5 sm:p-6 mb-8 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-container pb-4">
        <div>
          <span className="text-xs font-bold text-secondary uppercase tracking-wider">
            Công cụ Tra cứu Dữ liệu Tương tác (Phase 2)
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-primary mt-1">
            Ma trận Tiêu chuẩn &amp; Chứng nhận Xuất khẩu OCOP
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            Đối chiếu điều kiện kỹ thuật, yêu cầu truy xuất và thị trường mục tiêu giữa các bộ tiêu chuẩn quốc tế.
          </p>
        </div>

        {/* Market Filter Chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: "ALL", label: "Tất cả thị trường" },
            { id: "EU", label: "EU (Châu Âu)" },
            { id: "US", label: "Hoa Kỳ" },
            { id: "JAPAN", label: "Nhật Bản" },
            { id: "HALAL", label: "Halal" },
          ].map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedMarket(m.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedMarket === m.id
                  ? "bg-primary text-white shadow-xs"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm theo tên tiêu chuẩn, ngành hàng (ví dụ: Trà, Cà phê, Gạo, Dược liệu)..."
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-surface-container-low border border-surface-container/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-on-surface-variant/60"
        />
      </div>

      {/* Matrix Cards / Accordion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                isExpanded
                  ? "border-primary bg-surface-beige/30 shadow-xs"
                  : "border-surface-container/60 bg-surface-container-lowest hover:border-surface-container"
              }`}
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="cursor-pointer flex items-start justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-mono text-outline">
                      {item.authority}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary mt-1.5">
                    {item.name}
                  </h3>
                </div>
                <span className="material-symbols-outlined text-outline text-[20px] transition-transform shrink-0 mt-1">
                  {isExpanded ? "expand_less" : "expand_more"}
                </span>
              </div>

              {/* Summary line */}
              <div className="mt-2 text-xs text-on-surface-variant flex items-center gap-2 flex-wrap">
                <span>
                  Thị trường:{" "}
                  <strong className="text-secondary">
                    {item.targetMarkets.join(", ")}
                  </strong>
                </span>
                <span>•</span>
                <span>
                  Truy xuất:{" "}
                  <strong className="text-primary">{item.traceabilityLevel}</strong>
                </span>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-surface-container/60 flex flex-col gap-3 text-xs leading-relaxed animate-in fade-in duration-150">
                  <div>
                    <span className="font-bold text-primary block mb-1">
                      Nhóm nông sản OCOP áp dụng:
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.productCategories.map((c, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-surface-container rounded text-[11px] text-on-surface"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-primary block mb-1">
                      Yêu cầu kỹ thuật cốt lõi:
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-on-surface-variant">
                      {item.keyRequirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-surface-container-low p-2.5 rounded-lg flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">
                      verified
                    </span>
                    <div>
                      <span className="font-bold text-secondary">Giá trị cho chủ thể OCOP: </span>
                      <span className="text-on-surface-variant">{item.ocopBenefit}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-outline pt-1">
                    <span>Thời hạn chứng chỉ: {item.validity}</span>
                    <span>Tần suất đánh giá: {item.auditFrequency}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StandardsMatrixClient;
