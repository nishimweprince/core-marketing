import { ArrowUpRight } from "lucide-react";

import { PARTNERS, type Partner } from "@/lib/studio-content";

export function Partners() {
  return (
    <section aria-labelledby="partners-title" className="bg-ink py-20 text-vellum md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 id="partners-title" className="font-display text-xl font-normal md:text-2xl">
          In good company
        </h2>
        {/* One plate split into cells, so a short list reads as a credit line rather than a card grid. */}
        <ul className="mt-10 grid grid-cols-3 divide-x divide-ink/10 overflow-hidden rounded-sm bg-vellum text-ink md:mt-12">
          {PARTNERS.map((partner) => (
            <li key={partner.id}>
              <PartnerSlot partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PartnerSlot({ partner }: { partner: Partner }) {
  const content = (
    <>
      <div className="flex h-12 items-center justify-center md:h-24">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-auto max-w-full object-contain"
          />
        ) : (
          <span
            className="brand-image-skeleton brand-image-skeleton-dark h-5 w-28 rounded-xs"
            aria-hidden="true"
          />
        )}
      </div>
      <span className="mt-8 flex items-start justify-between gap-2 text-xs text-ink/60 md:mt-12 md:text-sm">
        {partner.name}
        {partner.url && (
          <>
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink md:size-4"
            />
          </>
        )}
      </span>
    </>
  );

  const cell = "flex h-full flex-col px-3 pt-8 pb-4 md:px-8 md:pt-14 md:pb-6";

  if (!partner.url) return <div className={cell}>{content}</div>;

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${cell} transition-colors duration-200 hover:bg-ink/[0.04] focus-visible:-outline-offset-4`}
    >
      {content}
    </a>
  );
}
