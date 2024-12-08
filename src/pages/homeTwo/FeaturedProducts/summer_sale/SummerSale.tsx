import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from "@mynaui/icons-react";
import CategoryItem from './CategoryItem';

const SummerSale = () => {


    const itenmlist = [
        {
            Title: 'Hot Deals',
            items: [
                {
                    image: '/images/home/Featured/appels.png',
                    name: 'Green Apple',
                    price: '14.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/orange.png',
                    name: 'Japanese Malta',
                    price: '13.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/lettuce.png',
                    name: 'Green Lettuce',
                    price: '14.99',
                    rating: 4
                }
            ]
        },
        {
            Title: 'Best Seller',
            items: [
                {
                    image: '/images/home/Featured/eggpiant.png',
                    name: 'Eggpiant',
                    price: '14.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/red_capsicum.png',
                    name: 'Red Capsicum',
                    price: '13.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/red_tomatos.png',
                    name: 'Red Tomatos',
                    price: '14.99',
                    rating: 4
                }
            ]
        },
        {
            Title: 'Top Rated',
            items: [
                {
                    image: '/images/home/Featured/potatos.png',
                    name: 'Big Potatos',
                    price: '14.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/Corn.png',
                    name: 'Corn',
                    price: '13.99',
                    rating: 4
                },
                {
                    image: '/images/home/Featured/fresh_cauliflower.png',
                    name: 'Fresh Cauliflower',
                    price: '14.99',
                    rating: 4
                }
            ]
        }
    ]


    return (
        <div className=' grid grid-cols-4 h-[426px] w-full mt-7 ' >
            {
                itenmlist.map((itemsProducts, inx)=> {
                    const keys = itemsProducts.Title.replaceAll(" ", "")
                    return <div key={keys} >
                    <CategoryItem title={itemsProducts.Title} data={itemsProducts.items} ></CategoryItem>
                </div>
                } )
            }
            <div className=' flex justify-center ' >
                <div className=" flex flex-col  rounded-xl overflow-hidden items-center w-[312px] h-full bg-[url('/images/home2/featured/fruit.png')] bg-cover " >
                    <h2 className=' uppercase font-semibold text-xs mt-10 mb-3 ' >HOT SALE</h2>
                    <p className=' text-[32px] mx-4 text-center leading-10 mb-5 ' >
                        <span className=' font-semibold  ' >Save 37%</span> on Every Order
                    </p>
                    <Button className=' rounded-full w-[162px] h-[45px] font-semibold flex justify-center items-center text-md text-Primary bg-white shadow-xl shadow-gray-400/20  hover:text-white transition-all ' > Shop Now <ArrowRight></ArrowRight> </Button>
                </div>
            </div>
        </div>
    );
};

export default SummerSale;