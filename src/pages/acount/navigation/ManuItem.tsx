import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
        name: string;
        link: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }

const ManuItem :React.FC<MenuItemProps> = ({ Icon, link, name }) => {
    if (!Icon) return null;
    return (
        <li className=" group border-l-2 border-transparent transition-all hover:border-Primary hover:bg-gray-100 my-1 " >
            <Link className=" flex items-center gap-1 p-3 group-hover:text-gray-900 text-gray-600 " href={`/account/${link}`} >
                <span className="text-xl " ><Icon></Icon></span>
                <span className=" text-base font-medium font-poppins " >{name}</span>
            </Link>
        </li>
    )
}

export default ManuItem
