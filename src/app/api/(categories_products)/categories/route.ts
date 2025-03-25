import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {

    const url = new URL(request.url)
    const page = url.searchParams.get("page")

    const data = await serverFetching(`/products?page=${page}`).then((res) => res.json())

    const response =  NextResponse.json(data?.products);
    response.headers.set("X-Page-Count", JSON.stringify(data?.total_count))
    return response

  } catch (err) {
    console.log(err)
    return NextResponse.json('internal server Error')
  } finally {
    console.log('categorie/:id - route api')
  }  
}
