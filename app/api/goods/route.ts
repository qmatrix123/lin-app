import { prisma } from "@/src/db";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {



    // 查询数据，根据创建时间倒叙排列
    const data = await prisma.goods.findMany({
        orderBy: {
            createdAt: 'desc'
        },

    })

    return NextResponse.json({
        success: true,
        message: '',
        data
    })
}

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    await prisma.goods.create({
        data
    })

    return NextResponse.json({
        success: true,
        message: '创建成功',
        data: {}
    })
}