import React from 'react';
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import ProductList from '@/pages/shop/productList/ProductList';

const page = () => {
    return (
        <div  >
            <MaxWidthControls>
                <div className="flex justify-between my-3 " >
                    <div className=" w-[312px] border " >dfhjdf</div>
                    <div className=" w-[984px] " >
                        <ProductList></ProductList>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default page;