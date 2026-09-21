import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE_NAV } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { CoreLockup } from "@/components/brand/mark";

export function Header({
  scrolled,
  open,
  onToggle,
  onJump,
}: {
  scrolled: boolean;
  open: boolean;
  onToggle: () => void;
  onJump: (id: string) => void;
}) {
  const solid = scrolled || open;
  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-40 transition-[background-color] duration-300",
          solid ? "bg-ink/95" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-8">
          <button
            type="button"
            onClick={() => onJump("cover")}
            className="text-left text-vellum transition-[opacity] duration-150 hover:opacity-80"
            aria-label="Core Marketing, back to the top"
          >
            <CoreLockup size="sm" />
          </button>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Site">
            {SITE_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className="inline-flex min-h-11 items-center px-3 font-sans text-[13px] text-limestone transition-[color] duration-150 hover:text-vellum"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="ml-3 inline-flex min-h-11 items-center bg-vellum hover:bg-vellum/80 px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
            >
              Start a conversation
            </button>
          </nav>
          <button
            type="button"
            onClick={onToggle}
            className="flex size-11 items-center justify-center text-vellum lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden">
          <nav className="mt-8 flex flex-col gap-2" aria-label="Site">
            {SITE_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className="flex min-h-14 items-center text-left font-display text-2xl font-normal text-vellum"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/book"
              className="flex min-h-14 items-center font-display text-2xl font-normal text-vellum"
              onClick={() => onToggle()}
            >
              The book
            </Link>
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="mt-8 inline-flex min-h-12 items-center justify-center bg-vellum font-sans text-[13px] font-medium text-ink"
            >
              Start a conversation
            </button>
          </nav>
        </div>
      ) : null}
    </>
  );
}
