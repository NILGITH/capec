"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"

type Locale = "fr" | "en"

function setLocaleCookie(locale: Locale) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`
}

export function LanguageToggle() {
  const router = useRouter()
  const currentLocale = useLocale() as Locale
  const t = useTranslations("controls.language")

  const nextLocale: Locale = currentLocale === "fr" ? "en" : "fr"

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => {
        setLocaleCookie(nextLocale)
        router.refresh()
      }}
      aria-label={t("toggle")}
      title={t("toggle")}
      className="text-white hover:text-ci-orange gap-2"
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-semibold">{nextLocale.toUpperCase()}</span>
    </Button>
  )
}
