import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Generate a passphrase',
  description: 'Generate a passphrase'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-background'>
      <body className={`overflow-hidden ${inter.className}`}>{children}</body>
    </html>
  )
}
