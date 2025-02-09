'use client'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import RedioBtnCategoris from './RedioBtnCategoris';

interface Props {}

function AllCategories(props: Props) {
    const {} = props

    const [swt, setSwt] = React.useState<boolean>(false)

    return (
        <div className="p-3 transition-all border-b " >
            <div onClick={() => setSwt((priv) => !priv)} className="flex items-center justify-between cursor-pointer " >
                <h2 className=" font-semibold ">All Categories</h2>
                <span className={ `${swt? "rotate-0" : "-rotate-180"} transition-all duration-300 `} > <IoIosArrowDown></IoIosArrowDown> </span>
            </div>
            <div className={` overflow-hidden transition-all mt-3 duration-500 ${ swt? "h-0" : " h-[343px] " } `} >
                <ul className="ml-3" >
                    <RedioBtnCategoris className="my-3" name="Fresh Fruit"/>
                    <RedioBtnCategoris className="my-3" name="Vegetables"/>
                    <RedioBtnCategoris className="my-3" name="Cooking"/>
                    <RedioBtnCategoris className="my-3" name="Snacks"/>
                    <RedioBtnCategoris className="my-3" name="Beverages"/>
                    <RedioBtnCategoris className="my-3" name="Beauty & Health"/>
                    <RedioBtnCategoris className="my-3" name="Bread & Bakery"/>
                </ul>
            </div>
        </div>
    )
}

export default AllCategories
