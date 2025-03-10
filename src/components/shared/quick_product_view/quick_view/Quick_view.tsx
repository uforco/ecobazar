'use client'
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import React, { useState } from "react";
import HeadingTitleSec from "./HeadingTitleSec";
import BrandSection from './BrandSection';
import PayBuy from "./PayBuy";
import MediaSection from "./MediaSection";
import { useGetSingleProductViewQuery } from "@/redux/features/productsList/productslist";

interface productType {
    id: string;
    product_id: string;
    product_name: string;
    stock_Status: string | number;
    rating: string | number;
    price: string | number;
    discount: string | number;
    brand_name: string;
    short_Description: string;
    category: string;
    image: string[];
    description: string;
    qty: string | number;
    scale: string;
    type: string;
    tag?: string | string[] | undefined | null;
  }



const Quick_view = ({productId}: {productId: string}) => {

      const { data, isError, isLoading, isSuccess } = useGetSingleProductViewQuery(productId);

      let container = <div>Loading...</div>;

      if (isLoading) {
        container = <div>Loading...</div>;
      }
      if (!isLoading && !isSuccess && isError) {
        container = <div>something is wrong...data fetch problem</div>;
      }
      if (!isLoading && isSuccess && !isError && data.length < 1) {
        container = <div>No Data Found</div>;
      }
      if (!isLoading && isSuccess && !isError && data.length >= 1) {
        container = <MaxWidthControls>
        <div className=" flex w-full gap-6 justify-between  ">
          {/* left site */}
            <MediaSection image={data?.image} ></MediaSection>
          {/* right site */}
          <div className="  w-full " >
            <HeadingTitleSec 
              product_name={data?.product_name} 
              stock_Status={data?.stock_Status} 
              rating={data?.rating}
              price={data?.price}
              discount={data?.discount}
            ></HeadingTitleSec>
            <BrandSection
              brand_name={data?.brand_name}
              short_Description={data?.short_Description}
            ></BrandSection>
            <PayBuy
              id={data?.id}
              product_id={data?.product_id}
              stock_Status={data?.stock_Status}
              price={data?.price}
              discount={data?.discount}
            ></PayBuy>
            <div>
              <p  > Category: <span className=" text-gray-500 " >{data?.category}</span> </p>
              <div className="flex gap-2 mt-1 " >
                <p> Tag: <span className=" text-gray-500 " >Vegetables Healthy</span> </p>
                <p> Chinese <span className=" text-gray-500 " >Cabbage Green Cabbage</span> </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthControls>
      }

  return container

};

export default Quick_view;







// {/* test base64 image */}

// const [base64, setBase64] = useState<string | null>(null);

// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const file = event.target.files?.[0]; // Get the selected file
//   if (file) {
//     const reader = new FileReader();

//     // Read file as Base64
//     reader.onload = () => {
//       if (reader.result) {
//         setBase64(reader.result.toString());
//       }
//     };

//     reader.onerror = () => {
//       console.error("Error reading file");
//     };

//     reader.readAsDataURL(file); // Convert file to Base64
//   }
// };

// <div>
// <h2>Convert Image to Base64</h2>
// <input type="file" accept="image/*" onChange={handleFileChange} />
// {base64 && (
//   <div>
//     <h4>Base64 Output:</h4>
//     <textarea
//       value={base64}
//       readOnly
//       rows={10}
//       style={{ width: "100%" }}
//     />
//     <h4>Preview:</h4>
//     <Image src={base64} width={360} height={280} alt="Preview" style={{ maxWidth: "100%" }} />
//   </div>
// )}
// </div>