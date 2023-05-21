import Link from 'next/link'

import { ChevronLeft } from 'lucide-react'

import { NewMemoryForm } from '@/components/NewMemoryForm'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex max-w-max items-center gap-1 rounded-full bg-gray-700 p-2 text-sm text-gray-300 transition-colors hover:bg-gray-600"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
