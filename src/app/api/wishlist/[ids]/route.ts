import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params: Promise<{ids: string}>}) {
    const productIds = (await params).ids;
    try {
        const response = await serverFetching(`/wishlist?${productIds}`);
        if (!(response instanceof Response)) {
          //console.log('internal server Error - wishlist')
          return NextResponse.json([])
        }
        const data = await response.json();
        // //console.log(data)
        return NextResponse.json(data);
      } catch (err) {
        //console.log('internal server Error - wishlist', err)
        return NextResponse.json([])
      } finally {
        //console.log('relatedproducts - route api')
      }
}