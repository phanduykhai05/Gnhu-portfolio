import Image from "next/image";

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
        Tôi là Ema, một Nhà Mẫu ảnh sống tại Prague. Tôi ghi lại những khoảnh khắc chân thực
        và kể chuyện bằng hình ảnh, hòa trộn sự sáng tạo và cảm xúc trong mỗi bức ảnh.
      </p>
    </div>
  );
}
