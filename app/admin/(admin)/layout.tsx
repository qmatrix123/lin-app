import React from 'react'
import AntdContainer from '../_components/AntdContainer'
import AntdAdmin from '../_components/AntdAdmin'

function AdminLayout({ children }: any) {
    return (
        <AntdAdmin>{children}</AntdAdmin>
    )
}

export default AdminLayout