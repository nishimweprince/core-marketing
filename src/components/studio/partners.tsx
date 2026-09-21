import { PARTNERS, type Partner } from "@/lib/studio-content";

export function Partners() {
  return (
    <section aria-labelledby="partners-title" className="bg-ink py-20 text-vellum md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 id="partners-title" className="font-display text-xl font-normal md:text-2xl">
          In good company
        </h2>
      </div>
      <div className="marquee mt-12 overflow-hidden">
        <div className="marquee-track flex">
          <PartnerList />
          <PartnerList hidden />
        </div>
      </div>
    </section>
  );
}

function PartnerList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {PARTNERS.map((partner) => (
        <li key={partner.id}>
          <PartnerSlot partner={partner} />
        </li>
      ))}
    </ul>
  );
}

function PartnerSlot({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-20 w-48 items-center justify-center rounded-sm bg-night">
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          className="max-h-9 max-w-32 object-contain opacity-90"
        />
      ) : (
        <>
          <span
            className="brand-image-skeleton brand-image-skeleton-dark h-5 w-28 rounded-xs"
            aria-hidden="true"
          />
          <span className="sr-only">{partner.name}: logo coming soon</span>
        </>
      )}
    </div>
  );
}
