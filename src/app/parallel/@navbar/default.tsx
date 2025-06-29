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
      <div className="mx-auto h-full w-screen max-w-screen-lg flex-shrink-0 overflow-hidden lg:h-dvh lg:max-w-lg">
        <p>loading</p>
      </div>
      <div className="block lg:hidden">
        <Navbar />
      </div>
    </div>
  );
}
