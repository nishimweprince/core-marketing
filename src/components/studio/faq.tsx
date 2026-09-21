import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { STUDIO_QUESTIONS } from "@/lib/studio-content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<string | null>(STUDIO_QUESTIONS[0]?.id ?? null);
  const items = useRef(new Map<string, HTMLLIElement>());

  function toggle(id: string) {
    const willOpen = open !== id;
    setOpen(willOpen ? id : null);
    if (willOpen) {
      requestAnimationFrame(() => {
        items.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-14 bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <h2 id="faq-title" className="headline">
              Questions, answered
            </h2>
            <p className="editorial mt-8 text-ash">
              The things people usually ask before the first conversation. Anything else, bring it
              to the call.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="flex flex-col gap-4">
            {STUDIO_QUESTIONS.map((item) => {
              const expanded = open === item.id;
              return (
                <li
                  key={item.id}
                  ref={(el) => {
                    if (el) items.current.set(item.id, el);
                    else items.current.delete(item.id);
                  }}
                  className="rounded-md bg-ink/[0.04] px-6 py-2 md:px-8"
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${item.id}`}
                    className="flex min-h-14 w-full items-center justify-between gap-6 py-3 text-left"
                  >
                    <span className="font-display text-xl font-normal md:text-2xl">{item.q}</span>
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-vellum motion-safe:transition-transform motion-safe:duration-300",
                        expanded ? "rotate-45" : undefined,
                      )}
                      aria-hidden="true"
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    className={cn(
                      "grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out",
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={cn(
                          "body-copy-compact max-w-xl pb-6 text-ash motion-safe:transition-opacity motion-safe:duration-300",
                          expanded ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
