'use client';

import { CharacterPic } from "@/app/banners/[id]/page";

export const LastDrops = ({ drops }: {drops: any[]}) => {
    return (
        <div className="basis-[100px] w-full bg-gray-700 flex flex-col shrink-0 grow-0 pb-5 pt-3 gap-3 justify-center">
            <p className="text-center font-bold text-3xl">Последние дропы</p>
            <div className="flex flex-row justify-center gap-3">{drops.map(el => <CharacterPic img={el.item.image} key={el.id} />)}</div>
        </div>
    )
}