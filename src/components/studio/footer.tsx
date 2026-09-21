import { Link } from "@tanstack/react-router";
import { BRAND, SITE_NAV } from "@/lib/brand";
import { STUDIO_INDUSTRIES } from "@/lib/studio-content";
import { CoreLockup } from "@/components/brand/mark";

const LINK =
  "inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone";

export function Footer({ onJump }: { onJump: (id: string) => void }) {
  return (
    <footer className="bg-night/60 px-6 py-20 text-vellum md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <CoreLockup size="md" />
          <p className="mt-8 max-w-xs font-display text-xl font-normal">{BRAND.tagline}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">Site</p>
          <nav className="mt-5 flex flex-col gap-1" aria-label="Footer">
            {SITE_NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => onJump(item.id)} className={LINK}>
                {item.label}
              </button>
            ))}
            <Link to="/book" className={LINK}>
              The book
            </Link>
          </nav>
        </div>
        <div className="lg:col-span-3">
          <p className="label text-limestone">Industries</p>
          <ul className="mt-5 flex flex-col gap-1">
            {STUDIO_INDUSTRIES.map((industry) => (
              <li key={industry.id}>
                <Link
                  to="/what-we-do/$slug"
                  params={{ slug: industry.id }}
                  className={LINK}
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="label text-limestone">Correspondence</p>
          <p className="mt-5 text-sm leading-relaxed text-ash">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex min-h-11 items-center text-limestone transition-[color] duration-150 hover:text-vellum"
            >
              {BRAND.email}
            </a>
            <br />
            {BRAND.origin} · Est. {BRAND.year}
            <br />
            By appointment
          </p>
          <a href="/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf" className={LINK}>
            Brand book: PDF
          </a>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <p className="font-sans text-xs text-ash">
          © {new Date().getFullYear()} {BRAND.name} · {BRAND.origin}
        </p>
        <nav className="flex flex-wrap items-center gap-6" aria-label="Legal">
          <Link
            to="/sitemap"
            className="font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone"
          >
            Sitemap
          </Link>
          <Link
            to="/privacy"
            className="font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
