import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

// Only two families, unlike the portfolio: Geist is loaded there but never mapped in
// @theme inline, so it renders nowhere. --font-heading is registered for token parity
// but deliberately unused — headings are JetBrains Mono, separated by size and weight.
const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const siteUrl = "https://substance.jmcr.beer"
const title = "Substance Icons"
const description =
  "140 customizable, scalable SVG icons for React. Tree-shakeable, typed, and dependency-free."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Substance Icons",
  },
  description,
  keywords: [
    "Substance Icons",
    "React icons",
    "SVG icons",
    "icon library",
    "tree-shakeable",
    "TypeScript",
    "Intello",
  ],
  authors: [{ name: "José Campillo", url: "https://jmcr.beer" }],
  creator: "José Campillo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Chema12071",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "tracking-tight antialiased text-pretty [&_p]:leading-relaxed",
        "font-mono",
        jetbrainsMono.variable,
        spaceGroteskHeading.variable
      )}
    >
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
