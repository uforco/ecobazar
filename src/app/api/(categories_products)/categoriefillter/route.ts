import { NextRequest, NextResponse } from "next/server";
import serverFetching from "@/lib/serverFetching";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await serverFetching('/categoriefillter').then((res) => res.json())
    return NextResponse.json(data);
  } catch (err) {
    console.log('internal server Error - categoriefillter', err)
    return NextResponse.json([])
  } finally {
    console.log('categoriefillter')
  }
}