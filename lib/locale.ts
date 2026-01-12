import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"

export const SUPPORTED_LOCALES = ["fr", "en"] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "fr" || value === "en"
}

export function getLocaleFromCookies(cookies: ReadonlyRequestCookies): Locale {
  const value = cookies.get("locale")?.value
  return isLocale(value) ? value : "fr"
}

export async function getMessages(locale: Locale) {
  if (locale === "en") {
    return (await import("../locales/En/common.json")).default
  }
  return (await import("../locales/Fr/common.json")).default
}
