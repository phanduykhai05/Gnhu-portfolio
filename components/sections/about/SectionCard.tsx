import { cn } from "@/lib/utils";

export function SectionCard({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-16 rounded-3xl bg-neutral-900 p-8",
        className,
      )}
    >
      <h2 className="text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {children ? (
        <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-neutral-300">
          {children}
        </div>
      ) : null}
    </div>
  );
}
