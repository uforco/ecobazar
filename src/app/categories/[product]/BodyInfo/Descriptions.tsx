import React from "react";
import { FaCheck } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { GiTreeBranch } from "react-icons/gi";
import ReviewVideo from './ReviewVideo';

const Descriptions = () => {
  const greatrat = [
    "100 g of fresh leaves provides.",
    "Aliquam ac est at augue volutpat elementum.",
    "Quisque nec enim eget sapien molestie.",
    "Proin convallis odio volutpat finibus posuere.",
  ];

  return (
    <div className=" flex justify-between w-full overflow-hidden gap-5 ">
      <div className=" w-full">
        <p>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit. 
          <br />
          <br />
          Nulla mauris tellus,
          feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus
          elementum tincidunt, turpis mi viverra velit, pellentesque tristique
          neque mi eget nulla. Proin luctus elementum neque et pharetra.
        </p>
        <ul className=" my-6 " >
          {greatrat.map((item) => (
            <li key={item} className=" flex items-center gap-2 my-2 ">
              <span className=" bg-Primary text-white p-1 text-xs rounded-full overflow-hidden ">
                <FaCheck></FaCheck>
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <p>
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.{" "}
        </p>
      </div>
      <div className=" w-full">
        <div className=" w-full flex justify-center   ">
          <ReviewVideo></ReviewVideo>
        </div>
        <div className=" w-full flex justify-center mt-4 " >

            <div className=" w-[536px] overflow-hidden flex justify-between border py-4 px-2 rounded-md " >
                <div className=" flex items-center gap-1 " >
                    <div className=" text-Primary text-4xl " > <CiDiscount1></CiDiscount1> </div>
                    <div>
                        <h2 className=" text-black font-semibold " >64% Discount</h2>
                        <p className=" text-black/90 " >Save your 64% money with us</p>
                    </div>
                </div>
                <div className=" flex items-center gap-1 " >
                    <div className=" text-Primary text-4xl " > <GiTreeBranch></GiTreeBranch> </div>
                    <div>
                        <h2 className=" text-black font-semibold " >100% Organic</h2>
                        <p className=" text-black/90 " >100% Organic Vegetables</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Descriptions;
