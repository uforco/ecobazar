import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import PriceSection from './PriceSection';

interface Props {
  invoice: {
    img: string;
    name: string;
    price: number;
    discount: number;
    quantity: number;
  };
}

function SingleItem(props: Props) {
    const { invoice } = props;
  return (
    invoice &&  <TableRow >
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ml-4 my-2 ">
          <Image
            className=" w-[50px] h-[50px] "
            width={100}
            height={100}
            src={invoice.img}
            alt={""}
          ></Image>
          <h2 className="ml-3">{invoice.name}</h2>
        </div>
      </TableCell>
      <PriceSection price={invoice.price} discount={invoice.discount} quantity={invoice.quantity}></PriceSection>
    </TableRow>
  );
}

export default SingleItem;
