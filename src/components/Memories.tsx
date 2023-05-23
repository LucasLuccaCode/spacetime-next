'use client'

import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

import { IMemory } from '@/types/memory'

import { api } from '@/lib/api'

import { MemoryCard } from './MemoryCard'
import { EmptyMemories } from './EmptyMemories'

export function Memories() {
  const [memories, setMemories] = useState<IMemory[]>([])

  useEffect(() => {
    fetchMemories()
  }, [])

  const fetchMemories = async () => {
    const token = Cookie.get('token')

    const memoriesResponse = await api.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setMemories(memoriesResponse.data)
  }

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
