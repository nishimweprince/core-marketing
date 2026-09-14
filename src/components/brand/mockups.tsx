import { CoreLockup, CoreMark, CoreWordmark } from "@/components/brand/mark";
import { cn } from "@/lib/utils";

export function BusinessCard({
  side,
  className,
}: {
  side: "front" | "back";
  className?: string;
}) {
  if (side === "front") {
    return (
      <div
        className={cn(
          "flex aspect-[3.5/2] w-full flex-col justify-between rounded-md bg-ink p-6 text-vellum md:p-7",
          className,
        )}
        style={{ boxShadow: "var(--shadow-border)" }}
      >
        <CoreLockup size="md" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex aspect-[3.5/2] w-full flex-col justify-between rounded-md bg-vellum p-6 text-ink md:p-7",
        className,
      )}
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div>
        <p className="font-display text-xl font-light leading-none">Studio</p>
        <p className="mt-2 font-sans text-[11px] leading-relaxed text-ash">
          By appointment
          <br />
          Kigali
        </p>
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className="font-sans text-[11px] text-ash">
          studio@core.marketing
          <br />
          core.marketing
        </p>
        <CoreMark className="size-6 text-ink" field="vellum" />
      </div>
    </div>
  );
}

export function Letterhead({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-[210/297] w-full flex-col rounded-md bg-vellum p-8 text-ink md:p-10",
        className,
      )}
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div className="flex items-start justify-between">
        <CoreLockup size="sm" field="vellum" />
        <p className="text-right font-sans text-[9px] leading-relaxed text-ash">
          Core Marketing
          <br />
          By appointment · Kigali
          <br />
          studio@core.marketing
        </p>
      </div>
      <div className="mt-16 flex-1 space-y-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-ink/10"
            style={{ width: `${i === 8 ? 46 : 100}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between pt-6">
        <p className="label text-[8px]">Confidential</p>
        <p className="font-sans text-[9px] tracking-label text-ash uppercase">core.marketing</p>
      </div>
    </div>
  );
}

export function Envelope({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[1.8/1] w-full items-end rounded-md bg-vellum p-6 text-ink md:p-8",
        className,
      )}
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2 origin-top"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--color-vellum) 92%, var(--color-ink)), var(--color-vellum))",
          clipPath: "polygon(0 0, 100% 0, 50% 78%)",
        }}
      />
      <CoreMark className="relative size-7" field="vellum" />
      <div className="relative ml-auto text-right">
        <CoreWordmark compact />
        <p className="mt-2 font-sans text-[9px] tracking-label text-ash uppercase">
          By appointment · Kigali
        </p>
      </div>
    </div>
  );
}

export function SocialPost({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-[4/5] w-full flex-col justify-between rounded-md bg-ink p-7 text-vellum",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <CoreMark className="size-7 text-vellum" />
        <p className="label text-limestone">01 / Presence</p>
      </div>
      <div>
        <p className="font-display text-3xl font-light leading-tight tracking-display md:text-4xl">
          The architecture of attention.
        </p>
        <p className="mt-6 font-sans text-xs leading-relaxed text-limestone">
          Strategy, presence, content, and promotion — held as one system.
        </p>
      </div>
      <p className="font-sans text-[10px] tracking-label text-ash uppercase">Core Marketing</p>
    </div>
  );
}

export function SocialStory({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[9/16] w-full flex-col overflow-hidden rounded-md bg-ink text-vellum",
        className,
      )}
    >
      <img
        src="/brand/aperture.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <CoreMark className="size-7 text-vellum" />
        <div>
          <p className="label text-limestone">The house</p>
          <p className="mt-4 font-display text-3xl font-light leading-tight tracking-display">
            Fewer partners.
            <br />
            Further work.
          </p>
        </div>
      </div>
    </div>
  );
}

export function LinkedInBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/1] w-full items-center overflow-hidden rounded-md bg-ink px-8 text-vellum",
        className,
      )}
    >
      <img
        src="/brand/gallery.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative">
        <CoreLockup size="md" />
      </div>
    </div>
  );
}

export function TitleSlide({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-video w-full flex-col justify-between rounded-md bg-ink p-8 text-vellum md:p-10",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <CoreWordmark compact />
        <p className="label text-limestone">Confidential</p>
      </div>
      <div>
        <p className="label text-limestone">A conversation</p>
        <h3 className="mt-4 max-w-lg font-display text-3xl font-light leading-tight tracking-display md:text-5xl">
          Presence, built as architecture.
        </h3>
      </div>
      <p className="font-sans text-[10px] tracking-label text-ash uppercase">
        Core Marketing  ·  Volume 01
      </p>
    </div>
  );
}

export function EmailSignature({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-md bg-vellum p-6 text-ink md:p-8", className)}
      style={{ boxShadow: "var(--shadow-border)" }}
    >
      <div className="flex items-start gap-5">
        <CoreMark className="size-8 shrink-0" field="vellum" />
        <div className="min-w-0">
          <p className="font-display text-2xl leading-none">Amara Nkusi</p>
          <p className="mt-1 font-sans text-xs text-ash">Partner, Strategy</p>
          <div className="mt-4 h-px w-12 bg-ink/15" />
          <p className="mt-4 font-sans text-xs leading-relaxed text-ash">
            studio@core.marketing
            <br />
            core.marketing
            <br />
            Kigali · By appointment
          </p>
        </div>
      </div>
    </div>
  );
}

export function WebChrome({ className }: { className?: string }) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg bg-night", className)}
      style={{ boxShadow: "var(--shadow-dark)" }}
    >
      <div className="flex items-center gap-2 border-b border-vellum/8 px-4 py-3">
        <span className="size-2.5 rounded-full bg-vellum/20" />
        <span className="size-2.5 rounded-full bg-vellum/20" />
        <span className="size-2.5 rounded-full bg-vellum/20" />
        <span className="ml-3 flex-1 rounded-sm bg-ink px-3 py-1.5 font-sans text-[10px] tracking-wide text-ash">
          core.marketing
        </span>
      </div>
      <div className="relative aspect-video overflow-hidden bg-ink">
        <img src="/brand/gallery.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
          <CoreLockup size="lg" />
          <p className="mt-3 max-w-sm font-sans text-sm text-limestone">
            The architecture of attention.
          </p>
        </div>
      </div>
    </div>
  );
}

export function SignagePlaque({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <img
        src="/brand/limestone.jpg"
        alt="Limestone plaster field"
        className="brand-photo aspect-[4/3] w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex size-36 items-center justify-center rounded-sm bg-ink/90 text-vellum md:size-44"
          style={{ boxShadow: "0 20px 50px -20px rgba(12,11,10,0.7)" }}
        >
          <CoreMark className="size-16 text-vellum md:size-20" />
        </div>
      </div>
    </div>
  );
}
