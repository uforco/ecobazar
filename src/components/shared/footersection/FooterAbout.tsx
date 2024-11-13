import React from 'react';
import HeadingTitle from '../HeadingTitle';

const FooterAbout = () => {
    return (
        <div className=' col-span-2 text-gray-500  ' >
        <div className=' w-[336px] ' >
            <HeadingTitle className=' text-xl mb-5 ' >About Ecobazar</HeadingTitle>
            <p className=' mb-5 text-sm ' >Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div className=' flex items-center gap-3 text-sm ' >
                <p className=' text-white font-medium border-b-2 border-Primary pb-1 ' >{'(219)'} 555-0114</p>
                or
                <p className=' text-white font-medium border-b-2 border-Primary pb-1 ' >Proxy@gmail.com</p>
            </div>
        </div>
    </div>
    );
};

export default FooterAbout;