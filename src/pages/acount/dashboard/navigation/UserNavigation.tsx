import React from "react";
import { MdDashboard, MdHistory, MdOutlineShoppingBag  } from "react-icons/md";
import { IoHeartOutline, IoSettingsOutline  } from "react-icons/io5";
import Link  from 'next/link';
import ManuItem from "./ManuItem";
interface Props {}

function UserNavigation(props: Props) {
  const {} = props;

  const navilist = [
    {
        name: "Dashboard",
        link: "dashboard",
        Icon: MdDashboard,
    },
    {
        name: "Order History",
        link: "order_history",
        Icon: MdHistory,
    },
    {
        name: "Wishlist",
        link: "wishlist",
        Icon: IoHeartOutline,
    },
    {
        name: "Shopping Cart",
        link: "shopping_cart",
        Icon: MdOutlineShoppingBag,
    },
    {
        name: "Settings",
        link: "settings",
        Icon: IoSettingsOutline,
    }
  ]

  return (
    <div>
      <h2 className=" font-poppins text-xl font-medium p-3 px-4 " >Navigation</h2>
      <ul>
        {navilist.map((manuItemData, inx) =>  <ManuItem key={manuItemData?.name} manuItemData={manuItemData} ></ManuItem> )}
      </ul>
    </div>
  );
}

export default UserNavigation;
