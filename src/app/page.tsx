import { BannersOnMainPage } from '@/banners-on-main/widget'
import { Header } from '@/header'
import { LastDrops } from '@/last-drops/widget'

export type Banner = {
  name: string,
  type: number,
  timeStart: string,
  timeEnd: string,
  imagePath: string,
  id: string
}

const getCurrentBanners = async () => 
  await fetch('http://localhost:7253/banners/current', {
    next: {
      revalidate: 1
    }
  })
  .then(v => v.json()) as Banner[];

const getLastDrops = async () => 
  await fetch('http://localhost:7253/history', {
    next: {
      revalidate: 1
    }
  }).then(v => v.json()) as any[];

const getUserDrops = async () => 
  await fetch('http://localhost:7253/history/inventory')
  .then(v => v.json()).catch(e => []) as any[];

export default async function Home() {
  const banners = await getCurrentBanners();
  const drops = await getLastDrops();
  const userDrops = await getUserDrops();
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 items-center w-full">
      <Header />
      <LastDrops drops={drops} />
      <BannersOnMainPage banners={banners} userDrops={userDrops} />
    </main>
  )
}
