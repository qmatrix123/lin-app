import { prisma } from "@/src/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

    const per = (req.nextUrl.searchParams.get('per') as any) * 1 || 10
    const page = (req.nextUrl.searchParams.get('page') as any) * 1 || 1
    const title = req.nextUrl.searchParams.get('title') as string || ''


    const data = await prisma.article.findMany({
        where: {
            title: {
                contains: title, // 模糊查询
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: per,
        skip: (page - 1) * per
    })


    const total = await prisma.article.count({
        where: {
            title: {
                contains: title, // 模糊查询
            }
        }
    })

    return NextResponse.json({
        success: true,
        message: '',
        data: {
            list: data,
            pages: Math.ceil(total / per),
            total
        }
    })
}

export const POST = async (request: NextRequest) => {
    const data = await request.json()
    await prisma.article.create({
        data
    })


    return NextResponse.json({
        success: true,
        message: '创建成功',
        data: {}
    })

}