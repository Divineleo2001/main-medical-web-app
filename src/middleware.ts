// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";


// const publicRoutes = [
//     "/","/welcome",
//     "/ser"
// ]
// export function middleware(request: NextRequest) {
//     const path = request.nextUrl
// }

// export const config ()
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes
const publicRoutes = ["/", "/welcome", "/services", "/auth/login", "/auth/sign-up"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthTokenPresent = request.cookies.has("token");

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

  // Redirect logic
  if (!isAuthTokenPresent) {
    // If no auth token and trying to access a private route, redirect to login
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    // If no auth token and on root, allow access (it's public)
    if (path === "/") {
      return NextResponse.redirect(new URL("/welcome/patient", request.url));
    }
  } else {
    // If auth token is present and trying to access login/signup, redirect to dashboard
    if (path === "/auth/login" || path === "/auth/sign-up") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // For all other cases, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/welcome/:path*',
    '/services/:path*',
    '/auth/:path*',
    '/dashboard/:path*',
    '/patients/:path*',
    '/doctors/:path*',
    '/hospitals/:path*',
  ],
};