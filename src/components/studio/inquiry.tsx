import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { BRAND } from "@/lib/brand";
import { STUDIO_RETAINERS, STUDIO_ROOMS } from "@/lib/studio-content";

const ROOMS_OPTIONS = [
  { value: "", label: "Select a focus area" },
  ...STUDIO_ROOMS.map((r) => ({ value: r.id, label: r.name })),
  { value: "other", label: "Something else" },
];

const RETAINER_OPTIONS = [
  { value: "", label: "I’m not sure yet" },
  ...STUDIO_RETAINERS.map((r) => ({ value: r.id, label: `${r.latin}: ${r.means}` })),
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
      toast.error("Add your name and email to continue.");
      return;
    }

    const roomLabel = ROOMS_OPTIONS.find((o) => o.value === room)?.label ?? room;
    const retainerLabel = RETAINER_OPTIONS.find((o) => o.value === retainer)?.label ?? retainer;
    const subject = `New conversation: ${house || name}`;
    const body = [
      `Name: ${name}`,
      `Brand or property: ${house || "-"}`,
      `Email: ${email}`,
      `Focus area: ${roomLabel || "-"}`,
      `Preferred retainer: ${retainerLabel || "I’m not sure yet"}`,
      "",
      note || "No additional context provided.",
    ].join("\n");

    const href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setBusy(true);
    window.location.href = href;
    window.setTimeout(() => {
      setBusy(false);
      setSent(true);
      toast.success("Your email draft is ready. If it did not open, email us directly.");
    }, 400);
  }

  if (sent) {
    return (
      <div className="border-t border-vellum/12 pt-10">
        <p className="font-display text-3xl font-normal">Your email is ready.</p>
        <p className="body-copy-compact mt-4 max-w-md text-limestone">
          If your mail app did not open, email us directly at {BRAND.email}. We read every note and
          reply when the fit is clear.
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="mt-8 inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
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
          <span className="label text-limestone">Your name</span>
          <input
            className="field mt-4"
            name="name"
            autoComplete="name"
            required
            suppressHydrationWarning
          />
        </label>
        <label className="block">
          <span className="label text-limestone">Brand or property</span>
          <input
            className="field mt-4"
            name="house"
            autoComplete="organization"
            placeholder="Hotel, villa, automotive brand, or property"
            suppressHydrationWarning
          />
        </label>
        <label className="block md:col-span-2">
          <span className="label text-limestone">Work email</span>
          <input
            className="field mt-4"
            name="email"
            type="email"
            autoComplete="email"
            required
            suppressHydrationWarning
          />
        </label>
        <label className="block">
          <span className="label text-limestone">Focus area</span>
          <select className="field mt-4" name="room" defaultValue="" suppressHydrationWarning>
            {ROOMS_OPTIONS.map((o) => (
              <option key={o.value || "none"} value={o.value} className="bg-ink text-vellum">
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="label text-limestone">Preferred retainer</span>
          <select className="field mt-4" name="retainer" defaultValue="" suppressHydrationWarning>
            {RETAINER_OPTIONS.map((o) => (
              <option key={o.value || "none"} value={o.value} className="bg-ink text-vellum">
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="label text-limestone">A little context</span>
          <textarea
            className="field mt-4 min-h-32 resize-y"
            name="note"
            rows={4}
            placeholder="What would you like to change, launch, or grow?"
            suppressHydrationWarning
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="body-copy-compact max-w-sm text-limestone">
          This opens a draft email to {BRAND.email}. We’ll discuss scope and fees in the first
          conversation.
        </p>
        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-11 items-center bg-vellum px-6 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90 disabled:opacity-60"
        >
          {busy ? "Opening your email…" : "Start the conversation"}
        </button>
      </div>
    </form>
  );
}
