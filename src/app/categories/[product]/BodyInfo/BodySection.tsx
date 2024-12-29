"use client"
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import React, { useState } from 'react';
import Descriptions from './Descriptions';



const BodySection = () => {

    const [infoSlid, setInfoSlid] = useState<string>('Descriptions')

    let contain;

    if( infoSlid == 'Descriptions' ) {  
        contain =  <div>
            <h2>111111</h2>
            <Descriptions></Descriptions>
        </div>
    }else if ( infoSlid == 'Additional Information' ){
        contain =  <div>
            <h2>222222</h2>
            <Descriptions></Descriptions>
        </div>
    }else if ( infoSlid == 'Customer Feedback' ){
        contain =  <div>
            <h2>3333333</h2>
            <Descriptions></Descriptions>
        </div>
    }else{
        contain =  <div>
            <h2>111111</h2>
            <Descriptions></Descriptions>
        </div>
    }
    
    return (
        <div>
            <MaxWidthControls>
                <div className=' w-full flex justify-center my-8 ' >
                    <div className=' flex items-center gap-8 ' >
                        <h2 onClick={()=> setInfoSlid('Descriptions')} className={` ${ infoSlid == 'Descriptions'? "border-b-2 border-Primary":" border-transparent" }  py-3 cursor-pointer border-b-2  `} >Descriptions</h2>
                        <h2 onClick={()=> setInfoSlid('Additional Information')} className={` ${ infoSlid == 'Additional Information'? "border-b-2 border-Primary":" border-transparent " }  py-3 cursor-pointer border-b-2  `} >Additional Information</h2>
                        <h2 onClick={()=> setInfoSlid('Customer Feedback')} className={` ${ infoSlid == 'Customer Feedback'? "border-b-2 border-Primary":" border-transparent " }  py-3 cursor-pointer border-b-2 `} >Customer Feedback</h2>
                    </div>
                </div>
                {contain}
            </MaxWidthControls>
        </div>
    );
};

export default BodySection;