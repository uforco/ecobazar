"use client";
import { Drawer } from "vaul";
import React from "react";
import { LuSettings2 } from "react-icons/lu";
import dynamic from "next/dynamic";
import DiscountAds from "../DiscountAds/DiscountAds";
import { useAppSelector } from "@/redux/app/hooks";
import { filterSelector } from "@/redux/features/filterByProduct/filterproducts";
const AllCategories = dynamic(
  () => import("@/components/categorieFilter/AllCategories/AllCategories"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const PriceReang = dynamic(
  () => import("@/components/categorieFilter/Price/PriceReang"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Rating = dynamic(
  () => import("../Rating/Rating"),
  {
    loading: () => <p>Loading...</p>,
  }
);

interface Props {}

function TopFilterShop(props: Props) {
  const {} = props;

  const itemFilter = useAppSelector(filterSelector).results;


  return (
    <div className=" w-full flex items-center mt-8  overflow-hidden ">
      <div className="  w-[312px] hidden xl:block ">
        <button className="  flex justify-center items-center font-semibold gap-1 border p-4 py-1 bg-Primary text-white rounded-full ">
          Filter <LuSettings2></LuSettings2>
        </button>
      </div>
      <div className=" block xl:hidden " >
        <PhoneViewFilter />
      </div>
      <div className=" w-full xl:w-[984px] flex justify-between items-center ">
        <div className=" flex justify-center gap-2 ">
          <p>Sort by:</p>
          <div className="border">
            <select
              value={""}
              defaultValue={"Latest1"}
              name="sortproducr"
              id=""
            >
              <option value="Latest1">Latest1</option>
              <option value="Latest2">Latest2</option>
              <option value="Latest3">Latest3</option>
              <option value="Latest4">Latest4</option>
            </select>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-1 ">
          <p className=" font-semibold ">{itemFilter}</p>
          <p>Results Found</p>
        </div>
      </div>
    </div>
  );
}

export default TopFilterShop;



function PhoneViewFilter() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger>
        <button className="mr-4 flex justify-center items-center font-semibold gap-1 border p-4 py-1 bg-Primary text-white rounded-full ">
          Filter <LuSettings2></LuSettings2>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal >
        <Drawer.Overlay className="fixed xl:hidden  inset-0 z-50 bg-black/40" />
        <Drawer.Content
          className="left-0 top-0 bottom-0 fixed z-50 xl:hidden outline-none w-11/12 md:w-[320px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className=" w-full  bg-zinc-50 overflow-y-scroll p-2 ">
            <div className="flex justify-between items-center ">
              <p className="mr-4 flex justify-center items-center font-semibold gap-1 border p-4 py-1 bg-Primary text-white rounded-full ">
                Filter <LuSettings2></LuSettings2>
              </p>
              <Drawer.Trigger>
                <span>x</span>
              </Drawer.Trigger>
            </div>
            <AllCategories />
            <PriceReang />
            <Rating></Rating>
            <DiscountAds></DiscountAds>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
