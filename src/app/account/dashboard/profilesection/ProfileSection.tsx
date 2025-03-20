import React from 'react';
import BillAddress from "@/pages/acount/dashboard/billAddress/BillAddress";
import Profle from "@/pages/acount/dashboard/profile/Profle";
const ProfileSection = () => {
    return (
        <>
            <Profle className="w-[536px] h-[278px] rounded-lg border flex flex-col text-center justify-center items-center " ></Profle>
            <BillAddress className="w-[424px] h-[278px] rounded-lg border " ></BillAddress>
        </>
    );
};

export default ProfileSection;