import { i as __toESM } from "../_runtime.mjs";
import { c as STUDIO_PLANS, o as PLANS_BAND_IMAGE } from "./studio-content-BpnlWGvW.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronDown } from "../_libs/lucide-react.mjs";
import { r as Route$1 } from "./router-BjLsoM6B.mjs";
import { i as cn, r as SiteFrame } from "./frame-DNHFp8Vf.mjs";
import { t as BrandImage } from "./brand-image-P46P19_-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plans._planId-D81fFqcB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "inside",
		label: "What's inside"
	},
	{
		id: "who",
		label: "Who takes it"
	},
	{
		id: "others",
		label: "Other plans"
	}
];
function PlanPage() {
	const { planId } = Route$1.useParams();
	const plan = STUDIO_PLANS.find((p) => p.id === planId);
	const [active, setActive] = (0, import_react.useState)("inside");
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [planId]);
	(0, import_react.useEffect)(() => {
		if (!plan) return;
		const els = SECTIONS.map((s) => document.getElementById(`plan-${s.id}`)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id.replace("plan-", ""));
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.3,
				.6
			]
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, [plan, planId]);
	if (!plan) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, {
		solid: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[60dvh] flex-col items-start justify-center gap-6 px-6 md:px-12 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl font-light",
				children: "There is no plan by that name."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				hash: "plans",
				className: "btn-primary",
				children: "See the plans"
			})]
		})
	});
	const others = STUDIO_PLANS.filter((p) => p.id !== plan.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
					src: plan.image.src,
					alt: plan.image.alt,
					objectPosition: plan.image.objectPosition,
					frameClassName: "absolute inset-0 rounded-none",
					imageClassName: "hero-media",
					priority: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[82dvh] w-full max-w-7xl flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "plans",
							className: "link w-fit text-vellum/85",
							children: "All plans"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 font-sans text-xs text-juniper tabular-nums",
							children: [plan.altitude.toLocaleString("en-GB"), " m"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display mt-3 text-vellum",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-md font-display text-xl font-normal text-limestone md:text-2xl",
							children: [
								plan.means,
								". ",
								plan.for
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "On this page",
			className: "sticky top-14 z-10 border-b border-vellum/8 bg-ink/95 backdrop-blur-sm md:top-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 md:px-12 lg:px-16",
				children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#plan-${s.id}`,
					"aria-current": active === s.id ? "true" : void 0,
					className: cn("nav-link inline-flex min-h-14 shrink-0 items-center", active === s.id ? "text-juniper" : "text-ash"),
					children: s.label
				}, s.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "plan-inside",
			className: "scroll-mt-32 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "headline lg:col-span-5",
					children: [
						"What ",
						plan.name,
						" holds"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 lg:col-start-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-6",
						children: plan.includes.map((item) => {
							const inherited = inheritedFrom(item);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper",
									"aria-hidden": "true"
								}), inherited ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inherited, {
									label: item,
									groups: inherited
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-normal md:text-[1.75rem]",
									children: item
								})]
							}, item);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "editorial mt-12 text-ash",
						children: plan.typical
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "plan-who",
			className: "relative isolate scroll-mt-32 overflow-hidden bg-ink text-vellum",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandImage, {
					src: PLANS_BAND_IMAGE.src,
					alt: PLANS_BAND_IMAGE.alt,
					objectPosition: PLANS_BAND_IMAGE.objectPosition,
					frameClassName: "absolute inset-0 rounded-none",
					imageClassName: "hero-media"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-ink/80",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40 lg:px-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "headline max-w-xl",
						children: ["Houses on ", plan.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-16 grid gap-x-12 md:grid-cols-2",
						children: plan.suitedFor.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-vellum/15 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-normal",
								children: entry.business
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "body-copy-compact mt-2 max-w-md text-limestone",
								children: entry.why
							})]
						}, entry.business))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "plan-others",
			className: "scroll-mt-32 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "headline lg:col-span-5",
					children: "A different altitude"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 lg:col-start-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: others.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-vellum/12 py-6 last:border-b",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-sans text-xs font-medium text-juniper tabular-nums",
								children: [other.altitude.toLocaleString("en-GB"), " m"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/plans/$planId",
								params: { planId: other.id },
								className: "mt-1 inline-block font-display text-3xl font-light transition-[color] duration-150 hover:text-juniper",
								children: other.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy-compact mt-2 max-w-md text-limestone",
								children: other.for
							})
						]
					}, other.id)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "conversation",
							className: "btn-primary",
							children: "Start a conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "body-copy-compact max-w-xs text-limestone",
							children: [
								"Mention ",
								plan.name,
								", or tell us where you are and we will suggest one."
							]
						})]
					})]
				})]
			})
		})
	] });
}
var EVERYTHING_IN = /^Everything in (.+)$/;
/**
* "Everything in Muhabura" is a pointer, not a deliverable. Resolve it to the items it stands
* for, grouped by the plan they come from, following the chain down to the first plan.
*/
function inheritedFrom(item) {
	const match = EVERYTHING_IN.exec(item);
	if (!match) return null;
	const groups = [];
	let source = STUDIO_PLANS.find((p) => p.name === match[1]);
	while (source) {
		const own = source.includes.filter((i) => !EVERYTHING_IN.test(i));
		groups.push({
			from: source,
			items: own
		});
		const next = source.includes.map((i) => EVERYTHING_IN.exec(i)?.[1]).find(Boolean);
		source = next ? STUDIO_PLANS.find((p) => p.name === next) : void 0;
	}
	return groups.length ? groups : null;
}
function Inherited({ label, groups }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const total = groups.reduce((n, g) => n + g.items.length, 0);
	const id = `inherited-${groups[0].from.id}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			"aria-expanded": open,
			"aria-controls": id,
			className: "group flex w-full items-baseline justify-between gap-4 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl font-normal transition-[color] duration-150 group-hover:text-juniper md:text-[1.75rem]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex shrink-0 items-center gap-1.5 font-sans text-xs text-ash transition-[color] duration-150 group-hover:text-ink",
				children: [open ? "Hide" : `${total} items`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4 transition-transform duration-200 motion-reduce:transition-none", open && "rotate-180"),
					"aria-hidden": "true"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id,
			className: cn("grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/plans/$planId",
						params: { planId: group.from.id },
						className: "font-sans text-xs text-ash underline-offset-4 hover:underline",
						children: ["From ", group.from.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 border-t border-ink/10",
						children: group.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "body-copy-compact border-b border-ink/10 py-2.5 text-ink",
							children: i
						}, i))
					})]
				}, group.from.id))
			})
		})]
	});
}
//#endregion
export { PlanPage as component };
