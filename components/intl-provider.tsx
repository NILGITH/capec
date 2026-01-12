"use client"

import * as React from "react"
import { NextIntlClientProvider } from "next-intl"

export function IntlProvider({
  locale,
  messages,
  children,
}: {
  locale: string
  messages: Record<string, unknown>
  children: React.ReactNode
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
