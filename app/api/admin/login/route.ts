import { NextRequest, NextResponse } from "next/server";

export const POST = (request: NextRequest) => {
    return NextResponse.json({
        success: true,
        message: '登录成功',
        data: {}
    }, {
        headers: {
            'Set-Cookie': 'admin-token=123;Path=/'
        }
    })
}