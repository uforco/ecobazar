import BillAddress from "@/pages/acount/dashboard/billAddress/BillAddress";
import Profle from "@/pages/acount/dashboard/profile/Profle";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" flex justify-between " >
        <Profle></Profle>
        <BillAddress></BillAddress>
      </div>
    </>
  );
}

export default Page;
