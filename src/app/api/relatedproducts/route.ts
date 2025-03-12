import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const product_id = searchParams.get('product_id')
    try {
        const data = await serverFetching(`/relatedproducts?category=${category}&product_id=${product_id}`).then((res) => res.json())
        console.log(data)
        return NextResponse.json(data);
      } catch (err) {
        console.log(err)
        return NextResponse.json('internal server Error')
      } finally {
        console.log('relatedproducts - route api')
      }
}