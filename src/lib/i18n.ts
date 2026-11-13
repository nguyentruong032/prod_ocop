import vi from "@/i18n/vi.json";
import en from "@/i18n/en.json";

export type SupportedLocale = "vi" | "en";
export const SUPPORTED_LOCALES: SupportedLocale[] = ["vi", "en"];
export const DEFAULT_LOCALE: SupportedLocale = "vi";

export function getDictionary(locale: string = DEFAULT_LOCALE) {
  if (locale === "en") {
    return en;
  }
  return vi;
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}
