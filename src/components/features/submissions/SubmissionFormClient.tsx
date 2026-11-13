"use client";

import React, { useState, useRef } from "react";
import { z } from "zod";
import type { Province } from "@/payload-types";

export interface SubmissionFormClientProps {
  provinces: Province[];
}

const clientSchema = z.object({
  type: z.enum(["ARTICLE", "OCOP_PROFILE", "ADVERTISEMENT", "FEEDBACK"], {
    message: "Vui lòng chọn loại hồ sơ gửi.",
  }),
  targetCollection: z.string().optional(),
  targetKind: z.string().optional(),
  province: z.string().optional(),
  senderName: z
    .string()
    .min(2, "Họ và tên người gửi phải có ít nhất 2 ký tự.")
    .max(100, "Họ và tên không được quá 100 ký tự."),
  senderOrganization: z.string().max(200).optional(),
  senderPhone: z
    .string()
    .min(9, "Số điện thoại không hợp lệ (tối thiểu 9 số).")
    .max(15, "Số điện thoại không được quá 15 số."),
  senderEmail: z.string().email("Địa chỉ email không đúng định dạng."),
  title: z
    .string()
    .min(5, "Tiêu đề hồ sơ / bài viết phải có ít nhất 5 ký tự.")
    .max(350, "Tiêu đề không được quá 350 ký tự."),
  summary: z
    .string()
    .min(10, "Tóm tắt nội dung phải có ít nhất 10 ký tự.")
    .max(1000, "Tóm tắt không được quá 1000 ký tự."),
  contentText: z
    .string()
    .min(20, "Nội dung chi tiết phải có ít nhất 20 ký tự.")
    .max(20000, "Nội dung chi tiết không được quá 20.000 ký tự."),
  consent: z.boolean().refine((val) => val === true, {
    message: "Bạn cần đồng ý với điều khoản sử dụng và chính sách bảo mật.",
  }),
});

const MAX_FILE_SIZE = 20 * 1024 * 1024;
const MAX_TOTAL_SIZE = 50 * 1024 * 1024;

