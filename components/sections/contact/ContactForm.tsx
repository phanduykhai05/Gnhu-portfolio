"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const INPUT =
  "w-full rounded-2xl border border-white/10 bg-neutral-800/60 px-4 py-3.5 text-[15px] text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30 focus:bg-neutral-800";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // No backend: open the visitor's mail client pre-filled, then confirm.
    const subject = encodeURIComponent(`Liên hệ từ ${name || "khách"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;

    setSent(true);
    form.reset();
  };

  return (
    <div className="rounded-3xl bg-neutral-900 p-8 sm:p-10">
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Liên hệ với tôi
      </h2>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input name="name" required placeholder="Họ và tên" className={INPUT} />
          <input
            name="email"
            type="email"
            required
            placeholder="Email của bạn"
            className={INPUT}
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Lời nhắn của bạn"
          className={`${INPUT} resize-none`}
        />
        <button
          type="submit"
          className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-[15px] font-medium text-black transition hover:bg-white/90"
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" /> Đã gửi — cảm ơn bạn!
            </>
          ) : (
            "Gửi lời nhắn"
          )}
        </button>
      </form>
    </div>
  );
}
