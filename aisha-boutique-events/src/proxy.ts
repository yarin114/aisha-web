import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // CSRF origin check for all POST/PUT/DELETE API requests
  if (
    request.nextUrl.pathname.startsWith("/api/") &&
    ["POST", "PUT", "DELETE"].includes(request.method)
  ) {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    if (origin && host && !origin.includes(host)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
