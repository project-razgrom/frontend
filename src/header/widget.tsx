'use client';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <header className="bg-gray-900 z-[1000000] basis-[80px] flex flex-row justify-between px-5 w-full shadow-lg shrink-0 grow-0">
            <div className='flex flex-row gap-[72px]'>
                <Menu toggleOpen={() => setOpen(prev => !prev)} />
                <Title />
            </div>
            <div className='flex flex-row items-center gap-6 px-[80px]'>
                <ProfilePicture />
                <Profile />
                
            </div>
        </header>
        <Drawer isOpen={open} toggleOpen={() => setOpen(prev => !prev)}/>
        </>
    )
}

type MenuProps = {
    toggleOpen: () => void
}

const Menu = ({ toggleOpen }: MenuProps) => {

    return (
        <>
            <button className='min-w-[60px] min-h-[60px] flex justify-center items-center' onClick={toggleOpen}>
                <Image src="http://localhost:3000/assets/Menu Button.svg" alt='Menu' width='40' height='26' />
            </button>
        </>
    )
}

type Banner = {
    img: string,
    name: string,    
}

const Drawer = ({ isOpen, toggleOpen }: {isOpen: boolean, toggleOpen: () => void}) => {
    return (
        <div id='drawerOverlay'
            className="flex justify-start items-end bg-gray-800 absolute inset-0 bg-opacity-80 transition-all duration-100 ease-in-out backdrop-blur-sm"
            style={{
                zIndex: isOpen ? '1000' : '-1'
            }}
            onClick={toggleOpen} 
        >
            <div 
                className='h-[calc(100%-80px)] bg-gray-900 transition-all duration-100 ease-in-out flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto gap-[2rem] px-10 py-3'
                style={{
                    maxWidth: isOpen ? '330px' : '0'
                }} 
                onClick={e => e.stopPropagation()}
            >
                <BannerComponent link={'.1'} img={'assets/BannerImage/baidzhu020523.svg'} text={'Бай Чжу'}/>
                <BannerComponent link={'.1'} img={'assets/BannerImage/ganyu020523.svg'} text={'Гань Юй'}/>
                <BannerComponent link={'.1'} img={'assets/BannerImage/nilou120423.svg'} text={'Нилу'}/>
            </div>
        </div>
    )
}


const Title = () => {
    return (
        <div className='flex items-center justify-center'>
            <Link href='/' className='font-bold text-5xl text-titles-color-900'>GenshinScam</Link> 
        </div>
    )
}

const Profile = () => {
    return (
        <Link href='/authorize' className='flex items-center justify-center'>
            <span className='font-regular text-xl text-titles-color-900'>Log In/Sign In</span> 
        </Link>
    )
}

const ProfilePicture = () => {
    return (
        <Link href='/authorize' className="w-[40px] h-[40px] rounded-[50%] bg-gray-800 flex items-center justify-center">
            <p className="text-header-color-900">M</p>
        </Link>
    )
}

const HistoryFeed = () => {
    return (
        <div className='h-[130px] w-full bg-titles-color-900'>

        </div>
    )
}

type BannerComponentProps = { 
    link: string, 
    img: string, 
    text: string, 
}

export const BannerComponent = ({ link, img, text }: BannerComponentProps) => {
    return (
        <Link 
            className='flex flex-col h-full w-full justify-center items-center gap-1' 
            href={`banners/${link}`}
        >
            <Image 
                src={"http://localhost:3000/"+img}
                alt={'Banner1'}
                width={300}
                height={150}
                className='rounded-2xl'
            />
            <p className='text-[16px] font-medium'>{text}</p>
        </Link>
    )
}
