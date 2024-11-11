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
            
            {/* <div>
                <CategoryItem title={'Best Seller'}></CategoryItem>
            </div>
            <div>
                <CategoryItem title={'Top Rated'}></CategoryItem>
            </div> */}
            <div className=' flex justify-center ' >
                <div className=" flex flex-col  items-center w-[312px] h-full bg-[url('/images/home/Featured/SummerBannar.png')] " >
                    <h2 className=' uppercase font-semibold text-xs mt-10 ' >Summer Sale</h2>
                    <h1 className=' text-Primary text-3xl font-semibold my-2 mb-5 ' >75% off</h1>
                    <Button className=' rounded-full w-[162px] h-[45px] flex justify-center items-center text-md text-Primary bg-white shadow-xl shadow-gray-400/20  hover:text-white transition-all ' > Shop Now <ArrowRight></ArrowRight> </Button>
                </div>
            </div>
        </div>
    );
};

export default SummerSale;