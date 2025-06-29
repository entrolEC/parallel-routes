export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-full max-w-5xl lg:max-w-md">{children}</div>;
}
