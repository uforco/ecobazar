import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await serverFetching('/products').then((res) => res.json())
    return NextResponse.json(data);
  } catch (err) {
    console.log(err)
    return NextResponse.json('internal server Error')
  } finally {
    console.log('categorie/:id - route api')
  }  
}
