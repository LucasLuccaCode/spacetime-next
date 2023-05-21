import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { api } from '@/lib/api'

import { EmptyMemories } from '@/components/EmptyMemories'
import { MemoryCard } from '@/components/MemoryCard'

dayjs.locale(ptBr)

export interface IMemory {
  id: string
  content: string
  coverUrl: string
  createdAt: Date
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const memoriesResponse = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: IMemory[] = memoriesResponse.data
  // console.log(memories)

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <ul className="flex flex-col gap-10">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </ul>
  )
}
