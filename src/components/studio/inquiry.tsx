import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { BRAND } from "@/lib/brand";

export function Inquiry() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();

    if (!name || !email) {
      toast.error("Add your name and email to continue.");
      return;
    }

    const subject = `New conversation: ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
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
      <div className="pt-2">
        <p className="font-display text-2xl font-normal">Your email is ready.</p>
        <p className="body-copy-compact mt-4 max-w-md text-limestone">
          If your mail app did not open, email us directly at {BRAND.email}. We read every note and
          reply when the fit is clear.
        </p>
        <a href={`mailto:${BRAND.email}`} className="btn-primary mt-8">
          {BRAND.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10" noValidate>
      <label className="block">
        <span className="label text-limestone">Name</span>
        <input
          className="field mt-4"
          name="name"
          autoComplete="name"
          required
          suppressHydrationWarning
        />
      </label>
      <label className="block">
        <span className="label text-limestone">Email</span>
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
        <span className="label text-limestone">About the project</span>
        <textarea
          className="field mt-4 min-h-36 resize-y"
          name="note"
          rows={5}
          placeholder="What would you like to change, launch, or grow?"
          suppressHydrationWarning
        />
      </label>
      <div>
        <button type="submit" disabled={busy} className="btn-primary">
          {busy ? "Opening your email…" : "Start a conversation"}
        </button>
      </div>
    </form>
  );
}
