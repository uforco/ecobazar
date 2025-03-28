"use client";
import Link from "next/link";
import { Drawer } from "vaul";
import { Table, TableBody } from "@/components/ui/table";
import ProductViewCart from "./ProductViewCart";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { cartDataType, useGetShopingCartQuery } from "@/redux/features/MyShoppingCart/shoppingcart";
import discountPriceFun from "@/hooks/discountPriceFunction";

export default function PopupShoppingCard() {



  const { data, isError, isLoading, isSuccess } = useGetShopingCartQuery("cm80bbde50000dj1kezlho2m6");
  let totalitems = 0
  let subtotal = 0 
  let containe;



  if (!isLoading && !isError && isSuccess && data.length > 0) {
    totalitems = data?.length
    subtotal = data.reduce((previousValue: number, currentValue: cartDataType) => {
      return previousValue += Number(discountPriceFun(currentValue?.discount, currentValue?.price)) * currentValue?.quantity
    }, 0)
    containe = data.map((value: cartDataType) =>  <ProductViewCart key={value?.cart_id} item={value} />)
  }


  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <div className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center ">
          <Badge className=" z-40 absolute w-4 h-4 p-0 flex justify-center items-center rounded-full right-1 top-1 m-0  font-thin  ">
            {totalitems}
          </Badge>
          <HiOutlineShoppingBag></HiOutlineShoppingBag>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content
          className="right-0 top-0 bottom-0 fixed z-50 outline-none w-11/12 lg:w-[456px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col ">
            <div className="flex justify-between items-center ">
              <h2>Shopping Card {`(${totalitems})`}</h2>
              <Drawer.Trigger>
                <span>x</span>
              </Drawer.Trigger>
            </div>
            <div className="w-full mx-auto h-full  mb-2 overflow-y-scroll overscroll-y-none ">
              <Table>
                <TableBody>
                  {containe}
                </TableBody>
              </Table>
            </div>
            <div>
              <div className="flex justify-between w-full items-center  ">
                <span>{totalitems} Product</span>
                <span className=" font-semibold ">${subtotal.toFixed(2)}</span>
              </div>
              <div className="w-full mt-3">
                <Link
                  className=" w-full block bg-Primary text-white font-semibold rounded-full border p-2 text-center "
                  href={"/shoppingcart/checkout"}
                >
                  Checkout
                </Link>
              </div>
              <div className="w-full mt-2">
                <Link
                  className=" w-full block bg-Primary/5 text-Primary font-semibold rounded-full border p-2 text-center "
                  href={"/shoppingcart"}
                >
                  Go To Cart
                </Link>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
