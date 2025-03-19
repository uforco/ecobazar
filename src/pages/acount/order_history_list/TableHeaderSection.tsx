import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const TableHeaderSectiom = () => {
    return (
        <TableHeader className=" bg-gray-200  ">
            <TableRow>
              <TableHead className="w-[160px] text-gray-900 ">
                Order ID
              </TableHead>
              <TableHead className=" text-gray-900 ">Date</TableHead>
              <TableHead className=" text-gray-900 ">Total</TableHead>
              <TableHead className=" text-gray-900 ">Status</TableHead>
              <TableHead className="text-right text-gray-900 "></TableHead>
            </TableRow>
          </TableHeader>
    );
};

export default TableHeaderSectiom;