import React from 'react'

function ListLayout({ children }: any) {
    return (
        <div className='list-layout'>
            ListLayout
            <hr />
            {children}
        </div>
    )
}

export default ListLayout