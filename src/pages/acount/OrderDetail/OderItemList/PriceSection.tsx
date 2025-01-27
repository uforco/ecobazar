'use client'
import React from "react";
import { TableCell } from "@/components/ui/table";

interface Props {
  price: number;
  discount: number;
  quantity: number;
}

function PriceSection(props: Props) {
  const { price, discount, quantity } = props;
  const integerPart = Math.floor(price);
  const floatingPart = price - integerPart;
  const discontPrice =
    integerPart - (integerPart / 100) * discount + floatingPart;
    const totalprice = quantity * discontPrice

  return (
    <>
      <TableCell>
        <p>{discontPrice}</p>
      </TableCell>
      <TableCell>
        <p>x{quantity}</p>
      </TableCell>
      <TableCell>{totalprice.toFixed(2)}</TableCell>
    </>
  );
}

export default PriceSection;
