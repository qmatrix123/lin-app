import { NextRequest } from 'next/server'
import dayjs from 'dayjs'
import path from 'path'
import fs from 'fs'

const saveFile = async (blob: File) => {
    const dirName = '/uploads/' + dayjs().format('YYYY-MM-DD')
    const uploadDir = path.join(process.cwd(), 'public', dirName) // 拼接生成目录
}

export const POST = async (req: NextRequest) => {
    const data = req.formData()
}
