'use client';
import Link from "next/link";
import Image from 'next/image'

export const BannersOnMainPage = () => {
    return (
            <div className="bg-gray-900 basis-[100%]">
                <MainBanner link={'Shenhe210323'} img={'assets/BannerImage/shenhe210323.svg'} text={'Шэнь Хэ'} />  
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
            className='flex py-[70px]' 
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