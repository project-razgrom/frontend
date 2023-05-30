import { ServerResponse } from "http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const fetchingData = await fetch('http://localhost:7253/logout', {
        method: 'POST',
    })
    const res = new NextResponse()
    res.headers.set('Set-Cookie', fetchingData.headers.get('Set-Cookie')!)
    return res;
}   