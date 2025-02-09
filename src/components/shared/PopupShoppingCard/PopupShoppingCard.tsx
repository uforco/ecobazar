"use client";
import Link from "next/link";
import { Drawer } from "vaul";
import { Table, TableBody } from "@/components/ui/table";
import ProductViewCart from "./ProductViewCart";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";

export default function PopupShoppingCard() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <div className="  cursor-pointer text-white text-[22px] p-2  relative rounded-full flex justify-center items-center ">
          <Badge className=" z-40 absolute w-4 h-4 p-0 flex justify-center items-center rounded-full right-1 top-1 m-0  font-thin  ">
            2
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
              <h2>Shopping Card {`(${"2"})`}</h2>
              <Drawer.Trigger>
                <span>x</span>
              </Drawer.Trigger>
            </div>

            <div className="w-full mx-auto h-full  mb-2 overflow-y-scroll overscroll-y-none ">
              <Table>
                <TableBody>
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                  <ProductViewCart />
                </TableBody>
              </Table>
            </div>

            <div>
              <div className="flex justify-between w-full items-center  ">
                <span>2 Product</span>
                <span className=" font-semibold ">$26.00</span>
              </div>
              <div className="w-full mt-3">
                <Link
                  className=" w-full block bg-Primary text-white font-semibold rounded-full border p-2 text-center "
                  href={""}
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
