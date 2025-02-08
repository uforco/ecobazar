import React from 'react'
import ProductCard from '@/components/shared/allCard/ProductCard';

interface Props {}

function ProductList(props: Props) {
    const {} = props

    return (
        <div className=' grid grid-cols-3 ' >
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
            <ProductCard className=" w-[312px] " imageWidth={260} imageHeight={260} ></ProductCard>
        </div>
    )
}

export default ProductList
