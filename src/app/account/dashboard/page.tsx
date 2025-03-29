
import ProfileSection from "./profilesection/ProfileSection";
import RecetOrderHistory from "./recetOrderHistory/RecetOrderHistory";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" flex justify-between " >
        <ProfileSection/>
      </div>
        <RecetOrderHistory></RecetOrderHistory>
    </>
  );
}

export default Page;
