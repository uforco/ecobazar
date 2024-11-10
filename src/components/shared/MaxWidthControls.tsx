import React, { ReactNode } from 'react';

const MaxWidthControls = ({children, className: classname }:{ children: ReactNode, className?: string }) => {
    return (
        <div className={` ${classname} max-w-[1320px] mx-auto  `} >
            {children}
        </div>
    );
};

export default MaxWidthControls;