import { ReactNode } from 'react'
import { cookies } from 'next/headers'

import { Blur } from '@/components/Blur'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Stripes } from '@/components/Stripes'
import { Profile } from '@/components/Profile'

import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, NextJs, TailwindCss e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="pt-Br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden  border-r border-white/10 px-10 py-6">
            <Blur />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
            <Stripes />
          </div>

          {/* Right */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover px-10 py-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
