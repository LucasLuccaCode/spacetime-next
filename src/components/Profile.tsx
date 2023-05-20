import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          alt="Foto do usuário"
          className="h-10 w-10 rounded-full"
        />
      </div>

      <p className="max-w-[140px] text-sm leading-snug text-gray-50">
        {name}
        <a href="#" className="block text-red-500 hover:text-red-400">
          Sair
        </a>
      </p>
    </div>
  )
}
