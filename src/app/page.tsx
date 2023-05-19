import { Blur } from '@/components/Blur'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Stripes } from '@/components/Stripes'

export default function Home() {
  return (
    <main className="grid min-h-screen w-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden  border-r border-white/10 px-10 py-6">
        <Blur />
        <SignIn />
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
