import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {}

function Orderhistory (props: Props) {
  const {} = props;

  const invoices = [
    {
      order_id: "#3933",
      date: "4 April, 2021",
      Total: "$135.00 (5 Products)",
      Status: "Processing",
    },
    {
      order_id: "#5045",
      date: "27 Mar, 2021",
      Total: "$25.00 (1 Product)",
      Status: "on the way",
    },
    {
      order_id: "#5028",
      date: "20 Mar, 2021",
      Total: "$250.00 (4 Products)",
      Status: "Completed",
    },
    {
      order_id: "#4600",
      date: "19 Mar, 2021",
      Total: "$35.00 (1 Products)",
      Status: "Completed",
    },
    {
      order_id: "#4152",
      date: "18 Mar, 2021",
      Total: "$578.00 (13 Products)",
      Status: "Completed",
    },
    {
      order_id: "#8811",
      date: "10 Mar, 2021",
      Total: "$345.00 (7 Products)",
      Status: "Completed",
    },
    {
      order_id: "#3536",
      date: "5 Mar, 2021",
      Total: "$560.00 (2 Products)",
      Status: "Completed",
    },
    {
      order_id: "#1374",
      date: "27 Feb, 2021",
      Total: "$560.00 (2 Products)",
      Status: "Completed",
    },
    {
      order_id: "#7791",
      date: "25 Feb, 2021",
      Total: "$560.00 (2 Products)",
      Status: "Completed",
    },
  ];

  return (
    <div className=" border rounded-lg  ">
      <div className=" flex justify-between w-full p-4 px-5 ">
        <h2 className=" font-poppins font-semibold ">Order History</h2>
      </div>
      <div className=" px-3 h-[700px]">
        <Table>
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
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                style={{ border: 0 }}
                className=" py-5 bottom-0 text-gray-800 "
                key={invoice.order_id}
              >
                <TableCell className="font-medium">
                  {invoice.order_id}
                </TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.Total}</TableCell>
                <TableCell>{invoice.Status}</TableCell>
                <TableCell className="text-right">
                  <Link
                    className=" text-Primary "
                    href={"/account/order_history/order_detail"}
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className=" flex justify-center gap-5 items-center p-5 ">
        <button className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl text-gray-500 ">
          <IoIosArrowBack></IoIosArrowBack>{" "}
        </button>
        <ul className=" flex gap-2 text-gray-700 transition-all ">
          <li className=" cursor-pointer hover:bg-Primary hover:text-white text-white w-8 h-8 rounded-full flex justify-center items-center bg-Primary ">
            1
          </li>
          <li className=" cursor-pointer hover:bg-Primary hover:text-white w-8 h-8 rounded-full flex justify-center items-center ">
            2
          </li>
          <li className=" cursor-pointer hover:bg-Primary hover:text-white w-8 h-8 rounded-full flex justify-center items-center ">
            3
          </li>
        </ul>
        <button className=" border w-10 h-10 rounded-full flex justify-center items-center text-xl  ">
          <IoIosArrowForward></IoIosArrowForward>{" "}
        </button>
      </div>
    </div>
  );
}

export default Orderhistory
