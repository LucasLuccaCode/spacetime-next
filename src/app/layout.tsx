import { ReactNode } from 'react'

import './globals.css'

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, NextJs, TailwindCss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br">
      <body
        className="font-sans"
      >
        {children}
      </body>
    </html>
  )
}
