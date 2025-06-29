'use client';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={cn(
        'w-3xs rounded-md bg-slate-100 p-3 text-center ring-2 ring-slate-300 hover:bg-slate-200',
        className
      )}
    >
      Back
    </button>
  );
}
