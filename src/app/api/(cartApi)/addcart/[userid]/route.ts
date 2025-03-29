import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest, {params}:{params: Promise<{userid: string}>}){
    const userid = (await params).userid
    try{
        const data = await serverFetching(`/allcardinfo/${userid}`).then((res) => res.json())
        console.log(data)
        return NextResponse.json(data)
    } catch (err) {
        console.log("internal server Error - allcardinfo", err)
        return NextResponse.json([])
    }
}