import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import MaxWidthControls from "@/components/shared/MaxWidthControls";
import SingleProduct from "./SingleProduct";
import CouponCode from './CouponCode';
import CartTotal from './../CartTotal/CartTotal';

interface Props {}

function ProductTable(props: Props) {
  const {} = props;

  const invoices = [
    {
      name: "Green Capsicum",
      img: "/images/wishlist/Image1.png",
      price: 20.99,
      discount: 10,
      stockStatus: true,
    },
    {
      name: "Chinese Cabbage",
      img: "/images/wishlist/Image2.png",
      price: 45.0,
      discount: 0,
      stockStatus: true,
    },
    {
      name: "Fresh Sujapuri Mango",
      img: "/images/wishlist/Image3.png",
      price: 9.0,
      discount: 0,
      stockStatus: false,
    },
  ];

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
                <TableBody>
                  {invoices.map((invoice, inx) => (
                    <SingleProduct
                      key={`invoice.img${inx}`}
                      invoice={invoice}
                    ></SingleProduct>
                  ))}
                </TableBody>
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
