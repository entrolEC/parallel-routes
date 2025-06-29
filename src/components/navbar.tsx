'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = Object.fromEntries(searchParams.entries());

  return (
    <div
      className={cn(
        'border-secondary-700 bg-secondary-800 pb-safe-offset-3 sticky bottom-0 left-0 flex justify-around overflow-hidden border-t pt-3 lg:flex-col lg:justify-start lg:gap-10.5 lg:px-[5px]',
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
