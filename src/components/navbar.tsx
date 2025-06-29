'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'border-secondary-700 sticky bottom-0 left-0 flex w-full items-center justify-around overflow-hidden bg-indigo-100 py-3 lg:flex-col lg:justify-start lg:gap-10.5 lg:px-[5px]',
        className
      )}
    >
      <div className="mt-9 hidden justify-center lg:flex">
        <div className="h-9 w-9 rounded-full bg-blue-400" />
      </div>
      <Link href="/parallel/first">
        <p>first</p>
      </Link>
      <Link href="/parallel/second">
        <p>second</p>
      </Link>
      <Link href="/parallel/third">
        <p>third</p>
      </Link>
    </div>
  );
}
