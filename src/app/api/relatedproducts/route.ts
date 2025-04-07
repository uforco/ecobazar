import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const product_id = searchParams.get('product_id')
    try {
        const response = await serverFetching(`/relatedproducts?category=${category}&product_id=${product_id}`);
        if (!(response instanceof Response)) {
          //console.log('internal server Error - relatedproducts')
          return NextResponse.json([])
        }
        const data = await response.json();
        //console.log(data)
        return NextResponse.json(data);
      } catch (err) {
        //console.log('internal server Error - relatedproducts', err)
        return NextResponse.json([])
      } finally {
        //console.log('relatedproducts - route api')
      }
}