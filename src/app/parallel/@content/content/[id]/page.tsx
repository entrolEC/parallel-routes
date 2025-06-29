export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="grid h-full w-full place-items-center bg-purple-100">
      <h1 className="text-6xl font-bold">This is Content of {id}</h1>
    </div>
  );
}
