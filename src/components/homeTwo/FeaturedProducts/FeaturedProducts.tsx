import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import "./sliderStyle.scss";
import SummerSale from './summer_sale/SummerSale';
import FeaturedProductsItems from './FeaturedProductsItems/FeaturedProductsItems';

const FeaturedProducts = () => {
    return (
        <div className={`  mb-6  `} >
            <MaxWidthControls className=' overflow-hidden ' >
                <div className='mt-10' >
                    <p className=' text-Primary text-center uppercase font-medium text-sm leading-3 ' >Products</p>
                    <h2 className=' text-center text-[40px] font-semibold -mb-4 ' >Our Featured Products</h2>
                </div>
                <FeaturedProductsItems></FeaturedProductsItems>
                <div>
                    <SummerSale></SummerSale>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default FeaturedProducts;