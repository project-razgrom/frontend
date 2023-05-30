'use client';
import Link from "next/link";
import Image from 'next/image'
import { Banner } from "@/app/page";

export const BannersOnMainPage = ({banners, userDrops}: {banners: Banner[], userDrops: any[]}  ) => {
    const mainBanner = banners[0]
    const lessBanners = banners.slice(1, 4)

    return (
        <div className= "basis-[100%] flex flex-row gap-[20px] justify-center items-center ">
            <CurrentBannersCollumn other={lessBanners}/>
            <MainBanner link={mainBanner.id} img={`http://localhost:7253/static/${mainBanner.imagePath}`} text={mainBanner.name} /> 
            <HistoryFeed history={userDrops} />
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
            className='flex my-[70px] drop-shadow-2xl' 
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
                src={'http://localhost:7253/static/' + img}
                alt={'Banner1'}
                width={300}
                height={198.75}
                className='rounded-2xl'
            />
            <p className='text-[16px] font-medium'>{text}</p>
        </Link>
    )
}

export const CurrentBannersCollumn = ({other}: {other: any[]}) => {
    return(
        <div className="flex flex-col justify-start items-center px-10 py-3">
            {other.map(el => <BannersInCollumn link={el.id} img={el.imagePath} text={el.name} key={el.id} />)}
        </div>
    )
}

export const HistoryFeed = ({ history }: { history: {item: {type: number, name: string}, id: string}[] }) => {
    return(
        <div className="w-[200px] h-[675[px] text-center min-h-fit ">
            <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px] text-xl font-semibold flex justify-center items-center rounded-t-xl">
                <p>История</p>
            </div>
            { history.map(el => (
                <HistoryTile rarity={el.item.type} name={el.item.name} key={el.id}/>
            )) }            
        </div>
    )
}

const HistoryTile = ({rarity, name}: {rarity: number, name: string}) => {
    return(
        <div className="odd:bg-gray-700 even:bg-gray-900 h-[40px] flex justify-center last:rounded-b-xl">
            <p className="flex justify-center items-center">{rarity}★ {name}</p>
        </div>
    )
}