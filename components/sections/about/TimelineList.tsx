export type TimelineItem = {
  title: string;
  year: string;
};

export function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-between rounded-3xl bg-neutral-900 px-8 py-5 transition hover:bg-neutral-800"
        >
          <span className="text-lg font-medium text-white">{item.title}</span>
          <span className="text-sm text-neutral-400">{item.year}</span>
        </div>
      ))}
    </div>
  );
}
