
import React from 'react';
import { BiSolidError } from "react-icons/bi";


const Errorhandle = ({ error }: { error?: string }) => {

    return (error &&
        <div className=' flex items-center gap-2 bg-red-100 p-2 rounded-sm text-red-500 mt-2 ' >
            <div> <BiSolidError></BiSolidError> </div>
            <div>{error}</div>
        </div>
    );
};

export default Errorhandle;