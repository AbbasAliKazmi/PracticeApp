import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PracticeApp',
  description: 'Generated by Abbas',
}

import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header 
        style={{
          backgroundColor: "gold",
          padding: "1rem"
        }}>
          <p>This is Header</p>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: "grey",
          padding: "1rem"
        }}>
          <p>This is Footer</p>
        </footer>
      </body>
    </html>
  )
}
