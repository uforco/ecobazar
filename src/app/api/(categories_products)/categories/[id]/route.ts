
import serverFetching from '@/lib/serverFetching';
import { NextRequest, NextResponse } from 'next/server';
export async function GET( request: NextRequest, {params}:{params: Promise<{id: string}>} ) {
    const productId = (await params).id;
    try{
        const response = await serverFetching(`/product/${productId}`);
        if (!(response instanceof Response)) {
            console.log(`internal server Error - /product/${productId}`)
            return NextResponse.json({})
        }
        const data = await response.json();
        return NextResponse.json(data)
    } catch (err) {
        console.log(`internal server Error - /product/${productId}`, err)
        return NextResponse.json({})
    } finally {
        console.log(productId)
    }

}