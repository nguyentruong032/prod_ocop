export async function verifyTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string,
): Promise<{ success: boolean; error?: string }> {
const secretKey = process.env.TURNSTILE_SECRET_KEY;

if (!secretKey) {
  if (process.env.NODE_ENV !== "production") {
    return { success: true }; // [DEV] chỉ bỏ qua ở local
  }
  return { success: false, error: "Hệ thống xác minh bảo mật chưa được cấu hình." };
}

  if (!token) {
    return { success: false, error: "Vui lòng xác minh bảo mật Turnstile." };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const outcome = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (outcome.success) {
      return { success: true };
    }

    return {
      success: false,
      error: "Xác thực bảo mật Turnstile không hợp lệ hoặc đã hết hạn.",
    };
  } catch {
    return {
      success: false,
      error: "Không thể kết nối đến máy chủ xác thực bảo mật.",
    };
  }
}

export default verifyTurnstileToken;
