import { NextRequest, NextResponse } from 'next/server'


 
export default async function middleware(req: NextRequest) {

    console.log('middleware999999999999999999999999999999999')
  
 
  return NextResponse.next()
}
 
// // Routes Middleware should not run on
export const config = {
  matcher: ['/account/:account*', '/shoppingcart'],
}