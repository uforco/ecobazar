import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE( req: NextRequest, {params}:{params: Promise<{cartid: string}>}){
    try{
        const cartid = (await params).cartid
        const data = await serverFetching(`/add-to-card/${cartid}`,{
            method: "DELETE"
        }).then((res) => res.json())
        return NextResponse.json(data)
    } catch (err) {
        console.log('internal server Error - cart delete', err)
    }
}