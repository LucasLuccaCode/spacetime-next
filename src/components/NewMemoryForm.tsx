'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

import { Camera } from 'lucide-react'

import { api } from '@/lib/api'

import { MediaPicker } from './MediaPicker'

export function NewMemoryForm() {
  const router = useRouter()

  const handleCreateMemory = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    let { coverUrl, content, isPublic } = Object.fromEntries(formData)

    if (coverUrl) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', coverUrl)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileURL
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl: coverUrl || '',
        content,
        isPublic,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex flex-wrap items-center  gap-4">
        <label
          htmlFor="coverUrl"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Adicionar imagem
        </label>

        <label
          htmlFor="isPublic"
          className="flex  items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>

      <MediaPicker />

      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-sm leading-relaxed text-gray-50 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, videos e relatos sobre essa experiência que você quer lembrar para sempre."
      />

      <button
        type="submit"
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-zinc-900 transition-colors hover:bg-green-600"
      >
        Criar
      </button>
    </form>
  )
}
