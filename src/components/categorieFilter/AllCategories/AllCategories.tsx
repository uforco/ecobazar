"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import RedioBtnCategoris from "./RedioBtnCategoris";
import { useGetFillterCategoriesQuery } from "@/redux/features/filterByProduct/filter";

interface Props {}

function AllCategories(props: Props) {
  const {} = props;

  const [swt, setSwt] = React.useState<boolean>(false);
  const { data, isError, isLoading, isSuccess } = useGetFillterCategoriesQuery(undefined)

  let containe;

  if(isLoading) containe = <div>Loading...</div>
  if(isError && !isLoading && !isSuccess) containe = <div>something wrong</div>
  if(!isError && !isLoading && isSuccess && data.length < 1) containe = <div> Not Product with Categorie </div>
  if(!isError && !isLoading && isSuccess && data.length > 0) {
    containe = data?.map((categorie: {category: string}) => <RedioBtnCategoris key={categorie?.category} className="my-3" name={categorie?.category} /> )
  }


  return (
    <div className="p-3 transition-all border-b ">
      <div
        onClick={() => setSwt((priv) => !priv)}
        className="flex items-center justify-between cursor-pointer "
      >
        <h2 className=" font-semibold ">All Categories</h2>
        <span
          className={`${
            swt ? "rotate-0" : "-rotate-180"
          } transition-all duration-300 `}
        >
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </div>
      <div
        className={` overflow-hidden transition-all mt-3 duration-500 ${
          swt ? "h-0" : " h-[343px] "
        }`}
      >
        <ul className="ml-3">
          {containe}
        </ul>
      </div>
    </div>
  );
}

export default AllCategories;
