import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";
import { Header } from "@/components/studio/header";
import { Footer } from "@/components/studio/footer";

/**
 * The chrome every page shares: header (tinted once the page scrolls), main, footer, toasts.
 * The home page passes `onJump` so nav items scroll; every other page links back to "/#id".
 */
export function SiteFrame({
  children,
  onJump,
  solid = false,
}: {
  children: ReactNode;
  onJump?: (id: string) => void;
  solid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function jump(id: string) {
    setOpen(false);
    onJump?.(id);
  }

  return (
    <div className="min-h-dvh bg-ink text-vellum">
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          className: "!bg-night !text-vellum !border-vellum/10 !font-sans !rounded-md !shadow-none",
        }}
      />
      <Header
        scrolled={scrolled}
        open={open}
        onToggle={() => setOpen((v) => !v)}
        onJump={onJump ? jump : undefined}
        solid={solid}
      />
      <main className={solid ? "pt-14 md:pt-16" : undefined}>{children}</main>
      <Footer onJump={onJump ? jump : undefined} />
    </div>
  );
}
