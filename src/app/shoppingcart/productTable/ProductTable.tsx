import React from "react";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import MaxWidthControls from "@/components/shared/MaxWidthControls";
import CouponCode from './CouponCode';
import CartTotal from '../CartTotal/CartTotal';
import TableBodyMapData from './TableBodyMapData';

interface Props {}

function ProductTable(props: Props) {
  const {} = props;


  return (
    <>
      <MaxWidthControls>
        <div className="flex w-full gap-5 ">
          <div className=" w-8/12">
            <div className=" border rounded-md mb-5 w-full ">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBodyMapData/>
              </Table>
              <div className="border-t py-3 px-2 flex justify-between ">
                <button className=" px-5 py-2 rounded-full bg-gray-200 text-sm ">
                  Return to shop
                </button>
                <button className=" px-5 py-2 rounded-full bg-gray-200 text-sm ">
                  Update Cart
                </button>
              </div>
            </div>
            <CouponCode></CouponCode>
          </div>
          <div className=" w-4/12 ">
            <CartTotal></CartTotal>
          </div>
        </div>
      </MaxWidthControls>
    </>
  );
}

export default ProductTable;
