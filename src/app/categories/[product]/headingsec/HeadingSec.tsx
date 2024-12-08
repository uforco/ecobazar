"use client";
import MaxWidthControls from "@/components/shared/MaxWidthControls";
import Image from "next/image";
import React, { useState } from "react";

const HeadingSec = () => {


  return (
    <MaxWidthControls>
      <div className=" flex w-full ">
        <div>
          <div>djh</div>
          <div>
            {/* <Image src={""} alt={""}></Image> */}
          </div>
        </div>
        <div></div>
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