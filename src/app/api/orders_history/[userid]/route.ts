import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{userid: string}>}) {
    const userid = (await params).userid;
    try {
        const data = await serverFetching(`/orders_history/${userid}`).then((res) => res.json())
        // console.log(data)
        return NextResponse.json(data);
      } catch (err) {
        console.log(err)
        return NextResponse.json('internal server Error')
      } finally {
        console.log('relatedproducts - route api')
      }
}