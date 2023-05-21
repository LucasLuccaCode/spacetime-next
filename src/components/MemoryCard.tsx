import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { ArrowRight } from 'lucide-react'

import { IMemory } from '@/app/page'

dayjs.locale(ptBr)

interface MemoryCardProps {
  memory: IMemory
}

export function MemoryCard({ memory }: MemoryCardProps) {
  return (
    <li className="space-y-4">
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

      <Link
        href={`/memories/${memory.id}`}
        className="hover:text-gay-100 flex items-center gap-2 text-sm text-gray-200"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </li>
  )
}
