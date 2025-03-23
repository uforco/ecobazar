'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoSearchOutline } from 'react-icons/io5';
import SearchProductView from './SearchProductView';

const SearchBer = () => {
    const [likeLoad, setLikeLoad] = React.useState<boolean>(false)
    const [productList, setProductList] = React.useState([])

    const likeSearchHeandle = async (name: string) => {
        if(!name || likeLoad) {
            setProductList([])
            return;
        };
        setLikeLoad(true)
        const dta = await fetch(`/api/search_product/${name}`).then((res) => res.json())
        setProductList(dta)
        setLikeLoad(false)
    }

    return (
        <div className='  w-[400px] relative' >
            <div className=' flex items-center w-full relative ' >
                <span className=' absolute top-1/2 -translate-y-1/2 left-3 ' > <IoSearchOutline></IoSearchOutline> </span>
                <Input id='searchber' onChange={(e) => likeSearchHeandle(e.target.value)} className=' w-full pl-8  ' type="text" placeholder="Search" />
                <div className=' absolute top-0 right-0 h-full flex items-center ' >
                    <span className={` ${likeLoad? " block " : " hidden "} w-4 h-4 border mr-3 animate-spin rounded-full border-t-Primary `} ></span>
                    <Button  className=' h-full ' >Search</Button>
                    
                </div>
            </div>
            <SearchProductView productList={productList} />
        </div>
    );
};

export default SearchBer;