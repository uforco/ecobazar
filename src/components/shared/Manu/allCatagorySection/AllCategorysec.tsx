import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const AllCategorysec = () => {
  return (
    <div className=" flex items-center h-full ">
      <div className=" bg-Primary flex justify-center items-center h-full " >
        <button className=" text-white text-3xl p-2 " >
            <HiOutlineBars3></HiOutlineBars3>
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
                <ul className="grid gap-3 p-4  md:w-[300px] h-auto lg:grid-cols-[1fr] ">
                  <li className=" w-full">
                    <Link
                      className=" text-gray-500 w-full hover:text-Primary "
                      href="/"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link
                      className=" text-gray-500 w-full hover:text-Primary "
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link
                      className=" text-gray-500 w-full hover:text-Primary "
                      href="/"
                    >
                      Faqs
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link
                      className=" text-gray-500 w-full hover:text-Primary "
                      href="/"
                    >
                      Terms & Condition
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link
                      className=" text-gray-500 w-full hover:text-Primary "
                      href="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
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
