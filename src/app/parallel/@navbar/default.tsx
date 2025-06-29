'use client';
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/navigation';

export default function DefaultNavbar() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/parallel/first');
  }, []);

  return (
    <div className="flex h-dvh flex-col justify-end lg:flex-row-reverse">
      <div className="lg:max-w-screen-xs mx-auto h-[calc(100dvh-calc(env(safe-area-inset-bottom)+4.75rem))] w-screen max-w-screen-xl flex-shrink-0 overflow-hidden xl:h-dvh">
        <p>loading</p>
      </div>
      <div className="block lg:hidden">
        <Navbar />
      </div>
    </div>
  );
}
