import MaxWidthControls from "@/components/shared/MaxWidthControls";
import React, { useState } from "react";
import HeadingTitleSec from "./HeadingTitleSec";
import BrandSection from './BrandSection';
import PayBuy from "./PayBuy";
import { productType } from "../productType";
import ImageMediaSection from "@/components/shared/ImageMediaSection/ImageMediaSection";




const HeadingSec = ({product}: {product: productType}) => {
  return (
    <MaxWidthControls>
      <div className=" flex w-full gap-3 ">
        {/* left site */}
          <ImageMediaSection images={product.image} ></ImageMediaSection>
        {/* right site */}
        <div className="w-full">
          <HeadingTitleSec 
            name={product.product_name}
            stock={product.stock_Status}
            rating={product.rating}
            price={product.price}
            discount={product.discount}
          ></HeadingTitleSec>
          <BrandSection brandName={product?.brand_name} short_Descrip={product?.short_Description} ></BrandSection>
          <PayBuy product_id={product?.product_id} stock={product?.stock_Status} ></PayBuy>
          <div>
            <p  > Category: <span className=" text-gray-500 " >{product?.category}</span> </p>
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

export default HeadingSec;







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