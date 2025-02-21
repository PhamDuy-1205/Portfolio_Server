import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Nếu path là gốc "/", chuyển hướng sang "/portfolio"
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/portfolio", request.url));
    }

    // Cho phép các route khác tiếp tục bình thường
    return NextResponse.next();
}

// Áp dụng middleware chỉ cho đường dẫn "/"
export const config = {
    matcher: "/",
};
