import { Blur } from '@/components/Blur'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

export default function Home() {
  return (
    <main className="grid min-h-screen w-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden  border-r border-white/10 px-10 py-6">
        <Blur />
        <SignIn />
        <Hero />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não criou nenhuma lembrança, comece a{' '}
            <a href="#" className="hover:text-gray-50">
              criar agora
            </a>{' '}
          </p>
        </div>
      </div>
    </main>
  )
}
