import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortraitTilt } from "@/components/sections/about/PortraitTilt";
import { SectionCard } from "@/components/sections/about/SectionCard";
import { TimelineList } from "@/components/sections/about/TimelineList";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Giới thiệu — Trần Gia Như",
  description:
    "Trần Gia Như — mẫu ảnh & gương mặt thương hiệu tại TP. Hồ Chí Minh. Nhận chụp ảnh, quay feedback và host livestream.",
};

const SERVICES = [
  { title: "Nhận chụp ảnh", year: "Lookbook · Sản phẩm" },
  { title: "Quay feedback", year: "Review · TVC ngắn" },
  { title: "Host livestream", year: "Bán hàng · Sự kiện" },
];

const FACTS = [
  { label: "Nơi ở", value: "Gò Vấp, TP.HCM" },
  { label: "Chiều cao", value: "1m58" },
  { label: "Cân nặng", value: "44kg" },
  { label: "Ba vòng", value: "82 · 65 · 89" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col p-4">
      <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:items-start">
        <PortraitTilt />

        <div className="flex flex-col gap-3">
          {/* Intro */}
          <Reveal>
            <SectionCard title="Xin chào, mình là Gia Như">
              <p>
                Mình là <span className="text-white">mẫu ảnh</span> &amp; gương
                mặt thương hiệu tại TP. Hồ Chí Minh. Mình nhận chụp ảnh sản
                phẩm/lookbook, quay feedback và host livestream — mang đến khung
                hình tự nhiên, cuốn hút và đúng tinh thần thương hiệu của bạn.
              </p>
              <p>
                Làm việc đúng giờ, chuyên nghiệp và luôn hết mình trước ống kính.
                Mình giúp sản phẩm trông đáng tin và chạm cảm xúc khách hàng hơn
                trong từng khung hình.
              </p>
            </SectionCard>
          </Reveal>

          {/* Quick facts */}
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="rounded-3xl bg-neutral-900 px-5 py-6"
                >
                  <p className="text-xl font-semibold text-white">{f.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Services */}
          <Reveal>
            <SectionCard title="Hình thức hợp tác" className="min-h-[180px]">
              <p>
                Linh hoạt theo nhu cầu chiến dịch — từ một buổi chụp nhanh đến
                gói nội dung trọn vẹn cho thương hiệu.
              </p>
            </SectionCard>
          </Reveal>
          <Reveal delay={0.05}>
            <TimelineList items={SERVICES} />
          </Reveal>

          {/* CTA */}
          <Reveal>
            <Link
              href="/contact"
              className="group flex flex-col gap-6 rounded-3xl bg-white p-8 text-black transition hover:bg-white/90 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  Sẵn sàng cho buổi chụp tiếp theo?
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Nhắn mình để trao đổi ý tưởng và đặt lịch — phản hồi nhanh
                  trong ngày.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl bg-black px-6 py-3.5 text-[15px] font-medium text-white transition group-hover:gap-2.5">
                Đặt lịch ngay
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal>
            <SocialLinks />
          </Reveal>
          <Reveal>
            <SiteFooter />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
