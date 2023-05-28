'use client';
import Link from "next/link";
import Image from 'next/image'

export const BannersOnMainPage = () => {
    return (
        <div className= "basis-[100%] flex flex-row gap-[20px] justify-center items-center ">
            <CurrentBannersCollumn />
            <MainBanner link={'Shenhe210323'} img={'assets/BannerImage/shenhe210323.svg'} text={'Шэнь Хэ'} /> 
            <HistoryFeed />
        </div>
    )
}

type BannerComponentProps = { 
    link: string, 
    img: string, 
    text: string, 
}

export const MainBanner = ({ link, img }: BannerComponentProps) => {
    return (
        <Link 
            className='flex py-[70px] drop-shadow-2xl' 
            href={`banners/${link}`}
        >
            <Image
                src={img}
                alt={'Banner1'}
                width={1200}
                height={675}
                className='rounded-2xl'
            />
        </Link>
    )
}

export const BannersInCollumn = ({ link, img, text }: BannerComponentProps) => {
    return (
        <Link 
            className='flex flex-col justify-center items-center py-[2rem] drop-shadow-2xl' 
            href={`banners/${link}`}
        >
            <Image
                src={img}
                alt={'Banner1'}
                width={300}
                height={198.75}
                className='rounded-2xl'
            />
            <p className='text-[16px] font-medium'>{text}</p>
        </Link>
    )
}

export const CurrentBannersCollumn = () => {
    return(
        <div className="flex flex-col justify-start items-center px-10 py-3">
            <BannersInCollumn link={'Ayaka210323'} img={'assets/BannerImage/ayaka210323.svg'} text={'Аяка'} />
            <BannersInCollumn link={'Weapons210323'} img={'assets/BannerImage/weapon210323.svg'} text={'Оружейный Баннер'} />
            <BannersInCollumn link={'Standard'} img={'assets/BannerImage/standard.svg'} text={'Стандартный Баннер'} />
        </div>
    )
}

export const HistoryFeed = () => {
    return(
        <div className="odd:bg-gray-700 even:bg-gray-900 w-[200px] h-[675[px] text-center">
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px] text-xl font-semibold">
                <p>История</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px]">
                <p>Привет</p>
            </div>
        </div>
    )
}