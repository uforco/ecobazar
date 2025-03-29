import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{id: string}>}) {
    const id = (await params).id;
      try {
        const data = await serverFetching(`/order_history_details/${id}`).then((res) => res.json())
        // console.log(data)
        return NextResponse.json(data);
      } catch (err) {
            console.log(`internal server Error - /order_history_details/${id}`, err)
            return NextResponse.json([])
      } finally {
            console.log('relatedproducts - route api')
      }
}