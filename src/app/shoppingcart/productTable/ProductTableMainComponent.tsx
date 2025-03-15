'use client'
import React from "react";
import {Table, TableBody} from "@/components/ui/table";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import CouponCode from './CouponCode';
import CartTotal from '../CartTotal/CartTotal';
import TableHeading from '../TableHeading/TableHeading';
import TableFooter from '../TableFooter/TableFooter';
import SingleProduct from "./SingleProduct";
import { cartDataType, useGetShopingCartQuery } from "@/redux/features/MyShoppingCart/shoppingcart";
import LoadingItem from "./LoadingItem";


interface Props {}

function ProductTable(props: Props) {
  const {} = props;


  const { data, isError, isLoading, isSuccess } = useGetShopingCartQuery(
    "cm80bbde50000dj1kezlho2m6"
  ); //paramiter user id


  // console.log(data)



  let container;
  if (isLoading) {
    container = (
      <>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </>
    );
  }
  if (!isLoading && isError) {container = <div>something is wrong</div>}
  if (!isLoading && !isError && isSuccess && data.length < 1) {container = <div className=" h-52 w-full " >No Data Found</div>;}
  if (!isLoading && !isError && isSuccess && data.length > 0) {
    container = data.map((invoice: cartDataType) => (
      <SingleProduct
        key={`invoice.img${invoice?.cart_id}`}
        invoice={invoice}
      ></SingleProduct>
    ));
  }



  return (
    <>
      <MaxWidthControls>
        <div className="flex w-full gap-5 ">
          <div className=" w-8/12">
            <div className=" border rounded-md mb-5 w-full ">
              <Table>
                <TableHeading></TableHeading>
                {/* main containe */}
                <TableBody>{container}</TableBody>
              </Table>
              <TableFooter></TableFooter>
            </div>
            <CouponCode></CouponCode>
          </div>
          <CartTotal data={data} ></CartTotal>
        </div>
      </MaxWidthControls>
    </>
  );
}

export default ProductTable;
