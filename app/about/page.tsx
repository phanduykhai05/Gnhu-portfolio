import type { Metadata } from "next";
import { StickyPortrait } from "@/components/sections/StickyPortrait";
import { SectionCard } from "@/components/sections/about/SectionCard";
import { Clients } from "@/components/sections/about/Clients";
import { TimelineList } from "@/components/sections/about/TimelineList";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Giới thiệu — Trần Gia Như",
};

const EXHIBITIONS = [
  { title: "Qua ống kính", year: "2024" },
  { title: "Kết nối tự nhiên", year: "2024" },
  { title: "Câu chuyện đô thị", year: "2023" },
  { title: "Bảng màu thiên nhiên", year: "2023" },
  { title: "Những khoảnh khắc chưa thấy", year: "2022" },
  { title: "Phản chiếu Prague", year: "2022" },
];

const AWARDS = [
  { title: "Tác phẩm thiên nhiên của năm", year: "2023" },
  { title: "Giải khoảnh khắc tự nhiên", year: "2022" },
  { title: "Xuất sắc trong kể chuyện hình ảnh", year: "2022" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col p-4">
      <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:items-start">
        <StickyPortrait src="/images/about/portrait.jpg" />

        <div className="flex flex-col gap-3">
          <div className="animate-enter [animation-delay:100ms]">
            <SectionCard title="Giới thiệu" className="min-h-[360px]">
              <p>
                Với trọng tâm là những khoảnh khắc tự nhiên cùng phong cảnh ấn tượng,
                tôi cố gắng khơi gợi cảm xúc và kể chuyện qua từng tác phẩm. Nhiếp ảnh của tôi
                hòa quyện sự chân thực của cuộc sống hằng ngày với vẻ đẹp nghệ thuật,
                giúp người xem kết nối sâu sắc hơn với mỗi bức ảnh.
              </p>
              <p>
                Dù khám phá không gian đô thị hay xuyên mình vào thiên nhiên,
                mục tiêu của tôi là làm nổi bật điều phi thường trong những điều bình thường.
                Qua ống kính, tôi mời bạn cùng đồng hành trong hành trình thị giác
                đầy cảm hứng.
              </p>
            </SectionCard>
          </div>

          <div className="animate-enter [animation-delay:150ms]">
            <Clients />
          </div>

          <div className="animate-enter [animation-delay:200ms]">
            <SectionCard title="Triển lãm" className="min-h-[280px]">
              <p>
                Khám phá bộ sưu tập nhiếp ảnh được chọn lọc, ghi lại những khoảnh khắc cảm xúc,
                thiên nhiên và cuộc sống đô thị với chi tiết ấn tượng.
              </p>
            </SectionCard>
          </div>
          <div className="animate-enter [animation-delay:250ms]">
            <TimelineList items={EXHIBITIONS} />
          </div>

          <div className="animate-enter [animation-delay:300ms]">
            <SectionCard title="Giải thưởng & Vinh danh" className="min-h-[200px]" />
          </div>
          <div className="animate-enter [animation-delay:350ms]">
            <TimelineList items={AWARDS} />
          </div>

          <div className="animate-enter [animation-delay:400ms]">
            <SocialLinks />
          </div>
          <div className="animate-enter [animation-delay:450ms]">
            <SiteFooter />
          </div>
        </div>
      </section>
    </div>
  );
}
