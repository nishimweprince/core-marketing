import { cn } from "@/lib/utils";

export type MarkField = "ink" | "vellum" | "mono";

export function CoreMark({
  className,
  title = "Core Marketing",
  field = "ink",
}: {
  className?: string;
  title?: string;
  field?: MarkField;
}) {
  const outer =
    field === "ink" ? "stroke-vellum" : field === "vellum" ? "stroke-ink" : "stroke-current";
  const inner = field === "mono" ? "stroke-current" : "stroke-limestone";
  const core = field === "mono" ? "fill-current" : "fill-juniper";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle
        cx="40"
        cy="40"
        r="31.5"
        className={outer}
        strokeWidth="1.2"
        vectorEffect="nonScalingStroke"
      />
      <circle
        cx="40"
        cy="40"
        r="18.5"
        className={inner}
        strokeWidth="1.2"
        vectorEffect="nonScalingStroke"
      />
      <circle cx="40" cy="40" r="6" className={core} />
    </svg>
  );
}

export function CoreMarkConstruct({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-hidden="true"
    >
      <line x1="40" y1="4" x2="40" y2="76" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <line x1="4" y1="40" x2="76" y2="40" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <circle
        cx="40"
        cy="40"
        r="31.5"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1.4 2"
        opacity="0.3"
      />
      <circle
        cx="40"
        cy="40"
        r="18.5"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1.4 2"
        opacity="0.3"
      />
      <circle
        cx="40"
        cy="40"
        r="31.5"
        className="stroke-ink"
        strokeWidth="1.2"
        vectorEffect="nonScalingStroke"
      />
      <circle
        cx="40"
        cy="40"
        r="18.5"
        className="stroke-limestone"
        strokeWidth="1.2"
        vectorEffect="nonScalingStroke"
      />
      <circle cx="40" cy="40" r="6" className="fill-juniper" />
    </svg>
  );
}

const LOCKUP = {
  sm: { mark: "size-8", type: "text-sm" },
  md: { mark: "size-10", type: "text-lg" },
  lg: { mark: "size-12", type: "text-xl" },
  hero: { mark: "size-12 md:size-14", type: "text-xl md:text-2xl" },
} as const;

export function CoreLockup({
  className,
  stacked = false,
  size = "md",
  field = "ink",
}: {
  className?: string;
  stacked?: boolean;
  size?: keyof typeof LOCKUP;
  field?: MarkField;
}) {
  const s = LOCKUP[size];
  return (
    <div
      className={cn(
        "flex",
        stacked ? "flex-col items-start gap-3" : "flex-row items-center gap-2.5",
        className,
      )}
    >
      <CoreMark className={cn("shrink-0", s.mark)} field={field} />
      <div className={cn("leading-none", s.type)}>
        <div className="font-sans font-semibold leading-[0.8] uppercase tracking-brand">Core</div>
        <div className="mt-[0.1em] font-sans text-[0.72em] font-normal uppercase tracking-label text-limestone">
          Marketing
        </div>
      </div>
    </div>
  );
}

export function CoreWordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("leading-none", compact ? "text-sm" : "text-lg", className)}>
      <div className="font-sans font-semibold leading-[0.8] uppercase tracking-brand">Core</div>
      <div className="mt-[0.1em] font-sans text-[0.72em] font-normal uppercase tracking-label text-limestone">
        Marketing
      </div>
    </div>
  );
}
