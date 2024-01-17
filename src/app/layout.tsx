import type { Metadata } from 'next'
import { Inter, Sora, Syne } from 'next/font/google'
import '@fontsource/satisfy' // Import the Satisfy font
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })
const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={`${inter.className} ${syne.className} ${sora.className} font-satisfy`}>{children}</body>
    </html>
  )
}
