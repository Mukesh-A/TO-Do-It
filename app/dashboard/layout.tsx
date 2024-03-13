import React, { ReactNode } from 'react'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex flex-col space-y-6 mt-10'>
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
            <aside className='hidden w-[200px] flex-col md:flex'>
                <h1>hello</h1>
            </aside>
            <main>{children}</main>
        </div>
       
        
    </div>
  )
}

export default DashboardLayout