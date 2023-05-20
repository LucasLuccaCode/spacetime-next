import { cookies } from 'next/headers'
import { Blur } from '@/components/Blur'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Stripes } from '@/components/Stripes'
import { Profile } from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen w-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden  border-r border-white/10 px-10 py-6">
        <Blur />
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
        <Stripes />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
