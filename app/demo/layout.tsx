import React from 'react'

function DemoLayout({ children }: any) {
    return (
        <div className='demo-layout'>
            DemoLayout
            <hr />
            {children}
        </div>
    )
}

export default DemoLayout