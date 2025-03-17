'use client'
import React, { useEffect, useState, ReactNode } from 'react';


const FormSubmitAction = ({ children }: { children: ReactNode }) => {

    function onSubmit(values: any) {
        values.preventDefault();
        const formData = new FormData(values.target as HTMLFormElement);

        console.log(formData.get('states') )
      }

    //   const[hydro, setHydro] = useState<number | undefined>(undefined)
    //   useEffect(()=>{
    //       if (typeof window !== 'undefined') setHydro(Date.now())
    //   },[])
  

    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormSubmitAction;