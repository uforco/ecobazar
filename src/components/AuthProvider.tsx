'use client'
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  React.useEffect(()=>{
    return () => {
      navigator.geolocation.getCurrentPosition( async (proition)=> proition.coords)
    }
  })


    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default AuthProvider;