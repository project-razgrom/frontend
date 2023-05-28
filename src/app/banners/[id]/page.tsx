import { Header } from '@/header'
import Image from 'next/image'

export default function Page (){
  return(
    <main className="flex min-h-screen flex-col bg-gray-900 items-center w-full">
      <Header />
      <BannerPage />
    </main>
  )
}

const BannerPlusHistory = () => {
  return(
    <div>
    <Banner img={'assets/BannerImage/shenhe210323.svg'} />
    <HistoryFeed />
    </div>
  )
}

const BannerPage = () => {
  return(
      <div className='flex flex-row'>
        <BannerPlusHistory />
        <PossibleDrop />
      </div>
  )
}

const PossibleDrop = () => {
  return (
    <div className='flex flex-col items-center w-[900px] my-[35px] gap-5'>
      <p className='text-2xl font-bold'>Возможный дроп</p>
      <div className='bg-gray-700 w-[700px] h-[700px] rounded-2xl flex justify-center py-5'>
        <div className='flex flex-col justify-start'>
        <p>Повышенный шанс дропа</p>
        <Image 
          src=''
          alt='Possible Item'
        />
        </div>
        <div>
        <p>5★</p>
        </div>
      </div>
    </div>
  )
}

type BannerComponentProps = { 
  img: string 
}

const Banner = ({img}: BannerComponentProps) => {
  return(
    <div className='flex flex-col gap-5 justify-center items-center my-[35px]'>
      <Image 
        src={"http://localhost:3000/"+img}
        alt={'Banner1'}
        width={900}
        height={506.25}
        className='rounded-2xl'
      />
      <button className="bg-red-900 hover:bg-red-800 text-white font-bold text-2xl py-2 px-4 rounded-full w-[200px] h-[50px]">
        Крутить
      </button>
    </div>
  )
}

const HistoryFeed = () => {
  return(
    <div>

    </div>
  )
}