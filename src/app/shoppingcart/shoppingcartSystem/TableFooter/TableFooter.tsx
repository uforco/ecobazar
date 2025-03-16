import React from "react";

const TableFooter = () => {
  return (
    <div className="border-t py-3 px-2 flex justify-between ">
      <button className=" px-5 py-2 rounded-full bg-gray-200 text-sm ">
        Return to shop
      </button>
      <button className=" px-5 py-2 rounded-full bg-gray-200 text-sm ">
        Update Cart
      </button>
    </div>
  );
};

export default TableFooter;
