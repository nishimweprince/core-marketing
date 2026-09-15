import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export async function copyValue(label: string, value: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast(label, { description: `${value} copied` });
  } catch {
    toast("Copy failed", { description: "Select and copy instead." });
  }
}

export function Chapter({
  id,
  num,
  kicker,
  title,
  lede,
  tone = "paper",
  children,
}: {
  id: string;
  num: string;
  kicker: string;
  title: string;
  lede?: string;
  tone?: "paper" | "ink";
  children: React.ReactNode;
}) {
  const ink = tone === "ink";
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-14 px-6 py-20 md:px-14 md:py-28 lg:scroll-mt-0 lg:px-20 lg:py-32",
        ink ? "bg-ink text-vellum" : "bg-vellum text-ink",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <p className={cn("label", ink ? "text-limestone" : "text-ash")}>
          {num} · {kicker}
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
          {title}
        </h2>
        {lede ? (
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed md:text-lg",
              ink ? "text-limestone" : "text-ash",
            )}
          >
            {lede}
          </p>
        ) : null}
        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function CopyChip({
  label,
  value,
  invert = false,
}: {
  label: string;
  value: string;
  invert?: boolean;
}) {
  const [done, setDone] = useState(false);

  async function onCopy() {
    await copyValue(label, value);
    setDone(true);
    window.setTimeout(() => setDone(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-sm px-3 py-2 font-sans text-xs transition-[background-color,color] duration-150 ease-out",
        invert
          ? "text-limestone hover:bg-vellum/5 hover:text-vellum"
          : "text-ash hover:bg-ink/5 hover:text-ink",
      )}
      aria-label={`Copy ${label} ${value}`}
    >
      {done ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      <span className="tabular-nums">{value}</span>
    </button>
  );
}

export function Rule({ invert = false, className }: { invert?: boolean; className?: string }) {
  return (
    <div
      className={cn("h-px w-full", invert ? "bg-vellum/12" : "bg-ink/12", className)}
      aria-hidden="true"
    />
  );
}
