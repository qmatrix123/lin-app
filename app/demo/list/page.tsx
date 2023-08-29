import React, { useEffect } from 'react'
import { Metadata } from 'next'
import List from './_ components/List'

export const metadata: Metadata = {
    title: '这是一个列表页',
    description: '这是一个列表页',
    keywords: 'next.js,react'
}

function ListPage() {
    return (
        <div className='list-page'>
            ListPage
            <List />
        </div >
    )
}

export default ListPage