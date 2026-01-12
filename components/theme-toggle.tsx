"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("controls.theme")

  const isDark = theme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={t("toggle")}
      title={t("toggle")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-white hover:text-ci-orange"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
