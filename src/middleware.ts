// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// // import auth from "@/auth"
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {

//     // const session = auth()

//     //console.log(" middleware =============================================== ")

//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/account/:path*',
// }


import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if user is authenticated
    const url = req.nextUrl;
    const isAuthenticated = !!req.nextauth.token; // If token exists, user is authenticated

    // Allow public access to specific pages
    const publicRoutes = ["/", "/about", "/contact", "/categories/:path*"];
    if (publicRoutes.includes(url.pathname)) {
      return NextResponse.next();
    }

    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/system/login", req.url));
    }
    return NextResponse.next()
  },
  {
    pages: {
      signIn: "/system/login", // Redirect to your custom login page if not authenticated
    },
  }
);

// Protect these routes
export const config = {
  matcher: ["/account/:path*", "/shoppingcart/:path*"], // Add more protected routes
};