import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter"
export function ProfileCard() {
  return (
    <div className="flex h-full flex-col gap-6 rounded-3xl bg-neutral-900 p-7">
      <div className="flex items-center gap-4">
        <Image
          src="/images/about/me.jpg"
          alt="Trần Gia Như"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-white">Trần Gia Như</p>
          <p className="text-sm text-neutral-400">Nhà Mẫu ảnh</p>
        </div>
      </div>
      <p className="text-[15px] leading-relaxed text-neutral-300">
        Tôi là Gia Như, chuyên chụp mẫu ảnh <Highlighter action="underline" color="#FF9800">thời trang</Highlighter> và lookbook tại <Highlighter action="box" color="#00aeff">Hồ Chí Minh</Highlighter>. Tôi tạo nên những bộ hình tinh tế, nhấn mạnh phong cách cá nhân của mẫu và câu chuyện thương hiệu. Bạn có thể book tôi cho bộ ảnh portfolio, <Highlighter action="box" color="#ff0000" iterations={1}>quảng cáo thời trang</Highlighter>, bìa tạp chí hoặc dự án campaing sáng tạo.
      </p>
    </div>
  );
}
