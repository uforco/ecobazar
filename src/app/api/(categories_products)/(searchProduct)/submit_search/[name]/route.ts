import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{name: string}>}) {
    const name = (await params).name;
    try {
        const response = await serverFetching(`/submit-search/${name}`);
        if (!(response instanceof Response)) {
            console.log('internal server Error - submit-search/')
            return NextResponse.json([])
        }
        const data = await response.json();
        // console.log(data)
        return NextResponse.json(data);
    } catch (err) {
        console.log('internal server Error - submit-search/', err)
        return NextResponse.json([])
    } finally {
        console.log('relatedproducts - route api')
    }
}