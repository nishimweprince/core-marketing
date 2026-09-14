import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { BRAND, RETAINERS, ROOMS } from "@/lib/brand";

const ROOMS_OPTIONS = [
  { value: "", label: "Select a room" },
  ...ROOMS.map((r) => ({ value: r.id, label: r.name })),
  { value: "other", label: "Another house" },
];

const RETAINER_OPTIONS = [
  { value: "", label: "Not yet decided" },
  ...RETAINERS.map((r) => ({ value: r.id, label: `${r.latin} — ${r.means}` })),
];

export function Inquiry() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const house = String(data.get("house") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const room = String(data.get("room") ?? "").trim();
    const retainer = String(data.get("retainer") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    if (!name || !email) {
      toast.error("A name and an email are required.");
      return;
    }

    const roomLabel = ROOMS_OPTIONS.find((o) => o.value === room)?.label ?? room;
    const retainerLabel = RETAINER_OPTIONS.find((o) => o.value === retainer)?.label ?? retainer;
    const subject = `Conversation — ${house || name}`;
    const body = [
      `Name: ${name}`,
      `House: ${house || "—"}`,
      `Email: ${email}`,
      `Room: ${roomLabel || "—"}`,
      `Retainer: ${retainerLabel || "Not yet decided"}`,
      "",
      note || "(no note)",
    ].join("\n");

    const href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setBusy(true);
    window.location.href = href;
    window.setTimeout(() => {
      setBusy(false);
      setSent(true);
      toast.success("Your mail client should open. If it does not, write us directly.");
    }, 400);
  }

  if (sent) {
    return (
      <div className="border-t border-vellum/12 pt-10">
        <p className="font-display text-3xl font-light tracking-display italic">The letter is with you.</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-limestone">
          If the mail window did not open, write directly to {BRAND.email}. We read every note. We do
          not always take the work.
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="mt-8 inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96]"
        >
          {BRAND.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="label text-limestone">Name</span>
          <input className="field mt-4" name="name" autoComplete="name" required suppressHydrationWarning />
        </label>
        <label className="block">
          <span className="label text-limestone">House</span>
          <input
            className="field mt-4"
            name="house"
            autoComplete="organization"
            placeholder="Hotel, villa, motor, property"
            suppressHydrationWarning
          />
        </label>
        <label className="block md:col-span-2">
          <span className="label text-limestone">Email</span>
          <input className="field mt-4" name="email" type="email" autoComplete="email" required suppressHydrationWarning />
        </label>
        <label className="block">
          <span className="label text-limestone">Room</span>
          <select className="field mt-4" name="room" defaultValue="" suppressHydrationWarning>
            {ROOMS_OPTIONS.map((o) => (
              <option key={o.value || "none"} value={o.value} className="bg-ink text-vellum">
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="label text-limestone">Retainer</span>
          <select className="field mt-4" name="retainer" defaultValue="" suppressHydrationWarning>
            {RETAINER_OPTIONS.map((o) => (
              <option key={o.value || "none"} value={o.value} className="bg-ink text-vellum">
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="label text-limestone">Note</span>
          <textarea className="field mt-4 min-h-32 resize-y" name="note" rows={4} suppressHydrationWarning />
        </label>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-ash">
          Opens a letter to {BRAND.email}. Fees are discussed in the first conversation. We do not
          send decks unasked.
        </p>
        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-11 items-center bg-vellum px-6 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90 active:not-disabled:scale-[0.96] disabled:opacity-60"
        >
          {busy ? "Opening…" : "Request a conversation"}
        </button>
      </div>
    </form>
  );
}
