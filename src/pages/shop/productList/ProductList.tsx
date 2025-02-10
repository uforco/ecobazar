'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shared/allCard/ProductCard";
import ProductPagination from './ProductPagination';


interface Props {}

function ProductList(props: Props) {
  const {} = props;

  const products = Array.from({length: 166}, (_, index)=> index+1 );

  const [showProduct, setShowProduct] = useState<number>(12)
  const [sliceProduct, setSliceProduct] = useState<number[]>([0, showProduct]);
  const [currentpage, setCurrentpage] = useState<number>(1);

  const nextPage = () => {
    if(currentpage < Math.ceil(products.length/showProduct)){ 
      setCurrentpage((privValu) => privValu + 1)
      setSliceProduct((priv) => [priv[0]+showProduct,  priv[1]+showProduct])
    }
  }
  const privousPage = () => {
    if(1 < currentpage) {
      setCurrentpage((privValu) => privValu - 1)
      setSliceProduct((priv) => [priv[0]-showProduct,  priv[1]-showProduct])
    }
  }

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[currentpage])

  console.log(currentpage, sliceProduct);

//   console.log(Math.ceil(products.length/20 justify-between ))

  return (
    <div className="w-full  ">
      <div className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-3 w-full min-h-[1024px] `}>
            {
                products.map((ProCard, inx) => <div key={ProCard} className=" flex w-full justify-center items-center " >

                <ProductCard  className=" w-[312px]  " imageWidth={260} imageHeight={260} cardnum={ProCard} ></ProductCard>

                </div> ).slice(sliceProduct[0],sliceProduct[1])
            }
      </div>
      <div>
        <ProductPagination nextPage={nextPage} privousPage={privousPage} currentPage={currentpage} totalePage={Math.ceil(products.length/showProduct)} ></ProductPagination>
      </div>
    </div>
  );
}

export default ProductList;
