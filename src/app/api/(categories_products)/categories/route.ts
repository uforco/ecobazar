import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {

    const url =  new URL(request.url)
    const page = url.searchParams.get("page") || 0

    const data = await serverFetching(`/products?page=${page}`).then((res) => res.json())

    const response = NextResponse.json([...data]);
    // const response =  NextResponse.json([...data?.products]);
    //TODO: pagination setup with server data
    // response.headers.set("X-Page-Count", JSON.stringify(data?.total_count))
    return response

  } catch (err) {
    console.log(`internal server Error - /products?page`, err)
    return NextResponse.json([])
  } finally {
    console.log('categorie/:id - route api')
  }  
}
