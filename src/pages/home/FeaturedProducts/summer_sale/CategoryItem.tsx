import React from "react";
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TiStar } from "react-icons/ti";
import { Eye, Heart, ShoppingBag  } from "@mynaui/icons-react";

type itemType = {
    image: string,
    name: string,
    price: string,
    rating:number | string
}


const CategoryItem = ({title, data}:{title: string, data: itemType[]}) => {
  return (
    <div>
      <h2 className=" text-xl font-medium capitalize mb-4 ">{title}</h2>
      <div className=" grid grid-cols-1 gap-4 " >
        {
            data && data.map((item) => <ItemCard key={item.name} item={item}  ></ItemCard>)
        }
      </div>
    </div>
  );
};

export default CategoryItem;





const ItemCard = ({item}:{item: itemType}) => {
  return (
    <Card className=" flex items-center group justify-start transition-all w-[312px] h-[116px] overflow-hidden cursor-pointer border hover:border-Primary hover:shadow-lg hover:shadow-soft_primary/50 " >
      <CardHeader className=" w-28 h-28 overflow-hidden " >
        <Image className=" w-full " src={item?.image} width={502} height={502} alt={""}></Image>
      </CardHeader>
      <CardContent className=" relative " >
        <h2 className=" capitalize group-hover:text-hard_primary  text-gray-700 mb-2 mt-3 " >{item?.name}</h2>
        <div>
            <CardTitle>{item.price}</CardTitle>
            <CardDescription className=" flex items-center mt-3 " >
                    <TiStar className=" size-5 text-warning " ></TiStar>
                    <TiStar className=" size-5 text-warning " ></TiStar>
                    <TiStar className=" size-5 text-warning " ></TiStar>
                    <TiStar className=" size-5 text-gray-300 " ></TiStar>
                    <TiStar className=" size-5 text-gray-300 " ></TiStar>
            </CardDescription>
        </div>
        {/* hover Item */}
        <div className=" group-hover:bottom-0 absolute right-0 py-6 pt-4 px-3 flex -bottom-20 w-full justify-between  bg-transparent  duration-500 transition-all group-hover:bg-white " >
        
            <div className=" size-10 transition-all hover:text-white hover:bg-Primary rounded-full border border-gray-200 bg-white flex justify-center items-center " >
                <ShoppingBag ></ShoppingBag>
            </div>
            <div className=" size-10 transition-all hover:text-white hover:bg-Primary rounded-full border border-gray-200 bg-white flex justify-center items-center " >
                <Eye ></Eye>
            </div>
            <div className=" size-10 transition-all hover:text-white hover:bg-Primary rounded-full border border-gray-200 bg-white flex justify-center items-center " >
                <Heart></Heart>
            </div>
      </div>
      </CardContent>
    </Card>
  );
};
