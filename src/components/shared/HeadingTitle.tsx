import React from 'react';

const HeadingTitle = ({children, className:classname}: {children: string, className?: string}) => {
    return <h1 className={` text-white capitalize  font-medium ${classname} `} >{children}</h1>
}

export default HeadingTitle;