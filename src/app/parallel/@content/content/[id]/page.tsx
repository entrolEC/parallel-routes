const CONTENT: Record<string, string> = {
  first: `The sky bleeds gold as the sun retreats
  Birdsongs hush in the hush of dusk,
  And shadows stretch like whispered secrets.`,
  second: `In circuits cold, a thought ignites,
  A world is born in blinking lights,
  Yet craves the warmth of human sights.`,
  third: `A single page, a silent spark
  Carries voices through the dark,
  Where dreams take root and leave a mark`,
};

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-purple-100">
      <h1 className="text-4xl font-bold">This is Content of {id}</h1>
      <p className="whitespace-pre-wrap">{CONTENT[id]}</p>
    </div>
  );
}
