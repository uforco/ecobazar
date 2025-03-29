import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await serverFetching('/bestrateddealproduct').then((res) => res.json())
    console.log(Object.keys(data[0]) )
    return NextResponse.json(data)
  } catch (err) {
    console.log('internal server Error - bestrateddealproduct', err)
    return NextResponse.json([])
  } finally {
    console.log('categorie/:id - route api')
  }  
}