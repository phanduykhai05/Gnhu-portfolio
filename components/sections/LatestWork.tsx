import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { WorkCard, type Work } from "@/components/sections/WorkCard";

const WORKS: Work[] = [
  { title: "Mẫu Ảnh", image: "/images/projects/job1.jpg", href: "/projects/beige" },
  { title: "Mẫu Ảnh", image: "/images/projects/job2.jpg", href: "/projects/darkness" },
  { title: "Mẫu Ảnh", image: "/images/projects/job3.jpg", href: "/projects/darkness" },
  { title: "Mẫu Ảnh", image: "/images/projects/job4.jpg", href: "/projects/darkness" },
  { title: "Mẫu Ảnh", image: "/images/projects/job5.jpg", href: "/projects/darkness" },
  { title: "Mẫu Ảnh", image: "/images/projects/job6.jpg", href: "/projects/darkness" },
];

export function LatestWork() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[15px] text-foreground">
          Dự án mới
          <ArrowDown className="h-4 w-4 text-foreground/50" />
        </p>
        <Link href="/projects" className="text-sm text-foreground underline underline-offset-4 hover:opacity-70">
          Xem tất cả
        </Link>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
        {WORKS.map((work) => (
          <WorkCard key={work.href} work={work} />
        ))}
      </div>
    </div>
  );
}
