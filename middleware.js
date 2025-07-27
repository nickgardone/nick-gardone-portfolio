import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is HTTP (not HTTPS)
  if (request.headers.get('x-forwarded-proto') !== 'https') {
    // Get the host and path from the request
    const host = request.headers.get('host')
    const path = request.nextUrl.pathname
    const search = request.nextUrl.search
    
    // Construct the HTTPS URL
    const httpsUrl = `https://${host}${path}${search}`
    
    // Redirect to HTTPS
    return NextResponse.redirect(httpsUrl, 301)
  }
  
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)',
  ],
}
