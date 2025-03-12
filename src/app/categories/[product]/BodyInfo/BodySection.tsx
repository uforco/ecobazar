"use client"
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import React, { useState } from 'react';
import Descriptions from './Descriptions';
import AdditionalInfo from './AdditionalInfo';
import CustomerFeedback from './CustomerFeedback';
import { productType } from '../productType';


const BodySection = ({product}: { product: productType }) => {

    const [infoSlid, setInfoSlid] = useState<string>('Descriptions')

    let contain;

    if( infoSlid == 'Descriptions' ) {  
        contain =  <div>
            <Descriptions 
                descriptions={product?.description}
                discount={product?.discount} >
            </Descriptions>
        </div>
    }
    if ( infoSlid == 'Additional Information' ){
        contain =  <div>
            <AdditionalInfo 
                Weight={product?.qty}
                scale={product?.scale}
                type={product?.type ?? ''}
                category={product?.category}
                stock={product?.stock_Status}
                tag={product?.tag}
                discount={product?.discount}
            ></AdditionalInfo>
        </div>
    }
    if ( infoSlid == 'Customer Feedback' ){
        contain = <div>
            <CustomerFeedback></CustomerFeedback>
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