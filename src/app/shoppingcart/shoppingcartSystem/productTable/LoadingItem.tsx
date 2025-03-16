
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";


const LoadingItem = () => {
  return (
    <TableRow className=" bg-gray-200/20 animate-pulse ">
      <TableCell className="font-medium">
        <div className=" flex justify-start items-center ">
          <div className=" w-[100px] h-[100px] rounded-md bg-gray-200  animate-pulse"></div>
          <p className="ml-3 h-7 rounded-md bg-gray-200 w-28 animate-pulse "></p>
        </div>
      </TableCell>
      <TableCell>
        <p className=" w-28 h-5 bg-gray-200 rounded-md "></p>
      </TableCell>
      <TableCell>
        <div className=" flex justify-start">
          <div className="flex items-center justify-center gap-3 border p-1 rounded-full animate-pulse ">
            <div className="bg-gray-200 rounded-full flex items-center justify-center size-7 "></div>
            <p className="w-4 flex items-center justify-center"></p>
            <div className="bg-gray-200 rounded-full flex items-center justify-center size-7 "></div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className=" flex justify-between gap-3 items-center animate-pulse ">
          <p className=" flex items-center h-5 w-28 bg-gray-200 rounded-md "></p>
          <p className=" text-xl border-2 rounded-full p-1 size-8 "></p>
        </div>
      </TableCell>
    </TableRow>
  );
};
export default LoadingItem;