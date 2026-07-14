import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CornerTab } from "@/components/ui/CornerTab";

import type { StaticImageData } from "next/image";

export type Work = {
  title: string;
  image: string | StaticImageData;
  href: string;
};

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link
      href={work.href}
      className="group relative block aspect-4/5 overflow-hidden rounded-3xl bg-neutral-900"
    >
      <Image
        src={work.image}
        alt={work.title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <CornerTab corner="top-left" tone="light">
        {work.title}
      </CornerTab>

      {/* hover overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-500 group-hover:bg-black/35 group-hover:opacity-100">
        <span className="flex items-center gap-1.5 text-sm font-medium text-white">
          Xem dự án
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
