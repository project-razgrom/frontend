import { ServerResponse } from "http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const fetchingData = await fetch('http://localhost:7253/login', {
        method: 'POST',
        body: JSON.stringify(await req.json()),
        headers: {
            'Content-Type': 'application/json',  
        },
        
    })
    console.log(fetchingData.ok)
    if (!fetchingData.ok) {
        return NextResponse.error()
    }
    const res = new NextResponse()
    res.headers.set('Set-Cookie', fetchingData.headers.get('Set-Cookie')!)
    return res;
}   

export async function GET(req:Request) {
    const fetchData = await fetch(`http://localhost:7253/my`, {
        method: "GET",
        headers: {
            'Cookie': req.headers.get('Cookie')!,
            'Accept': 'application/json'
        },
    })
    const res = await fetchData.json()
    console.log(res)
    return NextResponse.json(res)
}
