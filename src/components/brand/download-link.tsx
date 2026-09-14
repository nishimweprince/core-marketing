import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function DownloadLink({
  href,
  file,
  className,
  children,
}: {
  href: string;
  file: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [busy, setBusy] = useState(false);

  async function save() {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error("missing");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file;
      a.rel = "noopener";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 4000);
      toast.success(`Saved ${file}`);
    } catch {
      const opened = window.open(href, "_blank", "noopener,noreferrer");
      if (!opened) {
        toast.error("Allow downloads in the browser, or use Save As from the new tab.");
      } else {
        toast.message("File opened in a new tab — save it from there.");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={save}
      disabled={busy}
      className={cn(className, busy && "opacity-60")}
    >
      {children}
    </button>
  );
}
