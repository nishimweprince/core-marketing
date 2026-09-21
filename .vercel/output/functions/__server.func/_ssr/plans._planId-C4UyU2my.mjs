import { i as __toESM } from "../_runtime.mjs";
import { B as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as CoreLockup, t as BRAND, v as cn } from "./mark-B04OdnPl.mjs";
import { d as ArrowLeft, s as ChevronDown, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as STUDIO_PLANS, r as Route$1 } from "./router-BjdLsA6f.mjs";
import { t as Footer } from "./footer-DyMbnIPH.mjs";
import { t as useHomeJump } from "./home-nav-DUKRkmeO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plans._planId-C4UyU2my.js
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
	const jumpHome = useHomeJump();
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
	if (!plan) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-vellum",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-light",
			children: "There is no plan by that name."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			hash: "plans",
			className: "inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink",
			children: "Back to plans"
		})]
	});
	const others = STUDIO_PLANS.filter((p) => p.id !== plan.id);
	const subject = encodeURIComponent(`Talk about ${plan.name} with Core`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-vellum",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute top-0 right-0 left-0 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Core Marketing, back to the site",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${BRAND.email}?subject=${subject}`,
						className: "inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
						children: "Start a conversation"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "plans",
							className: "inline-flex w-fit items-center gap-2 font-sans text-[13px] text-vellum/85 transition-[color] duration-150 hover:text-vellum",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Plans"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 font-sans text-xs text-limestone tabular-nums",
							children: [plan.altitude.toLocaleString("en-GB"), " m"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display mt-4 text-vellum",
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "On this page",
				className: "sticky top-0 z-10 bg-ink/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 md:px-12 lg:px-16",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#plan-${s.id}`,
						"aria-current": active === s.id ? "true" : void 0,
						className: cn("inline-flex min-h-14 shrink-0 items-center font-sans text-[13px] transition-[color] duration-150", active === s.id ? "text-vellum" : "text-ash hover:text-limestone"),
						children: s.label
					}, s.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "plan-inside",
				className: "scroll-mt-20 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "plan-who",
				className: "scroll-mt-20 bg-vellum px-6 pb-28 text-ink md:px-12 md:pb-40 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "headline max-w-xl",
							children: ["Businesses on ", plan.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "editorial mt-8 text-ash",
							children: "The same package, in different hands. If you recognise your business here, the plan already fits."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-16 grid gap-6 md:grid-cols-2",
							children: plan.suitedFor.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-md bg-ink/[0.04] p-8 md:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-normal",
									children: entry.business
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "body-copy-compact mt-4 text-ash",
									children: entry.why
								})]
							}, entry.business))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "plan-others",
				className: "scroll-mt-20 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "headline max-w-xl",
							children: "A different altitude"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-16 grid gap-6 md:grid-cols-2",
							children: others.map((other) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "plan-card rounded-lg bg-night p-8 md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-sans text-xs text-limestone tabular-nums",
										children: [other.altitude.toLocaleString("en-GB"), " m"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 font-display text-3xl font-light",
										children: other.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-copy-compact mt-4 text-limestone",
										children: other.for
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/plans/$planId",
										params: { planId: other.id },
										className: "mt-8 inline-flex min-h-11 items-center gap-2 font-sans text-[13px] font-medium text-vellum transition-[opacity] duration-150 hover:opacity-70",
										children: [
											"See what ",
											other.name,
											" holds",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-4",
												"aria-hidden": "true"
											})
										]
									})
								]
							}, other.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-24 flex flex-wrap items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md font-display text-2xl font-normal",
								children: "Know your altitude? Tell us where you want to go."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${BRAND.email}?subject=${subject}`,
								className: "inline-flex min-h-12 items-center gap-2 bg-vellum px-6 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90",
								children: [
									"Talk about ",
									plan.name,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: jumpHome })
		]
	});
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
				className: "font-display text-2xl font-normal md:text-[1.75rem]",
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
