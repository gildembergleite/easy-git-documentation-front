import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { RootProvider } from './provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Easy Git - Documentação',
  description: 'Gestão de usuários e configurações do Git',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'flex flex-col w-full min-h-screen justify-start items-center bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
