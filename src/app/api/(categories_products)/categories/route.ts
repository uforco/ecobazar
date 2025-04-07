import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {

    const url =  new URL(request.url)
    const page = url.searchParams.get("page") || 0

    const response = await serverFetching(`/products?page=${page}`)
    if (!(response instanceof Response)) {
      //console.log(`internal server Error - /product/${page}`)
      return NextResponse.json([])
    }
    const data = await response.json();
    const nextdata = NextResponse.json([...data]);
    // const response =  NextResponse.json([...data?.products]);
    //TODO: pagination setup with server data
    // response.headers.set("X-Page-Count", JSON.stringify(data?.total_count))
    return nextdata

  } catch (err) {
    //console.log(`internal server Error - /products?page`, err)
    return NextResponse.json([])
  } finally {
    //console.log('categorie/:id - route api')
  }  
}
