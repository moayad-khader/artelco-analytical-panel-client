import type { Metadata } from "next";

import { siteConfig } from "config/site";
import { fontMono, fontSans } from "lib/fonts";
import { cn } from "lib/utils";
// import { Toaster } from "@/components/ui/toaster"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "components/themeProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
  ],
  authors: [
    {
      name: "",
      url: "",
    },
  ],
  creator: "",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              "min-h-screen font-sans antialiased ",
              fontSans.variable,
              fontMono.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              {/* <TailwindIndicator /> */}
            </ThemeProvider>
            {/* <Toaster /> */}
          </body>
        </html>
    </>
  )
}
