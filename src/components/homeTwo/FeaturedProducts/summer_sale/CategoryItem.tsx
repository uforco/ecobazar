import React from "react";
import ItemCard, { itemType } from "./ItemCard";

const CategoryItem = ({ title, data }: { title: string; data: itemType[] }) => {

  return (
    <div>
      <h2 className=" text-xl font-medium capitalize mb-4 ">{title}</h2>
      <div className=" grid grid-cols-1 gap-4 ">
        {data &&
          data.map((item) => <ItemCard key={item.product_id} item={item}></ItemCard>)}
      </div>
    </div>
  );
};

export default CategoryItem;






