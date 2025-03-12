'use client'
import React from 'react';
import dynamic from 'next/dynamic'
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import BodySection from './BodyInfo/BodySection';
import RelatedProduct from './relatedProduct/RelatedProduct';
import { useGetSingleProductViewQuery } from '@/redux/features/productsList/productslist';
import { useParams, useRouter  } from 'next/navigation';

const HeadingSec = dynamic(() => import('./headingsec/HeadingSec'))


const page = () => {
    
    const params = useParams();
    const paramName = params ? params['product'] : null;
    const productParam = Array.isArray(paramName) ? paramName[0] : paramName;
    const router = useRouter();

    if(!productParam) {
        return router.back();
    }

    


    const { data, isError, isLoading, isSuccess } = useGetSingleProductViewQuery(productParam);

    console.log(data)



    let container = <div>Loading...</div>;

      if (isLoading) {
        container = <div>Loading...</div>;
      }
      if (!isLoading && !isSuccess && isError) {
        container = <div>something is wrong...data fetch problem</div>;
      }
      if (!isLoading && isSuccess && !isError && data?.id) {
        container = <div>No Data Found</div>;
      }
      if (!isLoading && isSuccess && !isError && data?.id) {
        container = <div>
        <div className=" mb-6 w-full relative overflow-hidden bg-origin-content h-28 md:bg-cover bg-no-repeat bg-[url('/images/categores/Breadcrumbs.png')]">
            <div className='  w-full h-full ' >
                <MaxWidthControls className='h-full' >
                    <div className=" flex items-center h-full  gap-2 text-base font-poppins text-gray-400 " >
                        <span className=' text-xl ' ><GoHome></GoHome></span> <IoIosArrowForward></IoIosArrowForward> <span> Category </span> <IoIosArrowForward></IoIosArrowForward> <span> {data?.category} </span> <IoIosArrowForward></IoIosArrowForward> <span className=' text-Primary ' >{data?.product_name}</span>
                    </div>
                </MaxWidthControls>
            </div>
        </div>
        <HeadingSec product={data} ></HeadingSec>
        <BodySection product={data} ></BodySection>
        <RelatedProduct category={data?.category} product_id={data?.product_id} ></RelatedProduct>
    </div>

      }














    return container
};

export default page;