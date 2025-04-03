import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const response = await serverFetching('/categoriefillter');
    if (response instanceof Response) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      console.log('internal server Error - categoriefillter')
      return NextResponse.json([])
    }
  } catch (err) {
    console.log('internal server Error - categoriefillter', err)
    return NextResponse.json([])
  } finally {
    console.log('categoriefillter')
  }
}