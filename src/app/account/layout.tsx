import MaxWidthControls from '@/components/shared/MaxWidthControls';
import UserNavigation from '@/pages/acount/navigation/UserNavigation';
import React from 'react'

function Layout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <MaxWidthControls>
                <div className=' flex gap-6 my-5 overflow-hidden ' >
                    <div className=' w-[312px] h-[418px] border rounded-lg ' >
                        <UserNavigation></UserNavigation>
                    </div>
                    <div className='w-[984px]'>
                        {children}
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    )
}

export default Layout
