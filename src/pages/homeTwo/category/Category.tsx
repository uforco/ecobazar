import React from "react";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import Image from 'next/image';
import Link from "next/link";

const categoryItem = [
    {
        img: "freshfruit.png",
        name: "fresh fruit",
        link: ""
    },
    {
        img: "freshVegetables.png",
        name: "Fresh Vegetables",
        link: ""
    },
    {
        img: "meatFish.png",
        name: "Meat & Fish",
        link: ""
    },
    {
        img: "snacks.png",
        name: "Snacks",
        link: ""
    },
    {
        img: "beverages.png",
        name: "Beverages",
        link: ""
    },
    {
        img: "beautyHealth.png",
        name: "Beauty & Health",
        link: ""
    },
    {
        img: "breadBakery.png",
        name: "Bread & Bakery",
        link: ""
    },
    {
        img: "bakingNeeds.png",
        name: "Baking Needs",
        link: ""
    },
    {
        img: "cooking.png",
        name: "Cooking",
        link: ""
    },
    {
        img: "diabeticFood.png",
        name: "Diabetic Food",
        link: ""
    },
    {
        img: "dishDetergents.png",
        name: "Dish Detergents",
        link: ""
    },
    {
        img: "oil.png",
        name: "Oil",
        link: ""
    }
]

const Category = () => {
  return (
    <div>
      <MaxWidthControls>
        <div className=" flex flex-col justify-center items-center mb-5 ">
          <p className=" uppercase text-Primary font-medium text-sm mb-2 ">
            category
          </p>
          <h2 className=" text-4xl font-semibold mb-5 ">Shop by Top Categories</h2>
        </div>
      </MaxWidthControls>
      <MaxWidthControls>
        <div className=" flex w-full justify-center overflow-hidden " >
            <div className=" grid grid-cols-6 gap-5 " >
                
                {
                    categoryItem.map((category, inx) => <CategoryItem key={category.name} category={category} ></CategoryItem>)
                }
            </div>
        </div>
      </MaxWidthControls>
    </div>
  );
};

export default Category;


const CategoryItem = ({category}:{category:{ name: string, img: string, link: string }}) => {
    return(
        <div className=" w-[200px] h-[213px] transition-all  group overflow-hidden flex justify-center items-center border hover:border-Primary rounded  " >
            <Link href={category.link} >
                <Image src={`/images/home2/category/${category?.img}`} width={140} height={140} alt={""}></Image>
                <p className=" capitalize text-center mt-2 group-hover:text-Primary " >{category?.name}</p>
            </Link> 
        </div>
    )
}