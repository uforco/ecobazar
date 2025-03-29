import serverFetching from "@/lib/serverFetching";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
console.log(body)
  try {
    const data = await serverFetching(`/add-to-card`, {
      method: "POST",
      body: JSON.stringify(body),
    }).then((res) => res.json());

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json([]);
  } finally {
    console.log("add cart api problem");
  }
}
