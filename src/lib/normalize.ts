/**
 * Normalize Vietnamese text for search indexing and matching:
 * - NFD decomposition
 * - Remove diacritical marks
 * - Replace đ/Đ with d/D
 * - Convert to lower case
 * - Collapse whitespace
 */
export function normalize(text: string): string {
  if (!text) return "";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export default normalize;
