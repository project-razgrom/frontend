import { BannersOnMainPage } from '@/banners-on-main/widget'
import { Header } from '@/header'
import { LastDrops } from '@/last-drops/widget'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 items-center w-full">
      <Header />
      <LastDrops />
      <BannersOnMainPage />
    </main>
  )
}
