import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import QuantityPrice from './QuantityPrice';
import { cartDataType } from '@/redux/features/MyShoppingCart/shoppingcart';
import discountPriceFun from "@/hooks/discountPriceFunction";

interface Props {
  invoice: cartDataType
}

function SingleProduct(props: Props) {
  const { invoice } = props;

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ">
          <Image
            className=" w-[100px] h-[100px] "
            width={100}
            height={100}
            src={'/images/wishlist/Image3.png'}
            alt={""}
          ></Image>
          <h2 className="ml-3">{invoice?.product_name}</h2>
        </div>
      </TableCell>
      <TableCell>
            <p>
              <span className="text-base" >${discountPriceFun(invoice.discount, invoice.price)}</span>
              {invoice?.discount > 0 && <span className="ml-2" ><s>${invoice.price}</s></span>}
            </p>
      </TableCell>
      <QuantityPrice invoice={invoice} ></QuantityPrice>
    </TableRow>
  );
}

export default SingleProduct;
