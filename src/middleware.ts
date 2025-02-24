import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const isForbidden =
    request.cookies.get("x-page-access-allowed")?.value !== "1";

  if (isForbidden) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/success"],
};
