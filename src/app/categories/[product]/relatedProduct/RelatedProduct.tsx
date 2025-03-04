import MaxWidthControls from '@/components/shared/MaxWidthControls'
import React from 'react'
import ProductCard from '@/components/shared/allCard/ProductCard';

interface Props {}

function RelatedProduct(props: Props) {
    const {} = props

    return (
        <MaxWidthControls>
            <div className=' text-center text-3xl my-5 mt-8 ' >
                <h2 className=' font-semibold ' >Related Product</h2>
            </div>
            <div className=" flex justify-between gap-6 " >
                {/* <ProductCard className=" w-[320px] mb-8 " imageWidth={300} imageHeight={248} ></ProductCard>
                <ProductCard className=" w-[320px] mb-8 " imageWidth={300} imageHeight={248} ></ProductCard>
                <ProductCard className=" w-[320px] mb-8 " imageWidth={300} imageHeight={248} ></ProductCard>
                <ProductCard className=" w-[320px] mb-8 " imageWidth={300} imageHeight={248} ></ProductCard> */}
            </div>
        </MaxWidthControls>
    )
}

export default RelatedProduct
