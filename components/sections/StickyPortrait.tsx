import Image from "next/image";
import { CornerTab } from "@/components/ui/CornerTab";

export function StickyPortrait({
  src,
  name = "Ema Trần Gia Như",
}: {
  src: string;
  name?: string;
}) {
  return (
    <div className="animate-enter lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl bg-neutral-900 sm:aspect-auto sm:h-full">
        <Image
          src={src}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
        <CornerTab corner="bottom-right" tone="light">
          {name}
        </CornerTab>
      </div>
    </div>
  );
}
