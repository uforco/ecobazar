"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { currentPageCount, filterSelector } from "@/redux/features/filterByProduct/filterproducts";
import { productslist } from "@/redux/features/productsList/productslist";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";




const updatePageData = async (dispatch: any, query: any) => {
  const sd = await fetch(`/api/submit_search/${query}`).then((res)=> res.json())
  if(sd.length){
      dispatch(
          productslist.util.updateQueryData('getProductsWithCategoriePage', undefined, (draft)=>{
              return draft = [...new Map([...draft, ...sd].map((item)=> [item.product_id, item])).values()]
          })
      )
  }
}




function ProductPagination({totalproduct}: {totalproduct: number}){

  const router = useRouter()

  const pageCountData = useAppSelector(filterSelector)
  const totalePage =  pageCountData.totalPageByCategorie
  const currentPage = pageCountData.currentPage

  const dispatch = useAppDispatch()


  useEffect(()=>{
      router.push(`/categories?page=${currentPage}`)
  },[currentPage])


  const pagesNumder = Array.from(
    { length: totalePage},
    (_, index) => index + 1
  );

  const privousPage = () => {
    dispatch(currentPageCount({ actionType: 'previous', page: 1 }))
  }
  const nextPage = () => {
    dispatch(currentPageCount({ actionType: 'next', page: 1 }))
  }

  return (
    <div className=" flex justify-center gap-2 items-center p-5 mt-3 ">
      <button
        onClick={() => privousPage()}
       className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl"
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>
      <div className=" flex justify-center gap-2 items-center min-w-[227px] " >
        {totalePage > 3 && currentPage > 3 ? (
          <>
            <span
              className={` cursor-pointer p-1 border  hover:bg-Primary hover:text-white transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
            >
              {1}
            </span>
          </>
        ) : (
          ""
        )}
        {currentPage > 2 ? <span className=" text-2xl ">...</span> : ""}
        <ul className=" flex gap-2 text-gray-700 transition-all duration-300 ">
          {pagesNumder
            .map((elem, inx) => (
              <li
                key={elem}
                className={` cursor-pointer ${
                  currentPage == elem
                    ? "bg-Primary text-white"
                    : "hover:bg-Primary hover:text-white"
                } transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
              >
                {elem}
              </li>
            ))
            .slice(
              Math.max(currentPage - 2, 0),
              Math.max(currentPage - 2, 0) + 3
            )}
        </ul>
        {totalePage > 3 && currentPage < totalePage - 1 ? (
          <>
            <span className=" text-2xl ">...</span>
          </>
        ) : (
          ""
        )}
        {totalePage > 3 && currentPage < totalePage - 2 ? (
          <>
            <span
              className={` cursor-pointer p-1 border  hover:bg-Primary hover:text-white transition-all duration-300 w-9 h-9 rounded-full flex justify-center items-center `}
            >
              {totalePage}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => nextPage()}
        className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl  "
      >
        <IoIosArrowForward></IoIosArrowForward>
      </button>
    </div>
  );
}

export default ProductPagination;
