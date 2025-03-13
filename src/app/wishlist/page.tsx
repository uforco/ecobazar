import MaxWidthControls from '@/components/shared/MaxWidthControls'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import ShareOption from './ShareOption';
import ContaineItems from './ContaineItems';
import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"




interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
            <div className=" w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]  " >
                <div className='  w-full h-full ' >
                    <MaxWidthControls className='h-full' >
                        <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                            <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >Wishlist</span>
                        </div>
                    </MaxWidthControls>
                </div>
            </div>
            <div className=' w-full ' > <h2 className=' w-full text-center text-2xl my-8' >My Wishlist</h2> </div>
            <MaxWidthControls>
                <div className=' border rounded-md mb-5 ' >
                    <Table >
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[350px]">Product</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock Status</TableHead>
                            <TableHead className=" w-[200px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <ContaineItems/>
                        <ShareOption></ShareOption>
                    </Table>
                </div>
            </MaxWidthControls>
        </div>
    )
}

export default Page
