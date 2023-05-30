import { Banner as BannerType, } from '@/app/page'
import { Header } from '@/header'
import Image from 'next/image'
import { GachaWidget } from '@/gacha/button';

const getBanner = async (id: string) =>
  await fetch('http://localhost:7253/banners/' + id)
    .then(v => v.json()) as BannerType;

const getBannerHistory = async (id: string) =>
  await fetch('http://localhost:7253/banners/' + id + '/history', {next: {revalidate: .1}})
    .then(v => v.json()) as any[];

const getBannerItems = async (id: string) =>
  await fetch('http://localhost:7253/banners/' + id + '/items')
    .then(v => v.json()) as any[];

export default async function Page({ params }: {
  params: Record<string, string>
}) {
  const id = params.id
  const banner = await getBanner(id)
  const bannerHistory = await getBannerHistory(id)
  const items = await getBannerItems(id)

  return (
    <main className="flex min-h-screen flex-col bg-gray-900 items-center w-full">
      <Header />
      <BannerPage banner={banner} history={bannerHistory} items={items} />
    </main>
  )
}

const BannerPlusHistory = ({banner, bannerHistory}: {banner: BannerType, bannerHistory: any[]}) => {
  return (
    <div>
      <Banner banner={banner} />
      <HistoryFeed bannerHistory={bannerHistory}/>
    </div>
  )
}

const BannerPage = ({ banner, history, items }: { banner: BannerType, history: any[], items: any[] }) => {
  return (
    <div className='flex flex-row'>
      <BannerPlusHistory banner={banner} bannerHistory={history}/>
      <PossibleDrop items={items} />
    </div>
  )
}

const PossibleDrop = ({ items }: { items: any[] }) => {
  return (
    <div className='flex flex-col items-center w-[900px] my-[35px] gap-5'>
      <p className='text-2xl font-bold'>Возможный дроп</p>
      <div className='bg-gray-700 w-[700px] h-[720px] rounded-2xl flex justify-start py-5 px-5'>
        <div className='flex flex-col justify-start gap-5'>
          <p className='text-xl font-bold'>5★ Персонажи</p>
          <div className='flex flex-row gap-5'>
            {items.filter(el => el.type === 5).map(el => (<CharacterPic img={el.image} />))}
          </div>
          <div>
            <p className='text-xl font-bold'>4★ Персонажи и предметы</p>
            <div className='flex flex-row gap-5 flex-wrap flex-basis-[77%] gap-y-[20px]'>
              {items.filter(el => el.type === 4).map(el => (<CharacterPic img={el.image} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type BannerComponentProps = {
  img: string
}

const Banner = ({ banner }: {banner: BannerType}) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center my-[35px]'>
      <Image
        src={"http://localhost:7253/static/" + banner.imagePath}
        alt={'Banner1'}
        width={900}
        height={706.25}
        className='rounded-2xl'
      />
      <GachaWidget />
    </div>
  )
}

const HistoryFeed = ({bannerHistory}: {bannerHistory: any[]}) => {
  return (
    <div className='w-[900px] h-[132px] bg-gray-700 flex flex-col rounded-2xl'>
      <p className='text-lg px-[15px] mt-[15px] font-bold'>История баннера:</p>
      <div className='flex flex-row mt-[5px] ml-[15px] gap-6'>
        {bannerHistory.map(el => (<CharacterPic img={el.item.image} />))}
      </div>
    </div>
  )
}

type CharacterPicProps = {
  img: string
}

export const CharacterPic = ({ img }: CharacterPicProps) => {
  return (
    <div className='bg-gray-900 rounded-xl'>
      <Image
        src={"http://localhost:7253/static/" + img}
        alt='Picture'
        width={70}
        height={70}
      />
    </div>
  )
}