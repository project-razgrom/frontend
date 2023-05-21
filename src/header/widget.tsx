'use client';
import Image from 'next/image'
import { useState } from 'react'



export const Header = () => {
    return (
        <header className="bg-gray-900 z-50 flex flex-row justify-between px-5 w-full">
            <Menu x={6} />
        </header>
    )
}

type MenuProps = {
    x: number
}

const Menu = ({ x }: MenuProps) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => setOpen(prev => !prev)}>
                <Image src="/dsadsa.png" alt='eqwkjk' width='50' height='50' /> 
                { x }
            </button>
        </>
    )
}

type Banner = {
    img: string,
    name: string,    
}

const Drawer = ({ data }: {data: Banner[]}) => (
    <div className="text-center">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
            Show navigation
        </button>
    </div>
)

