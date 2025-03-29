import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

import MenuItem from "../MenuItem";
import Image from "next/image";

const categorylist = [
  {
    image: "/images/home/category/Vegetable.png",
    name: "Vegetable",
    link: "vegetables",
    nestedItem: [
      {
        name: "green vegetables",
        link: "green_vegetables",
      },
      {
        name: "cruciferous",
        link: "cruciferous",
      },
      {
        name: "allium vegetables",
        link: "allium_vegetables",
      },
    ],
  },
  {
    image: "/images/home/category/fruits.png",
    name: "Fresh fruit",
    link: "fruits",
  },
  {
    image: "/images/home/category/fish.png",
    name: "River Fish",
    link: "fish",
    nestedItem: [
      {
        name: "River Fish",
        link: "river_fish",
      },
      {
        name: "Sea Fish",
        link: "sea_fish",
      },
      {
        name: "Farmed Fish",
        link: "farmed_fish",
      },
    ],
  },
  {
    image: "/images/home/category/meat.png",
    name: "Meat",
    link: "meat",
    nestedItem: [
      {
        name: "chicken",
        link: "chicken",
      },
      {
        name: "beef",
        link: "beef",
      },
      {
        name: "goat",
        link: "goat",
      },
    ],
  },
  {
    image: "/images/home/category/soft-drink.png",
    name: "Water and Drinks",
    link: "water_and_drinks",
    nestedItem: [
      {
        name: "string cheese",
        link: "string_cheese",
      },
      {
        name: "Dried fruit",
        link: "dried_fruit",
      },
      {
        name: "Granola bars",
        link: "granola_bars",
      },
      {
        name: "Graham Crackers",
        link: "graham_crackers",
      },
    ],
  },
  {
    image: "/images/home/category/soft-drink.png",
    name: "Water and Drinks",
    link: "water_and_drinks",
    nestedItem: [
      {
        name: "string cheese",
        link: "string_cheese",
      },
      {
        name: "Dried fruit",
        link: "dried_fruit",
      },
      {
        name: "Granola bars",
        link: "granola_bars",
      },
      {
        name: "Graham Crackers",
        link: "graham_crackers",
      },
    ],
  },
  {
    image: "/images/home/category/soft-drink.png",
    name: "Water and Drinks",
    link: "water_and_drinks",
    nestedItem: [
      {
        name: "string cheese",
        link: "string_cheese",
      },
      {
        name: "Dried fruit",
        link: "dried_fruit",
      },
      {
        name: "Granola bars",
        link: "granola_bars",
      },
      {
        name: "Graham Crackers",
        link: "graham_crackers",
      },
    ],
  },
  {
    image: "/images/home/category/snacks.png",
    name: "Snacks",
    link: "snacks",
    nestedItem: [
      {
        name: "string cheese",
        link: "string_cheese",
      },
      {
        name: "Dried fruit",
        link: "dried_fruit",
      },
      {
        name: "Granola bars",
        link: "granola_bars",
      },
      {
        name: "Graham Crackers",
        link: "graham_crackers",
      },
    ],
  },
];

const AllCategorysec = () => {
  return (
    <div className=" flex items-center h-full ">
      <div className=" bg-Primary flex justify-center items-center h-full ">
        <button className=" text-white text-3xl p-2 ">
          <Link href={"/"}>
            <HiOutlineBars3></HiOutlineBars3>
          </Link>
        </button>
      </div>
      <div className=" bg-gray-800 h-full flex justify-center items-center  ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" allcategory-manu-custom hover:bg-transparent bg-transparent font-medium text-gray-50 hover:text-white px-7 ">
                All Category
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="  grid gap-3 p-4  md:w-[400px] lg:w-[700px] xl:w-[900px] h-auto lg:grid-cols-3 ">
                  <li className=" row-span-3 h-32 inline-block ">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <>
                          <div className="mb-2 mt-2 text-lg font-medium">
                            <Image
                              src={"/images/Logo.png"}
                              width={200}
                              height={80}
                              alt={"Logo"}
                            ></Image>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {categorylist?.map((category, inx) => (
                    <li
                      className="inline-block"
                      key={`${category.name}-${inx}`}
                    >
                      <NavigationMenuLink asChild>
                        <MenuItem category={category}></MenuItem>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default AllCategorysec;
