import React from 'react'
import { Metadata } from 'next'

type Props = {
    params: {
        id: string
    },
    searchParams: any
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    return {
        title: '这是详情页' + params.id
    }
}


function ListDetailPage({ params, searchParams }: Props) {
    return (
        <div className='list-detail-page'>ListDetailPage----{params.id}, query---{searchParams.name}</div>
    )
}

export default ListDetailPage