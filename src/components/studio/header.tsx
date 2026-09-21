import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE_NAV } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { CoreLockup } from "@/components/brand/mark";

type HeaderProps = {
  scrolled: boolean;
  open: boolean;
  onToggle: () => void;
  /** On the home page sections are scrolled to; elsewhere the same items link back to "/#id". */
  onJump?: (id: string) => void;
  /** Always draw the ink bar: for pages that open on a light field instead of a photograph. */
  solid?: boolean;
};

export function Header({ scrolled, open, onToggle, onJump, solid = false }: HeaderProps) {
  const filled = solid || scrolled || open;
  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-40 border-b transition-[background-color,border-color] duration-300",
          filled ? "border-vellum/8 bg-ink/95" : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-8">
          <SectionLink
            id="cover"
            onJump={onJump}
            className="text-vellum"
            label="Core Marketing, home"
          >
            <CoreLockup size="sm" />
          </SectionLink>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Site">
            {SITE_NAV.map((item) => (
              <SectionLink
                key={item.id}
                id={item.id}
                onJump={onJump}
                className="nav-link inline-flex min-h-11 items-center px-3 text-limestone"
              >
                {item.label}
              </SectionLink>
            ))}
            <SectionLink
              id="conversation"
              onJump={onJump}
              className="btn-primary ml-3 min-h-11 px-4"
            >
              Start a conversation
            </SectionLink>
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
          <nav className="mt-8 flex flex-col" aria-label="Site">
            {SITE_NAV.map((item) => (
              <SectionLink
                key={item.id}
                id={item.id}
                onJump={onJump}
                onNavigate={onToggle}
                className="flex min-h-14 items-center border-b border-vellum/8 text-left font-display text-2xl font-normal text-vellum"
              >
                {item.label}
              </SectionLink>
            ))}
            <SectionLink
              id="conversation"
              onJump={onJump}
              onNavigate={onToggle}
              className="btn-primary mt-8"
            >
              Start a conversation
            </SectionLink>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function SectionLink({
  id,
  onJump,
  onNavigate,
  className,
  label,
  children,
}: {
  id: string;
  onJump?: (id: string) => void;
  onNavigate?: () => void;
  className?: string;
  label?: string;
  children: React.ReactNode;
}) {
  if (onJump) {
    return (
      <button type="button" onClick={() => onJump(id)} className={className} aria-label={label}>
        {children}
      </button>
    );
  }
  return (
    <Link
      to="/"
      hash={id === "cover" ? undefined : id}
      className={className}
      aria-label={label}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}
