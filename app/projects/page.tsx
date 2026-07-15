import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectsGallery } from "@/components/sections/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Dự án — Trần Gia Như",
  description: "Bộ sưu tập ảnh và các dự án nhiếp ảnh chọn lọc của Trần Gia Như.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-20 sm:py-24">
      {/* Header */}
      <Reveal>
        <div className="mb-12 flex flex-col gap-5 sm:mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-foreground/50">
            Dự án
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Bộ sưu tập ảnh <span className="text-foreground/40">chọn lọc</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-foreground/60">
            Những khung hình ghi lại ánh sáng, cảm xúc và khoảnh khắc — mỗi bức
            là một câu chuyện riêng qua ống kính của tôi. Nhấp vào ảnh để xem lớn.
          </p>
        </div>
      </Reveal>

      <ProjectsGallery />
    </Container>
  );
}
