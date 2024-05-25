import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const robotoSlab = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '100', '300', '500', '700', '900']
})
export const metadata: Metadata = {
  title: 'Song Repertory',
  description: 'App for mangament of song repertory for musicians and bands 🎸'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className} ${inter.className} `}>
        {children}
      </body>
    </html>
  )
}
