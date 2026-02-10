import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/services', '/signup', '/about', '/contact'];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Check session token (NextAuth JWT)
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isAuthenticated = !!token;

  // If trying to access protected route without authentication
  if (!isPublicRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated user tries to access login page, redirect to home
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
