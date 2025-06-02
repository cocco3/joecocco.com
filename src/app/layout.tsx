import type { Metadata } from 'next'
import { Geist, Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  variable: '--font-fira-code',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Joe Cocco',
  description: 'Joe Cocco is a front-end developer based out of San Francisco.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  )
}
