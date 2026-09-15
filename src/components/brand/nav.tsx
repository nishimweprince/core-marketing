import { SECTIONS } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { CoreLockup } from "@/components/brand/mark";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SideRail({
  active,
  onJump,
}: {
  active: string;
  onJump: (id: string) => void;
}) {
  return (
    <aside className="fixed top-0 left-0 z-40 hidden h-dvh w-52 flex-col border-r border-vellum/8 bg-ink px-6 py-8 lg:flex">
      <button
        type="button"
        onClick={() => onJump("cover")}
        className="text-left text-vellum transition-[opacity] duration-150 hover:opacity-80"
        aria-label="Core Marketing, back to cover"
      >
        <CoreLockup size="sm" />
      </button>

      <nav className="mt-12 flex flex-1 flex-col gap-1" aria-label="Brand book">
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onJump(s.id)}
              className={cn(
                "flex min-h-10 items-center gap-3 rounded-sm px-1 text-left transition-[color] duration-150",
                on ? "text-vellum" : "text-ash hover:text-limestone",
              )}
            >
              <span className="font-sans text-xs tabular-nums">{s.num}</span>
              <span className="font-sans text-xs">{s.label}</span>
            </button>
          );
        })}
      </nav>

      <p className="font-sans text-xs leading-relaxed text-ash">
        Brand Book
        <br />
        Volume 01
      </p>
      <Link
        to="/"
        className="mt-4 font-sans text-xs text-limestone uppercase transition-[color] duration-150 hover:text-vellum"
      >
        The house
      </Link>
    </aside>
  );
}

export function MobileBar({
  open,
  onToggle,
  onJump,
}: {
  open: boolean;
  onToggle: () => void;
  onJump: (id: string) => void;
}) {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-vellum/8 bg-ink/95 px-4 lg:hidden">
        <button
          type="button"
          onClick={() => onJump("cover")}
          className="flex items-center gap-2.5 text-vellum"
          aria-label="Core Marketing, back to cover"
        >
          <CoreLockup size="sm" />
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="flex size-11 items-center justify-center text-vellum"
          aria-expanded={open}
          aria-label={open ? "Close index" : "Open index"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden">
          <p className="label text-limestone">Index</p>
          <nav className="mt-8 flex flex-col" aria-label="Brand book">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onJump(s.id)}
                className="flex min-h-14 items-baseline justify-between border-b border-vellum/8 text-left text-vellum"
              >
                <span className="font-display text-2xl font-normal">{s.label}</span>
                <span className="font-sans text-xs tabular-nums text-ash">{s.num}</span>
              </button>
            ))}
            <Link
              to="/"
              className="mt-8 flex min-h-14 items-center font-display text-2xl font-normal text-limestone"
            >
              The house
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
