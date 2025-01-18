import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import QuantityPrice from './QuantityPrice';

interface Props {
  invoice: {
    img: string;
    name: string;
    price: number;
    discount: number;
    stockStatus: boolean;
  };
}

function SingleProduct(props: Props) {
  const { invoice } = props;

  const integerPart = Math.floor(invoice.price);
  const floatingPart = invoice.price - integerPart;
  const discontPrice =
    integerPart - (integerPart / 100) * invoice.discount + floatingPart;

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ">
          <Image
            className=" w-[100px] h-[100px] "
            width={100}
            height={100}
            src={invoice.img}
            alt={""}
          ></Image>
          <h2 className="ml-3">{invoice.name}</h2>
        </div>
      </TableCell>
      <TableCell>
            <p>
              <span>${discontPrice.toFixed(2)}</span>
            </p>
      </TableCell>
      <QuantityPrice stockStatus={invoice.stockStatus} discontPrice={discontPrice} ></QuantityPrice>
    </TableRow>
  );
}

export default SingleProduct;
