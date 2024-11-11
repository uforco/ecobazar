import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({catagory}: {catagory?: any}) => {
  return (
    <Link className=" mb-8 " href={""}>
      <Card className=" w-[200px] group hover:border-Primary overflow-hidden CardhoverEffict h-[210px] cursor-pointer ">
        <CardHeader className=" flex justify-center items-center " >
          <div className=" w-20 h-20 " >
            <Image src={ catagory?.image} width={100} height={100} alt={''}></Image>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className=" mb-1 text-lg font-medium group-hover:text-hard_primary " >{ catagory?.name }</CardTitle>
          <p className=" text-sm text-gray-500 " >{ catagory?.products } products</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
