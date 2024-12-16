import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function middleware(request) {
  // Get token from headers
  const headersList = headers()
  const token = headersList.get('Authorization')?.split(' ')[1]

  // List of protected routes
  const protectedRoutes = ['/profile']

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*']
} 