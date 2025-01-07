import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

interface Props {}

function CustomerFeedback(props: Props) {
  const {} = props;

  return (
    <div>
      <div>
        <ReviewUserCard></ReviewUserCard>
        <ReviewUserCard></ReviewUserCard>
        <ReviewUserCard></ReviewUserCard>
        <ReviewUserCard></ReviewUserCard>
      </div>

      <button className=" bg-Primary/10 text-Primary rounded-full px-6 py-2 mt-3 font-semibold ">
        Load More
      </button>
    </div>
  );
}

export default CustomerFeedback;

const ReviewUserCard = () => {
  return (
    <div className=" w-[700px] border-b mt-3 ">
      <div className=" flex justify-between items-start  ">
        <div className=" flex  gap-3 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2>Kristin Watson</h2>
            <div className=" flex items-center gap-2 text-warning ">
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
            </div>
          </div>
        </div>
        <span>2 min ago</span>
      </div>
      <div className="mb-3 mt-2">
        <p>Duis at ullamcorper nulla, eu dictum eros.</p>
      </div>
    </div>
  );
};
