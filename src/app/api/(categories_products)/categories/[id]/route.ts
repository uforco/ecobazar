
import serverFetching from '@/lib/serverFetching';
import { NextRequest, NextResponse } from 'next/server';
export async function GET( request: NextRequest, {params}:{params: Promise<{id: string}>} ) {
    const productId = (await params).id;
    try{
        const data = await serverFetching(`/product/${productId}`).then((res) => res.json())
        console.log(data)
        return NextResponse.json(data)
    } catch (err) {
        console.log(`internal server Error - /product/${productId}`, err)
        return NextResponse.json({})
    } finally {
        console.log(productId)
    }

}