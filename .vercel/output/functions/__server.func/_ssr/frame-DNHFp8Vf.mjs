import { i as __toESM } from "../_runtime.mjs";
import { c as STUDIO_PLANS, s as STUDIO_INDUSTRIES } from "./studio-content-BpnlWGvW.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frame-DNHFp8Vf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BRAND = {
	name: "Core Marketing",
	short: "CORE",
	discipline: "MARKETING",
	tagline: "The architecture of attention.",
	year: "2025",
	origin: "Kigali",
	email: "studio@coremarketing.rw",
	web: "coremarketing.rw",
	bookTitle: "The Brand Book",
	edition: "Volume 01"
};
var SITE_NAV = [
	{
		id: "what-we-do",
		label: "What we do"
	},
	{
		id: "plans",
		label: "Plans"
	},
	{
		id: "faq",
		label: "FAQ"
	},
	{
		id: "conversation",
		label: "Contact"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CoreMark({ className, title = "Core Marketing", field = "ink" }) {
	const outer = field === "ink" ? "stroke-vellum" : field === "vellum" ? "stroke-ink" : "stroke-current";
	const inner = field === "mono" ? "stroke-current" : "stroke-limestone";
	const core = field === "mono" ? "fill-current" : "fill-juniper";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("block", className),
		role: "img",
		"aria-label": title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "31.5",
				className: outer,
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "18.5",
				className: inner,
				strokeWidth: "1.2",
				vectorEffect: "nonScalingStroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "6",
				className: core
			})
		]
	});
}
var LOCKUP = {
	sm: {
		mark: "size-8",
		type: "text-sm"
	},
	md: {
		mark: "size-10",
		type: "text-lg"
	},
	lg: {
		mark: "size-12",
		type: "text-xl"
	},
	hero: {
		mark: "size-12 md:size-14",
		type: "text-xl md:text-2xl"
	}
};
function CoreLockup({ className, stacked = false, size = "md", field = "ink" }) {
	const s = LOCKUP[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex", stacked ? "flex-col items-start gap-3" : "flex-row items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMark, {
			className: cn("shrink-0", s.mark),
			field
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("leading-none", s.type),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-sans font-semibold leading-[0.8] uppercase tracking-brand",
				children: "Core"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[0.1em] font-sans text-[0.72em] font-normal uppercase tracking-label text-limestone",
				children: "Marketing"
			})]
		})]
	});
}
function Header({ scrolled, open, onToggle, onJump, solid = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed top-0 right-0 left-0 z-40 border-b transition-[background-color,border-color] duration-300", solid || scrolled || open ? "border-vellum/8 bg-ink/95" : "border-transparent bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
					id: "cover",
					onJump,
					className: "text-vellum",
					label: "Core Marketing, home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "sm" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Site",
					children: [SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
						id: item.id,
						onJump,
						className: "nav-link inline-flex min-h-11 items-center px-3 text-limestone",
						children: item.label
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
						id: "conversation",
						onJump,
						className: "btn-primary ml-3 min-h-11 px-4",
						children: "Start a conversation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onToggle,
					className: "flex size-11 items-center justify-center text-vellum lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-8 flex flex-col",
			"aria-label": "Site",
			children: [SITE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
				id: item.id,
				onJump,
				onNavigate: onToggle,
				className: "flex min-h-14 items-center border-b border-vellum/8 text-left font-display text-2xl font-normal text-vellum",
				children: item.label
			}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLink, {
				id: "conversation",
				onJump,
				onNavigate: onToggle,
				className: "btn-primary mt-8",
				children: "Start a conversation"
			})]
		})
	}) : null] });
}
function SectionLink({ id, onJump, onNavigate, className, label, children }) {
	if (onJump) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onJump(id),
		className,
		"aria-label": label,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		hash: id === "cover" ? void 0 : id,
		className,
		"aria-label": label,
		onClick: onNavigate,
		children
	});
}
var LINK = "nav-link inline-flex min-h-10 items-center text-sm text-ash";
function Footer({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-24 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreLockup, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xs font-display text-xl font-normal",
						children: BRAND.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Site"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-5 flex flex-col",
						"aria-label": "Footer",
						children: SITE_NAV.map((item) => onJump ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onJump(item.id),
							className: LINK,
							children: item.label
						}, item.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: item.id,
							className: LINK,
							children: item.label
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col",
						children: STUDIO_INDUSTRIES.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/what-we-do/$slug",
							params: { slug: industry.id },
							className: LINK,
							children: industry.name
						}) }, industry.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Plans"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-col",
						children: STUDIO_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/plans/$planId",
							params: { planId: plan.id },
							className: LINK,
							children: plan.name
						}) }, plan.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-limestone",
						children: "Correspondence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm leading-relaxed text-ash",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "nav-link text-limestone",
								children: BRAND.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							BRAND.origin,
							", by appointment"
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-vellum/8 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs text-ash",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BRAND.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-6",
				"aria-label": "Legal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sitemap",
						className: "nav-link text-xs text-ash",
						children: "Sitemap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "nav-link text-xs text-ash",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "nav-link text-xs text-ash",
						children: "Terms"
					})
				]
			})]
		})]
	});
}
/**
* The chrome every page shares: header (tinted once the page scrolls), main, footer, toasts.
* The home page passes `onJump` so nav items scroll; every other page links back to "/#id".
*/
function SiteFrame({ children, onJump, solid = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	function jump(id) {
		setOpen(false);
		onJump?.(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-ink text-vellum",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				toastOptions: { className: "!bg-night !text-vellum !border-vellum/10 !font-sans !rounded-md !shadow-none" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				scrolled,
				open,
				onToggle: () => setOpen((v) => !v),
				onJump: onJump ? jump : void 0,
				solid
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: solid ? "pt-14 md:pt-16" : void 0,
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onJump: onJump ? jump : void 0 })
		]
	});
}
//#endregion
export { cn as i, SITE_NAV as n, SiteFrame as r, BRAND as t };