export function SubmissionFormClient({ provinces }: SubmissionFormClientProps) {
  const [formData, setFormData] = useState({
    type: "ARTICLE" as "ARTICLE" | "OCOP_PROFILE" | "ADVERTISEMENT" | "FEEDBACK",
    targetCollection: "articles",
    targetKind: "NEWS",
    province: "",
    senderName: "",
    senderOrganization: "",
    senderPhone: "",
    senderEmail: "",
    title: "",
    summary: "",
    contentText: "",
    consent: false,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successCode, setSuccessCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);

    if (files.length + newFiles.length > 5) {
      setErrors((prev) => ({
        ...prev,
        attachments: "Chỉ được đính kèm tối đa 5 tệp tài liệu.",
      }));
      return;
    }

    let currentTotal = files.reduce((acc, f) => acc + f.size, 0);
    for (const f of newFiles) {
      if (f.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({
          ...prev,
          attachments: `Tệp ${f.name} vượt quá dung lượng 20MB.`,
        }));
        return;
      }
      currentTotal += f.size;
    }

    if (currentTotal > MAX_TOTAL_SIZE) {
      setErrors((prev) => ({
        ...prev,
        attachments: "Tổng dung lượng các tệp vượt quá 50MB.",
      }));
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next.attachments;
      return next;
    });
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleCopyCode = async () => {
    if (!successCode) return;
    try {
      await navigator.clipboard.writeText(successCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const result = clientSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (path) fieldErrors[String(path)] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("type", formData.type);
      if (formData.targetCollection)
        submitData.append("targetCollection", formData.targetCollection);
      if (formData.targetKind)
        submitData.append("targetKind", formData.targetKind);
      if (formData.province)
        submitData.append("province", formData.province);
      submitData.append("senderName", formData.senderName);
      if (formData.senderOrganization)
        submitData.append("senderOrganization", formData.senderOrganization);
      submitData.append("senderPhone", formData.senderPhone);
      submitData.append("senderEmail", formData.senderEmail);
      submitData.append("title", formData.title);
      submitData.append("summary", formData.summary);
      submitData.append("contentText", formData.contentText);
      submitData.append("consent", String(formData.consent));

      files.forEach((file) => {
        submitData.append("attachments", file);
      });

      const res = await fetch("/api/public/submissions", {
        method: "POST",
        body: submitData,
      });

      const data = (await res.json()) as { success?: boolean; trackingCode?: string; error?: string };

      if (!res.ok || !data.success) {
        setServerError(
          data.error || "Gửi bài không thành công. Vui lòng kiểm tra lại thông tin.",
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessCode(data.trackingCode || "OCOP-2026-SUCCESS");
      setIsSubmitting(false);
    } catch {
      setServerError("Không thể kết nối đến máy chủ tiếp nhận. Vui lòng thử lại sau.");
      setIsSubmitting(false);
    }
  };

  if (successCode) {
    return (
      <div className="bg-surface-container-lowest border border-primary/20 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-md">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[36px]">
            check_circle
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3">
          Hồ Sơ Đã Được Gửi Thành Công!
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
          Tòa soạn OCOP Việt Nam đã tiếp nhận thông tin và chuyển giao ban chuyên môn thẩm định. Hãy lưu lại mã hồ sơ dưới đây để tra cứu tiến độ xử lý.
        </p>

        <div className="bg-surface-container p-4 sm:p-6 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container-high">
          <div>
            <span className="text-xs uppercase text-on-surface-variant font-semibold tracking-wider block mb-1">
              Mã theo dõi hồ sơ
            </span>
            <span className="font-mono text-xl sm:text-2xl font-bold text-primary tracking-wider">
              {successCode}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyCode}
            className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shrink-0 shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? "check" : "content_copy"}
            </span>
            <span>{copied ? "Đã sao chép!" : "Sao chép mã"}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setSuccessCode(null);
            setFormData({
              type: "ARTICLE",
              targetCollection: "articles",
              targetKind: "NEWS",
              province: "",
              senderName: "",
              senderOrganization: "",
              senderPhone: "",
              senderEmail: "",
              title: "",
              summary: "",
              contentText: "",
              consent: false,
            });
            setFiles([]);
          }}
          className="text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1"
        >
          <span>Gửi thêm hồ sơ khác</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {serverError && (
        <div className="p-4 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">
            error
          </span>
          <span>{serverError}</span>
        </div>
      )}

      {/* Group 1: Category & Type */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-2xs space-y-6">
        <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            category
          </span>
          <span>1. Phân Loại Nội Dung Tiếp Nhận</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Mục đích gửi <span className="text-error">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as typeof formData.type,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface"
            >
              <option value="ARTICLE">Bài viết / Tin tức / Câu chuyện</option>
              <option value="OCOP_PROFILE">Hồ sơ Chủ thể OCOP / Sản phẩm</option>
              <option value="ADVERTISEMENT">Liên hệ Quảng bá &amp; Xúc tiến</option>
              <option value="FEEDBACK">Góp ý &amp; Phản ánh độc giả</option>
            </select>
            {errors.type && (
              <p className="text-xs text-error mt-1">{errors.type}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Địa phương liên quan
            </label>
            <select
              value={formData.province}
              onChange={(e) =>
                setFormData({ ...formData, province: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface"
            >
              <option value="">-- Toàn quốc / Chưa xác định --</option>
              {provinces.map((p) => (
                <option key={p.id} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Group 2: Submitter Information */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-2xs space-y-6">
        <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            person
          </span>
          <span>2. Thông Tin Người Gửi &amp; Đơn Vị</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Họ và tên <span className="text-error">*</span>
            </label>
            <input
              type="text"
              value={formData.senderName}
              onChange={(e) =>
                setFormData({ ...formData, senderName: e.target.value })
              }
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
            />
            {errors.senderName && (
              <p className="text-xs text-error mt-1">{errors.senderName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Cơ quan / Hợp tác xã / Doanh nghiệp
            </label>
            <input
              type="text"
              value={formData.senderOrganization}
              onChange={(e) =>
                setFormData({ ...formData, senderOrganization: e.target.value })
              }
              placeholder="HTX Nông nghiệp Tân Cương"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Số điện thoại liên hệ <span className="text-error">*</span>
            </label>
            <input
              type="tel"
              value={formData.senderPhone}
              onChange={(e) =>
                setFormData({ ...formData, senderPhone: e.target.value })
              }
              placeholder="0912 345 678"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
            />
            {errors.senderPhone && (
              <p className="text-xs text-error mt-1">{errors.senderPhone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Địa chỉ email nhận phản hồi <span className="text-error">*</span>
            </label>
            <input
              type="email"
              value={formData.senderEmail}
              onChange={(e) =>
                setFormData({ ...formData, senderEmail: e.target.value })
              }
              placeholder="email@domain.com"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
            />
            {errors.senderEmail && (
              <p className="text-xs text-error mt-1">{errors.senderEmail}</p>
            )}
          </div>
        </div>
      </div>

      {/* Group 3: Content */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-2xs space-y-6">
        <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            description
          </span>
          <span>3. Nội Dung Bài Viết / Hồ Sơ</span>
        </h3>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
            Tiêu đề bài viết / Tên hồ sơ <span className="text-error">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Ví dụ: Giới thiệu mô hình sản xuất Chè hữu cơ OCOP 5 sao tại Tân Cương"
            className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
          />
          {errors.title && (
            <p className="text-xs text-error mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
            Tóm tắt nội dung <span className="text-error">*</span>
          </label>
          <textarea
            rows={3}
            value={formData.summary}
            onChange={(e) =>
              setFormData({ ...formData, summary: e.target.value })
            }
            placeholder="Tóm tắt ngắn gọn mục đích và điểm cốt lõi của thông tin (1–3 câu)"
            className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
          />
          {errors.summary && (
            <p className="text-xs text-error mt-1">{errors.summary}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
            Nội dung chi tiết <span className="text-error">*</span>
          </label>
          <textarea
            rows={8}
            value={formData.contentText}
            onChange={(e) =>
              setFormData({ ...formData, contentText: e.target.value })
            }
            placeholder="Nhập toàn văn bài viết hoặc mô tả đầy đủ về chủ thể, sản phẩm, quy trình sản xuất..."
            className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-outline"
          />
          {errors.contentText && (
            <p className="text-xs text-error mt-1">{errors.contentText}</p>
          )}
        </div>
      </div>

      {/* Group 4: File Attachments */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-2xs space-y-4">
        <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-primary">
            attach_file
          </span>
          <span>4. Tệp Đính Kèm (Ảnh &amp; Tài Liệu)</span>
        </h3>
        <p className="text-xs text-on-surface-variant">
          Tối đa 5 tệp (JPG, PNG, WebP, PDF, DOCX). Dung lượng tối đa 20MB/tệp, tổng không quá 50MB.
        </p>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"
          className="hidden"
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-surface-container-high hover:border-primary p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors bg-surface-container-low/50"
        >
          <span className="material-symbols-outlined text-[32px] text-primary mb-2">
            cloud_upload
          </span>
          <span className="text-sm font-semibold text-primary">
            Nhấn để chọn tệp từ máy tính
          </span>
          <span className="text-xs text-on-surface-variant mt-1">
            Đã chọn {files.length}/5 tệp
          </span>
        </div>

        {errors.attachments && (
          <p className="text-xs text-error mt-1">{errors.attachments}</p>
        )}

        {files.length > 0 && (
          <div className="space-y-2 mt-4">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-surface-container text-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                    draft
                  </span>
                  <span className="font-medium text-on-surface truncate">
                    {file.name}
                  </span>
                  <span className="text-on-surface-variant/70 shrink-0">
                    ({(file.size / (1024 * 1024)).toFixed(1)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-error hover:text-error/80 p-1"
                  aria-label="Xóa tệp"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    close
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Group 5: Consent & Submit */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-2xs space-y-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="mt-1 w-4 h-4 text-primary rounded-sm border-outline focus:ring-primary"
          />
          <span className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Tôi cam kết các thông tin và tài liệu cung cấp là chính xác, không vi phạm bản quyền hay bí mật thương mại, và đồng ý với{" "}
            <a
              href="/vi/chinh-sach-bao-mat"
              target="_blank"
              className="text-primary underline font-medium hover:text-secondary"
            >
              Chính sách bảo mật
            </a>{" "}
            của Cổng thông tin điện tử OCOP Việt Nam.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-error">{errors.consent}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[20px]">
                progress_activity
              </span>
              <span>Đang gửi hồ sơ tới Tòa soạn...</span>
            </>
          ) : (
            <>
              <span>Gửi Hồ Sơ &amp; Bài Viết</span>
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default SubmissionFormClient;
