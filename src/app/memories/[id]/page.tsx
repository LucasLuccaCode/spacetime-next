import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'

import { IMemory } from '@/app/page'

import { api } from '@/lib/api'

import { ChevronLeft, Edit, Delete } from 'lucide-react'

dayjs.locale(ptBr)

interface IMemoryProps {
  params: {
    id: string
  }
}

export default async function Memory({ params }: IMemoryProps) {
  const memoryId = params.id

  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${memoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: IMemory = response.data

  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="flex max-w-max items-center gap-1 rounded-full bg-gray-700 p-2 text-sm text-gray-300 transition-colors hover:bg-gray-600"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <time className="-ml-8 flex items-center gap-3 text-sm text-gray-200 before:h-px before:w-5 before:bg-gray-200">
        {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>

      <Image
        src={memory.coverUrl}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />

      <p className="text-gray-1000 text-[16px] leading-normal">
        {memory.content}
      </p>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded bg-red-700 px-5 py-2 text-xs font-bold text-gray-50 transition-colors hover:bg-red-600">
          <Delete />
          <span>Deletar</span>
        </button>
        <button className="flex items-center gap-2 rounded bg-yellow-400 px-5 py-2 text-xs font-bold text-gray-500 transition-colors hover:bg-yellow-300">
          <Edit />
          <span>Editar</span>
        </button>
      </div>
    </div>
  )
}
