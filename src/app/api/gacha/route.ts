import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const id = body.id

    const fetchData = await fetch(`http://localhost:7253/banners/${id}/gacha`, {
        method: "POST",
        headers: {
            'Cookie': req.headers.get('Cookie')!
        },
    })
    const item = await fetchData.json()
    console.log(item)
    return NextResponse.json(JSON.stringify(item))
}