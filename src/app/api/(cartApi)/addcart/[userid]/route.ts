import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest, {params}:{params: Promise<{userid: string}>}){
    const userid = (await params).userid
    try{
        const response = await serverFetching(`/allcardinfo/${userid}`);
        if (response instanceof Response) {
            const data = await response.json();
            return NextResponse.json(data);
        } else {
            //console.log("Unexpected response type")
            return NextResponse.json([])
        }
    } catch (err) {
        //console.log("internal server Error - allcardinfo", err)
        return NextResponse.json([])
    }
}