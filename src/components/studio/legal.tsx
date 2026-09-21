import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { CoreLockup } from "@/components/brand/mark";
import { Footer } from "@/components/studio/footer";
import { useHomeJump } from "@/lib/home-nav";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  const jumpHome = useHomeJump();
  return (
    <div className="min-h-dvh bg-vellum text-ink">
      <header className="px-6 pt-6 md:px-12 lg:px-16">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link to="/" aria-label="Core Marketing, back to the site">
            <CoreLockup size="sm" />
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-ink"
          >
            Back to the site
          </Link>
        </div>
      </header>

      <main className="px-6 pt-16 pb-28 md:px-12 md:pt-24 md:pb-40 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Link
                to="/"
                className="inline-flex w-fit items-center gap-2 font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-ink"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Home
              </Link>
              <h1 className="headline mt-8">{title}</h1>
              <p className="editorial mt-8 text-ash">{intro}</p>
              <p className="mt-8 font-sans text-xs text-ash">Last updated: {updated}</p>
              <nav aria-label="On this page" className="mt-10 hidden flex-col gap-1 lg:flex">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex min-h-10 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-ink"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-normal md:text-[1.75rem]">{s.heading}</h2>
                {s.paragraphs.map((text) => (
                  <p key={text.slice(0, 48)} className="editorial mt-6 text-ash">
                    {text}
                  </p>
                ))}
                <div className="h-16 md:h-20" aria-hidden="true" />
              </section>
            ))}
            <p className="font-sans text-sm leading-relaxed text-ash">
              Questions about any of this? Write to{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-ink underline underline-offset-4 transition-[opacity] duration-150 hover:opacity-70"
              >
                {BRAND.email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer onJump={jumpHome} />
    </div>
  );
}
