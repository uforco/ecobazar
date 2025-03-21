"use client";
import React, { useEffect, useState } from "react";
import ProductCard, {
  productListType,
} from "@/components/shared/allCard/ProductCard";
import ProductPagination from "./ProductPagination";
// import { useGetProductsWithCategoriePageQuery } from "@/redux/features/productsList/productslist";
// import Image from 'next/image';

interface Props {}

function ProductList(props: Props) {
  const {} = props;

  // const { data: products, isError, isLoading, isSuccess } =
  //   useGetProductsWithCategoriePageQuery(undefined);

  // console.log(products);

  // const [showProduct, setShowProduct] = useState<number>(12)
  // const [sliceProduct, setSliceProduct] = useState<number[]>([0, showProduct]);
  // const [currentpage, setCurrentpage] = useState<number>(1);

  // let container = <div>Loading...f</div>;

  // if (isLoading) {
  //   container = <div>Loading...</div>;
  // }
  // if (!isLoading && !isSuccess && isError) {
  //   container = <div>something is wrong...data fetch problem</div>;
  // }
  // if (!isLoading && isSuccess && !isError && products.length < 1) {
  //   container = <div>No Data Found</div>;
  // }
  // if (!isLoading && isSuccess && !isError && products.length >= 1) {
  //   container = products.map((cardData: productListType, inx: number) => (
  //     <div
  //       key={cardData.id}
  //       className=" flex w-full justify-center items-center "
  //     >
  //       {/* <Image src={cardData.Image} alt={""}></Image> */}
  //       <ProductCard
  //         className=" w-[312px]  "
  //         imageWidth={260}
  //         imageHeight={260}
  //         data={cardData}
  //       ></ProductCard>
  //     </div>
  //   ))
    // .slice(sliceProduct[0],sliceProduct[1]);
  // }


  // const nextPage = () => {
  //   if(currentpage < Math.ceil(products.length/showProduct)){
  //     setCurrentpage((privValu) => privValu + 1)
  //     setSliceProduct((priv) => [priv[0]+showProduct,  priv[1]+showProduct])
  //   }
  // }
  // const privousPage = () => {
  //   if(1 < currentpage) {
  //     setCurrentpage((privValu) => privValu - 1)
  //     setSliceProduct((priv) => [priv[0]-showProduct,  priv[1]-showProduct])
  //   }
  // }

  // useEffect(()=>{
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // },[currentpage])

  return (
    <div className="w-full  ">
      
      <div
        className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-3 w-full min-h-[1024px] `}
      >
        {/* {container} */}
      </div>
      <div>
        {/* <ProductPagination nextPage={nextPage} privousPage={privousPage} currentPage={currentpage} totalePage={Math.ceil(products.length/showProduct)} ></ProductPagination> */}
      </div>
    </div>
  );
}

export default ProductList;
