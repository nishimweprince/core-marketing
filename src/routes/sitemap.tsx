import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_NAV } from "@/lib/brand";
import { STUDIO_INDUSTRIES, STUDIO_PLANS } from "@/lib/studio-content";
import { SiteFrame } from "@/components/studio/frame";

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
  { to: "/book", label: "The book" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

const ENTRY =
  "inline-flex min-h-11 items-center font-display text-2xl font-normal transition-[color] duration-150 hover:text-juniper";

function SitemapPage() {
  return (
    <SiteFrame solid>
      <div className="bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="headline">Sitemap</h1>
          <p className="editorial mt-8 text-ash">
            Every page on the site, and every section of the home page.
          </p>

          <div className="mt-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <p className="label text-ash">Home</p>
              <ul className="mt-6 flex flex-col gap-1">
                {SITE_NAV.map((item) => (
                  <li key={item.id}>
                    <Link to="/" hash={item.id} className={ENTRY}>
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
                    <Link to="/what-we-do/$slug" params={{ slug: industry.id }} className={ENTRY}>
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
                    <Link to="/plans/$planId" params={{ planId: plan.id }} className={ENTRY}>
                      {plan.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-ash">Elsewhere</p>
              <ul className="mt-6 flex flex-col gap-1">
                {ELSEWHERE.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={ENTRY}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}
