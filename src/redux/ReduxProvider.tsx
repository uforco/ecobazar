'use client'
import React, { useEffect, useRef } from 'react'


import { AppStore, makeStore } from './app/store';


import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';

interface Props {
    children: React.ReactNode;
}

function ReduxProvider({children}: Props) {
    // const storeRef = useRef<AppStore | null>(null);

    // if (!storeRef.current) {
    //     storeRef.current = store;
    //   }
      // useEffect(() => {
      //   // if (storeRef.current != null) {
      //     const unsubscribe = setupListeners(store.dispatch);
      //     return unsubscribe;
      //   // }
      // }, []);


      const storeRef = useRef<AppStore>(undefined)
      if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
      }

    return <Provider store={storeRef.current}>{children}</Provider>;
}

export default ReduxProvider