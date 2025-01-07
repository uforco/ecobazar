import React from "react";
import  Image  from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag, Heart, Eye } from "@mynaui/icons-react";
import { TiStar } from "react-icons/ti";


const ProductCard = ({className: classname, imageWidth, imageHeight}:{className?: string, imageWidth?: number, imageHeight?: number}) => {
  return (
    <div className={`${classname}  w-[248px] mb-8  `} >
      <Card className=" cursor-pointer hover:border-Primary duration-300 overflow-hidden transition-all hover:shadow-soft_primary/20 group  hover:shadow-xl relative " >

      <div className=" group-hover:top-3 absolute right-3 -top-24 duration-500 transition-all " >
        <div className=" size-10 mb-2 rounded-full border border-gray-200 flex justify-center items-center " >
            <Heart></Heart>
        </div>
        <div className=" size-10 rounded-full border border-gray-200 flex justify-center items-center " >
            <Eye ></Eye>
        </div>
      </div>
        <div className=" flex justify-center " >
          <CardHeader className={` ${imageWidth? `w-[${imageWidth}px]` : "w-[248px]"}`} >
              <Image className={` w-full ${imageHeight? `w-[${imageHeight}px]` : "h-[200px]"}`} src={"/images/home/Featured/Image1.png"} width={200} height={260} alt={""}></Image>
          </CardHeader>
        </div>
        <CardContent className=" flex justify-between items-center " >
            <div className=" text-left " >
                <CardDescription>Card Description</CardDescription>
                <CardTitle className=" my-1 " >$14.99</CardTitle>
                <CardDescription className=" flex items-center " >
                    <TiStar className=" size-4 text-warning " ></TiStar>
                    <TiStar className=" size-4 text-warning " ></TiStar>
                    <TiStar className=" size-4 text-warning " ></TiStar>
                    <TiStar className=" size-4 text-gray-300 " ></TiStar>
                    <TiStar className=" size-4 text-gray-300 " ></TiStar>
                </CardDescription>
            </div>
            <div className=" group-hover:bg-Primary transition-all duration-300 size-10 bg-gray-100 flex justify-center items-center rounded-full " >
                < ShoppingBag className=" group-hover:text-white transition-all " />
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
