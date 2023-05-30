'use client';

import { useParams } from "next/navigation";
import { useState } from "react";
import Image  from 'next/image'

const getGacha = async (bannerId: string) => {
    const res = await fetch('/api/gacha', {
        method: 'POST',
        body: JSON.stringify({id: bannerId})
    })

    if (!res.ok) {
        return null
    }

    return await res.json()
}

export const GachaWidget = () => {
    const [isOpen, setOpen] = useState(false);
    const [anim, setAnim] = useState(false)
    const [item, setItem] = useState<any | null>(null)
    const params = useParams()

    const onStart = async () => {
        setItem(null)
        setOpen(true)
        setAnim(true)
        const gachaItem = JSON.parse(await getGacha(params.id))
        setItem(gachaItem)
        setAnim(false)
    }
    console.log(item)
    return (
        <>
            <button onClick={onStart} className="bg-red-900 hover:bg-red-800 transition-all duration-200 ease-in-out text-white font-bold text-2xl py-2 px-4 rounded-full w-[200px] h-[70px]">
                Крутить
            </button>
            { isOpen && 
                <div onClick={() => setOpen(false)} className="absolute inset-0 bg-gray-800 opacity-80 backdrop-blur-md flex justify-center items-center">
                    <div>
                        { anim ? <Animation /> : null }
                        { item && <Image src={'http://localhost:7253/static/' + item.item.image} alt="ewjqkeqw" width={200} height={200} /> }
                    </div>              
                </div> 
            }
        </>
    )
}

const Animation = () => {
    return <div>Анимация.... дайте денег....</div>
}