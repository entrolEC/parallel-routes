'use client';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useIsDesktop } from '@/lib/useIsDesktop';
import Navbar from '@/components/navbar';

export default function Layout({
  children,
  navbar,
  content,
}: {
  children: ReactNode;
  navbar: ReactNode;
  content: ReactNode;
}) {
  const { isDesktop } = useIsDesktop();
  const pathname = usePathname();

  const pathToShowContent = ['content'];
  const showViewer = pathToShowContent.some((path) => pathname.includes(path));

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full">
        {/* 모든 콘텐츠를 렌더링하되, 작은 해상도에서는 숨김 */}
        <div className="hidden">{children}</div>
        <div className="hidden h-full lg:flex">
          <Navbar />
        </div>

        {isDesktop ? (
          <>
            <div id="navbar-container" className={cn('relative transform-gpu lg:flex-shrink-0')}>
              {navbar}
            </div>
            <div id="viewer-container" className={cn('relative flex-1 transform-gpu')}>
              {content}
            </div>
          </>
        ) : (
          <div className="relative flex h-full w-full">
            {showViewer ? (
              <div className={cn('absolute inset-0 h-full w-full transform-gpu')}>{content}</div>
            ) : (
              <div className={cn('absolute inset-0 h-full w-full transform-gpu')}>{navbar}</div>
            )}
            <div className="absolute inset-x-0 bottom-0 flex w-full lg:hidden">
              <Navbar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
