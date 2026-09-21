import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SITE_NAV } from "@/lib/brand";
import { STUDIO_INDUSTRIES, STUDIO_PLANS } from "@/lib/studio-content";
import { CoreLockup } from "@/components/brand/mark";
import { Footer } from "@/components/studio/footer";
import { useHomeJump } from "@/lib/home-nav";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "Sitemap · Core Marketing" },
      {
        name: "description",
        content: "Every page on the Core Marketing site, and every section of the home page.",
      },
    ],
  }),
});

const ELSEWHERE = [
  { to: "/book", label: "The book", note: "The brand book, in full." },
  { to: "/privacy", label: "Privacy", note: "What we collect and why." },
  { to: "/terms", label: "Terms", note: "The basis on which we work." },
] as const;

function SitemapPage() {
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
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Home
          </Link>
          <h1 className="headline mt-8">Sitemap</h1>
          <p className="editorial mt-8 text-ash">
            Every page on the site, and every section of the home page.
          </p>

          <div className="mt-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="label text-ash">Home</p>
              <ul className="mt-6 flex flex-col gap-1">
                {SITE_NAV.map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/"
                      hash={item.id}
                      className="inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-ash">What we do</p>
              <ul className="mt-6 flex flex-col gap-1">
                {STUDIO_INDUSTRIES.map((industry) => (
                  <li key={industry.id}>
                    <Link
                      to="/what-we-do/$slug"
                      params={{ slug: industry.id }}
                      className="inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-ash">Plans</p>
              <ul className="mt-6 flex flex-col gap-1">
                {STUDIO_PLANS.map((plan) => (
                  <li key={plan.id}>
                    <Link
                      to="/plans/$planId"
                      params={{ planId: plan.id }}
                      className="inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60"
                    >
                      {plan.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-ash">Elsewhere</p>
              <ul className="mt-6 flex flex-col gap-5">
                {ELSEWHERE.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 font-display text-2xl font-normal transition-[opacity] duration-150 hover:opacity-60"
                    >
                      {item.label}
                      <ArrowUpRight
                        className="size-5 text-ash transition-[color] duration-150 group-hover:text-ink"
                        aria-hidden="true"
                      />
                    </Link>
                    <p className="body-copy-compact mt-1 text-ash">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer onJump={jumpHome} />
    </div>
  );
}
