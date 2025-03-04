import MaxWidthControls from "@/components/shared/MaxWidthControls";
import React, { useState } from "react";

import HeadingTitleSec from "./HeadingTitleSec";
import BrandSection from './BrandSection';
import PayBuy from "./PayBuy";
import MediaSection from "./MediaSection";


interface Props {
  data: {
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
}

const Quick_view = ({data}: Props) => {

  const { id, product_id, product_name, stock_Status, rating, price, discount, brand_name, short_Description, category, image, description, qty, scale, type, tag } = data;

  // console.log(data);

  return (
    <MaxWidthControls>
      <div className=" flex w-full gap-3 ">
        {/* left site */}
          <MediaSection image={image} ></MediaSection>
        {/* right site */}
        <div className="  w-full " >
          <HeadingTitleSec 
            product_name={product_name} 
            stock_Status={stock_Status} 
            rating={rating}
            price={price}
            discount={discount}
          ></HeadingTitleSec>
          <BrandSection
            brand_name={brand_name}
            short_Description={short_Description}
          ></BrandSection>
          <PayBuy
            id={id}
            product_id={product_id}
            stock_Status={stock_Status}
          ></PayBuy>
          <div>
            <p  > Category: <span className=" text-gray-500 " >{category}</span> </p>
            <div className="flex gap-2 mt-1 " >
              <p> Tag: <span className=" text-gray-500 " >Vegetables Healthy</span> </p>
              <p> Chinese <span className=" text-gray-500 " >Cabbage Green Cabbage</span> </p>
            </div>
          </div>
        </div>
      </div>
      
    </MaxWidthControls>
  );
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