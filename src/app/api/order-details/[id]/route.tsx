import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{id: string}>}) {
    const id = (await params).id;
      try {
        const response = await serverFetching(`/order_history_details/${id}`);
        if (!(response instanceof Response)) {
            console.log(`internal server Error - /order_history_details/${id}`)
            return NextResponse.json([])
        }
        const data = await response.json();
        // console.log(data)
        return NextResponse.json(data);
      } catch (err) {
            console.log(`internal server Error - /order_history_details/${id}`, err)
            return NextResponse.json([])
      } finally {
            console.log('relatedproducts - route api')
      }
}