import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
// import { Inter, Poppins } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })
// const poppins = Poppins({ 
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins"
// })

export const metadata = {
  title: "CAPEC - Cellule d'Analyse de Politiques Économiques du CIRES",
  description:
    "Centre de recherche et d'analyse dédié à l'étude des politiques économiques pour un développement durable et inclusif.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="fr" suppressHydrationWarning>
     <head>
     <link rel="icon" href="/logocapec.ico" />
     </head>
        <body /* className={`${inter.className} ${poppins.variable}`} */>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
    </html>
  )
}



