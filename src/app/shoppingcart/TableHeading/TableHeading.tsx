import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[300px]">Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Subtotal</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeading;
