import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{name: string}>}) {
    const name = (await params).name;
    try {
        const data = await serverFetching(`/submit-search/${name}`).then((res) => res.json())
        // console.log(data)
        return NextResponse.json(data);
    } catch (err) {
        console.log(err)
        return NextResponse.json('internal server Error')
    } finally {
        console.log('relatedproducts - route api')
    }
}