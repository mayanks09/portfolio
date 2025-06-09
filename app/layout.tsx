import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full-Stack Developer",
  description:
    "Portfolio of John Doe, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: "full-stack developer, react, next.js, typescript, web development, portfolio",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full-Stack Developer",
    description: "Portfolio of John Doe, a passionate full-stack developer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
