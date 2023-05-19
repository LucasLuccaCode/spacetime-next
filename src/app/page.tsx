export default function Home() {
  return (
    <main className="grid min-h-screen w-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden  border-r border-white/10 px-10 py-6"></div>

      {/* Right */}
      <div className="flex flex-col p-16">
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
