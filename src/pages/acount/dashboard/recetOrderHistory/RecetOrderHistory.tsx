import React from 'react'
import Link from 'next/link';
import {

    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface Props {}

function RecetOrderHistory(props: Props) {
    const {} = props

    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV006",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV007",
          paymentStatus: "Unpaid",
          totalAmount: "$300.00",
          paymentMethod: "Credit Card",
        },
      ]

    return (
        <div className=' border mt-5 pb-3 rounded-lg h-[404px] ' >
            <div className=' flex justify-between w-full p-4 px-5 ' >
                <h2 className=' font-poppins font-semibold ' >Recet Order History</h2>
                <Link className=' text-Primary ' href={''}>View All</Link>
            </div>
            <div className=' px-3 ' >
                <Table  >
                    <TableHeader className=' bg-gray-200  ' >
                        <TableRow  >
                            <TableHead className="w-[160px] text-gray-900 ">Order ID</TableHead>
                            <TableHead className=' text-gray-900 ' >Date</TableHead>
                            <TableHead className=' text-gray-900 ' >Total</TableHead>
                            <TableHead className=' text-gray-900 ' >Status</TableHead>
                            <TableHead className="text-right text-gray-900 "></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow style={{border: 0}} className=' py-5 bottom-0 text-gray-800 ' key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell >{invoice.totalAmount}</TableCell>
                            <TableCell className="text-right">
                                <Link className=' text-Primary ' href={'/'}>View Details</Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default RecetOrderHistory
