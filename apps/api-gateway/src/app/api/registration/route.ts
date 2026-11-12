// API Route: /api/registration
// Handles OCOP registration submissions (POST only)

import { NextRequest, NextResponse } from 'next/server';
import { RegistrationSubmission, RegistrationResponse, REVALIDATE_TAGS } from '@ocop/shared-types';

// In-memory storage for demo - in production use database
const submissions: RegistrationSubmission[] = [];

// Validation helper
function validateRegistration(data: unknown): { valid: boolean; errors: string[]; submission?: RegistrationSubmission } {
  const errors: string[] = [];
  const d = data as Record<string, unknown>;

  // Required fields
  if (!d.fullName || typeof d.fullName !== 'string' || d.fullName.trim().length < 2) {
    errors.push('Họ tên không hợp lệ (tối thiểu 2 ký tự)');
  }
  if (!d.email || typeof d.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    errors.push('Email không hợp lệ');
  }
  if (!d.phone || typeof d.phone !== 'string' || !/^(0|\+84)[0-9]{9,10}$/.test(d.phone.replace(/\s/g, ''))) {
    errors.push('Số điện thoại không hợp lệ (VD: 090 123 4567)');
  }
  if (!d.entityType || !['hop-tac-xa', 'doanh-nghiep', 'ho-gia-dinh', 'ca-nhan'].includes(d.entityType as string)) {
    errors.push('Loại chủ thể không hợp lệ');
  }
  if (!d.productName || typeof d.productName !== 'string' || d.productName.trim().length < 3) {
    errors.push('Tên sản phẩm không hợp lệ (tối thiểu 3 ký tự)');
  }
  if (!d.productCategory || typeof d.productCategory !== 'string') {
    errors.push('Danh mục sản phẩm không hợp lệ');
  }
  if (!d.province || typeof d.province !== 'string') {
    errors.push('Tỉnh/Thành phố không hợp lệ');
  }
  if (!d.description || typeof d.description !== 'string' || d.description.trim().length < 50) {
    errors.push('Mô tả sản phẩm quá ngắn (tối thiểu 50 ký tự)');
  }

  // Optional fields validation
  if (d.website && typeof d.website === 'string' && !/^https?:\/\/.+/.test(d.website)) {
    errors.push('Website không hợp lệ (phải bắt đầu bằng http:// hoặc https://)');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  const submission: RegistrationSubmission = {
    id: `reg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    fullName: d.fullName.trim(),
    email: d.email.trim().toLowerCase(),
    phone: d.phone.trim(),
    entityType: d.entityType as RegistrationSubmission['entityType'],
    entityName: typeof d.entityName === 'string' ? d.entityName.trim() : undefined,
    taxCode: typeof d.taxCode === 'string' ? d.taxCode.trim() : undefined,
    productName: d.productName.trim(),
    productCategory: d.productCategory.trim(),
    province: d.province.trim(),
    district: typeof d.district === 'string' ? d.district.trim() : undefined,
    ward: typeof d.ward === 'string' ? d.ward.trim() : undefined,
    description: d.description.trim(),
    website: typeof d.website === 'string' ? d.website.trim() : undefined,
    certifications: Array.isArray(d.certifications) ? d.certifications.filter(c => typeof c === 'string') : [],
    exportMarkets: Array.isArray(d.exportMarkets) ? d.exportMarkets.filter(m => typeof m === 'string') : [],
    status: 'pending',
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return { valid: true, errors: [], submission };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { valid, errors, submission } = validateRegistration(body);

    if (!valid || !submission) {
      const response: RegistrationResponse = {
        success: false,
        message: 'Dữ liệu đăng ký không hợp lệ',
        errors,
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Store submission (in production: save to database)
    submissions.push(submission);

    // In production: trigger email notification, webhook, etc.
    console.log('New OCOP registration:', submission.id, submission.productName);

    const response: RegistrationResponse = {
      success: true,
      message: 'Đăng ký OCOP thành công! Chúng tôi sẽ liên hệ trong 3-5 ngày làm việc.',
      submissionId: submission.id,
      trackingCode: `OCOP-${submission.id.split('-')[1].toUpperCase()}`,
    };

    return NextResponse.json(response, {
      status: 201,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    const response: RegistrationResponse = {
      success: false,
      message: 'Lỗi máy chủ, vui lòng thử lại sau',
      errors: ['Internal server error'],
    };
    return NextResponse.json(response, { status: 500 });
  }
}

// GET method not allowed for registration endpoint
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed. Use POST to submit registration.',
      errors: ['GET method not supported'],
    },
    { status: 405 }
  );
}