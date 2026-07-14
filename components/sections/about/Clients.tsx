const CLIENTS = ["google", "acme", "kanba", "goldline", "ASGARDIA"];

export function Clients() {
  return (
    <div className="flex items-center gap-10 overflow-hidden rounded-3xl bg-neutral-900 px-8 py-7">
      <span className="shrink-0 text-[15px] text-white">Khách hàng</span>
      <div className="flex flex-1 items-center justify-between gap-10 text-xl font-semibold text-neutral-500">
        {CLIENTS.map((client) => (
          <span key={client} className="whitespace-nowrap">
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
