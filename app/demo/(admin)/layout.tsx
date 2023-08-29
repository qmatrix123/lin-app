import React, { ReactNode } from 'react'

function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className='admin-layout p-8 bg-rose-600 text-white'>
            AdminLayout
            <hr />
            {children}
        </div>

    )
}

export default AdminLayout