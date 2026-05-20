import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import ColorModeProvider from "./components/ColorModeProvider"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Zayviana Singletary",
  description: "Believer • Builder • Creator • Founder • Learner",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-z.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon-z.png" type="image/png" />
      </head>
      <body className={montserrat.className}>
        <ColorModeProvider>
          {children}
        </ColorModeProvider>
      </body>
    </html>
  )
}
