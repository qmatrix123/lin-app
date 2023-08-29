import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/amdin')) {
        if (!request.nextUrl.pathname.startsWith('/admin/login')) {
            if (request.cookies.get('admin-token')) {
                // 已经登录
            } else {
                return NextResponse.redirect(new URL('/admin/login', request.url))
            }
        }
    }
}

