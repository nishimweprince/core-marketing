import { Link } from "@tanstack/react-router";
import { BRAND, SITE_NAV } from "@/lib/brand";
import { STUDIO_INDUSTRIES, STUDIO_PLANS } from "@/lib/studio-content";
import { CoreLockup } from "@/components/brand/mark";

const LINK = "nav-link inline-flex min-h-10 items-center text-sm text-ash";

export function Footer({ onJump }: { onJump?: (id: string) => void }) {
  return (
    <footer className="border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <CoreLockup size="md" />
          <p className="mt-8 max-w-xs font-display text-xl font-normal">{BRAND.tagline}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">Site</p>
          <nav className="mt-5 flex flex-col" aria-label="Footer">
            {SITE_NAV.map((item) =>
              onJump ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onJump(item.id)}
                  className={LINK}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.id} to="/" hash={item.id} className={LINK}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">Industries</p>
          <ul className="mt-5 flex flex-col">
            {STUDIO_INDUSTRIES.map((industry) => (
              <li key={industry.id}>
                <Link to="/what-we-do/$slug" params={{ slug: industry.id }} className={LINK}>
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">Plans</p>
          <ul className="mt-5 flex flex-col">
            {STUDIO_PLANS.map((plan) => (
              <li key={plan.id}>
                <Link to="/plans/$planId" params={{ planId: plan.id }} className={LINK}>
                  {plan.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">Correspondence</p>
          <p className="mt-5 text-sm leading-relaxed text-ash">
            <a href={`mailto:${BRAND.email}`} className="nav-link text-limestone">
              {BRAND.email}
            </a>
            <br />
            {BRAND.origin}, by appointment
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-vellum/8 pt-8">
        <p className="font-sans text-xs text-ash">
          © {new Date().getFullYear()} {BRAND.name}
        </p>
        <nav className="flex flex-wrap items-center gap-6" aria-label="Legal">
          <Link to="/sitemap" className="nav-link text-xs text-ash">
            Sitemap
          </Link>
          <Link to="/privacy" className="nav-link text-xs text-ash">
            Privacy
          </Link>
          <Link to="/terms" className="nav-link text-xs text-ash">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
