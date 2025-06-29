import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid h-full w-full place-items-center gap-4 bg-blue-100">
      <h1 className="text-4xl font-bold">This is Third Page</h1>
      <Link
        href="/parallel/content/third"
        className="w-3xs rounded-md bg-slate-100 p-3 text-center ring-2 ring-slate-300 hover:bg-slate-200"
      >
        Third Content
      </Link>
    </div>
  );
}
