import { Header } from '@/header'
import { LastDrops } from '@/last-drops/widget'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 items-center justify w-full">
      <Header />
      <LastDrops />
    </main>
  )
}
