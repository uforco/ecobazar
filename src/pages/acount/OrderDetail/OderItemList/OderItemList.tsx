'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import SingleItem, { itemType } from './SingleItem';

interface Props {
  items: itemType[]
}

function OderItemList({items}: Props) {

  if(!items) return null

    return (
        <div>
            <Table>
                <TableHeader>
                  <TableRow className=' bg-gray-200  ' >
                    <TableHead className="w-[360px] pl-8 text-gray-700 ">Product</TableHead>
                    <TableHead className=' text-gray-700 ' >Price</TableHead>
                    <TableHead className=' text-gray-700 ' >Quantity</TableHead>
                    <TableHead className=' text-gray-700 ' >Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                    <TableBody className=' w-full ' >
                      {items.map((item: itemType) => (
                          <SingleItem
                          key={`${item.item_name}`}
                          item={item}
                          ></SingleItem>
                      ))}
                    </TableBody>
              </Table>
        </div>
    )
}

export default OderItemList
