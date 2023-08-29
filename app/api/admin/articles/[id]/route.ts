import { prisma } from "@/src/db";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: any) => {
    const { id } = params // 路由参数
    const data = await req.json() // 请求体数据

    await prisma.article.update({
        where: { id },
        data
    })

    return NextResponse.json({
        success: true,
        message: '修改成功'
    })
}

export const DELETE = async (req: NextRequest, { params }: any) => {
    const { id } = params // 路由参数

    await prisma.article.delete({
        where: { id }
    })

    return NextResponse.json({
        success: true,
        message: '删除成功'
    })
}

