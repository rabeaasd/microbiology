import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

// ✅ Use Inter (clean, modern Google font)
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Microbiology Quiz",
  description: "Test your knowledge of microbiology interactively.",
}

// ✅ Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
