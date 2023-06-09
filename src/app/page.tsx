import { cookies } from 'next/headers'

import { EmptyMemories } from '@/components/EmptyMemories'
import { Memories } from '@/components/Memories'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  return <Memories />
}
