import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const response = await serverFetching('/bestrateddealproduct');
    if (!(response instanceof Response)) {
      //console.log('internal server Error - bestrateddealproduct')
      return NextResponse.json([])
    }
    const data = await response.json();
    return NextResponse.json(data)
  } catch (err) {
    //console.log('internal server Error - bestrateddealproduct', err)
    return NextResponse.json([])
  } finally {
    //console.log('categorie/:id - route api')
  }  
}