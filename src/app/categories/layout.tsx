import Loading from '@/components/shared/loading';
import React, { Suspense } from 'react';


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <Suspense fallback={<Loading />}>{children}</Suspense>
    );
  }