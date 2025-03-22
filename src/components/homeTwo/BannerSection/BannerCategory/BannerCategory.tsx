import Link from 'next/link';
import React from 'react';
import { BsPlus } from "react-icons/bs";
import { GiMeat, GiAnglerFish, GiBowlOfRice , GiFruitBowl, GiShinyApple, GiCupcake, GiButter    } from "react-icons/gi";
import { RiDrinksLine } from "react-icons/ri";
import { TbIceCream } from "react-icons/tb";


const categorie = [
    {
        name: "Fresh Fruit",
        icon: GiShinyApple
    },
    {
        name: "Vegetables",
        icon: GiFruitBowl
    },
    {
        name: "River Fish",
        icon: GiAnglerFish
    },
    {
        name: "Chicken & Meat",
        icon: GiMeat
    },
    {
        name: "Drink & Water",
        icon: RiDrinksLine
    },
    {
        name: "Yogurt & Ice Cream",
        icon: TbIceCream
    },
    {
        name: "Cake & Bread",
        icon: GiCupcake
    },
    {
        name: "Butter & Cream",
        icon: GiButter
    },
    {
        name: "Cooking",
        icon: GiBowlOfRice
    }
]

const Category = ({cata}:{ cata: any }) => {
    return(
        <li className='flex p-3 items-center gap-2 px-4 cursor-pointer transition-all hover:bg-Primary text-gray-700 hover:text-white ' >
            <cata.icon size={24}/>
            <p className=' capitalize ' >{cata.name}</p>  
        </li>
    )
}


const BannerCategory = ({className: classname}:{className?: string}) => {
    return (
        <div className={`${classname} flex flex-col  `} >
            <ul className=' w-full flex-1 flex flex-col justify-between ' >
                {
                    categorie.map((cata) => <Category key={cata.name} cata={cata} ></Category> ) 
                }
            </ul>
            <Link className='flex p-3 border-t  items-center gap-2 px-4 cursor-pointer transition-all hover:bg-Primary text-gray-700 hover:text-white ' href={'/categories'} >
                <BsPlus className=' text-3xl ' ></BsPlus>
                <p className=' capitalize ' >View all Category</p>
            </Link>
        </div>
    );
};

export default BannerCategory;