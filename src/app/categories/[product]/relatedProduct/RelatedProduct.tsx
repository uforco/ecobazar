import MaxWidthControls from '@/components/shared/MaxWidthControls'
import React from 'react'
import ProductCard, { productListType } from '@/components/shared/allCard/ProductCard';
import { useGetRelatedProductsQuery } from '@/redux/features/productsList/productslist';

interface Props {
    product_id: string;
    category: string;
}

function RelatedProduct(props: Props) {
    const {category, product_id} = props
    const { data: products, isError, isLoading, isSuccess } = useGetRelatedProductsQuery({category, product_id})

    let container = <div>Loading...</div>;

      if (isLoading) {
        container = <div>Loading...</div>;
      }
      if (!isLoading && !isSuccess && isError) {
        container = <div>something is wrong...data fetch problem</div>;
      }
      if (!isLoading && isSuccess && !isError && products?.length < 1 ) {
        container = <div>No Data Found</div>;
      }
      if (!isLoading && isSuccess && !isError && products.length >= 1) {
        container = products.map((value: productListType, index: number) => (
            <ProductCard data={value} key={value?.id} className=" w-[300px] mb-8 " imageWidth={300} imageHeight={248} ></ProductCard>
        ))
      }


    return (
        <MaxWidthControls>
            <div className=' text-center text-3xl my-5 mt-8 ' >
                <h2 className=' font-semibold ' >Related Product</h2>
            </div>
            <div className=" flex gap-6 " >
                {container}
            </div>
        </MaxWidthControls>
    )
}

export default RelatedProduct
