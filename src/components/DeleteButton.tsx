'use client'

import { api } from '@/lib/api'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

interface IDeleteButtonProps {
  memoryId: string
}

export function DeleteButton({ memoryId }: IDeleteButtonProps) {
  const router = useRouter()

  const handleDeleteMemory = async () => {
    const token = Cookie.get('token')

    await api.delete(`/memories/${memoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    router.back()
  }

  return (
    <button
      onClick={handleDeleteMemory}
      className="flex items-center gap-2 rounded bg-red-700 px-5 py-2 text-xs font-bold text-gray-50 transition-colors hover:bg-red-600"
    >
      <Trash2 />
      <span>Deletar</span>
    </button>
  )
}
