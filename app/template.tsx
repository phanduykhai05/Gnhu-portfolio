export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      {children}
      {/* Curtain that covers the screen then wipes up to reveal the new page. */}
      <div aria-hidden className="page-transition" />
    </div>
  );
}
